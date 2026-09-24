import { businessConfig } from "@/config/business.config";
import { absoluteUrl, seoConfig } from "@/config/seo.config";
import { JsonLd } from "./JsonLd";

export function SiteStructuredData() {
  const graph = [
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: absoluteUrl("/"),
      name: seoConfig.siteName,
      description: seoConfig.defaultDescription,
      inLanguage: seoConfig.language,
    },
    {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: businessConfig.displayName,
      url: absoluteUrl("/"),
      description:
        "Development-stage project briefing application. Legal business identity and public contact details are not yet confirmed.",
    },
  ];

  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />;
}
