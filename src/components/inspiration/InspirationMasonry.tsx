"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { inspirationItems, type InspirationItem, type InspirationSpace } from "@/content/inspiration";
import { styleCatalog } from "@/content/style-catalog";
import { localizeInspiration } from "@/content/inspiration-sr";
import { useLocale } from "@/i18n/client";
import { pick, type Locale } from "@/i18n/locales";
import { roomName, styleName as styleNameOf } from "@/i18n/names";
import { SaveHeart } from "@/components/ui/SaveHeart";

const rooms: (InspirationSpace | "all")[] = ["all", "living", "kitchen", "bedroom", "bath", "outdoor"];
const copy = {
  en: { all: "All", byRoom: "Filter by room", byStyle: "Filter by style", every: "Every style", empty: "{t.empty}", view: (t: string) => `View ${t} larger`, close: "Close" },
  sr: { all: "Sve", byRoom: "Filtriraj po prostoriji", byStyle: "Filtriraj po stilu", every: "Svi stilovi", empty: "Još nema takvih prostorija — probajte drugi filter.", view: (t: string) => `Uvećaj: ${t}`, close: "Zatvori" },
};

/**
 * Every row has the height of one portrait picture. A landscape picture spans two
 * columns at that same height, so portrait and landscape line up edge to edge.
 */
const portrait = "col-span-1";
const landscape = "col-span-2";

type Tile = InspirationItem & { frame: string };

function shuffle<T>(list: T[]) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/** Same first paint on server and client; reshuffled in the browser on every visit. */
function stableOrder(items: InspirationItem[]): Tile[] {
  return items.map((item, i) => ({ ...item, frame: i % 3 === 1 ? landscape : portrait }));
}
function randomOrder(items: InspirationItem[]): Tile[] {
  return shuffle(items).map((item) => ({ ...item, frame: Math.random() < 0.35 ? landscape : portrait }));
}

interface Props {
  /** Show at most this many (Home); omit for the full wall (Inspiration page). */
  limit?: number;
  showStyleFilter?: boolean;
}

export function InspirationMasonry({ limit, showStyleFilter = false }: Props) {
  const [tiles, setTiles] = useState<Tile[]>(() => stableOrder(inspirationItems));
  const [ready, setReady] = useState(false);
  const [room, setRoom] = useState<(typeof rooms)[number]>("all");
  const [style, setStyle] = useState<string>("all");
  const [open, setOpen] = useState<Tile | null>(null);
  const locale = useLocale();
  const t = pick(copy, locale);
  const styleName = (id: string) => styleNameOf(id, locale);

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
        <div role="group" aria-label={t.byRoom} className="flex flex-wrap gap-2">
          {rooms.map((r) => <button key={r} type="button" aria-pressed={room === r} onClick={() => setRoom(r)} className={pill(room === r)}>{r === "all" ? t.all : roomName(r, locale)}</button>)}
        </div>
        {showStyleFilter ? (
          <div role="group" aria-label={t.byStyle} className="flex flex-wrap gap-2">
            <button type="button" aria-pressed={style === "all"} onClick={() => setStyle("all")} className={pill(style === "all")}>{t.every}</button>
            {styleCatalog.map((s) => <button key={s.id} type="button" aria-pressed={style === s.id} onClick={() => setStyle(s.id)} className={pill(style === s.id)}>{styleName(s.id)}</button>)}
          </div>
        ) : null}
      </div>

      <div className="[container-type:inline-size]">
        <div
          className={`grid grid-flow-row-dense grid-cols-2 gap-3 [--cols:2] [--gap:12px] transition-opacity duration-500 sm:gap-5 sm:[--gap:20px] lg:grid-cols-3 lg:[--cols:3] xl:grid-cols-4 xl:[--cols:4] ${ready ? "opacity-100" : "opacity-0"}`}
          style={{ gridAutoRows: "calc((100cqw - (var(--cols) - 1) * var(--gap)) / var(--cols) * 4 / 3)" }}
        >
          {shown.map((raw) => { const item = localizeInspiration(raw, locale); return (
            <figure key={item.id} className={`relative m-0 ${item.frame}`}>
              <button type="button" onClick={() => setOpen(item)} aria-label={t.view(item.title)} className="focus-ring group relative block h-full w-full overflow-hidden rounded">
                <Image src={item.image} alt={item.altText} fill sizes={item.frame === landscape ? "(min-width:1280px) 50vw, (min-width:1024px) 66vw, 100vw" : "(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw"} className="object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05]" />
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/45 to-transparent" />
              </button>
              <SaveHeart itemId={item.id} label={item.title} className="absolute right-2 top-2 sm:right-3.5 sm:top-3.5" />
              <figcaption className="pointer-events-none absolute bottom-3 left-3.5 text-[13px] text-white">{roomName(item.space, locale)} · {styleName(item.styleId)}</figcaption>
            </figure>
          ); })}
        </div>
      </div>
      {!shown.length ? <p className="py-16 text-center text-ink-500">{t.empty}</p> : null}

      {open ? <Lightbox item={localizeInspiration(open, locale)} locale={locale} closeLabel={t.close} onClose={() => setOpen(null)} /> : null}
    </div>
  );
}

function Lightbox({ item, locale, closeLabel, onClose }: { item: Tile; locale: Locale; closeLabel: string; onClose: () => void }) {
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
          <p className="rounded-full bg-ink-900/70 px-4 py-2 text-sm">{item.title} · {styleNameOf(item.styleId, locale)}</p>
          <SaveHeart itemId={item.id} label={item.title} />
        </div>
      </div>
      <button ref={closeRef} type="button" onClick={onClose} aria-label={closeLabel} className="focus-ring absolute right-4 top-4 inline-flex size-12 items-center justify-center rounded-full bg-white/95 text-ink-900">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true" className="size-5"><path d="M6 6l12 12M18 6L6 18" /></svg>
      </button>
    </div>
  );
}
