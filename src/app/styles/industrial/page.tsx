import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("industrial", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/industrial" } }
    : { title: "Industrial Interior Style", description: "Explore refined Industrial interior design through raw texture, dark metal, warm light and precise joinery.", alternates: { canonical: "/styles/industrial" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.industrial} />;
}
