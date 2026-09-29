import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Services</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink-900 md:text-display">
            Clarify the project before committing to the next step.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">
            Site Atelier brings visual direction, practical requirements and open questions into one structured brief that can support better conversations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Start my brief</Link>
            <Link href="/how-it-works" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">See how it works</Link>
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Important context</p>
          <h2 className="mt-4 font-display text-h2 text-ink-900">A clearer starting point, not a replacement for professionals.</h2>
          <p className="mt-4 text-sm leading-7 text-ink-700">
            The website does not replace architects, engineers, permit specialists, contractors or local legal advice. Support still depends on location, scope and project stage.
          </p>
        </aside>
      </div>
    </section>
  );
}
