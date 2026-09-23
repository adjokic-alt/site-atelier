import type { HTMLAttributes, ReactNode } from "react";

type CardVariant = "surface" | "sunken" | "interactive";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: CardVariant;
}

const variants: Record<CardVariant, string> = {
  surface: "border border-border bg-surface",
  sunken: "bg-surface-sunken",
  interactive: "border border-border bg-surface transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-sm",
};

export function Card({ children, variant = "surface", className = "", ...props }: CardProps) {
  return <div className={`rounded-lg p-4 md:p-6 ${variants[variant]} ${className}`} {...props}>{children}</div>;
}
