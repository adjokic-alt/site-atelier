import Link from "next/link";
import { getLocale } from "@/i18n/server";

export async function ServicesCta() {
  const sr = (await getLocale()) === "sr";
  return (
    <section className="pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="rounded-xl bg-ink-900 p-7 text-center text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">{sr ? "Ne znate odakle da počnete?" : "Not sure where to begin?"}</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight md:text-h1">{sr ? "Počnite od onoga što znate, a ostalo ostavite kao otvorena pitanja." : "Start with what you know and leave the rest as open questions."}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75">{sr ? "Koristan brief može da pokaže nedoumice umesto da ih krije. „Još nisam siguran“ je validan odgovor tamo gde odluka nije doneta." : "A useful brief can show uncertainty instead of hiding it. “Not sure yet” is valid where a decision has not been made."}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/inquiry" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-ink-900">{sr ? "Započnite brief" : "Start my brief"}</Link>
            <Link href="/how-it-works" className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/55 px-6 text-sm font-semibold text-white hover:bg-white/10">{sr ? "Pogledajte kako funkcioniše" : "See how it works"}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
