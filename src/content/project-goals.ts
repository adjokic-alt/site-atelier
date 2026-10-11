import type { ProjectGoal } from "@/types"; import { projectCategories } from "./project-categories";
const all=projectCategories.map(x=>x.id);
export const projectGoals:ProjectGoal[]=["update-look","better-layout","better-light","energy-comfort","fix-problem","accessibility","prepare-sale-rent","add-value"].map(id=>({id,label:id.split("-").map(x=>x[0].toUpperCase()+x.slice(1)).join(" "),applicableCategoryIds:all}));
