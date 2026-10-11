import { createStyleDefinition } from "./shared";
export const minimalistStyle = createStyleDefinition({
  id:"minimalist", name:"Minimalist", shortFeel:"Quiet, warm and intentionally simple.", order:3,
  editorial:"Warm minimalism removes visual noise without removing comfort. A small material palette, concealed storage and consistent junctions create calm, while timber and tactile fabrics prevent the space from feeling clinical. Success depends less on owning fewer objects and more on giving everyday objects a clear place.",
  tradeOffs:["Hidden storage must be planned around real possessions.","Simple-looking details can be labour intensive.","Light neutral finishes need durable specifications."],
  keywords:["quiet","reduced","tactile"], accent:"#A79C8C", accentHover:"#8E8272", accentTint:"#F1EEEA", accentStrongTint:"#E4DED7", accentContrast:"#211D18", focusRing:"#6D6255",
  palette:[{id:"warm-white",name:"Warm white",hex:"#F4F1EA",usage:"Walls"},{id:"greige",name:"Greige",hex:"#A79C8C",usage:"Joinery"},{id:"sand",name:"Sand",hex:"#D9CDBD",usage:"Textiles"}],
  materialIds:["microcement","pale-ash","wool-felt"], projectIdeaIds:["minimalist-hidden-storage"]
});
