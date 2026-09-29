import Link from "next/link";

const steps = [
  { number: "01", title: "Discover your style", text: "Compare seven directions and learn what distinguishes each one.", href: "/styles" },
  { number: "02", title: "Save what resonates", text: "Collect room references without having to explain every choice.", href: "/inspiration" },
  { number: "03", title: "Reveal the patterns", text: "Review recurring styles, spaces, materials and colours in your moodboard.", href: "/moodboard" },
  { number: "04", title: "Build your brief", text: "Bring visual direction, scope, priorities, budget and timeline into one document.", href: "/brief" },
];

export function HomeProcess() {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">How it works</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Clarity grows one decision at a time.</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <Link key={step.number} href={step.href} className="focus-ring group min-h-72 bg-surface p-6 transition hover:bg-paper md:p-8">
              <p className="text-xs font-semibold tracking-[.1em] text-accent">{step.number}</p>
              <h3 className="mt-10 font-display text-h2 text-ink-900">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-700">{step.text}</p>
              <span className="mt-8 inline-flex text-sm font-semibold text-ink-900">Continue <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
