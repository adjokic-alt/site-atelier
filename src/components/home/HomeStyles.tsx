import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { StyleCard } from "@/components/styles";
import { styleCatalog } from "@/content/style-catalog";

export function HomeStyles() {
  const featured = styleCatalog.slice(0, 3);

  return (
    <section className="bg-surface-sunken py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Explore styles"
            title="Start with the atmosphere you want to create."
            description="A style is a useful starting point, not a rule. Every Studio explains the feeling, materials and practical trade-offs."
          />
          <Link
            href="/styles"
            className="focus-ring self-start rounded-sm text-sm font-medium text-accent hover:underline md:mb-2"
          >
            Compare all seven styles →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((style, index) => (
            <StyleCard key={style.id} style={style} priority={index === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
}
