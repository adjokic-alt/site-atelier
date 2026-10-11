import type { ProjectCategory } from "@/types";
const ids=["interior-design","kitchen","bathroom","living-bedrooms","whole-home-renovation","extension-new-build","outdoor-garden","facade-exterior","property-search-prep","other","living-room","bedroom","kids-room"] as const;
export const projectCategories:ProjectCategory[]=ids.map(id=>({id,name:id.split("-").map(x=>x[0].toUpperCase()+x.slice(1)).join(" "),imageId:"category-placeholder"}));
