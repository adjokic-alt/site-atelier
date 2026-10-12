import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { businessConfig } from "@/config/business.config";
import { siteConfig } from "@/config/site.config";
import { getLocale } from "@/i18n/server";
import { pick } from "@/i18n/locales";
import { navLabel } from "@/i18n/names";

const copy = {
  en: { line: "Every home begins with a single image.", explore: "Explore", studio: "Studio", legal: "Legal", note: "Your moodboard and brief are saved in this browser until you send them.", links: "links" },
  sr: { line: "Svaki dom počinje jednom slikom.", explore: "Istražite", studio: "Studio", legal: "Pravno", note: "Vaš moodboard i brief čuvaju se u ovom pregledaču dok ih ne pošaljete.", links: "linkovi" },
};

const exploreLinks = [
  { label: "Inspiration", href: "/inspiration" },
  { label: "Styles", href: "/styles" },
  { label: "Moodboard", href: "/moodboard" },
  { label: "My brief", href: "/brief" },
];

const studioLinks = [
  { label: "Services", href: "/services" },
  ...siteConfig.footerNav,
];

export async function Footer() {
  const locale = await getLocale();
  const t = pick(copy, locale);
  const tr = (links: { label: string; href: string }[]) => links.map((l) => ({ ...l, label: navLabel(l.href, l.label, locale) }));
  return (
    <footer className="bg-ink-900 text-[#cfc7ba]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_.8fr_.8fr_.8fr]">
          <div>
            <Link href="/" className="focus-ring rounded-sm font-display text-3xl text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-5 max-w-sm font-display text-xl italic leading-snug text-[#e9e3d9]">
              {t.line}
            </p>
          </div>

          <FooterGroup title={t.explore} label={t.links} links={tr(exploreLinks)} />
          <FooterGroup title={t.studio} label={t.links} links={tr(studioLinks)} />
          <FooterGroup title={t.legal} label={t.links} links={tr(siteConfig.legalNav)} />
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#b3aa9c] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {businessConfig.displayName}</p>
          <p>{t.note}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({ title, label, links }: { title: string; label: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`${title} ${label}`}>
      <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[#b3aa9c]">{title}</h2>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="focus-ring rounded-sm text-sm text-[#e9e3d9] underline-offset-4 hover:text-white hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
