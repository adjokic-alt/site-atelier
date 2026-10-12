"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useMoodboardTheme } from "@/components/moodboard";
import { SaveHeart } from "@/components/ui/SaveHeart";
import { inspirationItems, type InspirationItem } from "@/content/inspiration";
import { localizeInspiration } from "@/content/inspiration-sr";
import { getMaterialBoard } from "@/content/style-studios-sr";
import { useLocale } from "@/i18n/client";
import { pick } from "@/i18n/locales";
import { roomName, styleName as styleNameOf } from "@/i18n/names";
import { useBrief } from "@/providers/BriefProvider";

const pad = "px-5 sm:px-8 lg:px-14";
const wrap = "mx-auto max-w-[1328px]";
const eyebrow = "text-xs uppercase tracking-[0.12em] text-ink-500";
/** "with a touch of …" needs the genitive in Serbian. */
const touchSr: Record<string, string> = { scandinavian: "skandinavskog", modern: "modernog", minimalist: "minimalističkog", industrial: "industrijskog", luxury: "luksuznog", rustic: "rustičnog", mediterranean: "mediteranskog" };

const copy = {
  en: {
    loading: "Loading your moodboard…", eyebrow: "Your moodboard", count: (n: number) => ` · ${n} image${n === 1 ? "" : "s"}`,
    full: "Your home, so far.", empty: "Nothing saved yet.", more: "Add more", explore: "Explore Inspiration", brief: "Turn into a brief",
    patterns: "Patterns", colours: "Your colours", coloursReady: "Colours sampled from your images", coloursReading: "Reading colours from your images",
    keep: "You keep choosing", fewMore: "Save a few more images", leaning: "Leaning towards", touch: (id: string, name: string) => `, with ${name} touches`,
    images: "Saved images", view: "View", views: { all: "Everything", room: "By room", style: "By style" }, and: "and",
    saved: (n: number) => `${n} saved${n >= 3 ? " · a direction is forming" : ""}`, start: "Get started",
    help: "Tap the heart on any image you love — in Inspiration or a Style Studio. Your moodboard collects them here and starts to notice the colours, materials and styles you return to.",
  },
  sr: {
    loading: "Učitavamo vaš moodboard…", eyebrow: "Vaš moodboard", count: (n: number) => ` · slika: ${n}`,
    full: "Vaš dom, za sada.", empty: "Još ništa nije sačuvano.", more: "Dodajte još", explore: "Istražite inspiraciju", brief: "Pretvorite u brief",
    patterns: "Obrasci", colours: "Vaše boje", coloursReady: "Boje uzete sa vaših slika", coloursReading: "Čitamo boje sa vaših slika",
    keep: "Stalno birate", fewMore: "Sačuvajte još nekoliko slika", leaning: "Naginjete ka", touch: (id: string) => `, uz dašak ${touchSr[id] ?? ""}`,
    images: "Sačuvane slike", view: "Prikaz", views: { all: "Sve", room: "Po prostoriji", style: "Po stilu" }, and: "i",
    saved: (n: number) => `Sačuvano: ${n}${n >= 3 ? " · pravac se oblikuje" : ""}`, start: "Počnite",
    help: "Dodirnite srce na bilo kojoj slici koju volite — u Inspiraciji ili u Studiju stila. Vaš moodboard ih ovde sakuplja i počinje da primećuje boje, materijale i stilove kojima se vraćate.",
  },
};
const ratios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-[3/4]", "aspect-square", "aspect-[5/6]", "aspect-[4/3]"];

