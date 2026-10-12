import type { Metadata } from "next";
import Link from "next/link";
import { HowItWorksSteps } from "@/components/how-it-works/HowItWorksSteps";
import { QuizButton } from "@/components/ui/QuizButton";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const copy = {
  en: {
    title: "How it works", desc: "Four quiet steps from a feeling to a finished home brief: save what you love, find your style, describe your home, receive your brief.",
    line: "From a feeling to a finished brief, in four quiet steps.", good: "Good to know",
    notes: [["A few quiet minutes.", "The whole brief fits into one sitting, with a coffee."], ["No account.", "Your choices stay in your browser until you decide to send them."], ["Yours to keep.", "Download the PDF any time, even before you send it."]],
    thought: "A thought on design", quote: "The details are not the details. They make the design.", begin: "Begin", beginTitle: "Begin with a picture you love.", explore: "Explore inspiration",
  },
  sr: {
    title: "Kako funkcioniše", desc: "Četiri tiha koraka od osećaja do gotovog briefa: sačuvajte ono što volite, pronađite stil, opišite dom, primite svoj brief.",
    line: "Od osećaja do gotovog briefa, u četiri tiha koraka.", good: "Dobro je znati",
    notes: [["Nekoliko mirnih minuta.", "Ceo brief se popuni u jednom dahu, uz kafu."], ["Bez naloga.", "Vaši izbori ostaju u vašem pregledaču dok ne odlučite da ih pošaljete."], ["Ostaje vama.", "PDF možete preuzeti bilo kada, čak i pre slanja."]],
    thought: "Misao o dizajnu", quote: "Detalji nisu samo detalji. Oni čine dizajn.", begin: "Počnite", beginTitle: "Počnite od slike koju volite.", explore: "Istražite inspiraciju",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = pick(copy, await getLocale());
  return { title: t.title, description: t.desc };
}

const pad = "px-5 sm:px-8 lg:px-14";
const wrap = "mx-auto max-w-[1328px]";

export default async function HowItWorksPage() {
  const t = pick(copy, await getLocale());
  return (
    <main>
      <div className={`${pad} pb-[clamp(72px,10vw,140px)] pt-[clamp(28px,4vw,56px)]`}>
        <div className={wrap}>
          <header className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
            <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] text-ink-900">{t.title}</h1>
            <p className="max-w-[520px] font-display text-[clamp(1.5rem,2.4vw,1.9rem)] italic leading-[1.25] text-ink-700">
              {t.line}
            </p>
          </header>

          <div className="mt-[clamp(24px,3.5vw,48px)]">
            <HowItWorksSteps />
          </div>

          <section aria-label={t.good} className="mt-[clamp(80px,11vw,150px)] grid gap-10 border-t border-border pt-12 md:grid-cols-[280px_1fr] md:gap-14">
            <p className="text-[13px] uppercase tracking-[0.12em] text-ink-500">{t.good}</p>
            <div className="grid gap-8 text-[15px] leading-[1.6] text-ink-700 sm:grid-cols-3">
              {t.notes.map(([b, rest]) => <p key={b}><b className="font-semibold text-ink-900">{b}</b> {rest}</p>)}
            </div>
          </section>
        </div>
      </div>

      <section aria-label={t.thought} className={`bg-surface-sunken ${pad} py-[clamp(72px,10vw,140px)]`}>
        <figure className={`${wrap} max-w-4xl text-center`}>
          <blockquote className="font-display text-[clamp(2rem,4.4vw,3.75rem)] italic leading-[1.12] text-ink-900">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 text-[13px] uppercase tracking-[0.12em] text-ink-500">Charles Eames</figcaption>
        </figure>
      </section>

      <section aria-label={t.begin} className={`${pad} py-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} flex flex-wrap items-end justify-between gap-8`}>
          <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">{t.beginTitle}</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">{t.explore}</Link>
            <QuizButton />
          </div>
        </div>
      </section>
    </main>
  );
}
