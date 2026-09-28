"use client";

import Link from "next/link";
import { Container } from "@/components/ui";
import {
  MoodboardEmptyState,
  MoodboardGallery,
  MoodboardInsight,
  useMoodboardTheme,
} from "@/components/moodboard";
import { inspirationItems } from "@/content/inspiration";
import { useBrief } from "@/providers/BriefProvider";
import styles from "./moodboard-theme.module.css";

export default function MoodboardPage() {
  const { brief, hydrated } = useBrief();
  const saved = hydrated
    ? inspirationItems.filter((item) =>
        brief.visuals.moodboardItemIds.includes(item.id),
      )
    : [];
  const theme = useMoodboardTheme(saved);

  if (!hydrated) {
    return (
      <main className="py-16 md:py-24" aria-busy="true" aria-live="polite">
        <Container>
          <p className="text-sm text-ink-500">Loading your moodboard…</p>
        </Container>
      </main>
    );
  }

  return (
    <main className={`${styles.page} ${styles.surface}`} style={theme.style}>
      <section className={`${styles.hero} py-14 md:py-20`}>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mood-accent text-xs font-semibold uppercase tracking-[.1em]">
                Moodboard
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight md:text-display">
                Your visual direction{saved.length ? ` · ${saved.length} saved` : ""}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 opacity-75">
                Review the references you saved and use their recurring styles,
                spaces and materials to make the project brief more specific.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/inspiration"
                className={`${styles.buttonSecondary} focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border px-6 text-sm font-medium`}
              >
                Add more inspiration
              </Link>
              {saved.length ? (
                <Link
                  href="/brief"
                  className={`${styles.buttonPrimary} focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm px-6 text-sm font-medium`}
                >
                  Continue to my brief
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-16 md:py-24">
        {saved.length ? (
          <div className="grid min-w-0 gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start">
            <aside className="xl:sticky xl:top-28">
              <MoodboardInsight
                items={saved}
                palette={theme.palette}
                paletteReady={theme.ready}
              />
            </aside>
            <MoodboardGallery items={saved} />
          </div>
        ) : (
          <MoodboardEmptyState />
        )}
      </Container>

      {saved.length ? (
        <section className="mood-border border-t py-16 md:py-20">
          <Container>
            <div className={`${styles.cta} rounded-xl p-6 md:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12`}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.1em] opacity-60">
                  Next step
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight md:text-h1">
                  Turn this visual direction into a clearer project brief.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 opacity-75">
                  Your saved references already contribute style, space and
                  material signals to the visual section of the brief.
                </p>
              </div>

              <div className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0">
                <Link
                  href="/inspiration"
                  className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm border border-current/50 px-6 text-sm font-semibold"
                >
                  Add more references
                </Link>
                <Link
                  href="/brief"
                  className="focus-ring inline-flex min-h-[52px] items-center justify-center rounded-sm bg-white px-6 text-sm font-semibold text-ink-900"
                >
                  Continue to my brief
                </Link>
              </div>
            </div>
          </Container>
        </section>
      ) : null}
    </main>
  );
}
