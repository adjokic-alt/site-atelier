import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Scandinavian Interior Style | Site Atelier",
  description: "Explore Scandinavian interior design through daylight, pale timber, soft textiles and practical layouts.",
  alternates: { canonical: "/styles/scandinavian" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.scandinavian} />;
}
