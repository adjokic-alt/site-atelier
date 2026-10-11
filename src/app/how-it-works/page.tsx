import type { Metadata } from "next";
import {
  AfterSubmission,
  DataJourneyRedesign,
  ProcessHero,
  ProcessTimelineRedesign,
} from "@/components/services-redesign";

export const metadata: Metadata = {
  title: "How It Works | Site Atelier",
  description: "See how Style Studios, inspiration, the adaptive moodboard, Brief Builder, submission, storage, email and PDF generation work together.",
};

export default function HowItWorksPage() {
  return (
    <main>
      <ProcessHero />
      <ProcessTimelineRedesign />
      <DataJourneyRedesign />
      <AfterSubmission />
    </main>
  );
}
