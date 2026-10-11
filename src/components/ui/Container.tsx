import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Component = "div", children, className = "" }: ContainerProps) {
  return (
    <Component className={`mx-auto w-full max-w-[1200px] px-4 md:px-6 lg:px-8 2xl:max-w-[1320px] ${className}`}>
      {children}
    </Component>
  );
}
