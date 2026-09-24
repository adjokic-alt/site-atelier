import type { Metadata } from "next";
export const metadata: Metadata = { title: "UI Preview", robots: { index: false, follow: false }, alternates: { canonical: null } };
export default function UiPreviewLayout({ children }: { children: React.ReactNode }) { return children; }
