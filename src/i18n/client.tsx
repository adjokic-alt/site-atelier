"use client";

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext } from "react";
import { defaultLocale, LOCALE_COOKIE, type Locale } from "./locales";

const LocaleContext = createContext<Locale>(defaultLocale);

export function LocaleProvider({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}

/** Switch language: remember it for a year and re-render the page in place. */
export function useSetLocale() {
  const router = useRouter();
  return useCallback((next: Locale) => {
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.refresh();
  }, [router]);
}
