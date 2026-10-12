import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RotatingQuote } from "@/components/about/RotatingQuote";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const pad = "px-5 sm:px-8 lg:px-14";
const wrap = "mx-auto max-w-[1328px]";
const label = "font-sans text-[13px] uppercase tracking-[0.12em] text-ink-500";

const contact = {
  name: "Aleksandar Đokić",
  phone: "+381 64 118 3004",
  phoneHref: "tel:+381641183004",
  email: "adjokic@gmail.com",
};

const copy = {
  en: {
    metaTitle: "About", metaDesc: "A small studio led by architect Aleksandar Đokić, designing better living spaces one person at a time.",
    title: "Master of Architecture", eyebrow: "About the studio", h1: "Homes made for one person at a time.",
    line: "A small studio for people who want their home to feel like their own — not like anyone else’s.",
    why: "Why we exist", whyLead: "Most homes are designed for an average person who does not exist.",
    whyBody: ["We start from the opposite end: you. The way morning light reaches your kitchen, where the books end up, how you want an ordinary evening to feel.", "That is why everything here begins with pictures, not forms. You save what moves you, we read the pattern, and the brief that reaches the designer already sounds like you."],
    whyEnd: "The aim is simple — better living spaces, one person at a time.",
    principlesLabel: "Principles", how: "How we work",
    principles: [
      { title: "Listen first.", body: "Before a single line is drawn, we want to understand how you live — your mornings, your light, the things you keep and the things you would rather not see." },
      { title: "One home, one person.", body: "No templates and no catalogue rooms. Two people with the same apartment deserve two different homes." },
      { title: "Calm that lasts.", body: "Honest materials, good daylight and fewer, better things — rooms that still feel right long after the trend has moved on." },
    ],
    room: "A quiet room", roomAlt: "A calm, daylit workspace with a timber desk",
    note: "A note from Aleksandar",
    noteBody: ["I trained as an architect, and the question I keep returning to is never “what is in fashion?” but “who will live here?”.", "This studio is my answer to that question: a calm, visual way for you to show me what you love and how you live — so that the home we design together fits you, and only you."],
    talk: "Let’s talk about your home.", talkBody: "The easiest start is your brief — it takes a few quiet minutes. Or simply write or call.",
    brief: "Start my brief", write: "Write an email", phone: "Phone", email: "Email", portrait: "Portrait of Aleksandar Đokić",
  },
  sr: {
    metaTitle: "O nama", metaDesc: "Mali studio arhitekte Aleksandra Đokića koji stvara bolje prostore za život, za svakog čoveka posebno.",
    title: "Master inženjer arhitekture", eyebrow: "O studiju", h1: "Domovi stvoreni za jednog po jednog čoveka.",
    line: "Mali studio za ljude koji žele da njihov dom liči na njih — a ne na bilo koga drugog.",
    why: "Zašto postojimo", whyLead: "Većina domova se projektuje za prosečnog čoveka koji ne postoji.",
    whyBody: ["Mi krećemo sa suprotne strane: od vas. Od toga kako jutarnje svetlo ulazi u vašu kuhinju, gde završavaju knjige, kakvo želite da bude jedno obično veče.", "Zato ovde sve počinje slikama, a ne formularima. Vi čuvate ono što vas dotakne, mi čitamo obrazac, a brief koji stigne do dizajnera već zvuči kao vi."],
    whyEnd: "Cilj je jednostavan — bolji prostori za život, za svakog čoveka posebno.",
    principlesLabel: "Principi", how: "Kako radimo",
    principles: [
      { title: "Prvo slušamo.", body: "Pre nego što se povuče i jedna linija, želimo da razumemo kako živite — vaša jutra, vaše svetlo, stvari koje čuvate i one koje radije ne biste gledali." },
      { title: "Jedan dom, jedan čovek.", body: "Bez šablona i bez kataloških prostorija. Dvoje ljudi sa istim stanom zaslužuju dva različita doma." },
      { title: "Mir koji traje.", body: "Iskreni materijali, dobro dnevno svetlo i manje, a boljih stvari — prostori koji i dalje prijaju dugo nakon što trend prođe." },
    ],
    room: "Tiha prostorija", roomAlt: "Miran radni prostor obasjan dnevnim svetlom, sa drvenim stolom",
    note: "Reč od Aleksandra",
    noteBody: ["Školovao sam se za arhitektu, a pitanje kojem se stalno vraćam nikada nije „šta je u modi?“, već „ko će ovde živeti?“.", "Ovaj studio je moj odgovor na to pitanje: miran, vizuelan način da mi pokažete šta volite i kako živite — kako bi dom koji zajedno osmislimo odgovarao vama, i samo vama."],
    talk: "Hajde da razgovaramo o vašem domu.", talkBody: "Najlakše je da počnete od briefa — potrebno je samo nekoliko mirnih minuta. Ili mi jednostavno pišite ili pozovite.",
    brief: "Započnite brief", write: "Pošaljite imejl", phone: "Telefon", email: "Imejl", portrait: "Portret Aleksandra Đokića",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = pick(copy, await getLocale());
  return { title: t.metaTitle, description: t.metaDesc };
}

export default async function AboutPage() {
  const t = pick(copy, await getLocale());
  return (
    <main>
      {/* Opening */}
      <section className={`${pad} pb-[clamp(72px,10vw,140px)] pt-[clamp(56px,8vw,112px)]`}>
        <div className={wrap}>
          <div className="max-w-[900px]">
            <p className={`${label} mb-6`}>{t.eyebrow}</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">{t.h1}</h1>
            <p className="mt-8 max-w-[560px] font-display text-[clamp(1.5rem,2.4vw,1.9rem)] italic leading-[1.25] text-ink-700">
              {t.line}
            </p>
          </div>
        </div>
      </section>

      {/* Belief */}
      <section aria-labelledby="belief" className={`${pad} pb-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} grid gap-8 border-t border-ink-900 pt-12 md:grid-cols-[280px_1fr] md:gap-14`}>
          <h2 id="belief" className={label}>{t.why}</h2>
          <div className="max-w-[760px] space-y-6 text-[clamp(1.125rem,1.6vw,1.3rem)] leading-[1.7] text-ink-700">
            <p className="font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.12] text-ink-900">{t.whyLead}</p>
            {t.whyBody.map((para) => <p key={para}>{para}</p>)}
            <p className="text-ink-900">{t.whyEnd}</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-label={t.principlesLabel} className={`${pad} pb-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} grid gap-10 md:grid-cols-[280px_1fr] md:gap-14`}>
          <p className={label}>{t.how}</p>
          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {t.principles.map((p, i) => (
              <li key={p.title} className="border-t border-border pt-6">
                <span className="text-xs tabular-nums text-accent">0{i + 1}</span>
                <h3 className="mt-3 font-display text-[30px] leading-tight text-ink-900">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-ink-700">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Photograph */}
      <section aria-label={t.room} className={pad}>
        <div className={`${wrap} relative h-[clamp(320px,48vw,640px)] overflow-hidden rounded`}>
          <Image src="/images/studios/scandinavian/scandinavian-workspace.png" alt={t.roomAlt} fill sizes="(min-width:1440px) 1328px, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Note + quote */}
      <section aria-labelledby="note" className={`${pad} py-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} grid gap-14 lg:grid-cols-2 lg:gap-24`}>
          <div>
            <h2 id="note" className={`${label} mb-6`}>{t.note}</h2>
            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-700">
              {t.noteBody.map((para) => <p key={para}>{para}</p>)}
            </div>
            <p className="mt-8 font-display text-[34px] italic leading-none text-ink-900">Aleksandar</p>
          </div>
          <RotatingQuote />
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="talk" className={`bg-surface-sunken ${pad} py-[clamp(72px,10vw,120px)]`}>
        <div className={`${wrap} grid items-end gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`}>
          <div>
            <h2 id="talk" className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">{t.talk}</h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-ink-700">{t.talkBody}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">{t.brief}</Link>
              <a href={`mailto:${contact.email}`} className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-7 text-[15px] font-medium text-ink-900 hover:bg-surface">{t.write}</a>
            </div>
          </div>
          <address className="flex items-center gap-6 rounded-md bg-surface p-6 not-italic shadow-[0_24px_60px_rgba(30,28,25,0.08)] sm:p-8">
            <div className="min-w-0 flex-1">
            <p className="font-display text-[30px] leading-tight text-ink-900">{contact.name}</p>
            <p className="mt-1 text-[13px] uppercase tracking-[0.12em] text-ink-500">{t.title}</p>
            <dl className="mt-6 grid grid-cols-[64px_1fr] gap-y-3 border-t border-border pt-6 text-[15px]">
              <dt className="text-ink-500">{t.phone}</dt>
              <dd><a href={contact.phoneHref} className="focus-ring rounded-sm text-ink-900 underline-offset-4 hover:underline">{contact.phone}</a></dd>
              <dt className="text-ink-500">{t.email}</dt>
              <dd><a href={`mailto:${contact.email}`} className="focus-ring rounded-sm text-ink-900 underline-offset-4 hover:underline">{contact.email}</a></dd>
            </dl>
            </div>
            <div className="relative aspect-square w-[clamp(96px,22vw,168px)] shrink-0 overflow-hidden rounded-full bg-ink-900 shadow-[0_12px_32px_rgba(30,28,25,0.18)]">
              <Image src="/images/about/aleksandar-djokic.jpg" alt={t.portrait} fill sizes="168px" className="object-cover" />
            </div>
          </address>
        </div>
      </section>
    </main>
  );
}
