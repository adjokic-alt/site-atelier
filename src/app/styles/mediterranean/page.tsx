import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";
import { getStyleStudio } from "@/content/style-studios-sr";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const studio = getStyleStudio("mediterranean", locale);
  return locale === "sr"
    ? { title: `${studio.name} stil enterijera`, description: studio.tagline, alternates: { canonical: "/styles/mediterranean" } }
    : { title: "Mediterranean Interior Style", description: "Explore contemporary Mediterranean interior design through filtered light, pale stone and indoor-outdoor flow.", alternates: { canonical: "/styles/mediterranean" } };
}

export default function Page() {
  return <StyleStudioPage studio={styleStudios.mediterranean} />;
}
