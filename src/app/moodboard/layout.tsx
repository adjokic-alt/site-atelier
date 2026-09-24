import type { Metadata } from "next";
export const metadata: Metadata = { title: "My Moodboard", robots: { index: false, follow: false }, alternates: { canonical: null } };
export default function MoodboardLayout({ children }: { children: React.ReactNode }) { return children; }
