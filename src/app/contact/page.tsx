import type { Metadata } from "next";
import {
  ContactConfig,
  ContactHero,
  ContactPreparation,
  ContactRoutes,
} from "@/components/company-redesign";
import { businessConfig } from "@/config/business.config";

export const metadata: Metadata = {
  title: "Contact | Site Atelier",
  description: "Choose the right route for a new project inquiry, an existing brief or a general question about Site Atelier.",
};

const emailIsPlaceholder = businessConfig.contactEmail.endsWith("@example.com");

export default function ContactPage() {
  return <main><ContactHero /><ContactRoutes business={businessConfig} emailIsPlaceholder={emailIsPlaceholder} /><ContactConfig business={businessConfig} emailIsPlaceholder={emailIsPlaceholder} /><ContactPreparation /></main>;
}
