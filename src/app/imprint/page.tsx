import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { businessConfig } from "@/config/business.config";
import { legalConfig } from "@/config/legal.config";

export const metadata: Metadata = {
  title: "Imprint | Site Atelier",
  description: "Development-stage provider and business disclosure for Site Atelier.",
};

export default function ImprintPage() {
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
