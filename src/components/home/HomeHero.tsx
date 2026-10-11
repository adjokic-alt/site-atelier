import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section aria-label="Welcome" className="relative isolate h-[100svh] min-h-[640px] max-h-[980px] overflow-hidden bg-ink-900">
      <Image
        src="/images/inspiration/industrial-brick-living-room.jpg"
        alt="Industrial living room with a brick wall, leather sofa and black steel shelving"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="atelier-drift object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,17,14,.38)_0%,rgba(20,17,14,0)_28%,rgba(20,17,14,0)_50%,rgba(20,17,14,.6)_100%)]" />

      <div className="relative mx-auto flex h-full w-full max-w-[1440px] items-end px-5 pb-12 sm:px-8 md:pb-20 lg:px-14 lg:pb-24">
        <div className="flex w-full flex-wrap items-end justify-between gap-8 text-white">
          <div className="max-w-4xl">
            <h1 className="atelier-rise font-display text-[clamp(3rem,7.4vw,7rem)] leading-[0.98] text-white">
              Create a home that feels like you.
            </h1>
            <div className="atelier-rise mt-10 flex flex-wrap gap-3 [animation-delay:200ms]">
              <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-white px-7 text-[15px] font-semibold text-ink-900 hover:bg-white/90">
                Explore Inspiration
              </Link>
              <Link href="/moodboard" className="focus-ring inline-flex min-h-[52px] items-center rounded-full border border-white/70 px-7 text-[15px] font-medium text-white hover:bg-white/10">
                Build a Moodboard
              </Link>
            </div>
            <Link href="/styles/not-sure" className="atelier-rise focus-ring mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm text-[15px] text-white/90 underline underline-offset-4 [animation-delay:350ms] hover:text-white">
              Not sure of your style? Take the 45-second quiz <span aria-hidden="true">→</span>
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.12em] text-white/85">Industrial · Living room</p>
        </div>
      </div>
    </section>
  );
}
