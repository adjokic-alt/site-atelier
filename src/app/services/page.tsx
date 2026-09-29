import type { Metadata } from "next";
import {
  AvailabilityPanel,
  ServiceBoundaries,
  ServiceOfferings,
  ServicesCta,
  ServicesHero,
} from "@/components/services-redesign";

export const metadata: Metadata = {
  title: "Services | Site Atelier",
  description: "Understand how style direction, a structured project brief and design inquiry support clearer project conversations.",
};

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
