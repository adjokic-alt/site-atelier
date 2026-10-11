import type { StyleId } from "@/types";

/** One short description per style, used when the pictures point to a single style. */
export const styleAlone: Record<StyleId, string> = {
  scandinavian: "Light, practical and quietly warm. Pale woods, soft textiles and daylight do most of the work — a home that feels calm on a grey Tuesday and easy to live in every day.",
  modern: "Clean lines, confident proportions and nothing fussy. Smooth surfaces, a restrained palette and a few strong pieces give every room a crisp, architectural calm.",
  minimalist: "Less, but better. Open space, hidden storage and a tight palette of natural materials — every object earns its place, so the rooms can breathe.",
  industrial: "Raw materials with a refined edge. Brick, steel, concrete and worn leather, softened with warm light and rugs so the character never feels cold.",
  luxury: "Rich, restrained and deeply comfortable. Stone, walnut, velvet and brass, layered with care — quality you feel before you notice it.",
  rustic: "Earthy, warm and made to be lived in. Reclaimed wood, plaster, linen and stone bring texture and a sense of history to every room.",
  mediterranean: "Sun-washed ease. Lime-washed walls, terracotta, rattan and olive greens — relaxed rooms that feel like a long lunch outdoors.",
};

/** Main style (first key) combined with a secondary style (second key). */
export const stylePairings: Record<StyleId, Partial<Record<StyleId, string>>> = {
  scandinavian: {
    modern: "Bright Scandinavian calm in a sharper, modern frame. Pale oak and soft textiles meet clean lines, slim black details and well-planned storage — easy and light, just a little more tailored.",
    minimalist: "Nordic warmth, pared right back. Light woods, linen and white walls with almost nothing on show — serene, airy rooms where daylight and good storage do the work.",
    industrial: "Light Nordic rooms with a touch of grit. Pale floors and soft fabrics, grounded by black steel, a brick or concrete wall and vintage lighting.",
    luxury: "Scandinavian simplicity, quietly upgraded. Pale timber and calm colours, lifted by marble, bouclé and brass — better materials, same easy feeling.",
    rustic: "A cosy Nordic cabin. Light woods and white walls, warmed by reclaimed timber, chunky knits, stone and candlelight.",
    mediterranean: "Northern light meets southern warmth. Pale oak and soft whites with terracotta, rattan, linen and olive green for a relaxed, sunny calm.",
  },
  modern: {
    scandinavian: "Clean, architectural lines, softened the Nordic way. Smooth surfaces and a restrained palette, warmed with pale wood, wool and plenty of daylight.",
    minimalist: "Precise and uncluttered. Flush storage, large calm surfaces and a near-monochrome palette — sharp modern design with nothing extra.",
    industrial: "Crisp modern spaces with an urban edge. Clean forms and generous glazing, set against concrete, black metal and exposed details.",
    luxury: "Sleek and polished. Strong modern shapes in natural stone, dark wood, smoked glass and soft lighting — confident, refined and hotel-calm.",
    rustic: "Modern clarity with natural character. Clean lines and simple forms, warmed by textured wood, stone and handmade pieces.",
    mediterranean: "Modern architecture with a holiday mood. Clean white volumes open to the light, with terracotta, rattan and sun-warmed textures.",
  },
  minimalist: {
    scandinavian: "Quiet and warm. Very little on show, but everything soft — pale wood, linen, wool and gentle light make the calm feel homely.",
    modern: "Pure and architectural. Hidden storage, crisp planes and a tight palette of white, stone and timber — calm through precision.",
    industrial: "Stripped back with raw honesty. Few pieces, bare concrete or plaster and fine black steel lines — spare, strong and calm.",
    luxury: "Quiet luxury. A few exceptional pieces, natural stone and fine textiles in a pared-back palette — nothing loud, everything considered.",
    rustic: "Wabi-sabi calm. Open space, imperfect plaster, raw timber and handmade ceramics — simple, natural and full of texture.",
    mediterranean: "Sunlit simplicity. Lime-washed walls, built-in benches and a few natural pieces — the serenity of a whitewashed summer house.",
  },
  industrial: {
    scandinavian: "Loft character, lightened up. Brick, steel and concrete balanced by pale wood, white walls and soft textiles, so the space stays bright.",
    modern: "An urban loft, cleanly detailed. Exposed structure and dark metal paired with a sleek kitchen, clean lines and big open spaces.",
    minimalist: "Raw and restrained. Concrete, steel and brick with very few objects — the materials themselves are the decoration.",
    luxury: "Warehouse glamour. Brick and steel set off by leather, velvet, brass and dramatic lighting — rugged, rich and sophisticated.",
    rustic: "Workshop warmth. Reclaimed timber, worn leather, brick and black iron — characterful, lived-in and full of story.",
    mediterranean: "A sunny loft. Raw brick and steel softened with terracotta, plants, rattan and warm, sun-washed colours.",
  },
  luxury: {
    scandinavian: "Elegant but easy. Marble, brass and fine textiles in a light, calm Nordic setting — refined without ever feeling formal.",
    modern: "Polished contemporary glamour. Sleek forms in stone, lacquer and dark wood, with layered lighting and tailored details.",
    minimalist: "Restrained opulence. Fewer pieces of the finest quality — book-matched stone, silk and walnut in a calm, uncluttered space.",
    industrial: "Rich with a raw edge. Velvet, marble and brass against exposed brick, steel and concrete for bold, characterful drama.",
    rustic: "Country-house refinement. Fine fabrics and polished details with warm stone, beams and aged timber — grand yet welcoming.",
    mediterranean: "Riviera elegance. Marble, brass and soft linen in sun-washed tones — relaxed luxury with a coastal glow.",
  },
  rustic: {
    scandinavian: "A farmhouse, lightened. Rough timber and stone balanced with pale walls, simple forms and Nordic softness.",
    modern: "Modern farmhouse. Clean layouts and simple lines, grounded by reclaimed wood, stone and natural textures.",
    minimalist: "Simple and earthy. Few things, all natural — raw wood, lime plaster, linen and stone in a calm, uncluttered home.",
    industrial: "Barn meets workshop. Heavy timber, iron, brick and leather — robust, warm and full of character.",
    luxury: "Lodge comfort, elevated. Beams, stone and timber dressed with rich fabrics, leather and refined lighting.",
    mediterranean: "Countryside in the south. Terracotta floors, rough plaster, olive wood and linen — warm, earthy and relaxed.",
  },
  mediterranean: {
    scandinavian: "Sunny, airy and light. Whitewashed walls and terracotta paired with pale oak and clean Nordic simplicity.",
    modern: "Coastal and contemporary. Warm, sun-washed materials in clean modern forms, with big openings to the light.",
    minimalist: "Whitewashed serenity. Arches, plaster and stone with very little else — calm, bright and timeless.",
    industrial: "Southern warmth with an urban edge. Terracotta, plaster and plants grounded by black metal frames and raw details.",
    luxury: "Villa living. Lime-washed walls, travertine, linen and brass — sun-soaked, generous and refined.",
    rustic: "An old farmhouse in the south. Terracotta, rough stone, olive wood and woven textures — warm, honest and relaxed.",
  },
};

export function describeStyle(primary: StyleId, accent: StyleId | null) {
  return (accent && stylePairings[primary][accent]) || styleAlone[primary];
}
