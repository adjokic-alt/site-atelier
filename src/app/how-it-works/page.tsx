import type { Metadata } from "next";
import Link from "next/link";
import { DataJourney, ProcessTimeline } from "@/components/services";
import { Card, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "How It Works | Site Atelier",
  description:
    "See how style discovery, inspiration, the project inquiry, Brief Builder, PDF generation and demo submission work together.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <SectionHeading
              eyebrow="How it works"
              title="Explore first. Define the project when you are ready."
              description="The application combines style discovery, a moodboard, a guided inquiry and one central brief. Each action updates the same browser draft."
            />
            <Card variant="surface">
              <h2 className="font-display text-h3 text-ink-900">
                No account is required for the current demo
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                The draft is stored in the current browser. Clearing browser
                storage, changing browser or changing device can remove access to
                that local draft.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <ProcessTimeline />
      <DataJourney />

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="What happens after submission"
            title="A review starts with the brief, not with assumptions."
            description="The demo submission validates the project information again and creates a stable reference code. Production email delivery and durable storage are intentionally not enabled yet."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <Card>
              <p className="text-xs font-semibold tracking-[.08em] text-accent">01</p>
              <h2 className="mt-4 font-display text-h3 text-ink-900">Validation</h2>
              <p className="mt-3 text-sm leading-7 text-ink-700">
                Required project and contact fields are checked in the browser and
                again on the server.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold tracking-[.08em] text-accent">02</p>
              <h2 className="mt-4 font-display text-h3 text-ink-900">Fit review</h2>
              <p className="mt-3 text-sm leading-7 text-ink-700">
                Location, requested support, completeness and timing produce
                review flags without automatically rejecting the project.
              </p>
            </Card>
            <Card>
              <p className="text-xs font-semibold tracking-[.08em] text-accent">03</p>
              <h2 className="mt-4 font-display text-h3 text-ink-900">Next conversation</h2>
              <p className="mt-3 text-sm leading-7 text-ink-700">
                The brief and PDF provide a clearer starting point for a human
                response once production communication is connected.
              </p>
            </Card>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/inquiry/style"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 font-medium text-white"
            >
              Start the inquiry
            </Link>
            <Link
              href="/services"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 font-medium text-ink-900"
            >
              Understand the services
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
