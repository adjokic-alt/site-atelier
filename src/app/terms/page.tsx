import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { businessConfig } from "@/config/business.config";
import { legalConfig } from "@/config/legal.config";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Uslovi korišćenja", description: "Nacrt uslova korišćenja demo aplikacije za brief projekta." }
    : { title: "Terms of use", description: "Development-stage terms for using the Site Atelier project briefing demo." };
}

export default async function TermsPage() {
  if ((await getLocale()) === "sr") return <TermsPageSr />;
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

/** Serbian version of the draft terms. */
function TermsPageSr() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Uslovi korišćenja"
      introduction="Ovi nacrti uslova opisuju trenutno demo iskustvo. Konačni uslovi za potrošače, usluge i nadležnost zahtevaju stručnu pravnu proveru pre pokretanja."
      version={legalConfig.termsVersion}
    >
      <section>
        <h2>1. Operater</h2>
        <p>Predloženi operater: {businessConfig.legalName}, na adresi{` ${businessConfig.registeredAddress}`}. Ovo su privremene vrednosti.</p>
      </section>
      <section>
        <h2>2. Svrha aplikacije</h2>
        <p>Aplikacija pomaže korisnicima da rane želje u vezi sa stilom, inspiraciju i podatke o projektu organizuju u brief koji se može menjati i PDF koji se može preuzeti.</p>
      </section>
      <section>
        <h2>3. Nije stručni ili regulisani savet</h2>
        <p>Aplikacija ne pruža statičke proračune, arhitektonsku sertifikaciju, premere, odobrenja za dozvole, pravne savete, finansijske savete, bezbednosna odobrenja niti konačnu tehničku specifikaciju. Za takve poslove odgovorni su kvalifikovani lokalni stručnjaci.</p>
      </section>
      <section>
        <h2>4. Nema automatskog ugovora</h2>
        <p>Popunjavanje briefa, pravljenje PDF-a ili dobijanje demo serijskog broja ne predstavlja ugovor, ne potvrđuje prihvatanje projekta, ne rezerviše kapacitet i ne garantuje da je određena usluga dostupna na nekoj lokaciji.</p>
      </section>
      <section>
        <h2>5. Procene i podaci koje unosi korisnik</h2>
        <p>Rasponi budžeta, datumi, površine i podaci o projektu su informacije za planiranje koje unosi korisnik. Nisu ponude niti provereni premeri. Korisnici treba da provere podatke pre nego što se oslone na napravljeni brief.</p>
      </section>
      <section>
        <h2>6. Ilustrativni sadržaj</h2>
        <p>Trenutne slike stilova, materijala i inspiracije označene su kao ilustrativne. Nisu dokaz o završenim projektima za klijente, zagarantovanim rezultatima niti tačnoj dostupnosti proizvoda.</p>
      </section>
      <section>
        <h2>7. Prihvatljivo korišćenje</h2>
        <ul>
          <li>Ne šaljite nezakonit, štetan ili obmanjujući sadržaj.</li>
          <li>Ne pokušavajte da zaobiđete bezbednost, provere ili ograničenja.</li>
          <li>Ne otpremajte sadržaj bez potrebnih prava i dozvola.</li>
          <li>Ne smatrajte demo serijski broj dokazom poslovnog angažmana.</li>
        </ul>
      </section>
      <section>
        <h2>8. Dostupnost i izmene</h2>
        <p>Demo se može menjati, prekidati ili resetovati. Nacrti u pregledaču mogu se izgubiti ako se obrišu podaci pregledača. Funkcije opisane kao planirane nisu zagarantovane dok ne budu uvedene i ugovorno ponuđene.</p>
      </section>
      <section>
        <h2>9. Odgovornost i merodavno pravo</h2>
        <p>Odgovarajuća ograničenja, obavezna zaštita potrošača, merodavno pravo, rešavanje sporova i nadležnost još nisu konačno utvrđeni. Ovaj deo mora se sastaviti posebno za potvrđeno pravno lice i tržišta.</p>
      </section>
    </LegalPage>
  );
}
