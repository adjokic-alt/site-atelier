import { businessConfig } from "@/config/business.config";
import { getLocale } from "@/i18n/server";

type BusinessConfig = typeof businessConfig;

export async function ContactConfig({ business, emailIsPlaceholder }: { business: BusinessConfig; emailIsPlaceholder: boolean }) {
  const sr = (await getLocale()) === "sr";
  const emailLabel = sr ? "Kontakt imejl" : "Contact email";
  const rows = [
    [sr ? "Naziv" : "Display name", business.displayName],
    [emailLabel, business.contactEmail],
    [sr ? "Vremenska zona" : "Timezone", business.timezone],
    [sr ? "Rok za odgovor" : "Response promise", business.responseTimePromiseDays ? (sr ? `${business.responseTimePromiseDays} radnih dana` : `${business.responseTimePromiseDays} working days`) : sr ? "Nije potvrđeno" : "Not confirmed"],
    [sr ? "Link za zakazivanje" : "Booking link", business.bookingUrl ? (sr ? "Podešeno" : "Configured") : sr ? "Nije podešeno" : "Not configured"],
  ];

  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:px-10">
        <div><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">{sr ? "Trenutni kontakt podaci" : "Current contact configuration"}</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">{sr ? "Poslovni podaci, prikazani otvoreno." : "Business details shown transparently."}</h2><p className="mt-5 text-base leading-8 text-ink-700">{sr ? "Ove vrednosti dolaze iz centralne poslovne konfiguracije. Privremene vrednosti ostaju jasno označene dok se javni identitet firme ne potvrdi." : "These values come from the central business configuration. Placeholder values remain clearly labelled until the public business identity is confirmed."}</p></div>
        <div className="rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
          <dl className="divide-y divide-border text-sm">
            {rows.map(([label, value]) => <div key={label} className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[180px_1fr]"><dt className="font-medium text-ink-500">{label}</dt><dd className="text-ink-900">{value}{label === emailLabel && emailIsPlaceholder ? <span className="ml-2 rounded-full bg-accent-tint px-2 py-1 text-xs text-accent">{sr ? "Privremeno" : "Placeholder"}</span> : null}</dd></div>)}
          </dl>
        </div>
      </div>
    </section>
  );
}
