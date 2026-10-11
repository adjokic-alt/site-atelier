import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/seo.config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/brief",
        "/moodboard",
        "/inquiry/",
        "/styles/not-sure",
        "/ui-preview",
      ],
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
