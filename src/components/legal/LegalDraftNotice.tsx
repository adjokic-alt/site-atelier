import { getLocale } from "@/i18n/server";
import { Card } from "@/components/ui";

export async function LegalDraftNotice() {
  const sr = (await getLocale()) === "sr";
  return (
    <Card variant="sunken" className="border-2 border-accent">
      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
        {sr ? "Nacrt za razvojnu proveru" : "Draft for development review"}
      </p>
      <p className="mt-3 text-sm leading-7 text-ink-700">
        {sr
          ? "Ova stranica nije konačan pravni savet. Identitet firme, obrada podataka, model usluge, pravila čuvanja i nadležno pravo moraju pre pokretanja da potvrdi odgovarajući stručnjak."
          : "This page is not final legal advice. The business identity, processing activities, service model, retention rules and applicable jurisdiction must be confirmed by an appropriately qualified professional before launch."}
      </p>
    </Card>
  );
}
