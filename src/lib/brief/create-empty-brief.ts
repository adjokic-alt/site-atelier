import type { ClientBrief } from "@/types";
export function createEmptyBrief(): ClientBrief {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(), schemaVersion: 1, createdAt: now, updatedAt: now, locale: "en",
    style: { primaryStyleId: null, accentStyleId: null, materialIdsLiked: [], materialIdsAvoided: [] },
    project: { projectCategoryIds: [], helpNeeded: [], country: "", city: "", postcode: "" },
    goals: { goalIds: [], topGoalIds: [], mustHaves: [], avoid: "", ownWords: "" },
    space: { propertyType: null, ownership: null, approxSize: null, era: null, condition: null, stage: null, constraints: [], notes: "" },
    budget: { currency: null, rangeId: null, flexibility: null, startWindow: null, finishBy: null },
    visuals: { moodboardItemIds: [], uploadedAssetIds: [], inspirationLinks: [], localFileNames: [] },
    contact: { name: "", email: "", phone: null, preferredChannel: null, privacyAccepted: false },
  };
}
