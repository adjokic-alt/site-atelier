import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("luxury", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/luxury" } }
    : { title: "Luxury Interior Style", description: "Explore contemporary Luxury interior design through bespoke detail, tactile layers and controlled lighting.", alternates: { canonical: "/styles/luxury" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.luxury} />;
}
