import type { Metadata } from "next";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { NotSureCard, StyleCard } from "@/components/styles";
import { styleCatalog } from "@/content/style-catalog";

export const metadata: Metadata = {
  title: "Explore Styles | Site Atelier",
  description:
    "Explore seven visual directions and choose a starting point for your project brief.",
};

export default function StylesPage() {
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Explore styles"
              title="Start with how you want the space to feel."
              description="Choose the direction that feels closest. Styles are starting points, not boxes, and blending comes later in the Studio."
            />

            <Link href="/styles/not-sure" className="focus-ring self-start rounded-sm text-sm font-medium text-accent underline-offset-4 hover:underline md:mb-2">
              Not sure? Take the visual quiz â†’
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {styleCatalog.map((style, index) => (
              <StyleCard
                key={style.id}
                style={style}
                priority={index < 2}
              />
            ))}

            <NotSureCard />
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-ink-700 md:flex-row md:items-center md:justify-between">
            <p>
              Styles are starting points. Most real projects combine more than
              one influence.
            </p>

            <Link href="/inquiry/project" className="focus-ring rounded-sm font-medium text-accent underline-offset-4 hover:underline">
              Already know what you need? Start with the project â†’
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
