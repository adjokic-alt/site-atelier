import Link from "next/link";
import { SelectStyleButton, ToggleMaterialButton } from "@/components/brief";
import { Card, Chip, Container, SectionHeading } from "@/components/ui";
import type { Material, ProjectIdea, StyleDefinition } from "@/types";
import { StyleThemeScope } from "./StyleThemeScope";

interface StyleStudioProps { style: StyleDefinition; materials: Material[]; ideas: ProjectIdea[]; }

export function StyleStudio({ style, materials, ideas }: StyleStudioProps) {
  const styleMaterials = materials.filter((material) => style.materialIds.includes(material.id));
  const styleIdeas = ideas.filter((idea) => style.projectIdeaIds.includes(idea.id));
  const heroGradient = `linear-gradient(135deg, ${style.theme.accentTint} 0%, ${style.theme.accentStrongTint} 50%, ${style.theme.accent} 100%)`;

  return (
    <StyleThemeScope theme={style.theme}>
      <main>
        <section className="relative overflow-hidden" style={{ background: heroGradient }}>
          <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_75%_25%,white_0,transparent_28%),linear-gradient(135deg,transparent_47%,white_48%,transparent_50%)]" />
          <Container className="relative grid min-h-[72vh] items-end py-16 md:py-24">
            <div className="max-w-2xl rounded-xl bg-paper/92 p-6 shadow-md backdrop-blur-sm md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">Style Studio · Illustrative direction</p>
              <h1 className="mt-4 font-display text-4xl leading-tight text-ink-900 md:text-display">{style.name}</h1>
              <p className="mt-4 text-lead text-ink-700">{style.shortFeel}</p>
              <div className="mt-6 flex flex-wrap gap-2">{style.keywords.map((keyword) => <Chip key={keyword}>{keyword}</Chip>)}</div>
              <div className="mt-8 flex flex-wrap gap-4">
                <SelectStyleButton styleId={style.id}>Start my brief in {style.name}</SelectStyleButton>
                <Link href="/styles" className="focus-ring inline-flex min-h-[52px] items-center rounded-sm border-[1.5px] border-ink-900 px-6 text-base font-medium text-ink-900 hover:bg-surface-sunken">Compare with another style</Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 md:py-24"><Container><div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16"><div><SectionHeading eyebrow="The feel" title={`${style.name} in a real home.`}/><p className="mt-6 max-w-2xl text-base leading-8 text-ink-700">{style.editorial}</p></div><Card variant="sunken"><h2 className="font-display text-h3 text-ink-900">What this style asks of a project</h2><ul className="mt-5 space-y-4 text-sm leading-relaxed text-ink-700">{style.tradeOffs.map((item)=><li key={item} className="border-t border-border pt-4 first:border-0 first:pt-0">{item}</li>)}</ul></Card></div></Container></section>

        <section className="bg-surface-sunken py-16 md:py-24"><Container><SectionHeading eyebrow="Palette" title="A controlled colour foundation."/><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{style.paletteSwatches.map((swatch)=><article key={swatch.id} className="rounded-lg bg-surface p-4"><div className="aspect-[3/2] rounded-md border border-border" style={{background:swatch.hex}}/><h3 className="mt-4 font-medium text-ink-900">{swatch.name}</h3><p className="mt-1 text-sm text-ink-500">{swatch.usage} · {swatch.hex}</p></article>)}</div></Container></section>

        <section className="py-16 md:py-24"><Container><SectionHeading eyebrow="Signature materials" title="Materials that carry the atmosphere." description="Editable preferences, not a final specification or price promise."/><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{styleMaterials.map((material)=><Card key={material.id} variant="interactive"><div className="aspect-[3/2] rounded-md" style={{background:`linear-gradient(145deg,${style.theme.accentTint},${style.theme.accentStrongTint})`}} role="img" aria-label={`Illustrative placeholder for ${material.name}`}/><h3 className="mt-5 font-display text-h3 text-ink-900">{material.name}</h3><p className="mt-2 text-sm text-ink-700">{material.typicalUse}</p><p className="mt-3 text-sm text-ink-500">Upkeep: {material.upkeepNote}</p><ToggleMaterialButton materialId={material.id}/></Card>)}</div></Container></section>

        <section className="border-y border-border bg-accent-tint py-16 md:py-24"><Container><SectionHeading eyebrow="Project ideas" title="Turn the style into a useful starting point."/><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{styleIdeas.map((idea)=><Card key={idea.id}><div className="aspect-[3/2] rounded-md" style={{background:heroGradient}} role="img" aria-label={`Illustrative concept placeholder for ${idea.title}`}/><h3 className="mt-5 font-display text-h3 text-ink-900">{idea.title}</h3><p className="mt-3 text-sm leading-relaxed text-ink-700">{idea.summary}</p><SelectStyleButton styleId={style.id}>Start with this idea</SelectStyleButton></Card>)}</div></Container></section>

        <section className="py-16 md:py-24"><Container className="text-center"><p className="text-xs font-semibold uppercase tracking-[.08em] text-accent">Your next step</p><h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-ink-900 md:text-h1">Use {style.name.toLowerCase()} as the starting direction for your brief.</h2><p className="mx-auto mt-5 max-w-2xl text-ink-700">You can change or blend the style later. Nothing on this page creates a contract or automatic professional recommendation.</p><div className="mt-8 flex flex-wrap justify-center gap-4"><SelectStyleButton styleId={style.id}>Start my brief</SelectStyleButton><Link href="/styles" className="focus-ring inline-flex min-h-[52px] items-center rounded-sm border-[1.5px] border-ink-900 px-6 text-base font-medium text-ink-900 hover:bg-surface-sunken">Compare another style</Link></div></Container></section>
      </main>
    </StyleThemeScope>
  );
}
