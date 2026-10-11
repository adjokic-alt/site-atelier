import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Modern Interior Style | Site Atelier",
  description: "Explore Modern interior design through architectural geometry, integrated details and deliberate contrast.",
  alternates: { canonical: "/styles/modern" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.modern} />;
}
