import { gsap } from "gsap";

gsap.config({ nullTargetWarn: false });

export const EASE = {
  enter: "power3.out",
  float: "sine.inOut",
  snap: "power3",
} as const;

export const SNAP_SCROLLER = "#landing-scroll-root";

export { gsap };
