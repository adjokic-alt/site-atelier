import type { Metadata } from "next";
import { StyleQuiz } from "@/components/quiz";
import { getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  return (await getLocale()) === "sr"
    ? { title: "Pronađite svoj stil", description: "Šest brzih vizuelnih izbora i dobijate svoj profil stila." }
    : { title: "Find your style", description: "Six quick visual choices and you receive your style profile." };
}

export default function NotSurePage() { return <StyleQuiz />; }