function ranked<T extends string>(values: T[]) {
  const counts = new Map<T, number>();
  values.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function listSentence(words: string[], and: string) {
  if (words.length <= 1) return words.join("");
  return `${words.slice(0, -1).join(", ")} ${and} ${words[words.length - 1]}`;
}

type View = "all" | "room" | "style";

export default function MoodboardPage() {
  const { brief, hydrated } = useBrief();
  const [view, setView] = useState<View>("all");
  const locale = useLocale();
  const t = pick(copy, locale);
  const styleName = (id: string) => styleNameOf(id, locale);
  const saved = useMemo(
    () => (hydrated ? inspirationItems.filter((i) => brief.visuals.moodboardItemIds.includes(i.id)).map((i) => localizeInspiration(i, locale)) : []),
    [hydrated, brief.visuals.moodboardItemIds, locale],
  );
  const theme = useMoodboardTheme(saved);

  if (!hydrated) {
    return (
      <div className={`${pad} py-24`} aria-busy="true" aria-live="polite">
        <p className="text-sm text-ink-500">{t.loading}</p>
      </div>
    );
  }

  const styles = ranked(saved.map((i) => i.styleId));
  const total = saved.length || 1;
  const materials = styles.slice(0, 2).flatMap(([id]) => getMaterialBoard(id, locale).slice(0, 2).map((m) => m.name.toLowerCase()));
  const groups: [string, InspirationItem[]][] =
    view === "room"
      ? ranked(saved.map((i) => i.space)).map(([space]) => [roomName(space, locale), saved.filter((i) => i.space === space)])
      : view === "style"
        ? styles.map(([id]) => [styleName(id), saved.filter((i) => i.styleId === id)])
        : [["", saved]];

  return (
    <div className="relative">
      <section className={`${pad} pb-12 pt-[clamp(56px,8vw,104px)]`}>
        <div className={`${wrap} flex flex-wrap items-end justify-between gap-7`}>
          <div>
            <p className={`${eyebrow} mb-4`}>{t.eyebrow}{saved.length ? t.count(saved.length) : ""}</p>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.95] text-ink-900">
              {saved.length ? t.full : t.empty}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-6 text-[15px] font-medium text-ink-900 hover:bg-surface">
              {saved.length ? t.more : t.explore}
            </Link>
            {saved.length ? (
              <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-6 text-[15px] font-semibold text-white hover:bg-ink-700">
                {t.brief}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {saved.length ? (
        <>
          <section aria-label={t.patterns} className={`${pad} pb-14`}>
            <div className={`${wrap} grid gap-[clamp(28px,4vw,56px)] rounded-lg bg-surface p-[clamp(28px,4vw,48px)] md:grid-cols-3`}>
              <div>
                <p className={`${eyebrow} mb-4`}>{t.colours}</p>
                <ul className="flex gap-2.5" aria-label={theme.ready ? t.coloursReady : t.coloursReading}>
                  {theme.palette.slice(0, 5).map((c) => (
                    <li key={c} className="size-14 rounded-full border border-black/10" style={{ background: c }} title={c} />
                  ))}
                </ul>
              </div>
              <div>
                <p className={`${eyebrow} mb-3.5`}>{t.keep}</p>
                <p className="font-display text-[30px] leading-[1.2] text-ink-900">
                  {materials.length ? `${listSentence(materials, t.and).replace(/^./, (c) => c.toUpperCase())}` : t.fewMore}
                </p>
              </div>
              <div>
                <p className={`${eyebrow} mb-3.5`}>{t.leaning}</p>
                <p className="font-display text-[30px] leading-[1.2] text-ink-900">
                  {styleName(styles[0][0])}
                  {styles[1] ? t.touch(styles[1][0], styleName(styles[1][0])) : null}
                </p>
                <div className="mt-4 flex h-1.5 overflow-hidden rounded-full" aria-hidden="true">
                  {styles.slice(0, 3).map(([id, n], i) => (
                    <div key={id} style={{ flex: n / total }} className={["bg-ink-900", "bg-accent", "bg-border-strong"][i]} />
                  ))}
                </div>
                <ul className="mt-2 flex flex-wrap gap-x-4 text-xs text-ink-500">
                  {styles.slice(0, 3).map(([id]) => <li key={id}>{styleName(id)}</li>)}
                </ul>
              </div>
            </div>
          </section>

          <section aria-label={t.images} className={`${pad} pb-24`}>
            <div className={wrap}>
              <div role="group" aria-label={t.view} className="mb-7 flex flex-wrap items-center gap-2">
                <span className="mr-2 text-sm text-ink-500">{t.view}</span>
                {(["all", "room", "style"] as const).map((id) => (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={view === id}
                    onClick={() => setView(id)}
                    className={`focus-ring min-h-11 rounded-full border px-5 text-sm font-medium ${view === id ? "border-ink-900 bg-ink-900 text-white" : "border-border-strong text-ink-900 hover:border-ink-900"}`}
                  >
                    {t.views[id]}
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
                        <figcaption className="pt-2 text-[13px] text-ink-500">{roomName(item.space, locale)} · {styleName(item.styleId)}</figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pointer-events-none sticky bottom-5 z-30 flex justify-center px-5 pb-5">
            <div className="pointer-events-auto flex flex-wrap items-center gap-5 rounded-full bg-ink-900 py-2.5 pl-7 pr-2.5 text-white shadow-[0_16px_40px_rgba(30,28,25,0.25)]">
              <span className="text-sm">{t.saved(saved.length)}</span>
              <Link href="/inquiry" className="focus-ring inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-ink-900">{t.brief}</Link>
            </div>
          </div>
        </>
      ) : (
        <section aria-label={t.start} className={`${pad} pb-32`}>
          <div className={`${wrap} grid items-center gap-12 md:grid-cols-2`}>
            <p className="max-w-md text-[17px] leading-[1.7] text-ink-700">
              {t.help}
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
