import type { StyleDefinition, StyleId } from "@/types";

interface CreateStyleInput {
  id: StyleId;
  name: string;
  shortFeel: string;
  editorial: string;
  tradeOffs: string[];
  keywords: string[];
  accent: string;
  accentHover: string;
  accentTint: string;
  accentStrongTint: string;
  accentContrast: "#FFFFFF" | "#211D18";
  focusRing: string;
  palette: { id: string; name: string; hex: string; usage: string }[];
  materialIds: string[];
  projectIdeaIds: string[];
  order: number;
}

export function createStyleDefinition(input: CreateStyleInput): StyleDefinition {
  return {
    id: input.id,
    slug: input.id,
    name: input.name,
    shortFeel: input.shortFeel,
    editorial: input.editorial,
    tradeOffs: input.tradeOffs,
    keywords: input.keywords,
    theme: {
      accent: input.accent,
      accentHover: input.accentHover,
      accentTint: input.accentTint,
      accentStrongTint: input.accentStrongTint,
      accentContrast: input.accentContrast,
      focusRing: input.focusRing,
    },
    paletteSwatches: input.palette,
    heroImageId: `${input.id}-hero`,
    heroImageIdMobile: `${input.id}-hero-mobile`,
    galleryImageIds: [`${input.id}-living`, `${input.id}-kitchen`, `${input.id}-detail`],
    materialIds: input.materialIds,
    projectIdeaIds: input.projectIdeaIds,
    adaptiveQuestionIds: [],
    order: input.order,
  };
}
