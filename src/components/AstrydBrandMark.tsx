import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type AstrydBrandMarkProps = {
  className?: string;
  href?: string;
  onNavigate?: () => void;
  /** Height classes for the full logo image (icon + wordmark). */
  imgClassName?: string;
  /** @deprecated Kept for call-site compat; ignored — logo image includes wordmark. */
  iconClassName?: string;
  /** @deprecated Kept for call-site compat; ignored — logo image includes wordmark. */
  textClassName?: string;
};

/**
 * Shared Astryd brand: thick triangle + "astryd" wordmark from /logo.png.
 */
export function AstrydBrandMark({
  className,
  href,
  onNavigate,
  imgClassName = "h-5 sm:h-6 lg:h-8 w-auto",
}: AstrydBrandMarkProps) {
  const content = (
    <img
      src="/logo.png"
      alt="astryd"
      className={cn("w-auto shrink-0 object-contain", imgClassName)}
      decoding="async"
    />
  );

  const wrapperClass = cn("inline-flex items-center", className);

  if (href) {
    return (
      <Link to={href} onClick={onNavigate} className={wrapperClass}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClass}>{content}</div>;
}
