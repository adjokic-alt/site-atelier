import { defaultLocale, type Locale } from "./locales";
import { en } from "./messages/en";
import { sr } from "./messages/sr";

export function getMessages(locale: Locale = defaultLocale) {
  switch (locale) {
    case "sr":
      return sr;
    case "en":
    default:
      return en;
  }
}

export function t(locale: Locale = defaultLocale) {
  return getMessages(locale);
}
