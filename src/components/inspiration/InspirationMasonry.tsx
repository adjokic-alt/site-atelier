"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { inspirationItems, type InspirationItem, type InspirationSpace } from "@/content/inspiration";
import { styleCatalog } from "@/content/style-catalog";
import { SaveHeart } from "@/components/ui/SaveHeart";

const rooms: { id: InspirationSpace | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "living", label: "Living" },
  { id: "kitchen", label: "Kitchen" },
  { id: "bedroom", label: "Bedroom" },
  { id: "bath", label: "Bath" },
  { id: "outdoor", label: "Outdoor" },
];
const styleName = Object.fromEntries(styleCatalog.map((s) => [s.id, s.name]));
const spaceName: Record<string, string> = { living: "Living", kitchen: "Kitchen", bedroom: "Bedroom", bath: "Bath", outdoor: "Outdoor", exterior: "Exterior" };

/** Portrait and landscape frames, mixed so the wall never looks like a grid. */
const portrait = ["aspect-[3/4]", "aspect-[4/5]", "aspect-[2/3]"];
const landscape = ["aspect-[4/3]", "aspect-[3/2]", "aspect-[16/10]"];

type Tile = InspirationItem & { frame: string };

function shuffle<T>(list: T[]) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/** Same first paint on server and client; reshuffled in the browser on every visit. */
function stableOrder(items: InspirationItem[]): Tile[] {
  return items.map((item, i) => ({ ...item, frame: i % 2 ? landscape[i % 3] : portrait[i % 3] }));
}
function randomOrder(items: InspirationItem[]): Tile[] {
  return shuffle(items).map((item) => {
    const set = Math.random() < 0.5 ? portrait : landscape;
    return { ...item, frame: set[Math.floor(Math.random() * set.length)] };
  });
}

interface Props {
  /** Show at most this many (Home); omit for the full wall (Inspiration page). */
  limit?: number;
  showStyleFilter?: boolean;
}

export function InspirationMasonry({ limit, showStyleFilter = false }: Props) {
  const [tiles, setTiles] = useState<Tile[]>(() => stableOrder(inspirationItems));
  const [ready, setReady] = useState(false);
  const [room, setRoom] = useState<(typeof rooms)[number]["id"]>("all");
  const [style, setStyle] = useState<string>("all");
  const [open, setOpen] = useState<Tile | null>(null);

  useEffect(() => {
    const t = window.setTimeout(() => { setTiles(randomOrder(inspirationItems)); setReady(true); }, 0);
    return () => window.clearTimeout(t);
  }, []);

  const shown = useMemo(() => {
    const list = tiles.filter((i) => (room === "all" || i.space === room) && (style === "all" || i.styleId === style));
    return limit ? list.slice(0, limit) : list;
  }, [tiles, room, style, limit]);

  const pill = (on: boolean) =>
    `focus-ring min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${on ? "border-ink-900 bg-ink-900 text-white" : "border-border-strong text-ink-900 hover:border-ink-900"}`;

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3">
        <div role="group" aria-label="Filter by room" className="flex flex-wrap gap-2">
          {rooms.map((r) => <button key={r.id} type="button" aria-pressed={room === r.id} onClick={() => setRoom(r.id)} className={pill(room === r.id)}>{r.label}</button>)}
        </div>
        {showStyleFilter ? (
          <div role="group" aria-label="Filter by style" className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={style === "all"} onClick={() => setStyle("all")} className={pill(style === "all")}>Every style</button>
            {styleCatalog.map((s) => <button key={s.id} type="button" aria-pressed={style === s.id} onClick={() => setStyle(s.id)} className={pill(style === s.id)}>{s.name}</button>)}
          </div>
        ) : null}
      </div>

      <div className={`columns-2 gap-3 transition-opacity duration-500 sm:gap-5 lg:columns-3 xl:columns-4 ${ready ? "opacity-100" : "opacity-0"}`}>
        {shown.map((item) => (
          <figure key={item.id} className="relative mb-3 break-inside-avoid sm:mb-5">
            <button type="button" onClick={() => setOpen(item)} aria-label={`View ${item.title} larger`} className={`focus-ring group relative block w-full overflow-hidden rounded ${item.frame}`}>
              <Image src={item.image} alt={item.altText} fill sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]" />
            </button>
            <SaveHeart itemId={item.id} label={item.title} className="absolute right-2 top-2 sm:right-3.5 sm:top-3.5" />
            <figcaption className="pt-2.5 text-[13px] text-ink-500">{spaceName[item.space]} · {styleName[item.styleId]}</figcaption>
          </figure>
        ))}
      </div>
      {!shown.length ? <p className="py-16 text-center text-ink-500">No rooms like that yet — try another filter.</p> : null}

      {open ? <Lightbox item={open} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}

function Lightbox({ item, onClose }: { item: Tile; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/85 p-4 sm:p-10" onClick={onClose}>
      <div className="relative h-full max-h-[90svh] w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <Image src={item.image} alt={item.altText} fill sizes="100vw" className="object-contain" />
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-4 text-white">
          <p className="rounded-full bg-ink-900/70 px-4 py-2 text-sm">{item.title} · {styleName[item.styleId]}</p>
          <SaveHeart itemId={item.id} label={item.title} />
        </div>
      </div>
      <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="focus-ring absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-white/95 text-ink-900">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="size-5"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>
  );
}
