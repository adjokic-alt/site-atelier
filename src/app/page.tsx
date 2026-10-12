import type { Metadata } from "next";
import { HomeBrief, HomeFinalCta, HomeHero, HomeInspiration, HomeMoodboard, HomeQuiz, HomeStyles } from "@/components/home";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Stvorite dom koji liči na vas", description: "Sakupite inspiraciju za enterijer, otkrijte svoj stil kroz sopstveni moodboard i pretvorite ga u jednostavan brief za dizajnera." }
    : { title: "Create a home that feels like you", description: "Collect interior inspiration, discover your style through your own moodboard and turn it into a simple brief for a designer." };
}

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
