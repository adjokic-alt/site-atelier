import type { Locale } from "./locales";

/** Style names as shown to people (ids stay the same in data). */
export const styleNames: Record<Locale, Record<string, string>> = {
  en: { scandinavian: "Scandinavian", modern: "Modern", minimalist: "Minimalist", industrial: "Industrial", luxury: "Luxury", rustic: "Rustic", mediterranean: "Mediterranean" },
  sr: { scandinavian: "Skandinavski", modern: "Moderni", minimalist: "Minimalistički", industrial: "Industrijski", luxury: "Luksuzni", rustic: "Rustični", mediterranean: "Mediteranski" },
};
export const styleName = (id: string | null | undefined, locale: Locale) => (id ? styleNames[locale][id] ?? styleNames.en[id] ?? id : "");

/** Room names used on picture captions. */
export const roomNames: Record<Locale, Record<string, string>> = {
  en: { living: "Living", kitchen: "Kitchen", bedroom: "Bedroom", bath: "Bath", outdoor: "Outdoor", exterior: "Exterior" },
  sr: { living: "Dnevna soba", kitchen: "Kuhinja", bedroom: "Spavaća soba", bath: "Kupatilo", outdoor: "Terasa", exterior: "Fasada" },
};
export const roomName = (id: string, locale: Locale) => roomNames[locale][id] ?? roomNames.en[id] ?? id;

/** Menu labels by address, so the nav config stays one list. */
export const navLabels: Record<Locale, Record<string, string>> = {
  en: { "/inspiration": "Inspiration", "/styles": "Styles", "/moodboard": "Moodboard", "/how-it-works": "How it works", "/about": "About", "/contact": "Contact", "/services": "Services", "/brief": "My brief", "/privacy": "Privacy", "/terms": "Terms", "/imprint": "Imprint", "/cookies": "Cookies" },
  sr: { "/inspiration": "Inspiracija", "/styles": "Stilovi", "/moodboard": "Moodboard", "/how-it-works": "Kako funkcioniše", "/about": "O nama", "/contact": "Kontakt", "/services": "Usluge", "/brief": "Moj brief", "/privacy": "Privatnost", "/terms": "Uslovi", "/imprint": "Impresum", "/cookies": "Kolačići" },
};
export const navLabel = (href: string, fallback: string, locale: Locale) => navLabels[locale][href] ?? fallback;
