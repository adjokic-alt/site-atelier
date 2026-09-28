import Link from "next/link";
import { Container } from "@/components/ui";

export function InspirationNextStep() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="rounded-xl bg-ink-900 p-6 text-white md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">
              Your visual direction
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-h1">
              Your saved references are becoming a project direction.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
              Open the moodboard to review recurring styles and materials, or
              continue to the brief when the visual direction feels clear enough.
            </p>
          </div>

          <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
            <Link
              href="/moodboard"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900"
            >
              Open my moodboard
            </Link>
            <Link
              href="/brief"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/55 px-6 text-sm font-semibold text-white hover:bg-white/10"
            >
              Continue to my brief
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
