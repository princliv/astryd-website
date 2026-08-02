import { SectionShell } from "../motion/SectionShell";
import { Reveal } from "../motion/Reveal";
import { landingAssets } from "../assets";

export function AskAstrydPromptSection() {
  return (
    <SectionShell
      id="how-it-works"
      className="section-dark ask-astryd-prompt-section section-figma-bg relative overflow-hidden"
      snap={false}
    >
      <div className="landing-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-12 sm:pb-16 lg:pb-20">
        <div className="ask-astryd-prompt-layout landing-content-wide mx-auto">
          <Reveal y={18} className="ask-astryd-prompt-copy">
            <h2 className="landing-display-title text-white">Ask Astryd</h2>
            <p className="mt-3 max-w-[425px] font-['Inter'] text-[15px] font-light leading-relaxed text-[#8FA8C8] sm:mt-4 sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
              Unlock the power of your unified stream. Ask questions, analyze
              patterns, and take action instantly.
            </p>
          </Reveal>

          <Reveal y={24} className="ask-astryd-prompt-visual">
            <video
              className="h-auto w-full rounded-[12px] object-cover sm:rounded-[16px] lg:rounded-[20px]"
              src={landingAssets.askAstrydVideo}
              autoPlay
              muted
              loop
              playsInline
            />
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
