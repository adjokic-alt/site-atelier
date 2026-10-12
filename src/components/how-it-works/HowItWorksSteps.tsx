"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SaveHeart } from "@/components/ui/SaveHeart";
import { useBrief } from "@/providers/BriefProvider";
import { useLocale } from "@/i18n/client";
import { pick } from "@/i18n/locales";

const STEP_MS = 4500;

const copy = {
  en: {
    steps: [
      { word: "Save", title: "Save what you love.", body: "Browse real rooms and tap the heart on anything that feels right. No account, no rules — just notice what you keep coming back to.", cta: { label: "Explore inspiration", href: "/inspiration" } },
      { word: "Discover", title: "Find your style in 45 seconds.", body: "Six pairs of rooms. Pick the one you would rather live in. Your answers and your saved pictures name the style together — often a blend of two.", cta: { label: "Take the quiz", href: "/styles/not-sure" } },
      { word: "Describe", title: "Tell us about your home.", body: "Five short steps: who lives there, which rooms, what should change, the budget and the space. Your brief writes itself beside you as you answer.", cta: { label: "Start my brief", href: "/inquiry" } },
      { word: "Receive", title: "Your brief, beautifully kept.", body: "Send it and you receive a designed PDF with a serial number: your style, every picture you saved and all your answers. The same document reaches the studio, so the first conversation starts where you left off.", cta: { label: "See your brief", href: "/brief" } },
    ],
    section: "The four steps", tabs: "Steps", stepOf: (n: number) => `Step 0${n} of 04`,
    save: { labels: ["Living · Scandinavian", "Kitchen · Rustic", "Bath · Minimalist"], hint: "Try it — tap a heart.", count: (n: number) => `${n} saved on your moodboard.`, empty: "Your moodboard is still empty." },
    quiz: { q: "Which would you rather live in?", a: ["Light and airy", "Warm and natural"], results: ["Scandinavian – Minimalist", "Rustic – Mediterranean"], pick: "Pick one — the real quiz has six pairs.", taste: "A taste of the result:" },
    brief: { title: "Our home brief", saved: "Saved", saving: "Saving…", rows: [["Feels like", "Scandinavian – Minimalist"], ["For", "The two of us"], ["Spaces", "Living room, Kitchen"], ["Goals", "More light, Better storage"], ["Home", "Apartment, 72 m²"]] as [string, string][] },
    pdf: { board: "Your moodboard", kind: "Home brief", style: "Scandinavian – Minimalist", for: "Prepared for you", serial: "Serial number" },
  },
  sr: {
    steps: [
      { word: "Sačuvajte", title: "Sačuvajte ono što volite.", body: "Pregledajte prave prostorije i dodirnite srce na svemu što vam prija. Bez naloga, bez pravila — samo primetite čemu se stalno vraćate.", cta: { label: "Istražite inspiraciju", href: "/inspiration" } },
      { word: "Otkrijte", title: "Pronađite stil za 45 sekundi.", body: "Šest parova prostorija. Izaberite onu u kojoj biste radije živeli. Vaši odgovori i sačuvane slike zajedno imenuju stil — često spoj dva.", cta: { label: "Uradite kviz", href: "/styles/not-sure" } },
      { word: "Opišite", title: "Recite nam nešto o svom domu.", body: "Pet kratkih koraka: ko tu živi, koje prostorije, šta treba da se promeni, budžet i prostor. Vaš brief se ispisuje pored vas dok odgovarate.", cta: { label: "Započnite brief", href: "/inquiry" } },
      { word: "Primite", title: "Vaš brief, lepo sačuvan.", body: "Pošaljite ga i dobijate dizajniran PDF sa serijskim brojem: vaš stil, svaka sačuvana slika i svi odgovori. Isti dokument stiže i u studio, pa prvi razgovor počinje tamo gde ste stali.", cta: { label: "Pogledajte svoj brief", href: "/brief" } },
    ],
    section: "Četiri koraka", tabs: "Koraci", stepOf: (n: number) => `Korak 0${n} od 04`,
    save: { labels: ["Dnevna soba · Skandinavski", "Kuhinja · Rustični", "Kupatilo · Minimalistički"], hint: "Probajte — dodirnite srce.", count: (n: number) => `Sačuvano u moodboardu: ${n}.`, empty: "Vaš moodboard je još prazan." },
    quiz: { q: "U kojoj biste radije živeli?", a: ["Svetlo i prozračno", "Toplo i prirodno"], results: ["Skandinavski – Minimalistički", "Rustični – Mediteranski"], pick: "Izaberite jednu — pravi kviz ima šest parova.", taste: "Ukus rezultata:" },
    brief: { title: "Brief našeg doma", saved: "Sačuvano", saving: "Čuva se…", rows: [["Osećaj", "Skandinavski – Minimalistički"], ["Za", "Nas dvoje"], ["Prostori", "Dnevna soba, Kuhinja"], ["Ciljevi", "Više svetla, Bolje odlaganje"], ["Dom", "Stan, 72 m²"]] as [string, string][] },
    pdf: { board: "Vaš moodboard", kind: "Brief doma", style: "Skandinavski – Minimalistički", for: "Pripremljeno za vas", serial: "Serijski broj" },
  },
};
type Copy = (typeof copy)["en"];

