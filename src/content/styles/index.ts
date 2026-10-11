import type { StyleDefinition, StyleId } from "@/types";
import { scandinavianStyle } from "./scandinavian";
import { modernStyle } from "./modern";
import { minimalistStyle } from "./minimalist";
import { industrialStyle } from "./industrial";
import { luxuryStyle } from "./luxury";
import { rusticStyle } from "./rustic";
import { mediterraneanStyle } from "./mediterranean";

export const styleDefinitions: StyleDefinition[] = [scandinavianStyle, modernStyle, minimalistStyle, industrialStyle, luxuryStyle, rusticStyle, mediterraneanStyle];
export const styleDefinitionMap = Object.fromEntries(styleDefinitions.map((style) => [style.id, style])) as Record<StyleId, StyleDefinition>;
export function getStyleDefinition(id: string) { return styleDefinitions.find((style) => style.id === id); }
