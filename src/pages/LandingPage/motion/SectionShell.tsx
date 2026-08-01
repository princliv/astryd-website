import { forwardRef, type ElementType, type ReactNode } from "react";

interface SectionShellProps {
  id?: string;
  as?: ElementType;
  className?: string;
  snap?: boolean;
  stretch?: boolean;
  children: ReactNode;
}

export const SectionShell = forwardRef<HTMLElement, SectionShellProps>(function SectionShell(
  { id, as: Tag = "section", className = "", snap = true, stretch = false, children },
  ref
) {
  const shellClass = snap ? `snap-section${stretch ? " snap-section-stretch" : ""}` : "snap-section-free";

  return (
    <Tag ref={ref} id={id} data-snap-section className={`${shellClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
});
