import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui";
import { ThankYouContent } from "./ThankYouContent";

export const metadata: Metadata = {
  title: "Brief Received | Site Atelier",
  description: "Confirmation for a processed demo project brief.",
  robots: { index: false, follow: false },
};

function ThankYouFallback() {
  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-ink-500">Loading submission reference...</p>
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
