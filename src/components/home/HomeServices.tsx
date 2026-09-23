import Link from "next/link";
import { Card, Container, SectionHeading } from "@/components/ui";

const services = [
  {
    title: "Design direction",
    description:
      "Clarify the visual and functional direction before materials, layouts and details multiply.",
  },
  {
    title: "Scope definition",
    description:
      "Turn broad ambitions into a clearer list of spaces, priorities, constraints and open questions.",
  },
  {
    title: "Partner comparison",
    description:
      "Record what is needed so potential designers, specialists or contractors can be compared more consistently.",
  },
  {
    title: "Coordination review",
    description:
      "Request an honest review of what coordination may be available for the project location and scope.",
  },
];

export function HomeServices() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="What the brief can support"
          title="Define the project before choosing the next professional step."
          description="The website does not promise every service in every country. Availability is reviewed from the location and help requested."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} variant="surface" className="min-h-52">
              <h3 className="font-display text-h3 text-ink-900">
                {service.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-700">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-lg border border-border bg-accent-tint p-5 md:flex md:items-center md:justify-between md:gap-8 md:p-7">
          <div>
            <h3 className="font-display text-h3 text-ink-900">
              Unsure what kind of help you need?
            </h3>
            <p className="mt-2 text-sm leading-7 text-ink-700">
              Choose “Not sure yet” in the inquiry. The brief can still be
              reviewed without inventing an answer.
            </p>
          </div>
          <Link
            href="/inquiry/project"
            className="focus-ring mt-5 inline-flex min-h-12 shrink-0 items-center rounded-sm bg-ink-900 px-5 text-sm font-medium text-white md:mt-0"
          >
            Describe my project
          </Link>
        </div>
      </Container>
    </section>
  );
}
