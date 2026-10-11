import type { Metadata } from "next";
import { HomeBrief, HomeFinalCta, HomeHero, HomeInspiration, HomeMoodboard, HomeStyles } from "@/components/home";

export const metadata: Metadata = {
  title: "Site Atelier | Create a home that feels like you",
  description: "Collect interior inspiration, discover your style through your own moodboard and turn it into a simple brief for a designer.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeInspiration />
      <HomeStyles />
      <HomeMoodboard />
      <HomeBrief />
      <HomeFinalCta />
    </>
  );
}
