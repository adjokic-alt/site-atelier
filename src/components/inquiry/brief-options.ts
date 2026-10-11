import type { ProjectCategoryId } from "@/types";

/** "Who is this home for?" — stored in the existing brief.space.ownership field. */
export const whoOptions = [
  { value: "me", label: "Just me", sub: "A home for one" },
  { value: "couple", label: "The two of us", sub: "A shared home" },
  { value: "family", label: "Our family", sub: "With children" },
  { value: "guests", label: "Guests or tenants", sub: "A rental or holiday home" },
];

/** Room cards map onto the existing project categories (no new categories). */
export const spaceOptions: { value: ProjectCategoryId; label: string; image: string }[] = [
  { value: "whole-home-renovation", label: "Whole home", image: "/images/inspiration/luxury-open-plan-dining.jpg" },
  { value: "living-bedrooms", label: "Living & bedrooms", image: "/images/inspiration/industrial-brick-living-room.jpg" },
  { value: "kitchen", label: "Kitchen", image: "/images/inspiration/luxury-marble-kitchen.jpg" },
  { value: "bathroom", label: "Bathroom", image: "/images/studios/modern/modern-bathroom.png" },
  { value: "outdoor-garden", label: "Balcony & garden", image: "/images/inspiration/mediterranean-olive-balcony.jpg" },
  { value: "interior-design", label: "Styling & decor", image: "/images/inspiration/rustic-linen-bedroom.jpg" },
];
export const moreSpaceOptions: { value: ProjectCategoryId; label: string }[] = [
  { value: "extension-new-build", label: "Extension or new build" },
  { value: "facade-exterior", label: "Facade or exterior" },
  { value: "property-search-prep", label: "Buying or preparing a property" },
  { value: "other", label: "Something else" },
];

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
export const spaceLabel = (v: string) => [...spaceOptions, ...moreSpaceOptions].find((o) => o.value === v)?.label ?? v.replaceAll("-", " ");
export const goalLabel = (v: string) => goalOptions.find((o) => o.value === v)?.label ?? legacyGoals[v] ?? v.replaceAll("-", " ");
