import Link from "next/link";

const steps = [
  { number: "01", title: "Explore styles", result: "A shortlist of directions that feel relevant.", text: "Compare seven complete Style Studios and learn the principles, materials and cautions behind each direction.", href: "/styles" },
  { number: "02", title: "Save references", result: "A visual collection tied to real rooms.", text: "Save illustrations that resonate without needing to explain every choice immediately.", href: "/inspiration" },
  { number: "03", title: "Review the moodboard", result: "Visible patterns in style, space, material and colour.", text: "The board analyses saved tags and samples dominant colours from the selected reference images.", href: "/moodboard" },
  { number: "04", title: "Build the brief", result: "One editable project document.", text: "Add project scope, rooms, goals, constraints, budget, timing and contact details to the same draft.", href: "/brief" },
  { number: "05", title: "Submit the project", result: "A reference code and stored inquiry.", text: "Browser and server validation protect the submission before the brief is stored and emails are sent.", href: "/inquiry/review" },
  { number: "06", title: "Receive the next step", result: "A clearer basis for human follow-up.", text: "The submitted brief, PDF and review flags provide context for an honest response about fit and availability.", href: "/services" },
];

export function ProcessTimelineRedesign() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Six connected steps</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Each action makes the next decision easier.</h2></div>

        <ol className="mt-12 space-y-5">
          {steps.map((step) => (
            <li key={step.number} className="grid gap-5 rounded-xl border border-border bg-surface p-6 shadow-sm md:grid-cols-[80px_1fr_1fr_auto] md:items-center md:p-8">
              <p className="font-display text-3xl text-accent">{step.number}</p>
              <div><h3 className="font-display text-h2 text-ink-900">{step.title}</h3><p className="mt-3 text-sm leading-7 text-ink-700">{step.text}</p></div>
              <div className="rounded-lg bg-surface-sunken p-4"><p className="text-xs font-semibold uppercase tracking-[.08em] text-ink-500">Result</p><p className="mt-2 text-sm leading-7 text-ink-900">{step.result}</p></div>
              <Link href={step.href} className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-sm border border-ink-900 px-4 text-sm font-semibold text-ink-900">Open</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