export function HowItWorksSteps() {
  const t: Copy = pick(copy, useLocale());
  const steps = t.steps;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0); // restarts the progress line

  useEffect(() => {
    // No auto-advance for people who prefer reduced motion.
    if (!auto || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => { setActive((a) => (a + 1) % 4); setCycle((c) => c + 1); }, STEP_MS);
    return () => window.clearTimeout(t);
  }, [auto, paused, active, cycle]);

  const choose = (i: number) => { setActive(i); setAuto(false); };
  const step = steps[active];

  return (
    <section aria-label={t.section} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div role="tablist" aria-label={t.tabs} className="grid grid-cols-4 border-y border-ink-900">
        {steps.map((s, i) => (
          <button
            key={s.word}
            role="tab"
            id={`hiw-tab-${i}`}
            aria-selected={active === i}
            aria-controls="hiw-panel"
            onClick={() => choose(i)}
            className="focus-ring group relative flex min-h-16 items-baseline gap-2 py-5 pr-2 text-left sm:gap-3"
          >
            <span className={`text-xs tabular-nums ${active === i ? "text-accent" : "text-ink-500"}`}>0{i + 1}</span>
            <span className={`text-[15px] font-medium transition-colors ${active === i ? "text-ink-900" : "text-ink-500 group-hover:text-ink-900"}`}>{s.word}</span>
            {active === i ? (
              <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-[2px] bg-border">
                <span
                  key={`${active}-${cycle}-${auto && !paused}`}
                  className="block h-full bg-accent"
                  style={auto ? { animation: `hiw-progress ${STEP_MS}ms linear forwards`, animationPlayState: paused ? "paused" : "running" } : { width: "100%" }}
                />
              </span>
            ) : null}
          </button>
        ))}
      </div>

      <div id="hiw-panel" role="tabpanel" aria-labelledby={`hiw-tab-${active}`} className="grid items-center gap-[clamp(32px,5vw,80px)] pt-[clamp(20px,3vw,36px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div key={active} className="atelier-rise">
          <p className="text-[13px] uppercase tracking-[0.12em] text-ink-500">{t.stepOf(active + 1)}</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.02] text-ink-900">{step.title}</h2>
          <p className="mt-6 max-w-md text-[17px] leading-[1.7] text-ink-700">{step.body}</p>
          <Link href={step.cta.href} className="focus-ring mt-9 inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">
            {step.cta.label}
          </Link>
        </div>
        <div className="min-h-[420px]">
          {active === 0 ? <SaveDemo t={t} /> : active === 1 ? <QuizDemo t={t} /> : active === 2 ? <BriefDemo t={t} /> : <PdfDemo t={t} />}
        </div>
      </div>
    </section>
  );
}

