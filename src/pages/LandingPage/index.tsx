import AstrydLandingBody from "./AstrydLandingBody";
import { useHashScroll } from "./motion/useHashScroll";
import { useCustomSnap } from "./motion/useCustomSnap";
import "./landing.css";

export default function LandingPage() {
  useHashScroll();
  useCustomSnap();

  return (
    <div id="landing-scroll-root" className="astryd-landing snap-scroll-root w-full overflow-x-hidden">
      <AstrydLandingBody />
    </div>
  );
}
