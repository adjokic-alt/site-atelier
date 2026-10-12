import { getLocale } from "@/i18n/server";
export async function AvailabilityPanel() {
  const sr = (await getLocale()) === "sr";
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-[.8fr_1.2fr]">
          <div className="bg-ink-900 p-7 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[.1em] text-white/60">{sr ? "Dostupnost" : "Availability"}</p>
            <h2 className="mt-4 font-display text-3xl leading-tight">{sr ? "Podrška zavisi od konteksta projekta." : "Support depends on the project context."}</h2>
          </div>
          <div className="p-7 md:p-10">
            <p className="text-base leading-8 text-ink-700">
              {sr ? "Lokacija, faza projekta, tražena podrška, rokovi i potpunost briefa utiču na to šta je moguće. Nedoumica ne znači automatski odbijanje projekta — samo pokazuje šta treba sledeće razjasniti." : "Location, project stage, requested support, timing and brief completeness all affect what may be possible. Uncertainty does not automatically reject a project. It simply identifies what should be clarified next."}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                [(sr ? "Lokacija" : "Location"), (sr ? "Gde se projekat nalazi" : "Where the project is based")],
                [(sr ? "Faza" : "Stage"), (sr ? "Ideja, planiranje ili renoviranje u toku" : "Idea, planning or active renovation")],
                [(sr ? "Podrška" : "Support"), (sr ? "Pravac, obim ili koordinacija" : "Direction, scope or coordination")],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-surface-sunken p-4"><p className="text-sm font-semibold text-ink-900">{title}</p><p className="mt-2 text-xs leading-6 text-ink-500">{text}</p></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
