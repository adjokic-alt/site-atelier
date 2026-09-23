import { createStyleDefinition } from "./shared";
export const rusticStyle = createStyleDefinition({
  id:"rustic", name:"Rustic", shortFeel:"Natural texture and a warm atmosphere.", order:6,
  editorial:"Rustic interiors celebrate material variation, craft and signs of age. Timber, stone and textured plaster feel strongest when they respond to the building rather than being applied as decoration. Contemporary planning can keep the result comfortable and practical while preserving warmth.",
  tradeOffs:["Reclaimed materials need grading and careful sourcing.","Natural texture can increase cleaning effort.","Too many aged finishes can make the room feel visually heavy."],
  keywords:["earthy","crafted","warm"], accent:"#8A5A3C", accentHover:"#6F452D", accentTint:"#F1E8E2", accentStrongTint:"#E2D0C4", accentContrast:"#211D18", focusRing:"#6B422B",
  palette:[{id:"terracotta",name:"Terracotta",hex:"#8A5A3C",usage:"Accents"},{id:"limewash",name:"Limewash",hex:"#DDD2C2",usage:"Walls"},{id:"forest",name:"Forest",hex:"#58634A",usage:"Small details"}],
  materialIds:["reclaimed-oak","natural-stone","lime-plaster"], projectIdeaIds:["rustic-living-fireplace"]
});
