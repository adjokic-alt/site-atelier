import Link from "next/link";

const journey = [
  ["Styles", "Understand seven interior directions."],
  ["Inspiration", "Save room references that resonate."],
  ["Moodboard", "Reveal recurring signals and colours."],
  ["Brief", "Add scope, priorities, budget and timing."],
  ["Inquiry", "Submit one structured project record."],
];

export function AboutJourney() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">One connected journey</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Each part contributes to the same central project direction.</h2></div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {journey.map(([title, text], index) => <article key={title} className="rounded-xl border border-border bg-surface p-5"><p className="text-xs font-semibold tracking-[.1em] text-accent">0{index + 1}</p><h3 className="mt-5 font-display text-h3 text-ink-900">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-700">{text}</p></article>)}
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/styles" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Explore the styles</Link><Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">Start my brief</Link></div>
      </div>
    </section>
  );
}
