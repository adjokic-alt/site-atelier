import type { Metadata } from "next";
import {
  HomeFinalCta,
  HomeHero,
  HomeProcess,
  HomeServices,
  HomeStyles,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Site Atelier | Turn Ideas Into a Clear Project Brief",
  description:
    "Discover your interior style, collect inspiration and create a structured project brief with a downloadable PDF.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProcess />
      <HomeStyles />
      <HomeServices />
      <HomeFinalCta />
    </>
  );
}
