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
      {/* Figma 1728: content inset x=158 → visual ends at 1571 (≈158px sides) */}
      <div className="landing-section-content ask-astryd-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-[158px] pb-8 sm:pb-10 lg:pb-12">
        <div className="ask-astryd-prompt-layout mx-auto">
          <Reveal y={18} className="ask-astryd-prompt-copy">
            {/* Figma: 64px title, 24px body, max-w 425 */}
            <h2 className="landing-display-title text-white">Ask Astryd</h2>
            <p className="mt-2.5 max-w-[425px] font-['Inter'] text-[15px] font-light leading-normal text-[#8FA8C8] sm:mt-3 sm:text-[18px] md:text-[20px] lg:mt-[14px] lg:text-[24px]">
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
