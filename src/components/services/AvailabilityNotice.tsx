import Link from "next/link";
import { Container } from "@/components/ui";

export function AvailabilityNotice() {
  return (
    <section className="bg-accent-tint py-12 md:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
              Availability by location
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink-900 md:text-h1">
              The website does not promise the same support everywhere.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-ink-700">
              Discovery, remote design, scope definition, partner coordination
              and execution coordination are separate capabilities. The inquiry
              uses the project country to provide an honest availability message.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-paper p-6 shadow-sm">
            <h3 className="font-display text-h3 text-ink-900">
              Get a location-specific review
            </h3>
            <p className="mt-3 text-sm leading-7 text-ink-700">
              Add the project country and the type of help needed. Unknown or
              review-required locations are not treated as confirmed availability.
            </p>
            <Link
              href="/inquiry/project"
              className="focus-ring mt-6 inline-flex min-h-12 items-center rounded-sm bg-ink-900 px-5 text-sm font-medium text-white"
            >
              Check through my brief
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
