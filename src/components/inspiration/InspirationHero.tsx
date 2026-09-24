import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

export function InspirationHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-ink-900 sm:min-h-[720px] lg:min-h-[780px]">
      <Image
        src="/images/inspiration/inspiration-hero.png"
        alt="Illustrative neutral interior with natural materials, warm daylight and a coastal view"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,16,12,.84)_0%,rgba(20,16,12,.64)_35%,rgba(20,16,12,.20)_65%,rgba(20,16,12,.04)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,16,12,.62)_0%,transparent_38%)]" />

      <Container className="relative flex min-h-[680px] items-end py-10 sm:min-h-[720px] sm:items-center sm:py-16 lg:min-h-[780px]">
        <div className="max-w-3xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">Inspiration</p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.03] text-white sm:text-5xl md:text-6xl lg:text-[4.75rem]">
            Collect what feels right before you try to explain it.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
            Save references that resonate with you. Your moodboard will reveal
            the recurring styles, materials and atmosphere behind your choices.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#inspiration-gallery" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900 transition hover:bg-white/90">
              Explore inspiration <span aria-hidden="true" className="ml-3">↓</span>
            </a>
            <Link href="/moodboard" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-white/65 bg-black/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              Open my moodboard
            </Link>
          </div>

          <ul className="mt-10 grid max-w-2xl gap-4 border-t border-white/25 pt-6 text-sm text-white/80 sm:grid-cols-3">
            <li><strong className="block font-medium text-white">Save ideas</strong>Keep the references you love.</li>
            <li><strong className="block font-medium text-white">Find patterns</strong>Notice repeated visual choices.</li>
            <li><strong className="block font-medium text-white">Build the brief</strong>Turn inspiration into direction.</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
