import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Rustic Interior Style | Site Atelier",
  description: "Explore contemporary Rustic interior design through natural timber, mineral texture and crafted warmth.",
  alternates: { canonical: "/styles/rustic" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.rustic} />;
}
