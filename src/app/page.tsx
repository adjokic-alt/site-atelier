import type { Metadata } from "next";
import { HomeBrief, HomeFinalCta, HomeHero, HomeInspiration, HomeMoodboard, HomeQuiz, HomeStyles } from "@/components/home";

export const metadata: Metadata = {
  title: "Site Atelier | Create a home that feels like you",
  description: "Collect interior inspiration, discover your style through your own moodboard and turn it into a simple brief for a designer.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeInspiration />
      <HomeQuiz />
      <HomeStyles />
      <HomeMoodboard />
      <HomeBrief />
      <HomeFinalCta />
    </>
  );
}
