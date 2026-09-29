import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Style direction",
    summary: "Turn visual preferences into a coherent starting point for how the space should feel and function.",
    outcome: "A clearer primary style, optional secondary influence, material preferences and a saved moodboard.",
    includes: ["Seven Style Studios", "Visual inspiration gallery", "Adaptive moodboard", "Style and material signals"],
    href: "/styles",
  },
  {
    number: "02",
    title: "Project brief",
    summary: "Organise rooms, priorities, constraints, budget and timing into one editable project document.",
    outcome: "A reviewable brief and customer-safe PDF that can support comparison and discussion.",
    includes: ["Project and property details", "Rooms and practical priorities", "Budget and preferred timing", "Goals, constraints and open questions"],
    href: "/brief",
  },
  {
    number: "03",
    title: "Design inquiry",
    summary: "Submit the completed brief for an honest review of scope, location and the support requested.",
    outcome: "A reference code, stored inquiry, confirmation email and a clearer next conversation.",
    includes: ["Server-side validation", "Location and completeness review", "PDF attachment", "Human follow-up context"],
    href: "/inquiry/project",
  },
];

export function ServiceOfferings() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">What the platform supports</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 md:text-h1">Three layers of clarity before detailed design begins.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.number} className="flex flex-col rounded-xl border border-border bg-surface p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold tracking-[.1em] text-accent">{service.number}</p>
              <h3 className="mt-6 font-display text-h2 text-ink-900">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-700">{service.summary}</p>
              <div className="mt-6 rounded-lg bg-surface-sunken p-4">
                <p className="text-xs font-semibold uppercase tracking-[.08em] text-ink-500">Outcome</p>
                <p className="mt-2 text-sm leading-7 text-ink-900">{service.outcome}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink-700"><span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />{item}</li>
                ))}
              </ul>
              <Link href={service.href} className="focus-ring mt-8 inline-flex min-h-[48px] items-center justify-center rounded-sm border border-ink-900 px-5 text-sm font-semibold text-ink-900 lg:mt-auto lg:translate-y-6">
                Explore {service.title.toLowerCase()}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
