import { NextResponse, type NextRequest } from "next/server";
import { isLocale, LOCALE_COOKIE, serbianFirstCountries, serbianFirstLanguages } from "@/i18n/locales";

/**
 * First visit only: choose the language from the visitor's country (Vercel geo header),
 * falling back to the browser language. A choice made with the EN / SR switch always wins.
 */
export function proxy(request: NextRequest) {
  if (isLocale(request.cookies.get(LOCALE_COOKIE)?.value)) return NextResponse.next();

  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const language = request.headers.get("accept-language")?.split(",")[0]?.split(/[-;]/)[0]?.toLowerCase();
  const serbian = country ? serbianFirstCountries.includes(country) : Boolean(language && serbianFirstLanguages.includes(language));
  const locale = serbian ? "sr" : "en";

  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  const response = NextResponse.next({ request: { headers } });
  response.cookies.set(LOCALE_COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365, sameSite: "lax" });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|fonts|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\.[a-z0-9]+$).*)"],
};
