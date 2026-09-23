import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  SelectStyleButton,
  ToggleMaterialButton,
} from "@/components/brief";
import { Card, Chip, Container, SectionHeading } from "@/components/ui";
import { StyleThemeScope } from "@/components/styles";
import { getStyleCatalogItem, styleCatalog } from "@/content/style-catalog";
import { scandinavianStyle } from "@/content/styles/scandinavian";
import { materials } from "@/content/materials";
import { projectIdeas } from "@/content/project-ideas";

interface StylePageProps {
  params: Promise<{ style: string }>;
}

export function generateStaticParams() {
  return styleCatalog.map((style) => ({ style: style.id }));
}

export async function generateMetadata({
  params,
}: StylePageProps): Promise<Metadata> {
  const { style } = await params;
  const catalogItem = getStyleCatalogItem(style);

  if (!catalogItem) {
    return {};
  }

  return {
    title: `${catalogItem.name} Style | Site Atelier`,
    description: catalogItem.shortFeel,
  };
}

export default async function StylePage({ params }: StylePageProps) {
  const { style } = await params;
  const catalogItem = getStyleCatalogItem(style);

  if (!catalogItem) {
    notFound();
  }

  if (style !== "scandinavian") {
    return (
      <main className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Style preview"
            title={`${catalogItem.name} content is scheduled for M5.`}
            description={`${catalogItem.shortFeel} M3 implements the complete Studio pattern with Scandinavian first, before the remaining style content is added.`}
          />
          <Card variant="sunken" className="mt-10 max-w-2xl">
            <p className="text-ink-700">
              This is an honest preview state. It does not present placeholder
              imagery as completed work.
            </p>
            <Link
              href="/styles"
              className="focus-ring mt-6 inline-flex min-h-12 items-center rounded-sm border-[1.5px] border-ink-900 px-5 text-sm font-medium text-ink-900 hover:bg-surface"
            >
              Compare other styles
            </Link>
          </Card>
        </Container>
      </main>
    );
  }

  const styleMaterials = materials.filter((material) =>
    scandinavianStyle.materialIds.includes(material.id),
  );
  const ideas = projectIdeas.filter((idea) =>
    scandinavianStyle.projectIdeaIds.includes(idea.id),
  );

  return (
    <StyleThemeScope theme={scandinavianStyle.theme}>
      <main>
        <section className="relative overflow-hidden bg-accent-tint">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_75%_25%,white_0,transparent_28%),linear-gradient(135deg,transparent_47%,rgba(124,147,160,.3)_48%,transparent_50%)]"
          />
          <Container className="relative grid min-h-[72vh] items-end py-16 md:py-24">
            <div className="max-w-2xl rounded-xl bg-paper/92 p-6 shadow-md backdrop-blur-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                Style Studio · Illustrative direction
              </p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-ink-900 md:text-display">
                {scandinavianStyle.name}
              </h1>
              <p className="mt-4 text-lead text-ink-700">
                {scandinavianStyle.shortFeel}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {scandinavianStyle.keywords.map((keyword) => (
                  <Chip key={keyword}>{keyword}</Chip>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <SelectStyleButton styleId="scandinavian">
                  Start my brief in Scandinavian
                </SelectStyleButton>
                <Link
                  href="/styles"
                  className="focus-ring inline-flex min-h-[52px] items-center rounded-sm border-[1.5px] border-ink-900 px-6 text-base font-medium text-ink-900 hover:bg-surface-sunken"
                >
                  Blend with another style
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
              <div>
                <SectionHeading
                  eyebrow="The feel"
                  title="Calm does not mean empty."
                />
                <p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">
                  {scandinavianStyle.editorial}
                </p>
              </div>
              <Card variant="sunken">
                <h2 className="font-display text-h3 text-ink-900">
                  What this style asks of a project
                </h2>
                <ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-700">
                  {scandinavianStyle.tradeOffs.map((tradeOff) => (
                    <li
                      key={tradeOff}
                      className="border-t border-border pt-4 first:border-0 first:pt-0"
                    >
                      {tradeOff}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        <section className="bg-surface-sunken py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Palette"
              title="A quiet foundation with natural warmth."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {scandinavianStyle.paletteSwatches.map((swatch) => (
                <article key={swatch.id} className="rounded-lg bg-surface p-4">
                  <div
                    className="aspect-[3/2] rounded-md border border-border"
                    style={{ background: swatch.hex }}
                  />
                  <h3 className="mt-4 font-medium text-ink-900">
                    {swatch.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">
                    {swatch.usage} · {swatch.hex}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Signature materials"
              title="Materials that carry the atmosphere."
              description="These are editable preferences, not a specification or price promise."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {styleMaterials.map((material) => (
                <Card key={material.id} variant="interactive">
                  <div
                    className="aspect-[3/2] rounded-md bg-accent-tint"
                    aria-label={`Illustrative placeholder for ${material.name}`}
                    role="img"
                  />
                  <h3 className="mt-5 font-display text-h3 text-ink-900">
                    {material.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-700">
                    {material.typicalUse}
                  </p>
                  <p className="mt-3 text-sm text-ink-500">
                    Upkeep: {material.upkeepNote}
                  </p>
                  <ToggleMaterialButton materialId={material.id} />
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-border bg-accent-tint py-16 md:py-24">
          <Container>
            <SectionHeading
              eyebrow="Project ideas"
              title="Turn the style into a useful starting point."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {ideas.map((idea) => (
                <Card key={idea.id} variant="surface">
                  <div
                    className="aspect-[3/2] rounded-md bg-[linear-gradient(145deg,#eef2f4,#aebfc3)]"
                    role="img"
                    aria-label={`Illustrative concept placeholder: ${idea.title}`}
                  />
                  <h3 className="mt-5 font-display text-h3 text-ink-900">
                    {idea.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700">
                    {idea.summary}
                  </p>
                  <SelectStyleButton styleId="scandinavian">
                    Start with this idea
                  </SelectStyleButton>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24">
          <Container className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
              Your next step
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-ink-900 md:text-h1">
              Use this direction to start a structured project brief.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-ink-700">
              You can change the style later. Nothing here creates a contract
              or automatic recommendation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <SelectStyleButton styleId="scandinavian">
                Start my brief
              </SelectStyleButton>
              <Link
                href="/styles"
                className="focus-ring inline-flex min-h-[52px] items-center rounded-sm border-[1.5px] border-ink-900 px-6 text-base font-medium text-ink-900 hover:bg-surface-sunken"
              >
                Compare another style
              </Link>
            </div>
          </Container>
        </section>
      </main>
    </StyleThemeScope>
  );
}
