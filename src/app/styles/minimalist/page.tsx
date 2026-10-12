import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("minimalist", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/minimalist" } }
    : { title: "Minimalist Interior Style", description: "Explore warm Minimalist interior design through concealed storage, tactile surfaces and visual restraint.", alternates: { canonical: "/styles/minimalist" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.minimalist} />;
}
