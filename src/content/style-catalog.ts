import type { StyleId } from "@/types";

export interface StyleCatalogItem {
  id: StyleId;
  name: string;
  shortFeel: string;
  keywords: string[];
  href: `/styles/${string}`;
  image: string;
  altText: string;
  imagePosition?: string;
  gradient: string;
  status: "available" | "preview";
}

export const styleCatalog: StyleCatalogItem[] = [
  { id: "scandinavian", name: "Scandinavian", shortFeel: "Light, calm and practical.", keywords: ["Airy", "Natural", "Functional"], href: "/styles/scandinavian", image: "/images/inspiration/daylight-living-room.png", altText: "Scandinavian living room with natural daylight and pale timber", gradient: "linear-gradient(145deg,#e9eeee,#71888f)", status: "available" },
  { id: "modern", name: "Modern", shortFeel: "Crisp lines and architectural clarity.", keywords: ["Structured", "Clean", "Confident"], href: "/styles/modern", image: "/images/inspiration/architectural-living-space.png", altText: "Modern living room with architectural geometry and dark accents", gradient: "linear-gradient(145deg,#929aa9,#263146)", status: "available" },
  { id: "minimalist", name: "Minimalist", shortFeel: "Quiet, warm and intentionally simple.", keywords: ["Calm", "Reduced", "Tactile"], href: "/styles/minimalist", image: "/images/inspiration/warm-minimal-bathroom.png", altText: "Warm minimalist bathroom with soft light and concealed storage", gradient: "linear-gradient(145deg,#ece8e1,#8f8578)", status: "available" },
  { id: "industrial", name: "Industrial", shortFeel: "Raw materials with a refined edge.", keywords: ["Textured", "Open", "Grounded"], href: "/styles/industrial", image: "/images/inspiration/refined-industrial-kitchen.png", altText: "Refined industrial kitchen with dark joinery and warm lighting", gradient: "linear-gradient(145deg,#c6b6aa,#4b4039)", status: "available" },
  { id: "luxury", name: "Luxury", shortFeel: "Rich materials, bespoke details, restraint.", keywords: ["Bespoke", "Layered", "Precise"], href: "/styles/luxury", image: "/images/inspiration/layered-bedroom-details.png", altText: "Luxury bedroom with bespoke details and tactile layers", gradient: "linear-gradient(145deg,#a9b1a7,#26322a)", status: "available" },
  { id: "rustic", name: "Rustic", shortFeel: "Natural texture and a warm atmosphere.", keywords: ["Earthy", "Crafted", "Warm"], href: "/styles/rustic", image: "/images/inspiration/natural-rustic-living-room.png", altText: "Natural rustic living room with timber and mineral texture", gradient: "linear-gradient(145deg,#d1b69f,#58402f)", status: "available" },
  { id: "mediterranean", name: "Mediterranean", shortFeel: "Sun-washed surfaces and indoor-outdoor ease.", keywords: ["Bright", "Textured", "Relaxed"], href: "/styles/mediterranean", image: "/images/inspiration/shaded-outdoor-connection.png", altText: "Mediterranean indoor-outdoor living space with pale stone and shade", gradient: "linear-gradient(145deg,#e8dfc9,#356c7a)", status: "available" },
];

export function getStyleCatalogItem(styleId: string) {
  return styleCatalog.find((style) => style.id === styleId);
}
