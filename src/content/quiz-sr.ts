import type { StyleId, StyleQuizQuestion } from "@/types";

/** Serbian prompts, captions and image descriptions for the style quiz (by question / option id). */
const prompts: Record<string, string> = {
  "light-or-dark": "U koji dnevni prostor biste radije ušli?",
  "warm-or-cool": "Koja atmosfera materijala vam je bliža?",
  "plain-or-layered": "Koliko vizuelnih detalja vam prija?",
  "raw-or-refined": "Koji karakter površina biste zadržali?",
  "crafted-or-clean": "Koja vrsta detalja vam privlači pažnju?",
  "earthy-or-neutral": "Sa kojim pravcem boja biste živeli?",
};
const options: Record<string, { caption: string; ariaLabel: string }> = {
  "light-airy": { caption: "Svetlo i prozračno", ariaLabel: "Svetla, prozračna prostorija sa svetlim drvetom i mekim neutralnim bojama" },
  "dark-architectural": { caption: "Tamno i arhitektonski", ariaLabel: "Tamnija arhitektonska prostorija sa snažnim linijama i dubokim završnim obradama" },
  "warm-natural": { caption: "Toplo i prirodno", ariaLabel: "Topli prirodni materijali: drvo, lan i zemljana tekstura" },
  "cool-sleek": { caption: "Hladno i glatko", ariaLabel: "Hladni glatki materijali: gladak kamen, staklo i precizni metalni detalji" },
  "quiet-simple": { caption: "Tiho i jednostavno", ariaLabel: "Tih, jednostavan enterijer sa malo dekoracije i čistim površinama" },
  "layered-refined": { caption: "Slojevito i profinjeno", ariaLabel: "Slojevit, profinjen enterijer sa taktilnim tkaninama i detaljima po meri" },
  "raw-character": { caption: "Sirov karakter", ariaLabel: "Sirov karakter: vidljiva konstrukcija, mineralna tekstura i ostarele površine" },
  "refined-finish": { caption: "Profinjena završna obrada", ariaLabel: "Profinjena obrada: neprimetni detalji, čisti spojevi i polirane površine" },
  "crafted-detail": { caption: "Zanatski detalj", ariaLabel: "Zanatski detalj: vidljiva godova, ručno rađena tekstura i prirodne razlike" },
  "clean-integrated": { caption: "Čisto i ugrađeno", ariaLabel: "Čist, ugrađen detalj sa skrivenim ostavama i neprekinutim linijama" },
  "sun-washed-earthy": { caption: "Suncem obasjano i zemljano", ariaLabel: "Zemljana paleta obasjana suncem: glina, pesak i prigušeni plavi akcenti" },
  "soft-neutral": { caption: "Meko i neutralno", ariaLabel: "Meka neutralna paleta: topla bela, sivo-bež i svetlo drvo" },
};

export function localizeQuiz(questions: StyleQuizQuestion[], locale: "en" | "sr"): StyleQuizQuestion[] {
  if (locale !== "sr") return questions;
  return questions.map((q) => ({
    ...q,
    prompt: prompts[q.id] ?? q.prompt,
    optionA: { ...q.optionA, ...(options[q.optionA.id] ?? {}) },
    optionB: { ...q.optionB, ...(options[q.optionB.id] ?? {}) },
  }));
}

/** "Skandinavski sa modernim akcentima" — the quiz result name in Serbian. */
const accentForm: Record<StyleId, string> = {
  scandinavian: "skandinavskim", modern: "modernim", minimalist: "minimalističkim", industrial: "industrijskim", luxury: "luksuznim", rustic: "rustičnim", mediterranean: "mediteranskim",
};
const names: Record<StyleId, string> = {
  scandinavian: "Skandinavski", modern: "Moderni", minimalist: "Minimalistički", industrial: "Industrijski", luxury: "Luksuzni", rustic: "Rustični", mediterranean: "Mediteranski",
};
export function profileNameSr(primary: StyleId, accent: StyleId | null) {
  return accent ? `${names[primary]} sa ${accentForm[accent]} akcentima` : names[primary];
}
export const traitsSr: Record<StyleId, string[]> = {
  scandinavian: ["svetlo", "prirodno", "funkcionalno"], modern: ["arhitektonski", "precizno", "ugrađeno"], minimalist: ["tiho", "svedeno", "toplo"], industrial: ["sirovo", "strukturirano", "teksturisano"], luxury: ["slojevito", "po meri", "profinjeno"], rustic: ["zemljano", "zanatski", "taktilno"], mediterranean: ["suncem obasjano", "opušteno", "povezano"],
};
