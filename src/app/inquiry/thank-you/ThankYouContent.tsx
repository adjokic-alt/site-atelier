"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Card, Container } from "@/components/ui";
import { DownloadBriefButton } from "@/components/brief";
import { useLocale } from "@/i18n/client";

export function ThankYouContent() {
  const params = useSearchParams();
  const sr = useLocale() === "sr";
  const reference = params.get("reference") ?? (sr ? "Broj nije dostupan" : "Reference unavailable");

  return (
    <main className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[.08em] text-success">
            {sr ? "Demo slanje je završeno" : "Demo submission complete"}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-ink-900 md:text-display">
            {sr ? "Vaš brief je obrađen." : "Your brief has been processed."}
          </h1>
          <p className="mt-5 text-lead text-ink-700">
            {sr ? "Serijski broj" : "Reference"}: <strong>{reference}</strong>
          </p>

          <Card variant="sunken" className="mt-10 text-left">
            <h2 className="font-display text-h3 text-ink-900">{sr ? "Šta se dogodilo" : "What happened"}</h2>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-ink-700">
              <li>{sr ? "Server je ponovo proverio ceo brief." : "The server validated the complete brief again."}</li>
              <li>{sr ? "Napravljen je PDF za klijenta." : "A customer-safe PDF was generated in memory."}</li>
              <li>{sr ? "Pregledi imejlova za klijenta i studio ispisani su u serverski log." : "Customer and internal email previews were printed to the server log."}</li>
              <li>{sr ? "Nije poslat pravi imejl, niti je nešto upisano u bazu ili otpremljeno." : "No real email, database record or external file upload was created."}</li>
            </ol>
          </Card>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <DownloadBriefButton referenceCode={params.get("reference") ?? undefined} />
            <Link
              href="/brief"
              className="focus-ring inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-ink-900 px-6 font-medium text-ink-900"
            >
              {sr ? "Nazad na moj brief" : "Return to my brief"}
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
