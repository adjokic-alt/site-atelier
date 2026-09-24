import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="py-20 md:py-32">
      <Container className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[.08em] text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl text-ink-900 md:text-display">This page could not be found.</h1>
        <p className="mx-auto mt-5 max-w-xl text-ink-700">The address may have changed, or the page may not be part of the public website.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-ink-900 px-5 text-sm font-medium text-white">Go to the home page</Link>
          <Link href="/styles" className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-ink-900 px-5 text-sm font-medium text-ink-900">Explore styles</Link>
        </div>
      </Container>
    </main>
  );
}
