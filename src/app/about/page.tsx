import type { Metadata } from "next";
import Link from "next/link";
import {
  CompanyPlaceholderNotice,
  PrincipleCard,
} from "@/components/company";
import { Card, Container, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About | Site Atelier",
  description:
    "Learn why Site Atelier helps turn early design ideas into a clearer, editable project brief before professional work begins.",
};

const principles = [
  {
    number: "01",
    title: "Clarity before commitment",
    description:
      "Early project conversations are more useful when style, scope, priorities, location, budget and uncertainty are visible in one place.",
  },
  {
    number: "02",
    title: "Uncertainty is valid information",
    description:
      "A useful brief does not invent answers. Unknown budgets, open style choices and unresolved property questions can remain clearly marked.",
  },
  {
    number: "03",
    title: "Inspiration should become structure",
    description:
      "Saved visual references become more valuable when connected to spaces, materials, goals and practical project decisions.",
  },
  {
    number: "04",
    title: "Availability should be honest",
    description:
      "Remote advice, scope support, partner coordination and execution coordination are separate capabilities and should not be promised by default.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <SectionHeading
              eyebrow="About"
              title="A calmer starting point for complex design decisions."
              description="Site Atelier is a project-briefing experience for people who have ideas, references or renovation ambitions but need a clearer way to organize them before the next professional conversation."
            />
            <CompanyPlaceholderNotice />
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                Why it exists
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">
                Good projects often begin with incomplete information.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-ink-700">
              <p>
                A person may know the desired atmosphere but not the name of the
                style. A useful reference image may exist without a defined
                budget, scope or timeline. A property may need work before the
                right type of professional support is clear.
              </p>
              <p>
                Site Atelier brings those fragments into one editable brief. The
                visual quiz, style Studios, moodboard, inquiry and PDF all update
                or present the same central project record.
              </p>
              <p>
                The result is not a substitute for professional assessment. It is
                a clearer starting document for deciding what should happen next.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-sunken py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Working principles"
            title="Designed around honest, editable information."
            description="The product avoids pretending that an early brief is already a quotation, specification or confirmed service agreement."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <PrincipleCard key={principle.number} {...principle} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                Who it is for
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">
                For people who need direction before detailed design begins.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-700">
                The current experience is most useful for residential interiors,
                renovation planning, early property decisions and projects where
                visual preferences need to be translated into a clearer scope.
              </p>
            </div>
            <Card variant="sunken">
              <h3 className="font-display text-h3 text-ink-900">
                Not a replacement for local professionals
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                Structural design, permits, engineering, measured surveys,
                procurement, contractor responsibility and regulated advice must
                still be handled by appropriately qualified professionals where
                required.
              </p>
            </Card>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/how-it-works"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 font-medium text-white"
            >
              See how it works
            </Link>
            <Link
              href="/inquiry/style"
              className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 font-medium text-ink-900"
            >
              Start my brief
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
