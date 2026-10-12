import Link from "next/link";
import { getLocale } from "@/i18n/server";

export async function ServicesHero() {
  const sr = (await getLocale()) === "sr";
  return (
    <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">{sr ? "Usluge" : "Services"}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink-900 md:text-display">
            {sr ? "Razjasnite projekat pre nego što se obavežete na sledeći korak." : "Clarify the project before committing to the next step."}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">
            {sr ? "Vizuelni pravac, praktični zahtevi i otvorena pitanja okupljeni su u jedan strukturisan brief koji olakšava bolje razgovore." : "Site Atelier brings visual direction, practical requirements and open questions into one structured brief that can support better conversations."}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full bg-ink-900 px-6 text-sm font-semibold text-white">{sr ? "Započnite brief" : "Start my brief"}</Link>
            <Link href="/how-it-works" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full border border-ink-900 px-6 text-sm font-semibold text-ink-900">{sr ? "Pogledajte kako funkcioniše" : "See how it works"}</Link>
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">{sr ? "Važan kontekst" : "Important context"}</p>
          <h2 className="mt-4 font-display text-h2 text-ink-900">{sr ? "Jasnija polazna tačka, a ne zamena za stručnjake." : "A clearer starting point, not a replacement for professionals."}</h2>
          <p className="mt-4 text-sm leading-7 text-ink-700">
            {sr ? "Sajt ne zamenjuje arhitekte, inženjere, stručnjake za dozvole, izvođače ni lokalne pravne savete. Podrška i dalje zavisi od lokacije, obima i faze projekta." : "The website does not replace architects, engineers, permit specialists, contractors or local legal advice. Support still depends on location, scope and project stage."}
          </p>
        </aside>
      </div>
    </section>
  );
}
