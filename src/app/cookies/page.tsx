import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { legalConfig } from "@/config/legal.config";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Kolačići i lokalno skladište", description: "Kako sajt koristi skladište pregledača i kolačić za jezik." }
    : { title: "Cookies and local storage", description: "How the current Site Atelier demo uses browser storage and future cookie categories." };
}

export default async function CookiesPage() {
  if ((await getLocale()) === "sr") return <CookiesPageSr />;
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
          <li><code>locale</code> (cookie) - the language you chose for the site. On a first visit it is set from the country you visit from; after that your own choice applies. Kept for one year.</li>
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
          the local brief. The application also provides a “Start over” action that
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


/** Serbian version of the cookie and storage notice. */
function CookiesPageSr() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Obaveštenje o kolačićima i lokalnom skladištu"
      introduction="Trenutni demo se uglavnom oslanja na localStorage i sessionStorage pregledača za funkcionalno stanje projekta, uz jedan funkcionalni kolačić za izabrani jezik. Kolačići za analitiku, marketing i podešavanja nisu uključeni."
      version={legalConfig.privacyPolicyVersion}
    >
      <section>
        <h2>1. Neophodno skladište i kolačić za jezik</h2>
        <p>localStorage čuva aktivni brief, tako da izbori stila, stavke moodboarda i odgovori ostaju dostupni i posle osvežavanja stranice u istom pregledaču.</p>
        <p>sessionStorage privremeno čuva poruke o proverama i poslednji rezultat demo slanja tokom trenutne sesije.</p>
        <p>Kolačić <code>locale</code> pamti da li ste izabrali srpski ili engleski. Pri prvoj poseti jezik se bira prema državi iz koje dolazite; posle toga važi vaš izbor. Čuva se godinu dana.</p>
      </section>
      <section>
        <h2>2. Trenutni ključevi</h2>
        <ul>
          <li><code>site-atelier:brief:v1</code> — aktivni lokalni nacrt briefa.</li>
          <li><code>site-atelier:inquiry-errors</code> — privremeno stanje provera.</li>
          <li><code>site-atelier:last-submission</code> — poslednji odgovor demo slanja za trenutnu sesiju.</li>
          <li><code>locale</code> (kolačić) — izabrani jezik sajta.</li>
        </ul>
      </section>
      <section>
        <h2>3. Analitika i marketing</h2>
        <p>Trenutna verzija namerno ne postavlja kolačiće za analitiku ili marketing. Ako se dodaju analitika, oglašavanje, ugrađeni mediji ili alati trećih strana za zakazivanje, ovo obaveštenje i mehanizam saglasnosti moraju se ažurirati pre uključivanja tih tehnologija.</p>
      </section>
      <section>
        <h2>4. Upravljanje skladištem pregledača</h2>
        <p>Podešavanja pregledača omogućavaju brisanje podataka sajta. Brisanjem skladišta obično se uklanja i lokalni brief. Aplikacija nudi i opciju „Počnite iznova“ koja briše aktivni nacrt.</p>
      </section>
      <section>
        <h2>5. Podešavanje saglasnosti</h2>
        <p>Trenutna razvojna konfiguracija ne uključuje strogi režim saglasnosti. Alat za saglasnost u produkciji je i dalje potreban ako se uvedu kolačići koji nisu neophodni ili slične tehnologije.</p>
      </section>
    </LegalPage>
  );
}
