import Link from "next/link";
import { Container } from "@/components/ui";

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface-sunken">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(255,255,255,.85)_0,transparent_24%),linear-gradient(135deg,#f3efe8_0%,#d8dfdc_48%,#81979a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25 [background-image:linear-gradient(115deg,transparent_49%,white_50%,transparent_51%),radial-gradient(circle_at_30%_70%,white_0,transparent_28%)]"
      />

      <Container className="relative grid min-h-[calc(100svh-5rem)] items-end py-12 md:min-h-[720px] md:py-20">
        <div className="w-full rounded-xl bg-paper/92 p-6 shadow-lg backdrop-blur-sm md:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
              A clearer way to begin a design project
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] text-ink-900 sm:text-5xl md:text-display">
              Know what you want before the work begins.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700 md:text-lead">
              Discover a visual direction, collect inspiration and turn early ideas
              into a structured project brief that is easier to review and discuss.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/styles/not-sure"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-base font-medium text-white hover:opacity-90"
              >
                Find your style
              </Link>
              <Link
                href="/inquiry/style"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border-[1.5px] border-ink-900 bg-paper/70 px-6 text-base font-medium text-ink-900 hover:bg-paper"
              >
                Start your brief
              </Link>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-border pt-6 text-sm text-ink-700 sm:grid-cols-3">
            <li>Free visual quiz</li>
            <li>Draft saved in your browser</li>
            <li>Downloadable project PDF</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
