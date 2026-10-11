const fallbackUrl = "https://site-atelier-eta.vercel.app";

export const seoConfig = {
  siteName: "Site Atelier",
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, ""),
  defaultTitle: "Site Atelier | Turn Ideas Into a Clear Project Brief",
  defaultDescription:
    "Discover your interior style, collect inspiration and create a structured project brief with a downloadable PDF.",
  locale: "en_US",
  language: "en",
  ogImagePath: "/opengraph-image",
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${seoConfig.siteUrl}/`).toString();
}
