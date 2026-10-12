import type { Metadata } from "next";
import {
  ContactConfig,
  ContactHero,
  ContactPreparation,
  ContactRoutes,
} from "@/components/company-redesign";
import { businessConfig } from "@/config/business.config";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Kontakt", description: "Izaberite pravi put za novi upit, postojeći brief ili opšte pitanje." }
    : { title: "Contact", description: "Choose the right route for a new project inquiry, an existing brief or a general question." };
}

const emailIsPlaceholder = businessConfig.contactEmail.endsWith("@example.com");

export default function ContactPage() {
  return <main><ContactHero /><ContactRoutes business={businessConfig} emailIsPlaceholder={emailIsPlaceholder} /><ContactConfig business={businessConfig} emailIsPlaceholder={emailIsPlaceholder} /><ContactPreparation /></main>;
}
