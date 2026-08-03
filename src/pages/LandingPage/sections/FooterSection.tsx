import { useRef } from "react";
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
        <div className="landing-content-wide mx-auto text-center">
          <p className="font-['Inter'] text-[12px] sm:text-[13px] text-[#4A6480]">
            © 2026 Astryd Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
