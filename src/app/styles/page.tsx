import type { Metadata } from "next";
import { QuizButton } from "@/components/ui/QuizButton";
import Link from "next/link";
import { Container, SectionHeading } from "@/components/ui";
import { NotSureCard, StyleCard } from "@/components/styles";
import { getStyleCatalog } from "@/content/style-catalog";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";

const copy = {
  en: { title: "Explore styles", desc: "Explore seven visual directions and choose a starting point for your project brief.", eyebrow: "Explore styles", h1: "Start with how you want the space to feel.", intro: "Choose the direction that feels closest. Styles are starting points, not boxes, and blending comes later in the Studio.", note: "Styles are starting points. Most real projects combine more than one influence.", direct: "Already know what you need? Start with the project →" },
  sr: { title: "Istražite stilove", desc: "Istražite sedam vizuelnih pravaca i izaberite polaznu tačku za svoj brief.", eyebrow: "Istražite stilove", h1: "Počnite od osećaja koji želite u prostoru.", intro: "Izaberite pravac koji vam je najbliži. Stilovi su polazne tačke, a ne kalupi; kombinovanje dolazi kasnije.", note: "Stilovi su polazne tačke. Većina pravih projekata spaja više od jednog uticaja.", direct: "Već znate šta vam treba? Počnite od projekta →" },
};

export async function generateMetadata(): Promise<Metadata> {
  const t = pick(copy, await getLocale());
  return { title: t.title, description: t.desc };
}

export default async function StylesPage() {
  const locale = await getLocale();
  const t = pick(copy, locale);
  const styleCatalog = getStyleCatalog(locale);
  return (
    <main>
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={t.eyebrow}
              title={t.h1}
              description={t.intro}
            />

            <QuizButton className="self-start md:mb-1" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {styleCatalog.map((style, index) => (
              <StyleCard
                key={style.id}
                style={style}
                priority={index < 2}
              />
            ))}

            <NotSureCard />
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-ink-700 md:flex-row md:items-center md:justify-between">
            <p>{t.note}</p>

            <Link href="/inquiry" className="focus-ring rounded-sm font-medium text-accent underline-offset-4 hover:underline">
              {t.direct}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
