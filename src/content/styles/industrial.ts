import { createStyleDefinition } from "./shared";
export const industrialStyle = createStyleDefinition({
  id:"industrial", name:"Industrial", shortFeel:"Raw materials with a refined edge.", order:4,
  editorial:"Industrial style works best when genuine structure or material character already exists. Exposed brick, concrete and metal can create depth, but comfort comes from acoustics, warm light and softer layers. The strongest projects preserve useful character while avoiding a themed warehouse look.",
  tradeOffs:["Hard surfaces need acoustic control.","Exposed services still require safe technical planning.","Raw finishes can be difficult to clean or repair."],
  keywords:["raw","textured","grounded"], accent:"#A05A34", accentHover:"#824628", accentTint:"#F3E9E3", accentStrongTint:"#E8D3C7", accentContrast:"#211D18", focusRing:"#764124",
  palette:[{id:"oxidised-rust",name:"Oxidised rust",hex:"#A05A34",usage:"Accents"},{id:"concrete",name:"Concrete",hex:"#9A9790",usage:"Surfaces"},{id:"charcoal",name:"Charcoal",hex:"#3F403F",usage:"Metalwork"}],
  materialIds:["blackened-steel","sealed-concrete","reclaimed-brick"], projectIdeaIds:["industrial-kitchen"]
});
