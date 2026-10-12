import type { Metadata } from "next";
import Link from "next/link";
import { HowItWorksSteps } from "@/components/how-it-works/HowItWorksSteps";
import { QuizButton } from "@/components/ui/QuizButton";

export const metadata: Metadata = {
  title: "How it works",
  description: "Four quiet steps from a feeling to a finished home brief: save what you love, find your style, describe your home, receive your brief.",
};

const pad = "px-5 sm:px-8 lg:px-14";
const wrap = "mx-auto max-w-[1328px]";

export default function HowItWorksPage() {
  return (
    <main>
      <div className={`${pad} pb-[clamp(72px,10vw,140px)] pt-[clamp(56px,8vw,112px)]`}>
        <div className={wrap}>
          <header className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
            <h1 className="font-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] text-ink-900">How it works</h1>
            <p className="max-w-[520px] font-display text-[clamp(1.5rem,2.4vw,1.9rem)] italic leading-[1.25] text-ink-700">
              From a feeling to a finished brief, in four quiet steps.
            </p>
          </header>

          <div className="mt-[clamp(48px,7vw,96px)]">
            <HowItWorksSteps />
          </div>

          <section aria-label="Good to know" className="mt-[clamp(80px,11vw,150px)] grid gap-10 border-t border-border pt-12 md:grid-cols-[280px_1fr] md:gap-14">
            <p className="text-[13px] uppercase tracking-[0.12em] text-ink-500">Good to know</p>
            <div className="grid gap-8 text-[15px] leading-[1.6] text-ink-700 sm:grid-cols-3">
              <p><b className="font-semibold text-ink-900">A few quiet minutes.</b> The whole brief fits into one sitting, with a coffee.</p>
              <p><b className="font-semibold text-ink-900">No account.</b> Your choices stay in your browser until you decide to send them.</p>
              <p><b className="font-semibold text-ink-900">Yours to keep.</b> Download the PDF any time, even before you send it.</p>
            </div>
          </section>
        </div>
      </div>

      <section aria-label="A thought on design" className={`bg-surface-sunken ${pad} py-[clamp(72px,10vw,140px)]`}>
        <figure className={`${wrap} max-w-4xl text-center`}>
          <blockquote className="font-display text-[clamp(2rem,4.4vw,3.75rem)] italic leading-[1.12] text-ink-900">
            “The details are not the details. They make the design.”
          </blockquote>
          <figcaption className="mt-6 text-[13px] uppercase tracking-[0.12em] text-ink-500">Charles Eames</figcaption>
        </figure>
      </section>

      <section aria-label="Begin" className={`${pad} py-[clamp(72px,10vw,140px)]`}>
        <div className={`${wrap} flex flex-wrap items-end justify-between gap-8`}>
          <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none text-ink-900">Begin with a picture you love.</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/inspiration" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">Explore inspiration</Link>
            <QuizButton />
          </div>
        </div>
      </section>
    </main>
  );
}
