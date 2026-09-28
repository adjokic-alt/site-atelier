import Link from "next/link";

export function StudioCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-xl bg-ink-900 p-6 text-white md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">Your direction</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-h1">
              Ready to build a Scandinavian project brief?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
              Use this style as a starting point, add visual references and keep the direction editable as the project becomes clearer.
            </p>
          </div>
          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/55 px-6 text-sm font-semibold text-white hover:bg-white/10">
              Save related references
            </Link>
            <Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900">
              Continue to style selection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
