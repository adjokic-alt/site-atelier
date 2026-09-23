import type { Metadata } from "next";
import Link from "next/link";
import {
  CompanyPlaceholderNotice,
  ContactChoice,
} from "@/components/company";
import { Card, Container, SectionHeading } from "@/components/ui";
import { businessConfig } from "@/config/business.config";

export const metadata: Metadata = {
  title: "Contact | Site Atelier",
  description:
    "Choose the right route for a project inquiry, an existing brief or a general question about Site Atelier.",
};

const emailIsPlaceholder = businessConfig.contactEmail.endsWith("@example.com");

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <SectionHeading
              eyebrow="Contact"
              title="Choose the route that matches your question."
              description="Project inquiries are most useful when they arrive with a structured brief. General questions and existing demo references can use separate routes."
            />
            <CompanyPlaceholderNotice />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <ContactChoice
              eyebrow="New project"
              title="Start with the guided brief"
              description="Use the seven-step inquiry to record the project, location, goals, property, budget, timing and contact details."
              href="/inquiry/style"
              linkLabel="Start my project brief"
              primary
            />
            <ContactChoice
              eyebrow="Existing draft"
              title="Review or continue your brief"
              description="Open the draft stored in this browser, edit individual sections and download the current PDF."
              href="/brief"
              linkLabel="Open my brief"
            />
            <ContactChoice
              eyebrow="General question"
              title="Contact details are not live yet"
              description="The configured email address is still a placeholder. A production contact channel will be enabled after the business identity and legal information are confirmed."
              href="/about"
              linkLabel="Read about the project"
            />
          </div>
        </Container>
      </section>

      <section className="bg-surface-sunken py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                Current contact configuration
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">
                Placeholder details, shown honestly.
              </h2>
              <p className="mt-5 text-base leading-8 text-ink-700">
                These values come from the central business configuration. They
                are displayed here for development review and should not be
                treated as confirmed public company information.
              </p>
            </div>

            <Card variant="surface">
              <dl className="divide-y divide-border text-sm">
                <div className="grid gap-2 py-4 first:pt-0 sm:grid-cols-[180px_1fr]">
                  <dt className="font-medium text-ink-500">Display name</dt>
                  <dd className="text-ink-900">{businessConfig.displayName}</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
                  <dt className="font-medium text-ink-500">Contact email</dt>
                  <dd className="text-ink-900">
                    {businessConfig.contactEmail}
                    {emailIsPlaceholder ? (
                      <span className="ml-2 rounded-full bg-accent-tint px-2 py-1 text-xs text-accent">
                        Placeholder
                      </span>
                    ) : null}
                  </dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
                  <dt className="font-medium text-ink-500">Timezone</dt>
                  <dd className="text-ink-900">{businessConfig.timezone}</dd>
                </div>
                <div className="grid gap-2 py-4 sm:grid-cols-[180px_1fr]">
                  <dt className="font-medium text-ink-500">Response promise</dt>
                  <dd className="text-ink-900">
                    {businessConfig.responseTimePromiseDays
                      ? `${businessConfig.responseTimePromiseDays} working days`
                      : "Not confirmed"}
                  </dd>
                </div>
                <div className="grid gap-2 py-4 last:pb-0 sm:grid-cols-[180px_1fr]">
                  <dt className="font-medium text-ink-500">Booking link</dt>
                  <dd className="text-ink-900">
                    {businessConfig.bookingUrl ? "Configured" : "Not configured"}
                  </dd>
                </div>
              </dl>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                Before sending a project inquiry
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">
                Add the project country and a short description of what should change.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-700">
                Those two details make it easier to review service availability
                and understand whether the next step should be design direction,
                scope definition or clarification.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="/inquiry/project"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 font-medium text-white"
              >
                Describe my project
              </Link>
              <Link
                href="/services"
                className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 font-medium text-ink-900"
              >
                Understand the services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
