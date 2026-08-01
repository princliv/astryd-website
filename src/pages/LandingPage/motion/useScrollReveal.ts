import { useEffect } from "react";
import type { RefObject } from "react";
import { gsap, EASE } from "./gsap";
import { withMotion } from "./reducedMotion";

export interface ScrollRevealOptions {
  y?: number;
  scale?: number;
  blur?: number;
  stagger?: number;
  duration?: number;
  itemSelector?: string;
  once?: boolean;
  start?: string;
}

export function useScrollReveal<T extends HTMLElement>(ref: RefObject<T | null>, options: ScrollRevealOptions = {}) {
  const { y = 24, scale, blur, stagger, duration = 0.9, itemSelector } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mm = withMotion(() => {
      const targets: Element | Element[] = stagger
        ? itemSelector
          ? Array.from(el.querySelectorAll(itemSelector))
          : Array.from(el.children)
        : el;

      const fromVars: gsap.TweenVars = { opacity: 0, y };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        duration,
        ease: EASE.enter,
        clearProps: "transform,opacity,filter",
      };

      if (scale !== undefined) {
        fromVars.scale = scale;
        toVars.scale = 1;
      }
      if (blur !== undefined) {
        fromVars.filter = `blur(${blur}px)`;
        toVars.filter = "blur(0px)";
      }
      if (stagger) toVars.stagger = stagger;

      gsap.set(targets, fromVars);
      gsap.to(targets, toVars);
    });

    return () => mm.revert();
  }, [ref, y, scale, blur, stagger, duration, itemSelector]);
}
