import type { Metadata } from "next";
export const metadata: Metadata = { title: "Project Inquiry", robots: { index: false, follow: false }, alternates: { canonical: null } };
export default function InquiryLayout({ children }: { children: React.ReactNode }) { return children; }
