import type { StyleId } from "./common";
export interface ImageAsset { id:string; src:string; altText:string; credit:string; license:"placeholder"|"licensed-stock"|"own-photography"|"ai-illustrative"; label:"inspiration"|"illustrative"|"project"; aspectRatio:"16:9"|"4:5"|"3:2"|"1:1"; styleIds:StyleId[]; }
