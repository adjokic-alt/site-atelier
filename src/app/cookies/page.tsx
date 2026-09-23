import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { legalConfig } from "@/config/legal.config";

export const metadata: Metadata = {
  title: "Cookie and Local Storage Notice | Site Atelier",
  description: "How the current Site Atelier demo uses browser storage and future cookie categories.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie and local storage notice"
      introduction="The current demo relies mainly on browser localStorage and sessionStorage for functional project state. Analytics, marketing and preference cookies are not enabled by the current implementation."
      version={legalConfig.privacyPolicyVersion}
    >
      <section>
        <h2>1. Strictly necessary browser storage</h2>
        <p>
          localStorage stores the active project brief so that style selections,
          moodboard items and inquiry answers remain available after a page refresh in
          the same browser.
        </p>
        <p>
          sessionStorage temporarily stores validation messages and the latest demo
          submission result for the current browser session.
        </p>
      </section>

      <section>
        <h2>2. Current storage keys</h2>
        <ul>
          <li><code>site-atelier:brief:v1</code> - active local brief draft.</li>
          <li><code>site-atelier:inquiry-errors</code> - temporary validation state.</li>
          <li><code>site-atelier:last-submission</code> - latest demo submission response for the current session.</li>
        </ul>
      </section>

      <section>
        <h2>3. Analytics and marketing</h2>
        <p>
          The current implementation does not intentionally set analytics or marketing
          cookies. If analytics, advertising, embedded media or third-party scheduling
          tools are added, this notice and the consent mechanism must be updated before
          those technologies are enabled.
        </p>
      </section>

      <section>
        <h2>4. Managing browser storage</h2>
        <p>
          Browser settings can clear site data. Clearing storage will normally remove
          the local brief. The application also provides a â€œStart overâ€ action that
          removes the active brief draft.
        </p>
      </section>

      <section>
        <h2>5. Consent configuration</h2>
        <p>
          The current development configuration describes strict consent mode as
           not enabled. A
          production consent tool is still required if non-essential cookies or similar
          technologies are introduced.
        </p>
      </section>
    </LegalPage>
  );
}

