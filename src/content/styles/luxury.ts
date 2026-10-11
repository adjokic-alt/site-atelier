import { createStyleDefinition } from "./shared";
export const luxuryStyle = createStyleDefinition({
  id:"luxury", name:"Luxury", shortFeel:"Rich materials, bespoke details and restraint.", order:5,
  editorial:"Quiet luxury is built through proportion, material quality and tailored details rather than obvious decoration. Bespoke joinery, layered lighting and tactile finishes make the project feel resolved. A disciplined palette keeps premium materials from competing with one another.",
  tradeOffs:["Bespoke work needs longer design and production time.","Natural premium materials vary and require samples.","Maintenance expectations should be agreed before selection."],
  keywords:["bespoke","layered","refined"], accent:"#3E4F41", accentHover:"#2F3D32", accentTint:"#E8ECE8", accentStrongTint:"#D2DAD3", accentContrast:"#FFFFFF", focusRing:"#3E4F41",
  palette:[{id:"deep-emerald",name:"Deep emerald",hex:"#3E4F41",usage:"Accents"},{id:"ivory",name:"Ivory",hex:"#EEE9DE",usage:"Walls and textiles"},{id:"bronze",name:"Bronze",hex:"#8B7356",usage:"Details"}],
  materialIds:["veined-stone","dark-veneer","aged-bronze"], projectIdeaIds:["luxury-bedroom-suite"]
});
