"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/client";

/** Short, well-attributed lines on design and the home. A different one on every visit. */
const quotes = [
  { text: "Have nothing in your houses that you do not know to be useful, or believe to be beautiful.", sr: "Nemojte u kući imati ništa za šta ne znate da je korisno ili ne verujete da je lepo.", author: "William Morris", authorSr: "Vilijam Moris" },
  { text: "We shape our buildings; thereafter they shape us.", sr: "Mi oblikujemo svoje zgrade, a potom one oblikuju nas.", author: "Winston Churchill", authorSr: "Vinston Čerčil" },
  { text: "Less is more.", sr: "Manje je više.", author: "Ludwig Mies van der Rohe", authorSr: "Ludvig Mis van der Roe" },
  { text: "Good design is as little design as possible.", sr: "Dobar dizajn je što je moguće manje dizajna.", author: "Dieter Rams", authorSr: "Diter Rams" },
  { text: "The sun never knew how great it was until it struck the side of a building.", sr: "Sunce nije znalo koliko je veliko dok nije obasjalo zid jedne zgrade.", author: "Louis Kahn", authorSr: "Luis Kan" },
  { text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", sr: "Savršenstvo nije postignuto kada nema više šta da se doda, već kada nema više šta da se oduzme.", author: "Antoine de Saint-Exupéry", authorSr: "Antoan de Sent Egziperi" },
  { text: "Space and light and order. Those are the things that men need just as much as they need bread or a place to sleep.", sr: "Prostor, svetlo i red. To su stvari koje su ljudima potrebne isto koliko i hleb ili mesto za spavanje.", author: "Le Corbusier", authorSr: "Le Korbizje" },
  { text: "The details are not the details. They make the design.", sr: "Detalji nisu samo detalji. Oni čine dizajn.", author: "Charles Eames", authorSr: "Čarls Ims" },
];

export function RotatingQuote() {
  const [index, setIndex] = useState<number | null>(null);
  const sr = useLocale() === "sr";

  useEffect(() => {
    // Picked in the browser so every refresh can show a different line.
    const t = window.setTimeout(() => {
      let last = -1;
      try { last = Number(sessionStorage.getItem("atelier-quote") ?? -1); } catch {}
      let next = Math.floor(Math.random() * quotes.length);
      if (next === last) next = (next + 1) % quotes.length;
      try { sessionStorage.setItem("atelier-quote", String(next)); } catch {}
      setIndex(next);
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  const q = quotes[index ?? 0];
  return (
    <figure className={`self-center border-l border-accent pl-8 transition-opacity duration-700 ${index === null ? "opacity-0" : "opacity-100"}`}>
      <blockquote className="font-display text-[clamp(1.9rem,3.2vw,2.75rem)] italic leading-[1.18] text-ink-900">{sr ? `„${q.sr}“` : `“${q.text}”`}</blockquote>
      <figcaption className="mt-5 text-[13px] uppercase tracking-[0.12em] text-ink-500">{sr ? q.authorSr : q.author}</figcaption>
    </figure>
  );
}
