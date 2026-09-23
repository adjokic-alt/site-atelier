import type { StyleQuizQuestion } from "@/types";

export const styleQuizQuestions: StyleQuizQuestion[] = [
  {
    id: "light-or-dark",
    order: 1,
    prompt: "Which living space would you rather walk into?",
    axis: "light-dark",
    optionA: { id: "light-airy", imageId: "quiz-light-airy", ariaLabel: "Light and airy room with pale timber and soft neutral colours", caption: "Light and airy", gradient: "linear-gradient(145deg,#f3f0e9 0%,#cedbd9 52%,#8ba0a2 100%)", styleWeights: { scandinavian: 3, minimalist: 2, mediterranean: 1 } },
    optionB: { id: "dark-architectural", imageId: "quiz-dark-architectural", ariaLabel: "Darker architectural room with strong lines and deep finishes", caption: "Dark and architectural", gradient: "linear-gradient(145deg,#a4abb7 0%,#505d73 50%,#252e42 100%)", styleWeights: { modern: 3, industrial: 2, luxury: 1 } },
  },
  {
    id: "warm-or-cool",
    order: 2,
    prompt: "Which material atmosphere feels closer to you?",
    axis: "warm-cool",
    optionA: { id: "warm-natural", imageId: "quiz-warm-natural", ariaLabel: "Warm natural materials with timber, linen and earthy texture", caption: "Warm and natural", gradient: "linear-gradient(145deg,#e8d8c7 0%,#ba8b65 50%,#6f5643 100%)", styleWeights: { rustic: 3, scandinavian: 2, mediterranean: 2 } },
    optionB: { id: "cool-sleek", imageId: "quiz-cool-sleek", ariaLabel: "Cool sleek materials with smooth stone, glass and precise metal details", caption: "Cool and sleek", gradient: "linear-gradient(145deg,#e1e5e7 0%,#9da8af 50%,#59636d 100%)", styleWeights: { modern: 3, minimalist: 2, luxury: 2 } },
  },
  {
    id: "plain-or-layered",
    order: 3,
    prompt: "How much visual detail feels right?",
    axis: "plain-opulent",
    optionA: { id: "quiet-simple", imageId: "quiz-quiet-simple", ariaLabel: "Quiet simple interior with minimal decoration and clear surfaces", caption: "Quiet and simple", gradient: "linear-gradient(145deg,#f4f1eb 0%,#d4cdc3 56%,#a79c8c 100%)", styleWeights: { minimalist: 3, scandinavian: 2, modern: 1 } },
    optionB: { id: "layered-refined", imageId: "quiz-layered-refined", ariaLabel: "Layered refined interior with tactile fabrics and bespoke details", caption: "Layered and refined", gradient: "linear-gradient(145deg,#b9c0b8 0%,#627065 50%,#303b33 100%)", styleWeights: { luxury: 3, mediterranean: 2, rustic: 1 } },
  },
  {
    id: "raw-or-refined",
    order: 4,
    prompt: "Which surface character would you keep?",
    axis: "raw-refined",
    optionA: { id: "raw-character", imageId: "quiz-raw-character", ariaLabel: "Raw character with exposed structure, mineral texture and aged surfaces", caption: "Raw character", gradient: "linear-gradient(145deg,#c8b9aa 0%,#9b6343 50%,#49433d 100%)", styleWeights: { industrial: 3, rustic: 2, mediterranean: 1 } },
    optionB: { id: "refined-finish", imageId: "quiz-refined-finish", ariaLabel: "Refined finish with seamless details, clean junctions and polished surfaces", caption: "Refined finish", gradient: "linear-gradient(145deg,#d4d8d5 0%,#7d8a80 50%,#3f4e43 100%)", styleWeights: { luxury: 3, modern: 2, minimalist: 2 } },
  },
  {
    id: "crafted-or-clean",
    order: 5,
    prompt: "Which type of detail catches your attention?",
    axis: "handmade-clean",
    optionA: { id: "crafted-detail", imageId: "quiz-crafted-detail", ariaLabel: "Crafted detail with visible grain, handmade texture and natural variation", caption: "Crafted detail", gradient: "linear-gradient(145deg,#decab3 0%,#a6714f 52%,#65503e 100%)", styleWeights: { rustic: 3, mediterranean: 2, scandinavian: 1 } },
    optionB: { id: "clean-integrated", imageId: "quiz-clean-integrated", ariaLabel: "Clean integrated detail with hidden storage and uninterrupted lines", caption: "Clean and integrated", gradient: "linear-gradient(145deg,#eceae5 0%,#b8b5ae 52%,#73736f 100%)", styleWeights: { minimalist: 3, modern: 2, scandinavian: 2 } },
  },
  {
    id: "earthy-or-neutral",
    order: 6,
    prompt: "Which colour direction would you live with?",
    axis: "earthy-neutral",
    optionA: { id: "sun-washed-earthy", imageId: "quiz-sun-washed-earthy", ariaLabel: "Sun-washed earthy palette with clay, sand and muted blue accents", caption: "Sun-washed and earthy", gradient: "linear-gradient(145deg,#eee1c7 0%,#be8762 48%,#4d8993 100%)", styleWeights: { mediterranean: 3, rustic: 2, luxury: 1 } },
    optionB: { id: "soft-neutral", imageId: "quiz-soft-neutral", ariaLabel: "Soft neutral palette with warm white, greige and pale timber", caption: "Soft and neutral", gradient: "linear-gradient(145deg,#f2efe9 0%,#d0c8bd 52%,#94a29e 100%)", styleWeights: { scandinavian: 3, minimalist: 2, modern: 1 } },
  },
];
