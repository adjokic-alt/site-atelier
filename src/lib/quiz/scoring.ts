import type { QuizAnswer, QuizResult, StyleId, StyleQuizQuestion } from "@/types";

const order: StyleId[] = ["scandinavian", "modern", "minimalist", "industrial", "luxury", "rustic", "mediterranean"];
const names: Record<StyleId, string> = { scandinavian: "Scandinavian", modern: "Modern", minimalist: "Minimalist", industrial: "Industrial", luxury: "Luxury", rustic: "Rustic", mediterranean: "Mediterranean" };
const traits: Record<StyleId, string[]> = {
  scandinavian: ["light", "natural", "functional"], modern: ["architectural", "precise", "integrated"], minimalist: ["quiet", "reduced", "warm"], industrial: ["raw", "structured", "textured"], luxury: ["layered", "bespoke", "refined"], rustic: ["earthy", "crafted", "tactile"], mediterranean: ["sun-washed", "relaxed", "connected"],
};

export function scoreStyleQuiz(answers: QuizAnswer[], questions: StyleQuizQuestion[]): QuizResult {
  const scores = Object.fromEntries(order.map((id) => [id, 0])) as Record<StyleId, number>;
  for (const answer of answers) {
    if (!answer.optionId) continue;
    const question = questions.find((item) => item.id === answer.questionId);
    const option = question ? [question.optionA, question.optionB].find((item) => item.id === answer.optionId) : undefined;
    if (!option) continue;
    for (const [id, weight] of Object.entries(option.styleWeights)) scores[id as StyleId] += weight ?? 0;
  }
  const ranked = order.map((styleId) => ({ styleId, score: scores[styleId] })).sort((a, b) => b.score - a.score || order.indexOf(a.styleId) - order.indexOf(b.styleId));
  const primary = ranked[0]?.styleId ?? "scandinavian";
  const runnerUp = ranked[1];
  const accent = runnerUp && runnerUp.score > 0 && runnerUp.score >= ranked[0].score * 0.55 ? runnerUp.styleId : null;
  return { profileName: accent ? `${names[primary]} with ${names[accent].toLowerCase()} accents` : names[primary], primaryStyleId: primary, accentStyleId: accent, traitTags: traits[primary] };
}
