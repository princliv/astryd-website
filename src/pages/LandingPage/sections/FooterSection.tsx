import { useRef } from "react";
import { Link } from "react-router-dom";
import { SectionShell } from "../motion/SectionShell";
import { useScrollReveal } from "../motion/useScrollReveal";

export function FooterSection() {
  const innerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(innerRef, { y: 0 });

  return (
    <SectionShell as="footer" snap={false} className="section-dark border-t border-white/6">
      <div
        ref={innerRef}
        className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-10 xl:px-12 2xl:px-14"
      >
        <div className="landing-content-wide mx-auto flex items-center justify-center gap-6">
          <Link to="/privacy" className="font-['Inter'] text-[13px] text-[#8FA8C8] hover:text-[#00C4CD] transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="font-['Inter'] text-[13px] text-[#8FA8C8] hover:text-[#00C4CD] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
