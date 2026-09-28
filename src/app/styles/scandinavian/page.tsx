import type { Metadata } from "next";
import {
  StudioCta,
  StudioFit,
  StudioHero,
  StudioInspiration,
  StudioMaterials,
  StudioPairings,
  StudioPrinciples,
} from "@/components/style-studio";
import { scandinavianStudio } from "@/content/scandinavian-studio";

export const metadata: Metadata = {
  title: "Scandinavian Interior Style | Site Atelier",
  description:
    "Explore Scandinavian interior design through daylight, pale timber, soft textiles, practical layouts, materials and room inspiration.",
  alternates: { canonical: "/styles/scandinavian" },
};

export default function ScandinavianStylePage() {
  return (
    <main>
      <StudioHero
        name={scandinavianStudio.name}
        eyebrow={scandinavianStudio.eyebrow}
        tagline={scandinavianStudio.tagline}
        description={scandinavianStudio.description}
        image={scandinavianStudio.heroImage}
        alt={scandinavianStudio.heroAlt}
      />
      <StudioPrinciples principles={scandinavianStudio.principles} />
      <StudioMaterials
        palette={scandinavianStudio.palette}
        materials={scandinavianStudio.materials}
      />
      <StudioFit
        bestFor={scandinavianStudio.bestFor}
        strengths={scandinavianStudio.strengths}
        cautions={scandinavianStudio.cautions}
      />
      <StudioInspiration itemIds={scandinavianStudio.inspirationIds} />
      <StudioPairings pairings={scandinavianStudio.pairings} />
      <StudioCta />
    </main>
  );
}
