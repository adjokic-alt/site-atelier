import Link from "next/link";

export function ContactHero() {
  return (
    <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10">
        <div><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Contact</p><h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-ink-900 md:text-display">Choose the route that matches your question.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">Project inquiries are most useful when they arrive with a structured brief. General questions and existing drafts can use separate routes.</p></div>
        <div className="flex flex-col gap-3"><Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Start a project inquiry</Link><Link href="/brief" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">Open my existing brief</Link></div>
      </div>
    </section>
  );
}
