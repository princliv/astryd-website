import { gsap } from "gsap";

/**
 * Executes standard GSAP animation setup if user hasn't requested reduced motion.
 */
export function withMotion(callback: () => void | (() => void)) {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    return { revert: () => {} };
  }
  const cleanup = callback();
  return { revert: () => { if (cleanup && typeof cleanup === "function") cleanup(); } };
}
