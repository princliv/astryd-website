import { SectionShell } from "../motion/SectionShell";
import { landingAssets } from "../assets";

export function HeroSection() {
  return (
    <SectionShell
      id="platform"
      className="section-dark hero-section-bg section-figma-bg relative overflow-hidden"
      snap={false}
      stretch
    >
      <div className="landing-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pb-8 sm:pb-12 lg:pb-16">
        <div className="landing-content-wide mx-auto flex w-full flex-col items-center text-center">
          <span className="mb-3 font-['Inter'] text-[13px] font-medium tracking-wide text-[#00C4CD] sm:mb-4 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
            ONE UNIFIED ECOSYSTEM
          </span>

          <h1 className="landing-display-title mb-4 max-w-[20ch] sm:max-w-[22ch] lg:max-w-[1069px] text-white sm:mb-5">
            Run your entire business from one{" "}
            <span className="hero-gradient-text">intelligent dashboard.</span>
          </h1>

          <p className="mb-6 max-w-[36ch] sm:max-w-[42ch] lg:max-w-[806px] font-['Inter'] text-[14px] font-normal leading-relaxed text-[#8FA8C8] sm:mb-8 sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
            No tab-switching, no manual reconciliation. Every event flows into
            one real-time stream.
          </p>

          <div className="mb-8 flex w-full max-w-[320px] flex-col items-center gap-3 sm:mb-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-5 lg:mb-12">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C4CD] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C4CD]" />
              </span>
              <span className="whitespace-nowrap font-['Inter'] text-[16px] font-medium text-[#FFFFFF] sm:text-[18px]">
                Now accepting pilot customers
              </span>
            </div>
            <a href="#cta" className="landing-cta-primary w-full sm:w-auto">
              Book a demo
            </a>
          </div>

          <div className="hero-dashboard-frame relative w-full max-w-[1414px] 2xl:max-w-[1600px] overflow-hidden rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]">
            <img
              src={landingAssets.heroDashboardFigma}
              alt="Astryd operator dashboard"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
