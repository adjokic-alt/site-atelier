import { cookies, headers } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./locales";

/** The visitor's language on the server: their saved choice, else what the proxy detected. */
export async function getLocale(): Promise<Locale> {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (isLocale(saved)) return saved;
  const detected = (await headers()).get("x-locale");
  return isLocale(detected) ? detected : defaultLocale;
}
