import type { Metadata } from "next";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const sr = (await getLocale()) === "sr";
  return { title: sr ? "Moj brief" : "My Brief", robots: { index: false, follow: false }, alternates: { canonical: null } };
}

export default function BriefLayout({ children }: { children: React.ReactNode }) { return children; }
