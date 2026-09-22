/**
 * Central site configuration.
 *
 * This is a minimal, M0-scoped configuration used only for navigation and
 * basic branding while the foundation is being built. It is NOT the full
 * BusinessConfiguration / LegalConfiguration model defined in the Phase 3B
 * architecture (contract terms, prices, service countries, partner
 * availability, response times, legal identity). Those arrive in a later
 * milestone as their own typed, separately-configured files.
 *
 * Every value below is a placeholder. Nothing here is a real business claim.
 */

export interface SiteNavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  /** ⚙ PLACEHOLDER — replace with the real business/display name before launch. */
  name: string;
  /** ⚙ PLACEHOLDER — one-line description used in <head> metadata and the hero. */
  tagline: string;
  /** ⚙ PLACEHOLDER — replace with a real, monitored contact address before launch. */
  contactEmail: string;
  /**
   * Primary navigation. Routes below are the sitemap approved in Phase 2 —
   * most of them do not exist yet in M0 and will 404 until their milestone
   * lands. That's expected at this stage, not a bug.
   */
  primaryNav: SiteNavLink[];
  footerNav: SiteNavLink[];
  legalNav: SiteNavLink[];
}

export const siteConfig: SiteConfig = {
  name: "Studio Name — Placeholder",
  tagline:
    "Placeholder tagline — remote project discovery and design guidance for home renovation and interior projects.",
  contactEmail: "hello@example.com",
  primaryNav: [
    { label: "Services", href: "/services" },
    { label: "Styles", href: "/styles" },
    { label: "Inspiration", href: "/inspiration" },
    { label: "How it works", href: "/how-it-works" },
    { label: "About", href: "/about" },
  ],
  footerNav: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legalNav: [
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" },
    { label: "Imprint", href: "/legal/imprint" },
  ],
};
