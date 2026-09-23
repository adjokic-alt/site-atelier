import type { ReactNode } from "react";
import { Container } from "@/components/ui";
import { LegalDraftNotice } from "./LegalDraftNotice";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  introduction: string;
  version: string;
  children: ReactNode;
}

export function LegalPage({ eyebrow, title, introduction, version, children }: LegalPageProps) {
  return (
    <main>
      <section className="border-b border-border bg-surface-sunken py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <header>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                {eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-ink-900 md:text-display">
                {title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-ink-700">
                {introduction}
              </p>
              <p className="mt-5 text-xs text-ink-500">Document version: {version}</p>
            </header>
            <LegalDraftNotice />
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        <article className="mx-auto max-w-4xl space-y-12 [&_h2]:font-display [&_h2]:text-h2 [&_h2]:text-ink-900 [&_h3]:font-display [&_h3]:text-h3 [&_h3]:text-ink-900 [&_li]:leading-7 [&_p]:leading-8 [&_p]:text-ink-700 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          {children}
        </article>
      </Container>
    </main>
  );
}
