import type { Metadata } from "next";
import {
  HomeAudience,
  HomeBrief,
  HomeFinalCta,
  HomeHero,
  HomeMoodboard,
  HomeProblem,
  HomeProcess,
  HomeStyles,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Site Atelier | Turn Ideas Into a Clear Interior Direction",
  description: "Explore interior styles, collect visual references, reveal patterns and create a structured project brief with a downloadable PDF.",
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <HomeProblem />
      <HomeProcess />
      <HomeStyles />
      <HomeMoodboard />
      <HomeBrief />
      <HomeAudience />
      <HomeFinalCta />
    </main>
  );
}
