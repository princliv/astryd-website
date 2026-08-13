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
      {/*
        Figma 1728 frame (1291:903) absolute Y:
        eyebrow 248 · title 309 · sub 494 · CTAs 601 · dashboard 752
      */}
      <div className="hero-section-content landing-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-[157px]">
        <div className="hero-copy mx-auto flex w-full flex-col items-center text-center">
          <span className="hero-eyebrow">ONE UNIFIED ECOSYSTEM</span>

          <h1 className="hero-title">
            Run point of sale, payroll, and payments from{" "}
            <span className="hero-gradient-text">one platform.</span>
          </h1>

          <p className="hero-subcopy">
            One platform means one login, one invoice, and one place where
            everything already talks. Not an integration. One system, one login,
            sales, hours, and deposits all in the same place
          </p>

          <div className="hero-cta-row">
            <div className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00C4CD] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00C4CD]" />
              </span>
              <span className="whitespace-nowrap font-['Inter'] text-[14px] font-medium text-white sm:text-[16px] lg:text-[18px]">
                Now accepting pilot cohort
              </span>
            </div>
            <a href="#cta" className="landing-cta-primary hero-cta-demo">
              Book a demo
            </a>
          </div>
        </div>

        <div className="hero-dashboard-frame">
          <img
            src={landingAssets.heroDashboardFigma}
            alt="Astryd operator dashboard"
            className="hero-dashboard-img"
          />
        </div>
      </div>
    </SectionShell>
  );
}
