import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Luxury Interior Style | Site Atelier",
  description: "Explore contemporary Luxury interior design through bespoke detail, tactile layers and controlled lighting.",
  alternates: { canonical: "/styles/luxury" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.luxury} />;
}
