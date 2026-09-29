import Link from "next/link";

const details = ["Project country", "What should change", "Current property stage", "Rooms and priorities", "Preferred timing", "Budget range or uncertainty"];

export function ContactPreparation() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-10">
        <div><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Before sending a project inquiry</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">A few concrete details make the response more useful.</h2><p className="mt-5 text-base leading-8 text-ink-700">The brief can still contain open questions, but location and a short explanation of what should change provide essential context.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href="/inquiry/project" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Describe my project</Link><Link href="/services" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">Understand the services</Link></div></div>
        <ul className="grid gap-3 sm:grid-cols-2">{details.map((detail, index) => <li key={detail} className="rounded-lg border border-border bg-surface p-4"><span className="text-xs font-semibold text-accent">0{index + 1}</span><p className="mt-3 text-sm font-medium text-ink-900">{detail}</p></li>)}</ul>
      </div>
    </section>
  );
}
