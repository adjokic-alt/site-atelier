import Link from "next/link";
import { Container } from "@/components/ui";
import { getLocale } from "@/i18n/server";

export default async function NotFound() {
  const sr = (await getLocale()) === "sr";
  return (
    <main className="py-20 md:py-32">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[.08em] text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-display">{sr ? "Ova stranica nije pronađena." : "This page could not be found."}</h1>
        <p className="mx-auto mt-5 max-w-xl text-ink-700">{sr ? "Adresa se možda promenila ili stranica nije deo javnog sajta." : "The address may have changed, or the page may not be part of the public website."}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-ink-900 px-5 text-sm font-medium text-white">{sr ? "Na početnu stranu" : "Go to the home page"}</Link>
          <Link href="/styles" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-ink-900 px-5 text-sm font-medium text-ink-900">{sr ? "Istražite stilove" : "Explore styles"}</Link>
        </div>
      </Container>
    </main>
  );
}
