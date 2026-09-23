import type { ClientBrief } from "@/types";

export function createEmptyBrief(): ClientBrief {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(), schemaVersion: 1, createdAt: now, updatedAt: now, locale: "en",
    style: { primaryStyleId: null, accentStyleId: null, materialIdsLiked: [], materialIdsAvoided: [] },
    project: { projectCategoryIds: [], country: "", city: "", postcode: "" },
    goals: { goalIds: [], topGoalIds: [], mustHaves: [], avoid: "", ownWords: "" },
    budget: { currency: null, rangeId: null, startWindow: null },
    visuals: { moodboardItemIds: [], uploadedAssetIds: [], inspirationLinks: [] },
    contact: { name: "", email: "", phone: null },
  };
}
