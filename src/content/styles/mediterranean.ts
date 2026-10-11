import { createStyleDefinition } from "./shared";
export const mediterraneanStyle = createStyleDefinition({
  id:"mediterranean", name:"Mediterranean", shortFeel:"Sun-washed surfaces and indoor-outdoor ease.", order:7,
  editorial:"Mediterranean style combines mineral surfaces, handmade texture and a strong relationship with daylight and outdoor space. In cooler climates, the visual language must be adapted to insulation, moisture and seasonal use rather than copied literally. The best result feels relaxed but technically sound.",
  tradeOffs:["Climate and moisture strategy come before appearance.","Handmade tile variation should be approved with samples.","Bright palettes still need controlled contrast."],
  keywords:["sun-washed","textured","relaxed"], accent:"#3E7A8C", accentHover:"#2E6170", accentTint:"#E6F0F2", accentStrongTint:"#CFE1E5", accentContrast:"#211D18", focusRing:"#2C5C69",
  palette:[{id:"azure",name:"Sun-washed azure",hex:"#3E7A8C",usage:"Accents"},{id:"chalk",name:"Chalk",hex:"#F1E9D8",usage:"Walls"},{id:"clay",name:"Clay",hex:"#B87555",usage:"Tile and pottery"}],
  materialIds:["terracotta-tile","tadelakt","washed-linen"], projectIdeaIds:["mediterranean-courtyard"]
});
