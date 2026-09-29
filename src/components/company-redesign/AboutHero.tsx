import Link from "next/link";

export function AboutHero() {
  return (
    <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">About</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink-900 md:text-display">
            A calmer starting point for complex interior decisions.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">
            Site Atelier helps people turn saved ideas, uncertain preferences and practical project questions into one clearer, editable brief.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/how-it-works" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">See how it works</Link>
            <Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">Start my brief</Link>
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">What it is</p>
          <h2 className="mt-4 font-display text-h2 text-ink-900">A project-briefing experience before professional work begins.</h2>
          <p className="mt-4 text-sm leading-7 text-ink-700">
            Style Studios, inspiration, the adaptive moodboard, guided inquiry and PDF all contribute to the same project direction.
          </p>
        </aside>
      </div>
    </section>
  );
}
