"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useMoodboardTheme } from "@/components/moodboard";
import { SaveHeart } from "@/components/ui/SaveHeart";
import { inspirationItems, type InspirationItem } from "@/content/inspiration";
import { materialBoards } from "@/content/material-boards";
import { styleCatalog } from "@/content/style-catalog";
import { useBrief } from "@/providers/BriefProvider";

const pad = "px-5 sm:px-8 lg:px-14";
const wrap = "mx-auto max-w-[1328px]";
const eyebrow = "text-xs uppercase tracking-[0.12em] text-ink-500";
const styleName = Object.fromEntries(styleCatalog.map((s) => [s.id, s.name]));
const spaceName: Record<string, string> = { living: "Living", kitchen: "Kitchen", bedroom: "Bedroom", bath: "Bath", outdoor: "Outdoor", exterior: "Exterior" };
const ratios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[5/6]", "aspect-[4/3]"];

function ranked<T extends string>(values: T[]) {
  const counts = new Map<T, number>();
  values.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function listSentence(words: string[]) {
  if (words.length <= 1) return words.join("");
  return `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;
}

type View = "all" | "room" | "style";

export default function MoodboardPage() {
  const { brief, hydrated } = useBrief();
  const [view, setView] = useState<View>("all");
  const saved = useMemo(
    () => (hydrated ? inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id)) : []),
    [hydrated, brief.visuals.moodboardItemIds],
  );
  const theme = useMoodboardTheme(saved);

  if (!hydrated) {
    return (
      <div className={`${pad} py-24`} aria-busy="true" aria-live="polite">
        <p className="text-sm text-ink-500">Loading your moodboard…</p>
      </div>
    );
  }

  const styles = ranked(saved.map((i) => i.styleId));
  const total = saved.length || 1;
  const materials = styles.slice(0, 2).flatMap(([id]) => materialBoards[id].slice(0, 2).map((m) => m.name.toLowerCase()));
  const groups: [string, InspirationItem[]][] =
    view === "room"
      ? ranked(saved.map((i) => i.space)).map(([space]) => [spaceName[space], saved.filter((i) => i.space === space)])
      : view === "style"
        ? styles.map(([id]) => [styleName[id], saved.filter((i) => i.styleId === id)])
        : [["", saved]];

  return (
    <div className="relative">
      <section className={`${pad} pb-12 pt-[clamp(56px,8vw,104px)]`}>
        <div className={`${wrap} flex flex-wrap items-end justify-between gap-7`}>
          <div>
            <p className={`${eyebrow} mb-4`}>Your moodboard{saved.length ? ` · ${saved.length} image${saved.length === 1 ? "" : "s"}` : ""}</p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] text-ink-900">
              {saved.length ? "Your home, so far." : "Nothing saved yet."}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-6 text-[15px] font-medium text-ink-900 hover:bg-surface">
              {saved.length ? "Add more" : "Explore Inspiration"}
            </Link>
            {saved.length ? (
              <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-6 text-[15px] font-semibold text-white hover:bg-ink-700">
                Turn into a brief
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {saved.length ? (
        <>
          <section aria-label="Patterns" className={`${pad} pb-14`}>
            <div className={`${wrap} grid gap-[clamp(28px,4vw,56px)] rounded-lg bg-surface p-[clamp(28px,4vw,48px)] md:grid-cols-3`}>
              <div>
                <p className={`${eyebrow} mb-4`}>Your colours</p>
                <ul className="flex gap-2.5" aria-label={theme.ready ? "Colours sampled from your images" : "Reading colours from your images"}>
                  {theme.palette.slice(0, 5).map((c) => (
                    <li key={c} className="size-14 rounded-full border border-black/10" style={{ background: c }} title={c} />
                  ))}
                </ul>
              </div>
              <div>
                <p className={`${eyebrow} mb-3.5`}>You keep choosing</p>
                <p className="font-display text-[30px] leading-[1.2] text-ink-900">
                  {materials.length ? `${listSentence(materials).replace(/^./, (c) => c.toUpperCase())}` : "Save a few more images"}
                </p>
              </div>
              <div>
                <p className={`${eyebrow} mb-3.5`}>Leaning towards</p>
                <p className="font-display text-[30px] leading-[1.2] text-ink-900">
                  {styleName[styles[0][0]]}
                  {styles[1] ? <>, with {styleName[styles[1][0]]} touches</> : null}
                </p>
                <div className="mt-4 flex h-1.5 overflow-hidden rounded-full" aria-hidden="true">
                  {styles.slice(0, 3).map(([id, n], i) => (
                    <div key={id} style={{ flex: n / total }} className={["bg-ink-900", "bg-accent", "bg-border-strong"][i]} />
                  ))}
                </div>
                <ul className="mt-2 flex flex-wrap gap-x-4 text-xs text-ink-500">
                  {styles.slice(0, 3).map(([id]) => <li key={id}>{styleName[id]}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section aria-label="Saved images" className={`${pad} pb-24`}>
            <div className={wrap}>
              <div role="group" aria-label="View" className="mb-7 flex flex-wrap items-center gap-2">
                <span className="mr-2 text-sm text-ink-500">View</span>
                {([["all", "Everything"], ["room", "By room"], ["style", "By style"]] as const).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={view === id}
                    onClick={() => setView(id)}
                    className={`focus-ring min-h-11 rounded-full border px-5 text-sm font-medium ${view === id ? "border-ink-900 bg-ink-900 text-white" : "border-border-strong text-ink-900 hover:border-ink-900"}`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {groups.map(([title, items]) => (
                <div key={title || "all"} className="mb-12 last:mb-0">
                  {title ? <h2 className="mb-5 font-display text-[clamp(1.75rem,3vw,2.5rem)] text-ink-900">{title} <span className="font-sans text-sm text-ink-500">{items.length}</span></h2> : null}
                  <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4">
                    {items.map((item, i) => (
                      <figure key={item.id} className="relative mb-3 break-inside-avoid sm:mb-4">
                        <div className={`relative overflow-hidden rounded ${ratios[i % ratios.length]}`}>
                          <Image src={item.image} alt={item.altText} fill sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw" className="object-cover" />
                        </div>
                        <SaveHeart itemId={item.id} label={item.title} className="absolute right-2 top-2 sm:right-3 sm:top-3" />
                        <figcaption className="pt-2 text-[13px] text-ink-500">{spaceName[item.space]} · {styleName[item.styleId]}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pointer-events-none sticky bottom-5 z-30 flex justify-center px-5 pb-5">
            <div className="pointer-events-auto flex flex-wrap items-center gap-5 rounded-full bg-ink-900 py-2.5 pl-7 pr-2.5 text-white shadow-[0_16px_40px_rgba(30,28,25,0.25)]">
              <span className="text-sm">{saved.length} saved{saved.length >= 3 ? " · a direction is forming" : ""}</span>
              <Link href="/inquiry" className="focus-ring inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-ink-900">Turn into a brief</Link>
            </div>
          </div>
        </>
      ) : (
        <section aria-label="Get started" className={`${pad} pb-32`}>
          <div className={`${wrap} grid items-center gap-12 md:grid-cols-2`}>
            <p className="max-w-md text-[17px] leading-[1.7] text-ink-700">
              Tap the heart on any image you love — in Inspiration or a Style Studio. Your moodboard collects them here and starts to notice the colours, materials and styles you return to.
            </p>
            <div className="grid grid-cols-3 gap-3" aria-hidden="true">
              <div className="h-[220px] rounded border border-dashed border-ink-300" />
              <div className="relative h-[220px] overflow-hidden rounded"><Image src="/images/inspiration/mediterranean-olive-balcony.jpg" alt="" fill sizes="200px" className="object-cover opacity-90" /></div>
              <div className="h-[220px] rounded border border-dashed border-ink-300" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
