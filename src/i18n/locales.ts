export const locales = ["en", "sr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "locale";
/** Visitors from these countries see Serbian first (ISO 3166 codes). */
export const serbianFirstCountries = ["RS", "ME", "HR", "MK", "BA"];
/** Browser languages that also get Serbian first when the country is unknown. */
export const serbianFirstLanguages = ["sr", "hr", "bs", "mk", "me", "cnr", "sh"];

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Copy for every language: `const t = pick(copy, locale)`. */
export type Dict<T> = Record<Locale, T>;
export function pick<T>(dict: Dict<T>, locale: Locale): T {
  return dict[locale] ?? dict[defaultLocale];
}
