import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Grid container matching the Phase 3A margin/max-width spec:
 * 16px margin on mobile, 24px at md (tablet), 32px at lg (desktop),
 * content capped at 1200px and widening to 1320px at the 2xl breakpoint.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8 2xl:max-w-[1320px] ${className}`}
    >
      {children}
    </div>
  );
}
