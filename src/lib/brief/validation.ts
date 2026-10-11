import { z } from "zod";
const style=z.enum(["scandinavian","modern","minimalist","industrial","luxury","rustic","mediterranean"]);
export const clientBriefSchema=z.object({
 id:z.string().min(1),schemaVersion:z.literal(1),createdAt:z.string(),updatedAt:z.string(),locale:z.enum(["en","de","nl"]),
 style:z.object({primaryStyleId:style.nullable(),accentStyleId:style.nullable(),materialIdsLiked:z.array(z.string()),materialIdsAvoided:z.array(z.string())}),
 project:z.object({projectCategoryIds:z.array(z.enum(["interior-design","kitchen","bathroom","living-bedrooms","whole-home-renovation","extension-new-build","outdoor-garden","facade-exterior","property-search-prep","other"])),helpNeeded:z.array(z.string()).default([]),country:z.string(),city:z.string(),postcode:z.string()}),
 goals:z.object({goalIds:z.array(z.string()),topGoalIds:z.array(z.string()),mustHaves:z.array(z.string()),avoid:z.string(),ownWords:z.string()}),
 space:z.object({propertyType:z.string().nullable(),ownership:z.string().nullable(),approxSize:z.object({value:z.number(),unit:z.enum(["m2","ft2"])}).nullable(),era:z.string().nullable(),condition:z.string().nullable(),stage:z.string().nullable(),constraints:z.array(z.string()),notes:z.string()}).default({propertyType:null,ownership:null,approxSize:null,era:null,condition:null,stage:null,constraints:[],notes:""}),
 budget:z.object({currency:z.enum(["EUR","GBP","SEK","NOK","DKK","CHF"]).nullable(),rangeId:z.string().nullable(),flexibility:z.enum(["firm","some-flexibility","depends"]).nullable().default(null),startWindow:z.string().nullable(),finishBy:z.object({date:z.string(),reason:z.string()}).nullable().default(null)}),
 visuals:z.object({moodboardItemIds:z.array(z.string()),uploadedAssetIds:z.array(z.string()),inspirationLinks:z.array(z.string()),localFileNames:z.array(z.string()).default([])}),
 contact:z.object({name:z.string(),email:z.string(),phone:z.string().nullable(),preferredChannel:z.enum(["email","phone","video-call"]).nullable().default(null),privacyAccepted:z.boolean().default(false)})
});

