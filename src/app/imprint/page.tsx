import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { businessConfig } from "@/config/business.config";
import { legalConfig } from "@/config/legal.config";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Impresum", description: "Nacrt podataka o pružaocu usluge." }
    : { title: "Imprint", description: "Development-stage provider and business disclosure for Site Atelier." };
}

export default async function ImprintPage() {
  if ((await getLocale()) === "sr") return <ImprintPageSr />;
  return (
    <LegalPage
      eyebrow="Legal"
      title="Imprint and provider information"
      introduction="This page lists the business disclosures that must be confirmed before public launch. Placeholder values are shown to prevent accidental claims about an unconfirmed legal entity."
      version={legalConfig.termsVersion}
    >
      <section>
        <h2>Service provider</h2>
        <p>{businessConfig.legalName}</p>
        <p>{businessConfig.registeredAddress}</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Email: {businessConfig.contactEmail}</p>
        <p>Telephone: Not confirmed.</p>
      </section>

      <section>
        <h2>Registration and tax details</h2>
        <ul>
          <li>Company registration number: Not confirmed.</li>
          <li>Registration authority: Not confirmed.</li>
          <li>VAT or tax identification number: Not confirmed.</li>
          <li>Authorized representative: Not confirmed.</li>
        </ul>
      </section>

      <section>
        <h2>Professional regulation</h2>
        <p>
          No regulated professional title, chamber membership, professional licence
          or professional indemnity information is claimed by this draft. If the final
          service uses or advertises regulated professional services, the required
          jurisdiction-specific disclosures must be added.
        </p>
      </section>

      <section>
        <h2>Editorial responsibility</h2>
        <p>Responsible person and address: Not confirmed.</p>
      </section>

      <section>
        <h2>Consumer dispute information</h2>
        <p>
          Applicable consumer dispute-resolution disclosures have not been finalized.
          They must be reviewed for the confirmed entity, customer markets and type of
          service offered.
        </p>
      </section>
    </LegalPage>
  );
}

/** Serbian version of the draft imprint. */
function ImprintPageSr() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Impresum i podaci o pružaocu usluge"
      introduction="Ova stranica navodi poslovne podatke koji moraju biti potvrđeni pre javnog pokretanja. Privremene vrednosti su prikazane da se izbegnu netačne tvrdnje o nepotvrđenom pravnom licu."
      version={legalConfig.termsVersion}
    >
      <section>
        <h2>Pružalac usluge</h2>
        <p>{businessConfig.legalName}</p>
        <p>{businessConfig.registeredAddress}</p>
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>Imejl: {businessConfig.contactEmail}</p>
        <p>Telefon: nije potvrđeno.</p>
      </section>
      <section>
        <h2>Registracija i poreski podaci</h2>
        <ul>
          <li>Matični broj: nije potvrđeno.</li>
          <li>Registarski organ: nije potvrđeno.</li>
          <li>PIB: nije potvrđeno.</li>
          <li>Ovlašćeni zastupnik: nije potvrđeno.</li>
        </ul>
      </section>
      <section>
        <h2>Profesionalna regulativa</h2>
        <p>Ovaj nacrt ne navodi regulisano stručno zvanje, članstvo u komori, profesionalnu licencu niti osiguranje od profesionalne odgovornosti. Ako konačna usluga koristi ili oglašava regulisane stručne usluge, moraju se dodati obavezni podaci prema nadležnosti.</p>
      </section>
      <section>
        <h2>Odgovornost za sadržaj</h2>
        <p>Odgovorno lice i adresa: nije potvrđeno.</p>
      </section>
      <section>
        <h2>Rešavanje potrošačkih sporova</h2>
        <p>Obavezne informacije o rešavanju potrošačkih sporova još nisu konačne. Moraju se proveriti za potvrđeno pravno lice, tržišta i vrstu usluge.</p>
      </section>
    </LegalPage>
  );
}
