const principles = [
  { number: "01", title: "Clarity before commitment", text: "Style, scope, priorities, location, budget and uncertainty are more useful when visible together." },
  { number: "02", title: "Uncertainty is valid information", text: "Unknown budgets, open style choices and unresolved property questions can remain clearly marked." },
  { number: "03", title: "Inspiration should become structure", text: "Saved references gain meaning when connected to rooms, materials, goals and practical decisions." },
  { number: "04", title: "Humans make final decisions", text: "Automated summaries support preparation, while professional judgement remains essential." },
];

export function AboutPrinciples() {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Working principles</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Designed around honest, editable information.</h2></div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <article key={principle.number} className="min-h-64 bg-surface p-6 md:p-8"><p className="text-xs font-semibold tracking-[.1em] text-accent">{principle.number}</p><h3 className="mt-8 font-display text-h3 text-ink-900">{principle.title}</h3><p className="mt-4 text-sm leading-7 text-ink-700">{principle.text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
