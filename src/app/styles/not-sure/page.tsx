import type { Metadata } from "next";
import { StyleQuiz } from "@/components/quiz";
export const metadata: Metadata = { title: "Find Your Style | Site Atelier", description: "Take six quick visual choices and receive a deterministic style profile." };
export default function NotSurePage() { return <StyleQuiz />; }
