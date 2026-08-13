import { useRef } from "react";
import { Link } from "react-router-dom";
import { AstrydBrandMark } from "@/components/AstrydBrandMark";
import { SectionShell } from "../motion/SectionShell";
import { useScrollReveal } from "../motion/useScrollReveal";

export function FooterSection() {
  const innerRef = useRef<HTMLDivElement>(null);
  useScrollReveal(innerRef, { y: 0 });

  return (
    <SectionShell as="footer" snap={false} className="section-dark border-t border-white/6">
      <div
        ref={innerRef}
        className="w-full px-4 pt-10 sm:px-6 sm:pt-12 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pb-12 sm:pb-14 lg:pb-16"
      >
        <div className="landing-content-wide mx-auto">
          <div className="mb-8 sm:mb-10">
            <AstrydBrandMark
              href="/"
              className="mb-4 -ml-1"
              imgClassName="h-7 sm:h-8 w-auto"
            />
            <p className="font-['Inter'] text-[12px] sm:text-[13px] leading-[1.7] text-[#4A6480] max-w-[300px]">
              The native AI-first operating system uniting CRM, finance, inventory, payroll, and
              operations.
            </p>
          </div>
          <div className="flex flex-col-reverse gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-['Inter'] text-[12px] sm:text-[13px] text-[#4A6480]">
              © 2026 Astryd Technologies. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="footer-link font-['Inter'] !mb-0 text-[#8FA8C8] hover:text-[#00C4CD] transition-colors text-[13px]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-link font-['Inter'] !mb-0 text-[#8FA8C8] hover:text-[#00C4CD] transition-colors text-[13px]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
