import Link from "next/link";

interface Pairing { name: string; href: `/styles/${string}`; description: string }

export function StudioPairings({ styleName, heading, pairings }: { styleName: string; heading: string; pairings: readonly Pairing[] }) {
  return (
    <section className="border-y border-border bg-surface-sunken py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">Compatible influences</p>
        <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight text-ink-900 md:text-h1">{heading}</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {pairings.map((pairing) => (
            <Link key={pairing.name} href={pairing.href} className="focus-ring group rounded-xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:shadow-lg md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[.1em] text-accent">{styleName} +</p>
              <h3 className="mt-3 font-display text-h2 text-ink-900">{pairing.name}</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-700">{pairing.description}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-ink-900 group-hover:underline">Explore pairing <span aria-hidden="true" className="ml-2">→</span></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
