"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { inspirationItems, type InspirationSpace } from "@/content/inspiration";
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
/** Varied heights give the masonry its rhythm. */
const ratios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[5/6]", "aspect-[4/3]"];

/** Mix styles so the first screen never shows one look only. */
function interleave<T extends { styleId: string }>(items: T[]) {
  const byStyle = new Map<string, T[]>();
  items.forEach((i) => byStyle.set(i.styleId, [...(byStyle.get(i.styleId) ?? []), i]));
  const out: T[] = [];
  const queues = [...byStyle.values()];
  while (queues.some((q) => q.length)) queues.forEach((q) => { const next = q.shift(); if (next) out.push(next); });
  return out;
}

export function HomeInspiration() {
  const [room, setRoom] = useState<(typeof rooms)[number]["id"]>("all");
  const shown = useMemo(() => {
    const list = interleave(inspirationItems).filter((i) => room === "all" || i.space === room);
    return list.slice(0, 12);
  }, [room]);

  return (
    <section id="inspiration" className="px-5 pb-20 pt-[clamp(72px,10vw,140px)] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1328px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500">Inspiration</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">Start with what you love.</h2>
          </div>
          <div role="group" aria-label="Filter by room" className="flex flex-wrap gap-2">
            {rooms.map((r) => (
              <button
                key={r.id}
                type="button"
                aria-pressed={room === r.id}
                onClick={() => setRoom(r.id)}
                className={`focus-ring min-h-11 rounded-full border px-5 text-sm font-medium transition-colors ${
                  room === r.id ? "border-ink-900 bg-ink-900 text-white" : "border-border-strong text-ink-900 hover:border-ink-900"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-2 gap-3 sm:gap-5 lg:columns-3 xl:columns-4">
          {shown.map((item, i) => (
            <figure key={item.id} className="relative mb-3 break-inside-avoid sm:mb-5">
              <div className={`relative overflow-hidden rounded ${ratios[i % ratios.length]}`}>
                <Image src={item.image} alt={item.altText} fill sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
              </div>
              <SaveHeart itemId={item.id} label={item.title} className="absolute right-2 top-2 sm:right-3.5 sm:top-3.5" />
              <figcaption className="pt-2.5 text-[13px] text-ink-500">
                {spaceName[item.space]} · {styleName[item.styleId]}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/inspiration" className="focus-ring inline-flex min-h-12 items-center gap-2.5 border-b border-ink-900 text-[15px] font-medium text-ink-900">
            See all inspiration <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
