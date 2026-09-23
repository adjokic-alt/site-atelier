"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, Container } from "@/components/ui";
import { DownloadBriefButton } from "@/components/brief";

export default function ThankYouPage() {
  const params = useSearchParams();
  const reference = params.get("reference") ?? "Reference unavailable";

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.08em] text-success">Demo submission complete</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink-900 md:text-display">Your brief has been processed.</h1>
          <p className="mt-5 text-lead text-ink-700">Reference: <strong>{reference}</strong></p>
          <Card variant="sunken" className="mt-10 text-left">
            <h2 className="font-display text-h3 text-ink-900">What happened</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-ink-700">
              <li>The server validated the complete brief again.</li>
              <li>A customer-safe PDF was generated in memory.</li>
              <li>Customer and internal email previews were printed to the server log.</li>
              <li>No real email, database record or external file upload was created.</li>
            </ol>
          </Card>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DownloadBriefButton />
            <Link href="/brief" className="focus-ring inline-flex min-h-[52px] items-center rounded-sm border-[1.5px] border-ink-900 px-6 font-medium text-ink-900">Return to my brief</Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
