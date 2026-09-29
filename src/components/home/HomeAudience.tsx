const groups = [
  { title: "Homeowners", text: "Organise ideas before committing to costly design decisions." },
  { title: "Interior designers", text: "Receive clearer project information before discovery begins." },
  { title: "Studios and contractors", text: "Reduce ambiguity around style, scope, priorities and expectations." },
];

export function HomeAudience() {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Built for better alignment</p><h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Useful before the project officially begins.</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">{groups.map((group) => <article key={group.title} className="rounded-xl border border-border bg-surface p-6 md:p-8"><h3 className="font-display text-h2 text-ink-900">{group.title}</h3><p className="mt-4 text-sm leading-7 text-ink-700">{group.text}</p></article>)}</div>
      </div>
    </section>
  );
}
