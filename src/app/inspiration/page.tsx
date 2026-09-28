import type { Metadata } from "next";
import { Container } from "@/components/ui";
import {
  InspirationEditorialGrid,
  InspirationHero,
  InspirationNextStep,
  InspirationPrinciples,
} from "@/components/inspiration";

export const metadata: Metadata = {
  title: "Inspiration | Site Atelier",
  description:
    "Browse clearly labelled illustrative style directions and save useful references to your moodboard.",
};

export default function InspirationPage() {
  return (
    <main>
      <InspirationHero />

      <section id="inspiration-gallery" className="scroll-mt-24 py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Curated references
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">
              Notice what keeps drawing your attention.
            </h2>
            <p className="mt-4 text-base leading-8 text-ink-700">
              Every visual is illustrative. Save useful directions and let your
              repeated choices shape the visual section of the project brief.
            </p>
          </div>

          <InspirationEditorialGrid />
        </Container>
      </section>

      <InspirationPrinciples />
      <InspirationNextStep />
    </main>
  );
}
