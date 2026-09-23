import { Card, Container, SectionHeading } from "@/components/ui";

const facts = [
  {
    title: "Before submission",
    description:
      "The active draft is stored in localStorage in the current browser. It is not automatically synchronized across devices.",
  },
  {
    title: "PDF generation",
    description:
      "The Brief page can send the validated customer brief to a server route that creates an A4 PDF in memory.",
  },
  {
    title: "Demo submission",
    description:
      "The server validates the brief again, creates a reference code and prints customer and internal email previews to the server log.",
  },
  {
    title: "What is not yet stored",
    description:
      "Selected file bytes, durable submissions, real email delivery and production database records are not part of the current demo.",
  },
];

export function DataJourney() {
  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Your information"
          title="Clear boundaries at every stage."
          description="The current implementation distinguishes browser drafts, server processing and functionality that is still intentionally in demo mode."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {facts.map((fact) => (
            <Card key={fact.title} variant="surface">
              <h2 className="font-display text-h3 text-ink-900">
                {fact.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-ink-700">
                {fact.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
