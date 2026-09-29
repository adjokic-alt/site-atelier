const stages = [
  { title: "Browser draft", text: "Style, inspiration and inquiry answers stay connected while the project is being prepared." },
  { title: "Server validation", text: "Required contact and project details are checked again before storage and email delivery." },
  { title: "Supabase record", text: "The submitted inquiry, reference code, brief data and delivery identifiers are stored privately." },
  { title: "Email and PDF", text: "The customer and internal reviewer receive a structured message with the generated brief attached." },
];

export function DataJourneyRedesign() {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Data journey</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">From local draft to submitted inquiry.</h2></div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage, index) => (
            <article key={stage.title} className="min-h-60 bg-surface p-6 md:p-8"><p className="text-xs font-semibold tracking-[.1em] text-accent">0{index + 1}</p><h3 className="mt-8 font-display text-h3 text-ink-900">{stage.title}</h3><p className="mt-4 text-sm leading-7 text-ink-700">{stage.text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
