import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      const landingRoot = document.getElementById("landing-scroll-root");
      if (landingRoot) {
        landingRoot.scrollTop = 0;
      }
    }
  }, [pathname, hash]);

  return null;
}
