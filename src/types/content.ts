import type { ProjectCategoryId, StyleId } from "./common";
export interface ProjectCategory { id:ProjectCategoryId; name:string; imageId:string; }
export interface ProjectGoal { id:string; label:string; applicableCategoryIds:ProjectCategoryId[]; }
export interface AdaptiveQuestion { id:string; styleId:StyleId|"general"; prompt:string; inputType:"text"|"select"|"multi-select"; options?:string[]; }
