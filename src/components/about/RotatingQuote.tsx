"use client";

import { useEffect, useState } from "react";

/** Short, well-attributed lines on design and the home. A different one on every visit. */
const quotes = [
  { text: "Have nothing in your houses that you do not know to be useful, or believe to be beautiful.", author: "William Morris" },
  { text: "We shape our buildings; thereafter they shape us.", author: "Winston Churchill" },
  { text: "Less is more.", author: "Ludwig Mies van der Rohe" },
  { text: "Good design is as little design as possible.", author: "Dieter Rams" },
  { text: "The sun never knew how great it was until it struck the side of a building.", author: "Louis Kahn" },
  { text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { text: "Space and light and order. Those are the things that men need just as much as they need bread or a place to sleep.", author: "Le Corbusier" },
  { text: "The details are not the details. They make the design.", author: "Charles Eames" },
];

export function RotatingQuote() {
  const [index, setIndex] = useState<number | null>(null);

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
      <blockquote className="font-display text-[clamp(1.9rem,3.2vw,2.75rem)] italic leading-[1.18] text-ink-900">“{q.text}”</blockquote>
      <figcaption className="mt-5 text-[13px] uppercase tracking-[0.12em] text-ink-500">{q.author}</figcaption>
    </figure>
  );
}
