import Image from "next/image";
import Link from "next/link";
import type { StyleStudioData } from "@/content/style-studios";
import { inspirationItems } from "@/content/inspiration";
import { materialBoards } from "@/content/material-boards";
import { SaveHeart } from "@/components/ui/SaveHeart";
import { SaveStyleButton } from "./SaveStyleButton";

const wrap = "mx-auto w-full max-w-[1328px]";
const pad = "px-5 sm:px-8 lg:px-14";
const eyebrow = "mb-3.5 text-[13px] uppercase tracking-[0.12em] text-ink-500";

/** Photo-led studio: hero, gallery, material board, four characteristics, related rooms, CTA. */
export function StyleStudioPage({ studio }: { studio: StyleStudioData }) {
  const rooms = inspirationItems.filter((i) => i.styleId === studio.id && i.image !== studio.heroImage);
  const gallery = rooms.slice(0, 4);
  const related = (rooms.length > 4 ? rooms.slice(4) : [])
    .concat(inspirationItems.filter((i) => studio.pairings.some((p) => p.href.endsWith(`/${i.styleId}`))))
    .slice(0, 4);
  const board = materialBoards[studio.id];
  const quote = studio.principles[0]?.description;

  return (
    <>
      {/* Hero */}
      <section aria-label={studio.name} className="relative isolate h-[100svh] min-h-[620px] max-h-[920px] overflow-hidden bg-ink-900">
        <Image src={studio.heroImage} alt={studio.heroAlt} fill priority sizes="100vw" className="atelier-drift object-cover" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,14,.32)_0%,rgba(20,17,14,0)_30%,rgba(20,17,14,0)_55%,rgba(20,17,14,.55)_100%)]" />
        <div className={`relative mx-auto flex h-full max-w-[1440px] items-end ${pad} pb-12 md:pb-20`}>
          <div className="flex w-full flex-wrap items-end justify-between gap-7 text-white">
            <div>
              <p className="mb-4 text-[13px] uppercase tracking-[0.14em] text-white/85">Style Studio</p>
              <h1 className="atelier-rise font-display text-[clamp(4rem,11vw,10.5rem)] leading-[0.9] text-white">{studio.name}</h1>
              <p className="mt-5 font-display text-[clamp(1.375rem,2.4vw,2rem)] italic text-white/95">{studio.tagline}</p>
            </div>
            <SaveStyleButton styleId={studio.id} name={studio.name} />
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery.length ? (
        <section aria-label="Gallery" className={`${pad} py-[clamp(64px,9vw,120px)]`}>
          <div className={`${wrap} grid auto-rows-[260px] gap-5 md:auto-rows-[300px] md:grid-cols-12`}>
            {gallery.map((item, i) => {
              const span = ["md:col-span-7 md:row-span-2", "md:col-span-5", "md:col-span-5", "md:col-span-8"][i];
              return (
                <figure key={item.id} className={`relative overflow-hidden rounded ${span}`}>
                  <Image src={item.image} alt={item.altText} fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover" />
                  <SaveHeart itemId={item.id} label={item.title} className="absolute right-3.5 top-3.5" />
                </figure>
              );
            })}
            {gallery.length >= 3 && quote ? (
              <div className="flex items-end py-2 md:col-span-4">
                <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.15] text-ink-900">{quote}</p>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Material board */}
      <section aria-label="Material board" className={`bg-surface-sunken ${pad} py-[clamp(64px,9vw,120px)]`}>
        <div className={`${wrap} grid items-center gap-[clamp(40px,6vw,88px)] lg:grid-cols-2`}>
          <div>
            <p className={eyebrow}>Material board</p>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none text-ink-900">What it feels like to touch.</h2>
            <div className="mt-10 flex h-[72px] overflow-hidden rounded" aria-hidden="true">
              {studio.palette.map((c) => <div key={c.hex} className="flex-1" style={{ background: c.hex }} />)}
            </div>
            <ul className="mt-2.5 flex justify-between gap-2 text-xs text-ink-500">
              {studio.palette.map((c) => <li key={c.hex}>{c.name}</li>)}
            </ul>
          </div>
          <ul className="grid grid-cols-2 gap-5 rounded-md bg-surface p-6 shadow-[0_24px_60px_rgba(30,28,25,0.10)] sm:p-8">
            {board.map((m, i) => (
              <li key={m.name}>
                <div className={`relative overflow-hidden rounded-sm ${i < 2 ? "h-[200px]" : "h-[140px]"}`}>
                  <Image src={m.image} alt={`${m.name} sample`} fill sizes="300px" className="object-cover" />
                </div>
                <p className="mt-3 text-[15px] font-semibold text-ink-900">{m.name}</p>
                <p className="mt-1 text-[13px] text-ink-500">{m.use}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Key characteristics */}
      <section aria-label="Key characteristics" className={`${pad} py-[clamp(64px,9vw,120px)]`}>
        <div className={wrap}>
          <p className={`${eyebrow} mb-12`}>What makes it {studio.name}</p>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {studio.principles.slice(0, 4).map((p) => (
              <li key={p.number} className="border-t border-ink-900 pt-6">
                <p className="text-[13px] text-ink-500">{p.number}</p>
                <h3 className="mb-2.5 mt-4 font-display text-[34px] leading-tight text-ink-900">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-ink-700">{p.description}</p>
              </li>
            ))}
          </ol>
          <details className="group mt-14 border-t border-border pt-5">
            <summary className="focus-ring flex min-h-11 cursor-pointer list-none items-center justify-between rounded-sm text-[15px] font-semibold text-ink-900">
              Is it right for my home?
              <span aria-hidden="true" className="text-xl transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="grid gap-8 pb-2 pt-6 text-[15px] leading-relaxed text-ink-700 md:grid-cols-3">
              <FitList title={studio.bestForTitle} items={studio.bestFor} />
              <FitList title={studio.strengthsTitle} items={studio.strengths} />
              <FitList title={studio.cautionsTitle} items={studio.cautions} />
            </div>
          </details>
        </div>
      </section>

      {/* Related inspiration */}
      {related.length ? (
        <section aria-label="Related inspiration" className={`${pad} pb-[clamp(64px,9vw,120px)]`}>
          <div className={wrap}>
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <h2 className="font-display text-[clamp(2.25rem,4vw,3.5rem)] leading-none text-ink-900">More rooms like this</h2>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="text-ink-500">Pairs well with</span>
                {studio.pairings.map((p) => (
                  <Link key={p.href} href={p.href} className="focus-ring inline-flex min-h-10 items-center rounded-full border border-border-strong px-4 text-ink-900 hover:border-ink-900">{p.name}</Link>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {related.map((item) => (
                <figure key={item.id} className="relative">
                  <div className="relative h-[clamp(220px,28vw,380px)] overflow-hidden rounded">
                    <Image src={item.image} alt={item.altText} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                  </div>
                  <SaveHeart itemId={item.id} label={item.title} className="absolute right-2 top-2 sm:right-3.5 sm:top-3.5" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section aria-label="Next step" className={`bg-ink-900 ${pad} py-[clamp(72px,10vw,140px)] text-center text-white`}>
        <h2 className="mx-auto max-w-[900px] font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-none text-white">Does this feel like home?</h2>
        <div className="mt-11 flex flex-wrap justify-center gap-3.5">
          <Link href="/moodboard" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-white px-7 text-[15px] font-semibold text-ink-900 hover:bg-white/90">Open my moodboard</Link>
          <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-white/60 px-7 text-[15px] font-medium text-white hover:bg-white/10">Start my brief</Link>
        </div>
        <Link href="/styles" className="focus-ring mt-7 inline-block rounded-sm text-sm text-[#cfc7ba] underline underline-offset-4">Explore another style</Link>
      </section>
    </>
  );
}

function FitList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-ink-500">{title}</h3>
      <ul className="space-y-2">{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}
