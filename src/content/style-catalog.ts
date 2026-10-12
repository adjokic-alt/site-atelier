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
  { id: "industrial", name: "Industrial", shortFeel: "Raw materials with a refined edge.", keywords: ["Textured", "Open", "Grounded"], href: "/styles/industrial", image: "/images/inspiration/industrial-brick-living-room.jpg", altText: "Industrial living room with a brick wall, leather sofa and black steel shelving", gradient: "linear-gradient(145deg,#c6b6aa,#4b4039)", status: "available" },
  { id: "luxury", name: "Luxury", shortFeel: "Rich materials, bespoke details, restraint.", keywords: ["Bespoke", "Layered", "Precise"], href: "/styles/luxury", image: "/images/inspiration/luxury-stone-living-room.jpg", altText: "Luxury living room with a veined stone wall, bouclé armchair and dark oak", gradient: "linear-gradient(145deg,#a9b1a7,#26322a)", status: "available" },
  { id: "rustic", name: "Rustic", shortFeel: "Natural texture and a warm atmosphere.", keywords: ["Earthy", "Crafted", "Warm"], href: "/styles/rustic", image: "/images/inspiration/rustic-plaster-living-room.jpg", altText: "Rustic living room with lime plaster walls and a reclaimed oak table", gradient: "linear-gradient(145deg,#d1b69f,#58402f)", status: "available" },
  { id: "mediterranean", name: "Mediterranean", shortFeel: "Sun-washed surfaces and indoor-outdoor ease.", keywords: ["Bright", "Textured", "Relaxed"], href: "/styles/mediterranean", image: "/images/inspiration/mediterranean-olive-balcony.jpg", altText: "Mediterranean balcony with an olive tree and a travertine table", gradient: "linear-gradient(145deg,#e8dfc9,#356c7a)", status: "available" },
];

export function getStyleCatalogItem(styleId: string) {
  return styleCatalog.find((style) => style.id === styleId);
}

/** Serbian wording for the catalog (ids, images and links stay the same). */
const styleCatalogSr: Record<StyleId, Pick<StyleCatalogItem, "name" | "shortFeel" | "keywords" | "altText">> = {
  scandinavian: { name: "Skandinavski", shortFeel: "Svetlo, mirno i praktično.", keywords: ["Prozračno", "Prirodno", "Funkcionalno"], altText: "Skandinavska dnevna soba sa prirodnom dnevnom svetlošću i svetlim drvetom" },
  modern: { name: "Moderni", shortFeel: "Čiste linije i arhitektonska jasnoća.", keywords: ["Strukturirano", "Čisto", "Samouvereno"], altText: "Moderna dnevna soba sa arhitektonskom geometrijom i tamnim akcentima" },
  minimalist: { name: "Minimalistički", shortFeel: "Tiho, toplo i namerno jednostavno.", keywords: ["Mirno", "Svedeno", "Taktilno"], altText: "Toplo minimalističko kupatilo sa mekim svetlom i skrivenim ostavama" },
  industrial: { name: "Industrijski", shortFeel: "Sirovi materijali sa profinjenom notom.", keywords: ["Teksturirano", "Otvoreno", "Prizemljeno"], altText: "Industrijska dnevna soba sa zidom od opeke, kožnom sofom i crnim čeličnim policama" },
  luxury: { name: "Luksuzni", shortFeel: "Bogati materijali, detalji po meri, uzdržanost.", keywords: ["Po meri", "Slojevito", "Precizno"], altText: "Luksuzna dnevna soba sa zidom od žilavog kamena, buklé foteljom i tamnim hrastom" },
  rustic: { name: "Rustični", shortFeel: "Prirodna tekstura i topla atmosfera.", keywords: ["Zemljano", "Zanatski", "Toplo"], altText: "Rustična dnevna soba sa zidovima od krečnog maltera i stolom od recikliranog hrasta" },
  mediterranean: { name: "Mediteranski", shortFeel: "Suncem obasjane površine i lakoća između unutra i napolju.", keywords: ["Svetlo", "Teksturirano", "Opušteno"], altText: "Mediteranska terasa sa maslinom i stolom od travertina" },
};

/** The catalog in the visitor's language. */
export function getStyleCatalog(locale: "en" | "sr"): StyleCatalogItem[] {
  return locale === "sr" ? styleCatalog.map((s) => ({ ...s, ...styleCatalogSr[s.id] })) : styleCatalog;
}
