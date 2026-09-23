import type { StyleId } from "./common";

export interface StyleQuizOption {
  id: string;
  imageId: string;
  ariaLabel: string;
  styleWeights: Partial<Record<StyleId, number>>;
  gradient: string;
  caption: string;
}

export interface StyleQuizQuestion {
  id: string;
  order: number;
  prompt: string;
  axis: string;
  optionA: StyleQuizOption;
  optionB: StyleQuizOption;
}

export interface QuizAnswer {
  questionId: string;
  optionId: string | null;
}

export interface QuizResult {
  profileName: string;
  primaryStyleId: StyleId;
  accentStyleId: StyleId | null;
  traitTags: string[];
}

export interface StyleQuizScoringRule {
  id: string;
  description: string;
  tieBreakerOrder: StyleId[];
}
