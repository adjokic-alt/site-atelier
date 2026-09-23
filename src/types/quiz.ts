import type { StyleId } from "./common";
export interface StyleQuizOption { id:string; imageId:string; ariaLabel:string; styleWeights:Partial<Record<StyleId,number>>; }
export interface StyleQuizQuestion { id:string; order:number; prompt:string; axis:string; optionA:StyleQuizOption; optionB:StyleQuizOption; }
export interface StyleQuizScoringRule { id:string; description:string; tieBreakerOrder:StyleId[]; }
