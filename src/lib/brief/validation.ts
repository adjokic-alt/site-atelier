import { z } from "zod";
export const clientBriefSchema = z.object({
  id: z.string().min(1), schemaVersion: z.literal(1), createdAt: z.string(), updatedAt: z.string(), locale: z.enum(["en", "de", "nl"]),
  style: z.object({ primaryStyleId: z.enum(["scandinavian","modern","minimalist","industrial","luxury","rustic","mediterranean"]).nullable(), accentStyleId: z.enum(["scandinavian","modern","minimalist","industrial","luxury","rustic","mediterranean"]).nullable(), materialIdsLiked: z.array(z.string()), materialIdsAvoided: z.array(z.string()) }),
  project: z.object({ projectCategoryIds: z.array(z.string()), country: z.string(), city: z.string(), postcode: z.string() }),
  goals: z.object({ goalIds: z.array(z.string()), topGoalIds: z.array(z.string()), mustHaves: z.array(z.string()), avoid: z.string(), ownWords: z.string() }),
  budget: z.object({ currency: z.enum(["EUR","GBP","SEK","NOK","DKK","CHF"]).nullable(), rangeId: z.string().nullable(), startWindow: z.string().nullable() }),
  visuals: z.object({ moodboardItemIds: z.array(z.string()), uploadedAssetIds: z.array(z.string()), inspirationLinks: z.array(z.string()) }),
  contact: z.object({ name: z.string(), email: z.string(), phone: z.string().nullable() }),
});
