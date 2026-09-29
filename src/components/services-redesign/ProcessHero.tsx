import Link from "next/link";

export function ProcessHero() {
  return (
    <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">How it works</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink-900 md:text-display">Explore first. Define the project when you are ready.</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">Style discovery, saved inspiration, the moodboard and guided inquiry all update one central browser draft.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/styles" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Explore styles</Link>
            <Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">Start the inquiry</Link>
          </div>
        </div>

        <aside className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Your working draft</p>
          <h2 className="mt-4 font-display text-h2 text-ink-900">One source of truth across the journey.</h2>
          <p className="mt-4 text-sm leading-7 text-ink-700">The current browser keeps the working draft. Once submitted, the production flow stores the inquiry and sends confirmation emails with the generated PDF.</p>
        </aside>
      </div>
    </section>
  );
}
