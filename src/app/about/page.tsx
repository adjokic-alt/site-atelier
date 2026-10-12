import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "A small studio led by architect Aleksandar Đokić, designing better living spaces one person at a time.",
};

const pad = "px-5 sm:px-8 lg:px-14";
const wrap = "mx-auto max-w-[1328px]";
const label = "font-sans text-[13px] uppercase tracking-[0.12em] text-ink-500";

const contact = {
  name: "Aleksandar Đokić",
  title: "Master of Architecture",
  phone: "+381 64 118 3004",
  phoneHref: "tel:+381641183004",
  email: "adjokic@gmail.com",
};

const principles = [
  { title: "Listen first.", body: "Before a single line is drawn, we want to understand how you live — your mornings, your light, the things you keep and the things you would rather not see." },
  { title: "One home, one person.", body: "No templates and no catalogue rooms. Two people with the same apartment deserve two different homes." },
  { title: "Calm that lasts.", body: "Honest materials, good daylight and fewer, better things — rooms that still feel right long after the trend has moved on." },
];

export default function AboutPage() {
  return (
    <main>
      {/* Opening */}
      <section className={`${pad} pb-[clamp(72px,10vw,140px)] pt-[clamp(56px,8vw,112px)]`}>
        <div className={`${wrap} grid items-center gap-[clamp(48px,7vw,112px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`}>
          <div>
            <p className={`${label} mb-6`}>About the studio</p>
            <h1 className="font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">Homes made for one person at a time.</h1>
            <p className="mt-8 max-w-[560px] font-display text-[clamp(1.5rem,2.4vw,1.9rem)] italic leading-[1.25] text-ink-700">
              A small studio for people who want their home to feel like their own — not like anyone else’s.
            </p>
          </div>
          <figure className="mx-auto w-full max-w-[360px] text-center lg:mx-0 lg:justify-self-end">
            <div className="relative mx-auto aspect-square w-[min(78vw,340px)] overflow-hidden rounded-full bg-ink-900 shadow-[0_24px_60px_rgba(30,28,25,0.16)]">
              <Image src="/images/about/aleksandar-djokic.jpg" alt="Portrait of Aleksandar Đokić" fill priority sizes="340px" className="object-cover" />
            </div>
            <figcaption className="mt-6">
              <span className="block font-display text-[28px] leading-tight text-ink-900">{contact.name}</span>
              <span className="mt-1 block text-[13px] uppercase tracking-[0.12em] text-ink-500">{contact.title}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Belief */}
      <section aria-labelledby="belief" className={`${pad} pb-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} grid gap-8 border-t border-ink-900 pt-12 md:grid-cols-[280px_1fr] md:gap-14`}>
          <h2 id="belief" className={label}>Why we exist</h2>
          <div className="max-w-[760px] space-y-6 text-[clamp(1.125rem,1.6vw,1.3rem)] leading-[1.7] text-ink-700">
            <p className="font-display text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.12] text-ink-900">Most homes are designed for an average person who does not exist.</p>
            <p>We start from the opposite end: you. The way morning light reaches your kitchen, where the books end up, how you want an ordinary evening to feel.</p>
            <p>That is why everything here begins with pictures, not forms. You save what moves you, we read the pattern, and the brief that reaches the designer already sounds like you.</p>
            <p className="text-ink-900">The aim is simple — better living spaces, one person at a time.</p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section aria-label="Principles" className={`${pad} pb-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} grid gap-10 md:grid-cols-[280px_1fr] md:gap-14`}>
          <p className={label}>How we work</p>
          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {principles.map((p, i) => (
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
      <section aria-label="A quiet room" className={pad}>
        <div className={`${wrap} relative h-[clamp(320px,48vw,640px)] overflow-hidden rounded`}>
          <Image src="/images/studios/scandinavian/scandinavian-workspace.png" alt="A calm, daylit workspace with a timber desk" fill sizes="(min-width:1440px) 1328px, 100vw" className="object-cover" />
        </div>
      </section>

      {/* Note + quote */}
      <section aria-labelledby="note" className={`${pad} py-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} grid gap-14 lg:grid-cols-2 lg:gap-24`}>
          <div>
            <h2 id="note" className={`${label} mb-6`}>A note from Aleksandar</h2>
            <div className="space-y-5 text-[17px] leading-[1.75] text-ink-700">
              <p>I trained as an architect, and the question I keep returning to is never “what is in fashion?” but “who will live here?”.</p>
              <p>This studio is my answer to that question: a calm, visual way for you to show me what you love and how you live — so that the home we design together fits you, and only you.</p>
            </div>
            <p className="mt-8 font-display text-[34px] italic leading-none text-ink-900">Aleksandar</p>
          </div>
          <figure className="self-center border-l border-accent pl-8">
            <blockquote className="font-display text-[clamp(1.9rem,3.2vw,2.75rem)] italic leading-[1.18] text-ink-900">
              “Have nothing in your houses that you do not know to be useful, or believe to be beautiful.”
            </blockquote>
            <figcaption className="mt-5 text-[13px] uppercase tracking-[0.12em] text-ink-500">William Morris, 1880</figcaption>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section aria-labelledby="talk" className={`bg-surface-sunken ${pad} py-[clamp(72px,10vw,120px)]`}>
        <div className={`${wrap} grid items-end gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]`}>
          <div>
            <h2 id="talk" className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">Let’s talk about your home.</h2>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.7] text-ink-700">The easiest start is your brief — it takes a few quiet minutes. Or simply write or call.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">Start my brief</Link>
              <a href={`mailto:${contact.email}`} className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-ink-900 px-7 text-[15px] font-medium text-ink-900 hover:bg-surface">Write an email</a>
            </div>
          </div>
          <address className="rounded-md bg-surface p-8 not-italic shadow-[0_24px_60px_rgba(30,28,25,0.08)]">
            <p className="font-display text-[30px] leading-tight text-ink-900">{contact.name}</p>
            <p className="mt-1 text-[13px] uppercase tracking-[0.12em] text-ink-500">{contact.title}</p>
            <dl className="mt-6 grid grid-cols-[72px_1fr] gap-y-3 border-t border-border pt-6 text-[15px]">
              <dt className="text-ink-500">Phone</dt>
              <dd><a href={contact.phoneHref} className="focus-ring rounded-sm text-ink-900 underline-offset-4 hover:underline">{contact.phone}</a></dd>
              <dt className="text-ink-500">Email</dt>
              <dd><a href={`mailto:${contact.email}`} className="focus-ring rounded-sm text-ink-900 underline-offset-4 hover:underline">{contact.email}</a></dd>
            </dl>
          </address>
        </div>
      </section>
    </main>
  );
}
