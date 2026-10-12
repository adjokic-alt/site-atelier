import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("modern", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/modern" } }
    : { title: "Modern Interior Style", description: "Explore Modern interior design through architectural geometry, integrated details and deliberate contrast.", alternates: { canonical: "/styles/modern" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.modern} />;
}
