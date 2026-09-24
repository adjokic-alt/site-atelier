import type { Metadata } from "next";
export const metadata: Metadata = { title: "My Brief", robots: { index: false, follow: false }, alternates: { canonical: null } };
export default function BriefLayout({ children }: { children: React.ReactNode }) { return children; }
