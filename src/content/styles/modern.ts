import { createStyleDefinition } from "./shared";
export const modernStyle = createStyleDefinition({
  id:"modern", name:"Modern", shortFeel:"Crisp lines and architectural clarity.", order:2,
  editorial:"Modern interiors make structure, proportion and integrated function visible. Strong geometry is balanced by controlled materials and carefully planned lighting. The goal is not a cold showroom, but a coherent space where storage, technology and circulation feel intentional. The final direction must still respond to the building, daily routines and realistic budget.",
  tradeOffs:["Precise detailing needs early technical coordination.","Large uninterrupted surfaces show poor workmanship quickly.","Integrated technology needs a maintenance and upgrade plan."],
  keywords:["architectural","clean","integrated"], accent:"#33415C", accentHover:"#273248", accentTint:"#E9EBEF", accentStrongTint:"#D4D8E0", accentContrast:"#FFFFFF", focusRing:"#33415C",
  palette:[{id:"graphite",name:"Graphite",hex:"#33415C",usage:"Architectural accents"},{id:"mineral-grey",name:"Mineral grey",hex:"#AAAEB3",usage:"Large surfaces"},{id:"soft-white-modern",name:"Soft white",hex:"#F3F2EF",usage:"Walls"}],
  materialIds:["smoked-glass","brushed-steel","large-format-stone"], projectIdeaIds:["modern-open-plan"]
});
