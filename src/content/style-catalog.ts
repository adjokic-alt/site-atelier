import type { StyleId } from "@/types";

export interface StyleCatalogItem {
  id: StyleId;
  name: string;
  shortFeel: string;
  keywords: string[];
  href: `/styles/${string}`;
  gradient: string;
  status: "available" | "preview";
}

export const styleCatalog: StyleCatalogItem[] = [
  {
    id: "scandinavian",
    name: "Scandinavian",
    shortFeel: "Light, calm and practical.",
    keywords: ["Airy", "Natural", "Functional"],
    href: "/styles/scandinavian",
    gradient: "linear-gradient(145deg, #e9eeee 0%, #bdccce 48%, #71888f 100%)",
    status: "available",
  },
  {
    id: "modern",
    name: "Modern",
    shortFeel: "Crisp lines and architectural clarity.",
    keywords: ["Structured", "Clean", "Confident"],
    href: "/styles/modern",
    gradient: "linear-gradient(145deg, #929aa9 0%, #536078 50%, #263146 100%)",
    status: "preview",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    shortFeel: "Quiet, warm and intentionally simple.",
    keywords: ["Calm", "Reduced", "Tactile"],
    href: "/styles/minimalist",
    gradient: "linear-gradient(145deg, #ece8e1 0%, #c4baad 55%, #8f8578 100%)",
    status: "preview",
  },
  {
    id: "industrial",
    name: "Industrial",
    shortFeel: "Raw materials with a refined edge.",
    keywords: ["Textured", "Open", "Grounded"],
    href: "/styles/industrial",
    gradient: "linear-gradient(145deg, #c6b6aa 0%, #a05a34 52%, #4b4039 100%)",
    status: "preview",
  },
  {
    id: "luxury",
    name: "Luxury",
    shortFeel: "Rich materials, bespoke details, restraint.",
    keywords: ["Bespoke", "Layered", "Precise"],
    href: "/styles/luxury",
    gradient: "linear-gradient(145deg, #a9b1a7 0%, #536557 45%, #26322a 100%)",
    status: "preview",
  },
  {
    id: "rustic",
    name: "Rustic",
    shortFeel: "Natural texture and a warm atmosphere.",
    keywords: ["Earthy", "Crafted", "Warm"],
    href: "/styles/rustic",
    gradient: "linear-gradient(145deg, #d1b69f 0%, #936346 52%, #58402f 100%)",
    status: "preview",
  },
  {
    id: "mediterranean",
    name: "Mediterranean",
    shortFeel: "Sun-washed surfaces and indoor-outdoor ease.",
    keywords: ["Bright", "Textured", "Relaxed"],
    href: "/styles/mediterranean",
    gradient: "linear-gradient(145deg, #e8dfc9 0%, #7ca7ae 50%, #356c7a 100%)",
    status: "preview",
  },
];

export function getStyleCatalogItem(styleId: string) {
  return styleCatalog.find((style) => style.id === styleId);
}
