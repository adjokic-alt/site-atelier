import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";

const stages = [
  {
    number: "01",
    title: "Explore",
    description:
      "Compare seven style directions or take the visual quiz. Save illustrative references without creating an account.",
    detail: "Data remains in the browser draft at this stage.",
    href: "/styles",
    link: "Explore styles",
  },
  {
    number: "02",
    title: "Define",
    description:
      "Use the guided inquiry to record the project type, location, goals, space, budget, timing and open questions.",
    detail: "Unknown answers can remain clearly marked as open.",
    href: "/inquiry/style",
    link: "Start the inquiry",
  },
  {
    number: "03",
    title: "Review",
    description:
      "Open the Brief Builder, edit individual sections and download a customer-safe A4 PDF for discussion.",
    detail: "The PDF is not a quote, contract or technical specification.",
    href: "/brief",
    link: "Review my brief",
  },
  {
    number: "04",
    title: "Submit for review",
    description:
      "Send the demo inquiry for server validation, a reference code and an honest availability and completeness review.",
    detail: "The current demo prints email previews but sends no real email.",
    href: "/inquiry/review",
    link: "Open final review",
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="The process"
          title="One draft, improved step by step."
          description="Style choices, inspiration and project answers all update the same central brief. Nothing needs to be re-entered on every page."
        />

        <ol className="mt-12 space-y-5">
          {stages.map((stage) => (
            <li
              key={stage.number}
              className="grid gap-5 rounded-xl border border-border bg-surface p-6 md:grid-cols-[80px_1fr_auto] md:items-center md:p-8"
            >
              <span className="font-display text-3xl text-accent">
                {stage.number}
              </span>
              <div>
                <h2 className="font-display text-h2 text-ink-900">
                  {stage.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-700">
                  {stage.description}
                </p>
                <p className="mt-3 text-xs leading-6 text-ink-500">
                  {stage.detail}
                </p>
              </div>
              <Link
                href={stage.href}
                className="focus-ring rounded-sm text-sm font-medium text-accent hover:underline md:justify-self-end"
              >
                {stage.link} →
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
