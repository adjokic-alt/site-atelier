import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Minimalist Interior Style | Site Atelier",
  description: "Explore warm Minimalist interior design through concealed storage, tactile surfaces and visual restraint.",
  alternates: { canonical: "/styles/minimalist" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.minimalist} />;
}
