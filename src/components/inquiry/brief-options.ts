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



/** Goals-step questions about the home (stored in the existing space/budget fields). */
export const budgetOptions = [
  { value: "under-10", label: "Under 10k" }, { value: "10-20", label: "10–20k" }, { value: "20-50", label: "20–50k" },
  { value: "50-plus", label: "50k+" }, { value: "not-sure", label: "Not sure yet" },
];
/** Bands used before October 2026, so older briefs still read correctly. */
const legacyBudget: Record<"en" | "sr", Record<string, string>> = {
  en: { "under-15": "Under 15k", "15-30": "15–30k", "30-60": "30–60k", "60-120": "60–120k", "120-plus": "120k+" },
  sr: { "under-15": "Do 15 hilj.", "15-30": "15–30 hilj.", "30-60": "30–60 hilj.", "60-120": "60–120 hilj.", "120-plus": "Preko 120 hilj." },
};
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


/* ——— Serbian labels (values stay the same, only the words change) ——— */
type Lang = "en" | "sr";
const sr: Record<string, Record<string, string>> = {
  who: { me: "Samo ja", couple: "Nas dvoje", family: "Naša porodica", guests: "Gosti ili zakupci" },
  whoSub: { me: "Dom za jednu osobu", couple: "Zajednički dom", family: "Sa decom", guests: "Stan za izdavanje ili kuća za odmor" },
  space: {
    "whole-home-renovation": "Ceo dom", "living-room": "Dnevna soba", kitchen: "Kuhinja", bedroom: "Spavaća soba", bathroom: "Kupatilo", "outdoor-garden": "Terasa",
    garden: "Bašta", "facade-exterior": "Fasada", "interior-design": "Samo dekoracija",
    "living-bedrooms": "Dnevna i spavaće sobe", "kids-room": "Dečja soba", "extension-new-build": "Dogradnja ili novogradnja", "property-search-prep": "Kupovina ili priprema nekretnine", other: "Nešto drugo",
  },
  goal: { "better-light": "Više svetla", storage: "Bolje odlaganje", comfort: "Toplije i prijatnije", "more-style": "Više stila", "fresh-start": "Novi početak", "better-layout": "Bolji raspored", energy: "Energetska efikasnost", value: "Dugoročna vrednost" },
  budget: { "under-10": "Do 10 hilj.", "10-20": "10–20 hilj.", "20-50": "20–50 hilj.", "50-plus": "Preko 50 hilj.", "not-sure": "Još nisam siguran/na" },
  property: { apartment: "Stan", house: "Kuća", townhouse: "Kuća u nizu", "holiday-home": "Kuća za odmor", other: "Drugo" },
  condition: { "new-shell": "Novogradnja, prazno", cosmetic: "Dobro, treba osvežiti", "partial-updates": "Potrebno delimično renoviranje", "full-renovation": "Potrebno potpuno renoviranje" },
  stage: { ideas: "Ideje i pravac", sketches: "Skice", visualisations: "3D vizualizacije", "technical-documentation": "Kompletna tehnička dokumentacija" },
};
const tr = <T extends { value: string; label: string }>(list: T[], group: string, lang: Lang): T[] =>
  lang === "sr" ? list.map((o) => ({ ...o, label: sr[group][o.value] ?? o.label })) : list;

/** Every option list in the visitor's language. */
/** The budget bands are the same; in dinars the labels show the equivalent amounts. */
const rsd: Record<Lang, Record<string, string>> = {
  en: { "under-10": "Under 1.2M", "10-20": "1.2–2.3M", "20-50": "2.3–5.9M", "50-plus": "5.9M+" },
  sr: { "under-10": "Do 1,2 mil.", "10-20": "1,2–2,3 mil.", "20-50": "2,3–5,9 mil.", "50-plus": "Preko 5,9 mil." },
};
const forCurrency = <T extends { value: string; label: string }>(list: T[], lang: Lang, currency?: string | null): T[] =>
  currency === "RSD" ? list.map((o) => ({ ...o, label: rsd[lang][o.value] ?? o.label })) : list;

