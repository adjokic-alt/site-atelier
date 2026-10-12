import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { ThankYouContent } from "./ThankYouContent";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const sr = (await getLocale()) === "sr";
  return { title: sr ? "Brief je primljen" : "Brief received", description: sr ? "Potvrda o primljenom briefu." : "Confirmation for a received brief.", robots: { index: false, follow: false } };
}

function ThankYouFallback() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-ink-500">…</p>
        </div>
      </Container>
    </main>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<ThankYouFallback />}>
      <ThankYouContent />
    </Suspense>
  );
}
