import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-ink-900 lg:min-h-[820px]">
      <Image
        src="/images/home/home-hero.png"
        alt="Warm contemporary European apartment with an open living room, dining area and kitchen"
        fill
        priority
        quality={92}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,17,15,.82)_0%,rgba(19,17,15,.58)_38%,rgba(19,17,15,.12)_72%,rgba(19,17,15,.04)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

      <div className="relative mx-auto flex min-h-[720px] w-full max-w-7xl items-end px-5 py-12 sm:px-8 md:items-center lg:min-h-[820px] lg:px-10">
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-white/70">Site Atelier</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-[4.8rem]">
            Turn scattered ideas into a clear interior direction.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
            Explore styles, save visual references and build a structured project brief before speaking with a designer.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/style-quiz" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900 hover:bg-white/90">
              Find my style
            </Link>
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/60 bg-black/10 px-6 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10">
              Explore inspiration
            </Link>
          </div>

          <ul className="mt-10 grid max-w-3xl grid-cols-2 gap-4 border-t border-white/25 pt-6 text-sm text-white/80 sm:grid-cols-4">
            <li><strong className="block text-white">7</strong>Style studios</li>
            <li><strong className="block text-white">Visual</strong>Moodboard</li>
            <li><strong className="block text-white">Structured</strong>Project brief</li>
            <li><strong className="block text-white">Downloadable</strong>PDF</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
