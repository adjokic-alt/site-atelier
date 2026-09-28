import type { Metadata } from "next";
import { StyleStudioPage } from "@/components/style-studio";
import { styleStudios } from "@/content/style-studios";

export const metadata: Metadata = {
  title: "Mediterranean Interior Style | Site Atelier",
  description: "Explore contemporary Mediterranean interior design through filtered light, pale stone and indoor-outdoor flow.",
  alternates: { canonical: "/styles/mediterranean" },
};

export default function Page() {
  return <StyleStudioPage studio={styleStudios.mediterranean} />;
}
