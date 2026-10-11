const isItems = ["A structured preparation tool", "A visual direction builder", "An editable project brief", "A clearer basis for professional conversations"];
const isNotItems = ["A substitute for architects or engineers", "A construction specification", "A permit or structural assessment", "A guarantee of service availability"];

export function AboutBoundaries() {
  return (
    <section className="border-y border-border bg-paper py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <Boundary title="Site Atelier is" items={isItems} />
        <Boundary title="Site Atelier is not" items={isNotItems} muted />
      </div>
    </section>
  );
}

function Boundary({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return <article className={`rounded-xl border border-border p-6 md:p-8 ${muted ? "bg-surface-sunken" : "bg-surface shadow-sm"}`}><h2 className="font-display text-h2 text-ink-900">{title}</h2><ul className="mt-6 space-y-4">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-ink-700"><span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul></article>;
}
