import type { StyleId } from "@/types";

export type InspirationSpace =
  | "living"
  | "kitchen"
  | "bath"
  | "bedroom"
  | "outdoor"
  | "exterior";

export interface InspirationItem {
  id: string;
  title: string;
  description: string;
  styleId: StyleId;
  space: InspirationSpace;
  materialIds: string[];
  image: string;
  gradient: string;
  altText: string;
  label: "illustrative";
}

export const inspirationItems: InspirationItem[] = [
  {
    id: "scandi-living-daylight",
    title: "Daylight-led living room",
    description: "Pale timber, soft textiles and clear circulation.",
    styleId: "scandinavian",
    space: "living",
    materialIds: ["light-oak", "natural-linen"],
    image: "/images/inspiration/daylight-living-room.png",
    gradient:
      "linear-gradient(145deg,#f1eee7 0%,#cfd8d7 50%,#7d9699 100%)",
    altText:
      "Illustrative Scandinavian living room with abundant daylight, pale timber, soft textiles and clear circulation",
    label: "illustrative",
  },
  {
    id: "scandi-kitchen-storage",
    title: "Calm kitchen with concealed storage",
    description:
      "Functional joinery with a light, restrained material palette.",
    styleId: "scandinavian",
    space: "kitchen",
    materialIds: ["light-oak"],
    image: "/images/inspiration/calm-concealed-kitchen.png",
    gradient:
      "linear-gradient(135deg,#e9ece8 0%,#b8c3bc 48%,#788f86 100%)",
    altText:
      "Illustrative Scandinavian kitchen with concealed storage, pale joinery and a restrained natural palette",
    label: "illustrative",
  },
  {
    id: "scandi-bedroom-linen",
    title: "Soft bedroom layers",
    description: "Natural linen, muted colour and minimal visual noise.",
    styleId: "scandinavian",
    space: "bedroom",
    materialIds: ["natural-linen"],
    image: "/images/inspiration/soft-bedroom-layers.png",
    gradient:
      "linear-gradient(145deg,#eee8df 0%,#d6c8b8 55%,#9ca6a2 100%)",
    altText:
      "Illustrative Scandinavian bedroom with natural linen, muted colours and softly layered textiles",
    label: "illustrative",
  },
  {
    id: "modern-living-geometry",
    title: "Architectural living space",
    description:
      "Defined geometry, integrated lighting and deliberate dark accents.",
    styleId: "modern",
    space: "living",
    materialIds: [],
    image: "/images/inspiration/architectural-living-space.png",
    gradient:
      "linear-gradient(145deg,#b9bec8 0%,#59657a 52%,#293247 100%)",
    altText:
      "Illustrative modern living space with strong architectural geometry, layered neutrals and dark accents",
    label: "illustrative",
  },
  {
    id: "minimalist-bath-calm",
    title: "Warm minimal bathroom",
    description:
      "Quiet surfaces, soft light and carefully concealed storage.",
    styleId: "minimalist",
    space: "bath",
    materialIds: [],
    image: "/images/inspiration/warm-minimal-bathroom.png",
    gradient:
      "linear-gradient(145deg,#eeeae3 0%,#c9c0b5 55%,#938a7f 100%)",
    altText:
      "Illustrative warm minimalist bathroom with quiet natural surfaces, soft light and concealed storage",
    label: "illustrative",
  },
  {
    id: "industrial-kitchen-raw",
    title: "Refined industrial kitchen",
    description:
      "Raw texture balanced by precise joinery and warm lighting.",
    styleId: "industrial",
    space: "kitchen",
    materialIds: [],
    image: "/images/inspiration/refined-industrial-kitchen.png",
    gradient:
      "linear-gradient(145deg,#c8b8aa 0%,#985e3c 50%,#45413e 100%)",
    altText:
      "Illustrative refined industrial kitchen with raw textures, dark joinery and warm integrated lighting",
    label: "illustrative",
  },
  {
    id: "luxury-bedroom-layered",
    title: "Layered bedroom details",
    description:
      "Bespoke elements, tactile surfaces and restrained contrast.",
    styleId: "luxury",
    space: "bedroom",
    materialIds: [],
    image: "/images/inspiration/layered-bedroom-details.png",
    gradient:
      "linear-gradient(145deg,#b9beb5 0%,#647164 48%,#2e382f 100%)",
    altText:
      "Illustrative luxury bedroom with bespoke details, tactile layered surfaces and restrained contrast",
    label: "illustrative",
  },
  {
    id: "rustic-living-natural",
    title: "Natural rustic living room",
    description:
      "Timber, mineral texture and a warm lived-in atmosphere.",
    styleId: "rustic",
    space: "living",
    materialIds: [],
    image: "/images/inspiration/natural-rustic-living-room.png",
    gradient:
      "linear-gradient(145deg,#d5bfa8 0%,#9a6848 52%,#584332 100%)",
    altText:
      "Illustrative natural rustic living room with exposed timber, mineral textures and a warm atmosphere",
    label: "illustrative",
  },
  {
    id: "mediterranean-outdoor",
    title: "Shaded outdoor connection",
    description:
      "Stone, filtered light and an easy transition outdoors.",
    styleId: "mediterranean",
    space: "outdoor",
    materialIds: [],
    image: "/images/inspiration/shaded-outdoor-connection.png",
    gradient:
      "linear-gradient(145deg,#ede3cc 0%,#82aeb3 52%,#397381 100%)",
    altText:
      "Illustrative Mediterranean indoor-outdoor space with pale stone, filtered light and a shaded terrace",
    label: "illustrative",
  },
];
