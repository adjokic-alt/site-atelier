import type { Metadata } from "next";
import { LegalPage } from "@/components/legal";
import { businessConfig } from "@/config/business.config";
import { legalConfig } from "@/config/legal.config";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Obaveštenje o privatnosti", description: "Nacrt obaveštenja o privatnosti za aplikaciju za brief projekta." }
    : { title: "Privacy notice", description: "Development-stage privacy notice for the Site Atelier project briefing application." };
}

export default async function PrivacyPage() {
  if ((await getLocale()) === "sr") return <PrivacyPageSr />;
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
          <li>The site language you chose, kept in a cookie named “locale”.</li>
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

/** Serbian version of the draft privacy notice. */
function PrivacyPageSr() {
  return (
    <LegalPage
      eyebrow="Pravno"
      title="Obaveštenje o privatnosti"
      introduction="Ovaj nacrt objašnjava koje podatke koristi trenutni demo u pregledaču i navodi odluke koje moraju biti konačno donete pre pokretanja."
      version={legalConfig.privacyPolicyVersion}
    >
      <section>
        <h2>1. Rukovalac podacima</h2>
        <p>Predloženi rukovalac: {businessConfig.legalName}. Registrovana adresa:{` ${businessConfig.registeredAddress}`}. Kontakt imejl:{` ${businessConfig.contactEmail}`}.</p>
        <p>Ovi podaci su privremeni i moraju se zameniti potvrđenim pravnim i kontakt podacima pre nego što se lični podaci počnu prikupljati u produkciji.</p>
      </section>
      <section>
        <h2>2. Podaci koje demo koristi</h2>
        <ul>
          <li>Željeni stil, materijali i moodboard.</li>
          <li>Vrsta projekta, lokacija, ciljevi, podaci o nekretnini, budžet i rokovi.</li>
          <li>Ime, imejl, opcioni broj telefona i željeni način kontakta.</li>
          <li>Nazivi lokalno izabranih fajlova, ali ne i njihov sadržaj u ovoj fazi.</li>
          <li>Tehnički podaci o zahtevu koje hosting platforma uobičajeno obrađuje kada se pozove serverska ruta.</li>
          <li>Izabrani jezik sajta, sačuvan u kolačiću „locale“.</li>
        </ul>
      </section>
      <section>
        <h2>3. Gde se nacrt čuva</h2>
        <p>Pre slanja, aktivni brief se čuva u localStorage-u trenutnog pregledača. Ne sinhronizuje se automatski između pregledača ili uređaja. Brisanjem podataka pregledača lokalni nacrt može biti obrisan.</p>
      </section>
      <section>
        <h2>4. Obrada na serveru u demo režimu</h2>
        <p>Rute za PDF i demo slanje primaju brief radi provere i obrade u memoriji. Trenutni demo ispisuje preglede imejlova u serverski log i ne pravi namerno trajan zapis o klijentu niti šalje pravi imejl.</p>
      </section>
      <section>
        <h2>5. Svrhe i pravni osnovi</h2>
        <p>Svrhe i pravni osnovi za produkciju moraju se dokumentovati pre pokretanja. Moguće svrhe uključuju odgovaranje na upite za projekte, izradu traženih PDF-ova, sprečavanje zloupotrebe, održavanje bezbednosti i ispunjavanje zakonskih obaveza. Odgovarajući pravni osnov mora se potvrditi za svaku svrhu i nadležnost.</p>
      </section>
      <section>
        <h2>6. Čuvanje podataka</h2>
        <p>Trenutna konfiguracija predlaže {legalConfig.retention.draftRetentionDays} dana za nacrte i {legalConfig.retention.submittedBriefRetentionDays} dana za poslate briefove. Automatsko brisanje je trenutno {legalConfig.retention.autoDeleteEnabled ? "uključeno" : "isključeno"}. Ovo su razvojna podešavanja, a ne konačna politika čuvanja.</p>
      </section>
      <section>
        <h2>7. Primaoci i prenos u inostranstvo</h2>
        <p>Pružaoci usluga hostinga, imejla, analitike, skladištenja fajlova i baze podataka još nisu svi izabrani. Pre pokretanja ovo obaveštenje mora navesti kategorije primalaca, lokacije obrade, ugovore o obradi podataka i zaštitne mere za svaki prenos u inostranstvo.</p>
      </section>
      <section>
        <h2>8. Vaša prava</h2>
        <p>U zavisnosti od važećeg zakona, imate pravo na informacije, pristup, ispravku, brisanje, ograničenje obrade, prigovor, prenosivost, povlačenje saglasnosti i pritužbu nadzornom organu. Kontakt i postupak za zahteve u produkciji moraju se potvrditi pre pokretanja.</p>
      </section>
      <section>
        <h2>9. Automatizovane odluke</h2>
        <p>Kviz stila i oznake usklađenosti koriste determinisana pravila. Oni ne donose pravno obavezujuće odluke, ne prihvataju projekat automatski i ne zamenjuju stručnu procenu čoveka.</p>
      </section>
    </LegalPage>
  );
}
