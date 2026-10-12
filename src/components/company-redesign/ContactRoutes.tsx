import Link from "next/link";
import { businessConfig } from "@/config/business.config";
import { getLocale } from "@/i18n/server";

type BusinessConfig = typeof businessConfig;

export async function ContactRoutes({ business, emailIsPlaceholder }: { business: BusinessConfig; emailIsPlaceholder: boolean }) {
  const sr = (await getLocale()) === "sr";
  const generalHref = emailIsPlaceholder ? "/about" : `mailto:${business.contactEmail}`;
  const routes = sr ? [
    { eyebrow: "Novi projekat", title: "Počnite od vođenog briefa", text: "Zabeležite stil, lokaciju, ciljeve, nekretninu, budžet, rokove i kontakt pre slanja.", href: "/inquiry", label: "Započnite brief projekta", primary: true },
    { eyebrow: "Postojeći nacrt", title: "Pregledajte ili nastavite brief", text: "Otvorite nacrt sačuvan u ovom pregledaču, izmenite delove i preuzmite aktuelni PDF.", href: "/brief", label: "Otvorite moj brief" },
    { eyebrow: "Opšte pitanje", title: emailIsPlaceholder ? "Javni kontakt još nije aktivan" : "Pošaljite opšti imejl", text: emailIsPlaceholder ? "Javna imejl adresa je još privremena. Upiti za projekte već mogu da koriste vođeni brief." : `Za pitanja kojima ne treba brief pišite na ${business.contactEmail}.`, href: generalHref, label: emailIsPlaceholder ? "Pročitajte o nama" : "Pošaljite imejl" },
  ] : [
    { eyebrow: "New project", title: "Start with the guided brief", text: "Record the style, location, goals, property, budget, timing and contact details before submission.", href: "/inquiry", label: "Start my project brief", primary: true },
    { eyebrow: "Existing draft", title: "Review or continue your brief", text: "Open the project draft stored in this browser, edit sections and download the current PDF.", href: "/brief", label: "Open my brief" },
    { eyebrow: "General question", title: emailIsPlaceholder ? "Public contact details are not live yet" : "Send a general email", text: emailIsPlaceholder ? "The configured public email is still a placeholder. Project inquiries can already use the guided brief and production submission flow." : `Use ${business.contactEmail} for questions that do not require a project brief.`, href: generalHref, label: emailIsPlaceholder ? "Read about Site Atelier" : "Send an email" },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {routes.map((route) => (
            <article key={route.eyebrow} className={`flex flex-col rounded-xl border p-6 md:p-8 ${route.primary ? "border-ink-900 bg-ink-900 text-white" : "border-border bg-surface"}`}>
              <p className={`text-xs font-semibold uppercase tracking-[.1em] ${route.primary ? "text-white/60" : "text-accent"}`}>{route.eyebrow}</p>
              <h2 className={`mt-5 font-display text-h2 ${route.primary ? "text-white" : "text-ink-900"}`}>{route.title}</h2>
              <p className={`mt-4 text-sm leading-7 ${route.primary ? "text-white/75" : "text-ink-700"}`}>{route.text}</p>
              <Link href={route.href} className={`focus-ring mt-8 inline-flex min-h-[48px] items-center justify-center rounded-sm px-5 text-sm font-semibold lg:mt-auto ${route.primary ? "bg-white text-ink-900" : "border border-ink-900 text-ink-900"}`}>{route.label}</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
