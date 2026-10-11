import type { Metadata } from "next";
import Link from "next/link";
import { InspirationMasonry } from "@/components/inspiration/InspirationMasonry";

export const metadata: Metadata = {
  title: "Inspiration | Site Atelier",
  description: "Browse real-looking rooms across seven styles, tap the heart on what you love and let your moodboard find the pattern.",
};

export default function InspirationPage() {
  return (
    <div className="px-5 pb-28 pt-[clamp(56px,8vw,104px)] sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1328px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.12em] text-ink-500">Inspiration</p>
            <h1 className="max-w-4xl font-display text-[clamp(3.25rem,7vw,6.5rem)] leading-[0.95] text-ink-900">Collect what feels right.</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-700">Tap the heart on anything you love. Your moodboard notices the pattern. The wall reshuffles every visit.</p>
          </div>
          <Link href="/moodboard" className="focus-ring inline-flex min-h-[52px] items-center rounded-full bg-ink-900 px-7 text-[15px] font-semibold text-white hover:bg-ink-700">Open my moodboard</Link>
        </div>
        <InspirationMasonry showStyleFilter />
      </div>
    </div>
  );
}
