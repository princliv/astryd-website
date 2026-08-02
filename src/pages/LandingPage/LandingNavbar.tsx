import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AstrydBrandMark } from "@/components/AstrydBrandMark";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

export function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.getElementById("landing-scroll-root") || window;

    const onScroll = () => {
      const scrollTop = "scrollTop" in root ? root.scrollTop : window.scrollY;
      setScrolled(scrollTop > SCROLL_THRESHOLD);
    };

    onScroll();
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn("landing-nav-container", scrolled && "landing-nav-scrolled")}
    >
      <div className="landing-nav-inner">
        <div className="landing-nav-bar">
          <AstrydBrandMark
            href="/"
            className="landing-nav-logo"
            iconClassName="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
            textClassName="text-[16px] sm:text-[18px] lg:text-[20px]"
          />
          <div className="landing-nav-actions">
            <a
              href="https://dashboard.astryd-ai.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-nav-signin"
            >
              Sign in
            </a>
            <a href="#cta" className="landing-nav-demo">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
