import type { CountryCode, CurrencyCode, LanguageCode, ProjectCategoryId, StyleId } from "./common";

export interface ClientBrief {
  id: string;
  schemaVersion: 1;
  createdAt: string;
  updatedAt: string;
  locale: LanguageCode;
  style: {
    primaryStyleId: StyleId | null;
    accentStyleId: StyleId | null;
    materialIdsLiked: string[];
    materialIdsAvoided: string[];
  };
  project: {
    projectCategoryIds: ProjectCategoryId[];
    helpNeeded: string[];
    country: CountryCode;
    city: string;
    postcode: string;
  };
  goals: {
    goalIds: string[];
    topGoalIds: string[];
    mustHaves: string[];
    avoid: string;
    ownWords: string;
  };
  space: {
    propertyType: string | null;
    ownership: string | null;
    approxSize: { value: number; unit: "m2" | "ft2" } | null;
    era: string | null;
    condition: string | null;
    stage: string | null;
    constraints: string[];
    notes: string;
  };
  budget: {
    currency: CurrencyCode | null;
    rangeId: string | null;
    flexibility: "firm" | "some-flexibility" | "depends" | null;
    startWindow: string | null;
    finishBy: { date: string; reason: string } | null;
  };
  visuals: {
    moodboardItemIds: string[];
    uploadedAssetIds: string[];
    inspirationLinks: string[];
    localFileNames: string[];
  };
  contact: {
    name: string;
    email: string;
    phone: string | null;
    preferredChannel: "email" | "phone" | "video-call" | null;
    privacyAccepted: boolean;
  };
}
