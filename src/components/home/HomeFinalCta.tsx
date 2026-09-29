import Link from "next/link";

export function HomeFinalCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-xl bg-ink-900 p-7 text-white md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div><p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">Begin anywhere</p><h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-display">You do not need all the answers to begin.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/75">Start with a style or a single image. Clarity can come later.</p></div>
          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0"><Link href="/style-quiz" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900">Find my style</Link><Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/55 px-6 text-sm font-semibold text-white hover:bg-white/10">Explore inspiration</Link></div>
        </div>
      </div>
    </section>
  );
}
