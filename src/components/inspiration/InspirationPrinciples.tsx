import { Container } from "@/components/ui";

const principles = [
  {
    title: "Light",
    description: "How natural and artificial light shape the room throughout the day.",
  },
  {
    title: "Materials",
    description: "The surfaces, textures and details that make a space feel tactile.",
  },
  {
    title: "Layout",
    description: "How furniture, circulation and everyday activities work together.",
  },
  {
    title: "Atmosphere",
    description: "The emotional quality created by colour, scale, light and restraint.",
  },
];

export function InspirationPrinciples() {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">
              Beyond aesthetics
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight text-ink-900 md:text-h1">
              What are you actually choosing?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-ink-700">
              A useful reference is not only about appearance. Look for the
              qualities that affect how the space works and feels.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {principles.map((principle, index) => (
              <article key={principle.title} className="min-h-48 bg-surface p-6 md:p-8">
                <p className="text-xs font-semibold tracking-[.1em] text-accent">
                  0{index + 1}
                </p>
                <h3 className="mt-5 font-display text-h3 text-ink-900">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-700">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
