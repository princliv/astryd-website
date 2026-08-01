import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const targetId = hash.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
}
