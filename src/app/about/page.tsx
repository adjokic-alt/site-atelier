import type { Metadata } from "next";
import {
  AboutBoundaries,
  AboutCta,
  AboutHero,
  AboutJourney,
  AboutPrinciples,
  AboutStory,
} from "@/components/company-redesign";

export const metadata: Metadata = {
  title: "About | Site Atelier",
  description: "Learn why Site Atelier turns early interior ideas into a clearer, editable project brief before professional work begins.",
};

export default function AboutPage() {
  return <main><AboutHero /><AboutStory /><AboutPrinciples /><AboutJourney /><AboutBoundaries /><AboutCta /></main>;
}
