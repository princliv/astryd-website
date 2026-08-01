import { Link } from "react-router-dom";
import { Triangle } from "lucide-react";
import { cn } from "@/lib/utils";

type AstrydBrandMarkProps = {
  className?: string;
  href?: string;
  onNavigate?: () => void;
  iconClassName?: string;
  textClassName?: string;
};

/**
 * Shared Astryd brand: cyan triangle + "astryd" wordmark.
 */
export function AstrydBrandMark({
  className,
  href,
  onNavigate,
  iconClassName = "h-[18px] w-[18px]",
  textClassName = "text-[20px]",
}: AstrydBrandMarkProps) {
  const content = (
    <>
      <Triangle
        className={cn(iconClassName, "text-[#00C4CD] shrink-0")}
        strokeWidth={2.25}
        fill="currentColor"
        fillOpacity={0}
      />
      <span
        className={cn(
          "font-bold leading-none tracking-tight text-[#00C4CD]",
          textClassName
        )}
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        astryd
      </span>
    </>
  );

  const wrapperClass = cn("inline-flex items-center gap-2", className);

  if (href) {
    return (
      <Link to={href} onClick={onNavigate} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
