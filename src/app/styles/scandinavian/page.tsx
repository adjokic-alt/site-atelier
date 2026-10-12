import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("scandinavian", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/scandinavian" } }
    : { title: "Scandinavian Interior Style", description: "Explore Scandinavian interior design through daylight, pale timber, soft textiles and practical layouts.", alternates: { canonical: "/styles/scandinavian" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.scandinavian} />;
}
