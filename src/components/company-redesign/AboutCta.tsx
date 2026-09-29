import Link from "next/link";

export function AboutCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-xl bg-ink-900 p-7 text-white md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div><p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">Start with what is clear</p><h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-h1">The brief can hold both decisions and open questions.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/75">You do not need a finished vision to create a useful starting point.</p></div>
          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0"><Link href="/how-it-works" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/55 px-6 text-sm font-semibold text-white">See how it works</Link><Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900">Start my brief</Link></div>
        </div>
      </div>
    </section>
  );
}
