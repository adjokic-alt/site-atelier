import { Container } from "@/components/ui";

export default function Loading() {
  return (
    <main aria-busy="true" aria-live="polite" className="py-16 md:py-24">
      <Container>
        <span className="sr-only">Loading page</span>
        <div aria-hidden="true" className="animate-pulse space-y-5">
          <div className="h-4 w-32 rounded bg-surface-sunken" />
          <div className="h-12 max-w-2xl rounded bg-surface-sunken" />
          <div className="h-5 max-w-xl rounded bg-surface-sunken" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[0, 1, 2].map((item) => <div key={item} className="h-64 rounded-xl bg-surface-sunken" />)}
          </div>
        </div>
      </Container>
    </main>
  );
}
