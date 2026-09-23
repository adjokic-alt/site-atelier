import type { StyleId } from "./common";
export interface StyleTheme { accent:string; accentHover:string; accentTint:string; accentStrongTint:string; accentContrast:"#FFFFFF"|"#211D18"; focusRing:string; }
export interface PaletteSwatch { id:string; name:string; hex:string; usage:string; }
export interface StyleDefinition { id:StyleId; slug:string; name:string; shortFeel:string; editorial:string; tradeOffs:string[]; keywords:string[]; theme:StyleTheme; paletteSwatches:PaletteSwatch[]; heroImageId:string; heroImageIdMobile:string; galleryImageIds:string[]; materialIds:string[]; projectIdeaIds:string[]; adaptiveQuestionIds:string[]; order:number; }
export interface Material { id:string; name:string; imageId:string; typicalUse:string; upkeepNote:string; styleIds:StyleId[]; }
export interface ProjectIdea { id:string; title:string; summary:string; imageId:string; styleIds:StyleId[]; materialIds:string[]; }
