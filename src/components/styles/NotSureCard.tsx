import Link from "next/link";
import { getLocale } from "@/i18n/server";

export async function NotSureCard() {
  const sr = (await getLocale()) === "sr";
  return (
    <Link href="/styles/not-sure" className="focus-ring group block overflow-hidden rounded-xl border border-border bg-surface-sunken transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-md">
      <article className="flex aspect-[4/5] flex-col justify-between p-5 md:p-6">
        <div className="grid grid-cols-2 gap-2" aria-hidden="true">
          <span className="aspect-square rounded-md bg-[#dce5e7]" />
          <span className="aspect-square rounded-md bg-[#8994a8]" />
          <span className="aspect-square rounded-md bg-[#bf8b6c]" />
          <span className="aspect-square rounded-md bg-[#5e817d]" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">{sr ? "Vizuelni kviz" : "Visual quiz"}</p>
          <h2 className="mt-3 font-display text-h3 text-ink-900">{sr ? "Još niste sigurni?" : "Not sure yet?"}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{sr ? "Nekoliko brzih vizuelnih izbora pomoći će da imenujemo pravac koji vam prirodno prija." : "A few quick visual choices will help name the direction you naturally prefer."}</p>
          <span className="mt-5 inline-flex text-sm font-medium text-accent">{sr ? "Uradite kviz stila" : "Take the style quiz"} <span aria-hidden="true" className="ml-2 transition-transform group-hover:translate-x-1">→</span></span>
        </div>
      </article>
    </Link>
  );
}
