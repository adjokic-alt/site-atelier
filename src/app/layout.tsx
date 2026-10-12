import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BriefProvider } from "@/providers/BriefProvider";
import { SiteStructuredData } from "@/components/seo";
import { absoluteUrl, seoConfig } from "@/config/seo.config";
import { LocaleProvider } from "@/i18n/client";
import { getLocale } from "@/i18n/server";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const sr = (await getLocale()) === "sr";
  const description = sr
    ? "Sakupite inspiraciju, pronađite svoj stil i pretvorite ga u jasan brief za dizajnera enterijera."
    : seoConfig.defaultDescription;
  return {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: sr ? "Site Atelier | Pretvorite ideje u jasan brief" : seoConfig.defaultTitle,
    template: `%s | ${seoConfig.siteName}`,
  },
  description,
  applicationName: seoConfig.siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: sr ? "sr_RS" : seoConfig.locale,
    alternateLocale: sr ? [seoConfig.locale] : ["sr_RS"],
    url: absoluteUrl("/"),
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description,
    images: [
      {
        url: seoConfig.ogImagePath,
        width: 1200,
        height: 630,
        alt: "Site Atelier - Turn ideas into a clear project brief",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.defaultTitle,
    description,
    images: [seoConfig.ogImagePath],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "interior design",
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  return (
    <html lang={locale === "sr" ? "sr-Latn" : "en"} className="h-full">
      <body className="flex min-h-full flex-col antialiased">
        <LocaleProvider locale={locale}>
        <BriefProvider>
          <SiteStructuredData />
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1">
            {children}
          </main>
          <Footer />
        </BriefProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
