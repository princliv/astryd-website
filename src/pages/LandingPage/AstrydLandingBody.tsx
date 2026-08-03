import { LandingNavbar } from "./LandingNavbar";
import { HeroSection } from "./sections/HeroSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { AskAstrydPromptSection } from "./sections/AskAstrydPromptSection";
import { WhoUsesSection } from "./sections/WhoUsesSection";
import { CTASection } from "./sections/CTASection";

export default function AstrydLandingBody() {
  return (
    <div className="relative flex flex-col w-full">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <AskAstrydPromptSection />
      <WhoUsesSection />
      <CTASection />
    </div>
  );
}
