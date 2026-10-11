import type { ProjectCategoryId } from "@/types";

/** "Who is this home for?" — stored in the existing brief.space.ownership field. */
export const whoOptions = [
  { value: "me", label: "Just me", sub: "A home for one" },
  { value: "couple", label: "The two of us", sub: "A shared home" },
  { value: "family", label: "Our family", sub: "With children" },
  { value: "guests", label: "Guests or tenants", sub: "A rental or holiday home" },
];

/** Room cards; values are stored in the brief's existing project_categories text list. */
export const spaceOptions: { value: ProjectCategoryId; label: string; image: string }[] = [
  { value: "whole-home-renovation", label: "Whole home", image: "/images/inspiration/luxury-open-plan-dining.jpg" },
  { value: "living-room", label: "Living room", image: "/images/inspiration/industrial-brick-living-room.jpg" },
  { value: "kitchen", label: "Kitchen", image: "/images/inspiration/luxury-marble-kitchen.jpg" },
  { value: "bedroom", label: "Bedroom", image: "/images/inspiration/rustic-linen-bedroom.jpg" },
  { value: "bathroom", label: "Bathroom", image: "/images/studios/modern/modern-bathroom.png" },
  { value: "outdoor-garden", label: "Balcony", image: "/images/inspiration/mediterranean-olive-balcony.jpg" },
];
export const moreSpaceOptions: { value: ProjectCategoryId; label: string }[] = [
  { value: "garden", label: "Gardening" },
  { value: "facade-exterior", label: "Facade" },
  { value: "interior-design", label: "Decoration only" },
];
/** Names for spaces no longer offered, so older briefs still read well. */
const legacySpaces: Record<string, string> = {
  "living-bedrooms": "Living & bedrooms", "kids-room": "Kids room", "extension-new-build": "Extension or new build",
  "property-search-prep": "Buying or preparing a property", "other": "Something else",
};

/** Five goals that point to a clear design direction. */
export const goalOptions = [
  { value: "better-light", label: "More light" },
  { value: "storage", label: "Better storage" },
  { value: "comfort", label: "Warmer & cosier" },
  { value: "more-style", label: "More style" },
  { value: "fresh-start", label: "A fresh start" },
];

const legacyGoals: Record<string, string> = { "better-layout": "A better layout", energy: "Energy performance", value: "Long-term value" };

export const whoLabel = (v: string | null) => whoOptions.find((o) => o.value === v)?.label ?? null;
export const spaceLabel = (v: string) => [...spaceOptions, ...moreSpaceOptions].find((o) => o.value === v)?.label ?? legacySpaces[v] ?? v.replaceAll("-", " ");
export const goalLabel = (v: string) => goalOptions.find((o) => o.value === v)?.label ?? legacyGoals[v] ?? v.replaceAll("-", " ");

/** Goals-step questions about the home (stored in the existing space/budget fields). */
export const budgetOptions = [
  { value: "under-15", label: "Under 15k" }, { value: "15-30", label: "15–30k" }, { value: "30-60", label: "30–60k" },
  { value: "60-120", label: "60–120k" }, { value: "120-plus", label: "120k+" }, { value: "not-sure", label: "Not sure yet" },
];
export const propertyOptions = [
  { value: "apartment", label: "Apartment" }, { value: "house", label: "House" }, { value: "townhouse", label: "Townhouse" },
  { value: "holiday-home", label: "Holiday home" }, { value: "other", label: "Other" },
];
export const conditionOptions = [
  { value: "new-shell", label: "New build, empty" }, { value: "cosmetic", label: "Good, needs a refresh" },
  { value: "partial-updates", label: "Needs partial renovation" }, { value: "full-renovation", label: "Needs full renovation" },
];
/** "What are your final goals?" — the result they expect from the designer (stored in space.stage). */
export const stageOptions = [
  { value: "ideas", label: "Ideas and direction" }, { value: "sketches", label: "Sketches" },
  { value: "visualisations", label: "3D visualisations" }, { value: "technical-documentation", label: "Full technical documentation" },
];


const find = (list: { value: string; label: string }[], v: string | null) => (v ? list.find((o) => o.value === v)?.label ?? v.replaceAll("-", " ") : null);
export const budgetLabel = (v: string | null) => find(budgetOptions, v);
export const propertyLabel = (v: string | null) => find(propertyOptions, v);
export const conditionLabel = (v: string | null) => find(conditionOptions, v);
export const stageLabel = (v: string | null) => find(stageOptions, v);
