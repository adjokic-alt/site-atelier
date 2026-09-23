import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { businessConfig } from "@/config/business.config";
import { siteConfig } from "@/config/site.config";

const productLinks = [
  { label: "Styles", href: "/styles" },
  { label: "Inspiration", href: "/inspiration" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "My brief", href: "/brief" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Imprint", href: "/imprint" },
  { label: "Cookies", href: "/cookies" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="focus-ring rounded-sm font-display text-xl text-ink-900">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-ink-700">
              Discover a direction, collect inspiration and create a clearer project
              brief before detailed work begins.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-6 text-ink-500">
              Development demo. Business identity, public contact details and final
              legal wording are not yet confirmed.
            </p>
          </div>

          <FooterGroup title="Product" links={productLinks} />
          <FooterGroup title="Company" links={companyLinks} />
          <FooterGroup title="Legal" links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {businessConfig.displayName}. Placeholder business identity.</p>
          <p>Draft stored locally in this browser until demo submission.</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`${title} links`}>
      <h2 className="text-sm font-semibold text-ink-900">{title}</h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="focus-ring rounded-sm text-sm text-ink-700 hover:text-accent hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
