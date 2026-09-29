import Link from "next/link";

const checks = [
  ["01", "Validation", "Required project and contact fields are checked in the browser and again on the server."],
  ["02", "Fit review", "Location, requested support, completeness and timing identify what needs attention."],
  ["03", "Next conversation", "The stored brief and PDF provide a clearer starting point for a human response."],
];

export function AfterSubmission() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">What happens after submission</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">A review starts with the brief, not with assumptions.</h2><p className="mt-5 text-base leading-8 text-ink-700">Submission creates a stable reference and provides the same structured project context to both the customer and reviewer.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{checks.map(([number, title, text]) => <article key={number} className="rounded-xl border border-border bg-surface p-6 md:p-8"><p className="text-xs font-semibold tracking-[.1em] text-accent">{number}</p><h3 className="mt-5 font-display text-h3 text-ink-900">{title}</h3><p className="mt-3 text-sm leading-7 text-ink-700">{text}</p></article>)}</div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-ink-900 px-6 text-sm font-semibold text-white">Start the inquiry</Link><Link href="/services" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-ink-900 px-6 text-sm font-semibold text-ink-900">Understand the services</Link></div>
      </div>
    </section>
  );
}
