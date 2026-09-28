import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Industrial Interior Style | Site Atelier",
  description: "Explore refined Industrial interior design through raw texture, dark metal, warm light and precise joinery.",
  alternates: { canonical: "/styles/industrial" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.industrial} />;
}
