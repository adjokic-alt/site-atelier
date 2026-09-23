import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { businessConfig } from "@/config/business.config";
import { legalConfig } from "@/config/legal.config";

export const metadata: Metadata = {
  title: "Terms of Use | Site Atelier",
  description: "Development-stage terms for using the Site Atelier project briefing demo.",
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of use"
      introduction="These draft terms describe the current demo experience. Final consumer, service and jurisdiction terms require professional legal review before launch."
      version={legalConfig.termsVersion}
    >
      <section>
        <h2>1. Operator</h2>
        <p>
          Proposed operator: {businessConfig.legalName}, at
          {` ${businessConfig.registeredAddress}`}. These are placeholder values.
        </p>
      </section>

      <section>
        <h2>2. Purpose of the application</h2>
        <p>
          Site Atelier helps users organize early style preferences, inspiration and
          project information into an editable brief and downloadable PDF.
        </p>
      </section>

      <section>
        <h2>3. Not professional or regulated advice</h2>
        <p>
          The application does not provide structural engineering, architectural
          certification, measured surveys, permit approval, legal advice, financial
          advice, safety approval or a final technical specification. Qualified local
          professionals remain responsible where such work is required.
        </p>
      </section>

      <section>
        <h2>4. No automatic service agreement</h2>
        <p>
          Completing a brief, generating a PDF or receiving a demo reference code does
          not create a contract, confirm project acceptance, reserve capacity or
          guarantee that a particular service is available in a location.
        </p>
      </section>

      <section>
        <h2>5. Estimates and user-provided information</h2>
        <p>
          Budget ranges, dates, sizes and project details are user-provided planning
          information. They are not quotations or verified measurements. Users should
          check information before relying on a generated brief.
        </p>
      </section>

      <section>
        <h2>6. Illustrative content</h2>
        <p>
          Current style, material and inspiration visuals are labeled as illustrative.
          They are not evidence of completed client projects, guaranteed outcomes or
          exact product availability.
        </p>
      </section>

      <section>
        <h2>7. Acceptable use</h2>
        <ul>
          <li>Do not submit unlawful, harmful or misleading content.</li>
          <li>Do not attempt to bypass security, validation or rate protections.</li>
          <li>Do not upload content without the necessary rights and permissions.</li>
          <li>Do not treat a demo reference as proof of a commercial engagement.</li>
        </ul>
      </section>

      <section>
        <h2>8. Availability and changes</h2>
        <p>
          The demo may change, be interrupted or reset. Browser drafts can be lost if
          browser storage is cleared. Features described as planned are not guaranteed
          until they are implemented and contractually offered.
        </p>
      </section>

      <section>
        <h2>9. Liability and governing law</h2>
        <p>
          Appropriate limitations, mandatory consumer protections, governing law,
          dispute resolution and jurisdiction have not been finalized. This section
          must be drafted specifically for the confirmed business entity and markets.
        </p>
      </section>
    </LegalPage>
  );
}
