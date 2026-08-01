import { useRef, type ElementType, type ReactNode } from "react";
import { useScrollReveal, type ScrollRevealOptions } from "./useScrollReveal";

interface RevealProps extends ScrollRevealOptions {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Reveal({ as: Tag = "div", className = "", children, ...options }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref, options);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
