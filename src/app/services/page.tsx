import type { Metadata } from "next";
import Link from "next/link";
import { AvailabilityNotice, ServiceCard } from "@/components/services";
import { Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services | Site Atelier",
  description:
    "Understand how a structured project brief can support design direction, scope definition, partner comparison and coordination review.",
};

const services = [
  {
    number: "01",
    title: "Design direction",
    summary:
      "Create a coherent starting point for how the space should feel and function before detailed decisions begin.",
    includes: [
      "Primary and optional accent style",
      "Material preferences",
      "Moodboard references",
      "Project goals and things to avoid",
    ],
    doesNotInclude: [
      "Final construction drawings",
      "Automatic product specification",
      "A guaranteed professional appointment",
    ],
    href: "/inquiry/style",
  },
  {
    number: "02",
    title: "Scope definition",
    summary:
      "Organize the spaces, priorities, property details, constraints, budget range and timing into one reviewable document.",
    includes: [
      "Project categories and location",
      "Property condition and stage",
      "Budget and preferred timing",
      "Open questions and missing details",
    ],
    doesNotInclude: [
      "A fixed quotation",
      "Permit or structural assessment",
      "A legally binding scope of works",
    ],
    href: "/inquiry/project",
  },
  {
    number: "03",
    title: "Partner comparison",
    summary:
      "Use clearer project information when discussing the same needs with designers, specialists or contractors.",
    includes: [
      "A customer-safe A4 PDF",
      "Consistent summary of priorities",
      "Reference images and material interests",
      "Contact and location context",
    ],
    doesNotInclude: [
      "Endorsement of a specific provider",
      "Verification of external quotations",
      "A guarantee of price or availability",
    ],
    href: "/brief",
  },
  {
    number: "04",
    title: "Coordination review",
    summary:
      "Request an honest review of what coordination may be possible for the location, project stage and help requested.",
    includes: [
      "Location-based availability message",
      "Review of the type of help requested",
      "Identification of clarification needs",
      "A reference code for the demo inquiry",
    ],
    doesNotInclude: [
      "Confirmed execution management",
      "Local partner availability by default",
      "Automatic acceptance of the project",
    ],
    href: "/inquiry/project",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <SectionHeading
              eyebrow="Services"
              title="Clarify the project before committing to the next step."
              description="Site Atelier helps organize early design and renovation decisions into a useful brief. The exact support available still depends on location, scope and project stage."
            />
            <div className="rounded-lg border border-border bg-surface-sunken p-5 text-sm leading-7 text-ink-700">
              <strong className="text-ink-900">Important:</strong> The website
              does not replace architects, engineers, permit specialists,
              contractors or local legal advice. The brief is a starting document
              for clearer conversations.
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <AvailabilityNotice />

      <section className="py-16 md:py-24">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
            Not sure where to begin?
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-ink-900 md:text-h1">
            Start with what you know and leave the rest as open questions.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-700">
            The inquiry accepts “Not sure yet” where appropriate. A useful brief
            can show uncertainty instead of hiding it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/inquiry/style"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 font-medium text-white"
            >
              Start my brief
            </Link>
            <Link
              href="/how-it-works"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 font-medium text-ink-900"
            >
              See how it works
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
