import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";

const steps = [
  {
    number: "01",
    title: "Discover your direction",
    description:
      "Compare styles or take six quick visual choices when you are not sure where to begin.",
    href: "/styles",
    link: "Explore styles",
  },
  {
    number: "02",
    title: "Collect useful references",
    description:
      "Save illustrative ideas to a moodboard and see which styles, spaces and materials appear most often.",
    href: "/inspiration",
    link: "Browse inspiration",
  },
  {
    number: "03",
    title: "Build a clear brief",
    description:
      "Define the project, location, goals, space, budget and timing through a guided seven-step inquiry.",
    href: "/inquiry/style",
    link: "Start the inquiry",
  },
  {
    number: "04",
    title: "Review and download",
    description:
      "Edit everything in one place and download a customer-safe A4 project brief for discussion.",
    href: "/brief",
    link: "Open my brief",
  },
];

export function HomeProcess() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From a vague idea to a useful project brief."
          description="Each step adds detail to the same saved draft, so you can explore first and decide later."
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number} className="flex min-h-72 flex-col bg-surface p-6 md:p-8">
              <span className="text-xs font-semibold tracking-[0.08em] text-accent">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-h3 text-ink-900">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                {step.description}
              </p>
              <Link
                href={step.href}
                className="focus-ring mt-auto rounded-sm pt-8 text-sm font-medium text-accent hover:underline"
              >
                {step.link} →
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
