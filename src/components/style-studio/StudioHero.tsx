import Image from "next/image";
import Link from "next/link";

interface StudioHeroProps {
  name: string;
  eyebrow: string;
  tagline: string;
  description: string;
  image: string;
  alt: string;
  facts: readonly { label: string; value: string }[];
}

export function StudioHero({ name, eyebrow, tagline, description, image, alt, facts }: StudioHeroProps) {
  return (
    <section className="relative isolate min-h-[680px] w-full overflow-hidden bg-ink-900 lg:min-h-[760px]">
      <Image src={image} alt={alt} fill priority quality={92} sizes="100vw" className="object-cover object-center" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,21,18,.82)_0%,rgba(24,21,18,.56)_38%,rgba(24,21,18,.12)_72%,rgba(24,21,18,.03)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

      <div className="relative mx-auto flex min-h-[680px] w-full max-w-7xl items-end px-5 py-12 sm:px-8 md:items-center lg:min-h-[760px] lg:px-10">
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-white/75">{eyebrow}</p>
          <p className="mt-4 text-sm font-medium uppercase tracking-[.1em] text-white/90">{name}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-[4.6rem]">{tagline}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">{description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/inquiry/style" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900 hover:bg-white/90">Use this direction</Link>
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/60 bg-black/10 px-6 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10">Explore inspiration</Link>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 border-t border-white/25 pt-6 text-sm sm:grid-cols-4">
            {facts.map((fact) => (
              <div key={fact.label}><dt className="text-white/60">{fact.label}</dt><dd className="mt-1 text-white">{fact.value}</dd></div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
