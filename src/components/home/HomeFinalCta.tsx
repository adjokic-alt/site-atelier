import Link from "next/link";
import { Container } from "@/components/ui";

export function HomeFinalCta() {
  return (
    <section className="border-y border-border bg-ink-900 py-16 text-white md:py-24">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/65">
          Begin at your own pace
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight md:text-h1">
          Create a brief that makes the first project conversation more useful.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
          Explore without an account. Your draft remains in this browser until
          you choose to submit the demo inquiry.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/inquiry/style"
            className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 font-medium text-ink-900"
          >
            Start my project brief
          </Link>
          <Link
            href="/styles/not-sure"
            className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/60 px-6 font-medium text-white hover:bg-white/10"
          >
            Take the style quiz
          </Link>
        </div>
      </Container>
    </section>
  );
}