export function getBriefOptions(lang: Lang, currency?: string | null) {
  return {
    whoOptions: lang === "sr" ? whoOptions.map((o) => ({ ...o, label: sr.who[o.value] ?? o.label, sub: sr.whoSub[o.value] ?? o.sub })) : whoOptions,
    spaceOptions: tr(spaceOptions, "space", lang),
    moreSpaceOptions: tr(moreSpaceOptions, "space", lang),
    goalOptions: tr(goalOptions, "goal", lang),
    budgetOptions: forCurrency(tr(budgetOptions, "budget", lang), lang, currency),
    propertyOptions: tr(propertyOptions, "property", lang),
    conditionOptions: tr(conditionOptions, "condition", lang),
    stageOptions: tr(stageOptions, "stage", lang),
  };
}

const find = (list: { value: string; label: string }[], group: string, v: string | null, lang: Lang) =>
  v ? (lang === "sr" ? sr[group][v] : undefined) ?? list.find((o) => o.value === v)?.label ?? v.replaceAll("-", " ") : null;
export const whoLabel = (v: string | null, lang: Lang = "en") => (v ? (lang === "sr" ? sr.who[v] : undefined) ?? whoOptions.find((o) => o.value === v)?.label ?? null : null);
export const spaceLabel = (v: string, lang: Lang = "en") => (lang === "sr" ? sr.space[v] : undefined) ?? [...spaceOptions, ...moreSpaceOptions].find((o) => o.value === v)?.label ?? legacySpaces[v] ?? v.replaceAll("-", " ");
export const goalLabel = (v: string, lang: Lang = "en") => (lang === "sr" ? sr.goal[v] : undefined) ?? goalOptions.find((o) => o.value === v)?.label ?? legacyGoals[v] ?? v.replaceAll("-", " ");
export const budgetLabel = (v: string | null, lang: Lang = "en", currency?: string | null) =>
  currency === "RSD" && v && rsd[lang][v] ? rsd[lang][v] : (v && legacyBudget[lang][v]) || find(budgetOptions, "budget", v, lang);
export const propertyLabel = (v: string | null, lang: Lang = "en") => find(propertyOptions, "property", v, lang);
export const conditionLabel = (v: string | null, lang: Lang = "en") => find(conditionOptions, "condition", v, lang);
export const stageLabel = (v: string | null, lang: Lang = "en") => find(stageOptions, "stage", v, lang);

/** Small words used on the brief page and in the PDF (flexibility, start, help, contact preference). */
const extraSr: Record<string, string> = {
  firm: "Fiksno", "some-flexibility": "Određena fleksibilnost", depends: "Zavisi od obima",
  asap: "Što pre", "within-3-months": "U naredna 3 meseca", "3-6-months": "Za 3–6 meseci", "6-12-months": "Za 6–12 meseci", "just-exploring": "Samo istražujem",
  design: "Pravac dizajna", "scope-definition": "Definisanje obima", "find-compare-partners": "Pronalaženje i poređenje izvođača", "coordinate-through-completion": "Koordinacija do završetka", "not-sure": "Još nisam siguran/na",
  email: "Imejl", phone: "Telefon", "video-call": "Video poziv",
};
const extraEn: Record<string, string> = {
  firm: "Firm", "some-flexibility": "Some flexibility", depends: "Depends on scope",
  asap: "As soon as possible", "within-3-months": "Within 3 months", "3-6-months": "3–6 months", "6-12-months": "6–12 months", "just-exploring": "Just exploring",
  design: "Design direction", "scope-definition": "Scope definition", "find-compare-partners": "Find and compare partners", "coordinate-through-completion": "Coordination to completion", "not-sure": "Not sure yet",
  email: "Email", phone: "Phone", "video-call": "Video call",
};
export const wordLabel = (v: string | null | undefined, lang: Lang = "en") =>
  v ? (lang === "sr" ? extraSr : extraEn)[v] ?? v.replaceAll("-", " ").replace(/^./, (c) => c.toUpperCase()) : "";
