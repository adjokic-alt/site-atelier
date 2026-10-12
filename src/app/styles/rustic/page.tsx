import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("rustic", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/rustic" } }
    : { title: "Rustic Interior Style", description: "Explore contemporary Rustic interior design through natural timber, mineral texture and crafted warmth.", alternates: { canonical: "/styles/rustic" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.rustic} />;
}
