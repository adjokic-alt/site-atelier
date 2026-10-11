import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { businessConfig } from "@/config/business.config";
import { legalConfig } from "@/config/legal.config";

export const metadata: Metadata = {
  title: "Privacy Notice | Site Atelier",
  description: "Development-stage privacy notice for the Site Atelier project briefing application.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy notice"
      introduction="This draft explains the information used by the current browser-based demo and identifies decisions that must be finalized before production launch."
      version={legalConfig.privacyPolicyVersion}
    >
      <section>
        <h2>1. Data controller</h2>
        <p>
          Proposed controller: {businessConfig.legalName}. Registered address:
          {` ${businessConfig.registeredAddress}`}. Contact email:
          {` ${businessConfig.contactEmail}`}.
        </p>
        <p>
          These details are placeholders and must be replaced with confirmed legal
          and contact information before personal data is collected in production.
        </p>
      </section>

      <section>
        <h2>2. Information used by the demo</h2>
        <ul>
          <li>Style, material and moodboard preferences.</li>
          <li>Project type, location, goals, property details, budget and timing.</li>
          <li>Name, email, optional phone number and preferred contact channel.</li>
          <li>Names of locally selected files, but not the file contents in the current milestone.</li>
          <li>Technical request data normally processed by the hosting platform when a server route is called.</li>
        </ul>
      </section>

      <section>
        <h2>3. Where the draft is stored</h2>
        <p>
          Before submission, the active brief is stored in localStorage in the
          current browser. It is not automatically synchronized across browsers or
          devices. Clearing browser storage can remove the local draft.
        </p>
      </section>

      <section>
        <h2>4. Demo server processing</h2>
        <p>
          The PDF and demo submission routes receive the brief for validation and
          in-memory processing. The current demo prints email previews to the server
          log and does not intentionally create a durable customer database record or
          send a real email.
        </p>
      </section>

      <section>
        <h2>5. Purposes and lawful bases</h2>
        <p>
          Production purposes and lawful bases must be documented before launch.
          Possible purposes may include responding to requested project enquiries,
          creating requested PDFs, preventing abuse, maintaining security and meeting
          legal obligations. The appropriate lawful basis must be confirmed for each
          purpose and jurisdiction.
        </p>
      </section>

      <section>
        <h2>6. Retention</h2>
        <p>
          The current configuration proposes {legalConfig.retention.draftRetentionDays}
          days for drafts and {legalConfig.retention.submittedBriefRetentionDays} days
          for submitted briefs. Automatic deletion is currently
          {legalConfig.retention.autoDeleteEnabled ? "enabled" : "not enabled"}.
          These values are development settings, not a final retention policy.
        </p>
      </section>

      <section>
        <h2>7. Recipients and international transfers</h2>
        <p>
          Hosting, email, analytics, file storage and database providers have not all
          been selected. Before launch, this notice must identify relevant recipient
          categories, processing locations, data-processing agreements and safeguards
          for any international transfers.
        </p>
      </section>

      <section>
        <h2>8. Your rights</h2>
        <p>
          Depending on the applicable law, individuals may have rights to information,
          access, correction, deletion, restriction, objection, portability, withdrawal
          of consent and complaint to a supervisory authority. A production contact and
          request-handling process must be confirmed before launch.
        </p>
      </section>

      <section>
        <h2>9. Automated decisions</h2>
        <p>
          The style quiz and fit flags use deterministic rules. They do not make a
          legally binding decision, automatically accept a project or replace human
          professional review.
        </p>
      </section>
    </LegalPage>
  );
}