/** Step 1 — real hearts: anything saved here lands on the visitor's moodboard. */
function SaveDemo({ t }: { t: Copy }) {
  const { brief } = useBrief();
  const items = [
    { id: "scandi-living-daylight", image: "/images/inspiration/daylight-living-room.png", label: t.save.labels[0] },
    { id: "rustic-kitchen-dining", image: "/images/inspiration/rustic-oak-kitchen-dining.jpg", label: t.save.labels[1] },
    { id: "minimalist-bath-calm", image: "/images/inspiration/warm-minimal-bathroom.png", label: t.save.labels[2] },
  ];
  const count = brief.visuals.moodboardItemIds.length;
  return (
    <div className="atelier-rise">
      <div className="grid grid-cols-[2fr_1fr] grid-rows-2 gap-3" style={{ height: "clamp(360px,36vw,480px)" }}>
        {items.map((it, i) => (
          <figure key={it.id} className={`relative m-0 overflow-hidden rounded ${i === 0 ? "row-span-2" : ""}`}>
            <Image src={it.image} alt="" fill sizes="(min-width:1024px) 40vw, 90vw" className="object-cover" />
            <SaveHeart itemId={it.id} label={it.label} className="absolute right-3 top-3" />
            <figcaption className="absolute bottom-3 left-3.5 text-[13px] text-white [text-shadow:0_1px_8px_rgba(0,0,0,.5)]">{it.label}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink-500">{t.save.hint} {count ? t.save.count(count) : t.save.empty}</p>
    </div>
  );
}

/** Step 2 — one quiz pair, answered for real but only as a preview. */
function QuizDemo({ t }: { t: Copy }) {
  const [pick, setPick] = useState<number | null>(null);
  const pair = [
    { image: "/images/studios/scandinavian/scandinavian-living-room.png", caption: t.quiz.a[0], result: t.quiz.results[0] },
    { image: "/images/inspiration/rustic-plaster-living-room.jpg", caption: t.quiz.a[1], result: t.quiz.results[1] },
  ];
  return (
    <div className="atelier-rise">
      <p className="mb-4 font-display text-[clamp(1.5rem,2.4vw,2rem)] text-ink-900">{t.quiz.q}</p>
      <div role="radiogroup" aria-label={t.quiz.q} className="grid grid-cols-2 gap-3">
        {pair.map((o, i) => (
          <button key={o.caption} type="button" role="radio" aria-checked={pick === i} onClick={() => setPick(i)}
            className={`focus-ring group overflow-hidden rounded-md bg-surface text-left transition-shadow ${pick === i ? "ring-2 ring-ink-900" : "ring-1 ring-border hover:ring-ink-500"}`}>
            <span className="relative block aspect-[4/3] overflow-hidden">
              <Image src={o.image} alt="" fill sizes="(min-width:1024px) 30vw, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
            </span>
            <span className="block p-4 font-display text-xl text-ink-900">{o.caption}</span>
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-5 min-h-7 text-[15px] text-ink-700">
        {pick === null ? t.quiz.pick : <>{t.quiz.taste} <span className="font-display text-xl text-accent">{pair[pick].result}</span></>}
      </p>
    </div>
  );
}

/** Step 3 — the brief card filling in by itself. */
function BriefDemo({ t }: { t: Copy }) {
  const rows = t.brief.rows;
  const [shown, setShown] = useState(0);
  const timer = useRef<number | null>(null);
  useEffect(() => {
    timer.current = window.setInterval(() => setShown((n) => (n >= rows.length ? n : n + 1)), 700);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [rows.length]);
  return (
    <div className="atelier-rise mx-auto max-w-md rounded-md bg-surface p-8 shadow-[0_24px_60px_rgba(30,28,25,0.10)]">
      <div className="flex items-baseline justify-between border-b border-border pb-4">
        <span className="font-display text-[30px] text-ink-900">{t.brief.title}</span>
        <span className="text-xs text-ink-500">{shown >= rows.length ? t.brief.saved : t.brief.saving}</span>
      </div>
      <dl className="grid grid-cols-[96px_1fr] gap-x-4 gap-y-3.5 py-5 text-sm">
        {rows.map(([k, v], i) => (
          <div key={k} className="contents">
            <dt className="text-ink-500">{k}</dt>
            <dd className={`transition-opacity duration-500 ${i < shown ? "text-ink-900 opacity-100" : "opacity-40"}`}>{i < shown ? v : "—"}</dd>
          </div>
        ))}
      </dl>
      <div className="grid grid-cols-4 gap-1.5">
        {["/images/inspiration/daylight-living-room.png", "/images/inspiration/calm-concealed-kitchen.png", "/images/inspiration/warm-minimal-bathroom.png", "/images/inspiration/soft-bedroom-layers.png"].map((src, i) => (
          <div key={src} className={`relative aspect-square overflow-hidden rounded-sm transition-opacity duration-500 ${shown > i ? "opacity-100" : "opacity-0"}`}>
            <Image src={src} alt="" fill sizes="80px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

/** Step 4 — the PDF the client receives. */
function PdfDemo({ t }: { t: Copy }) {
  return (
    <div className="atelier-rise relative mx-auto h-[clamp(380px,38vw,500px)] max-w-[520px]">
      <div className="absolute right-0 top-6 h-[88%] w-[64%] rotate-[3deg] rounded-sm bg-surface p-5 shadow-[0_18px_44px_rgba(30,28,25,0.12)]">
        <p className="text-[9px] uppercase tracking-[0.14em] text-accent">{t.pdf.board}</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          {["/images/inspiration/daylight-living-room.png", "/images/inspiration/calm-concealed-kitchen.png", "/images/inspiration/soft-bedroom-layers.png", "/images/inspiration/warm-minimal-bathroom.png", "/images/studios/scandinavian/scandinavian-kitchen.png", "/images/studios/scandinavian/scandinavian-workspace.png"].map((src) => (
            <div key={src} className="relative aspect-[4/5] overflow-hidden"><Image src={src} alt="" fill sizes="90px" className="object-cover" /></div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-0 flex h-[92%] w-[64%] -rotate-[2deg] flex-col overflow-hidden rounded-sm bg-paper shadow-[0_24px_60px_rgba(30,28,25,0.18)]">
        <div className="relative h-[52%]"><Image src="/images/studios/scandinavian/scandinavian-living-room.png" alt="" fill sizes="320px" className="object-cover" /></div>
        <div className="flex flex-1 flex-col p-5">
          <p className="text-[9px] uppercase tracking-[0.14em] text-accent">{t.pdf.kind}</p>
          <p className="mt-2 font-display text-[clamp(1.25rem,2vw,1.75rem)] leading-tight text-ink-900">{t.pdf.style}</p>
          <p className="mt-1 text-[11px] text-ink-700">{t.pdf.for}</p>
          <div className="mt-auto flex items-end justify-between border-t border-border pt-3">
            <span className="text-[9px] uppercase tracking-[0.14em] text-ink-500">{t.pdf.serial}</span>
            <span className="text-[12px] font-semibold text-ink-900">BR-2026-4F7A21</span>
          </div>
        </div>
      </div>
    </div>
  );
}
