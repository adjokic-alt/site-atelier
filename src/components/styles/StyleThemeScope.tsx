import type { CSSProperties, ReactNode } from "react";
import type { StyleTheme } from "@/types";

interface ThemeVariables extends CSSProperties {
  "--color-accent": string;
  "--color-accent-hover": string;
  "--color-accent-tint": string;
  "--color-accent-strong-tint": string;
  "--color-accent-contrast": string;
  "--color-focus-ring": string;
}

interface StyleThemeScopeProps {
  theme: StyleTheme;
  children: ReactNode;
  className?: string;
}

export function StyleThemeScope({ theme, children, className = "" }: StyleThemeScopeProps) {
  const variables: ThemeVariables = {
    "--color-accent": theme.accent,
    "--color-accent-hover": theme.accentHover,
    "--color-accent-tint": theme.accentTint,
    "--color-accent-strong-tint": theme.accentStrongTint,
    "--color-accent-contrast": theme.accentContrast,
    "--color-focus-ring": theme.focusRing,
  };

  return <div className={className} style={variables}>{children}</div>;
}
