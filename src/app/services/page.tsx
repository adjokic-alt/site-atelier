import type { Metadata } from "next";
import {
  AvailabilityPanel,
  ServiceBoundaries,
  ServiceOfferings,
  ServicesCta,
  ServicesHero,
} from "@/components/services-redesign";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Usluge", description: "Kako pravac stila, strukturisan brief i upit za dizajn vode ka jasnijim razgovorima o projektu." }
    : { title: "Services", description: "Understand how style direction, a structured project brief and design inquiry support clearer project conversations." };
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceOfferings />
      <ServiceBoundaries />
      <AvailabilityPanel />
      <ServicesCta />
    </main>
  );
}
