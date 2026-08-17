import { SectionShell } from "../motion/SectionShell";
import { Reveal } from "../motion/Reveal";
import { landingAssets } from "../assets";

type Industry = {
  id: string;
  title: string;
  desc: string;
  image: string;
  wide: boolean;
  overlay: number;
};

const INDUSTRIES: Industry[] = [
  {
    id: "restaurant",
    title: "Restaurants & Cafes",
    desc: "Track POS sales, manage vendor invoices, schedule kitchen staff, and reconcile daily revenue — all in one place.",
    image: landingAssets.industry.restaurants,
    wide: true,
    overlay: 0.43,
  },
  {
    id: "fitness",
    title: "Boutique Fitness",
    desc: "Fill every class, manage memberships, pay your staff, and track revenue — without five different apps.",
    image: landingAssets.industry.fitness,
    wide: false,
    overlay: 0.2,
  },
  {
    id: "retail",
    title: "Retail Stores",
    desc: "Real-time inventory syncing, purchase orders, and customer loyalty in one unified stream.",
    image: landingAssets.industry.retail,
    wide: false,
    overlay: 0.2,
  },
  {
    id: "salon",
    title: "Beauty & Wellness",
    desc: "Appointment scheduling, staff commissions, product inventory, and billing — simplified.",
    image: landingAssets.industry.salon,
    wide: false,
    overlay: 0.2,
  },
  {
    id: "clinic",
    title: "Personal Care",
    desc: "Appointment scheduling, payroll compliance, and supplies inventory built for medical teams.",
    image: landingAssets.industry.personalCare,
    wide: false,
    overlay: 0.2,
  },
  {
    id: "business",
    title: "Business Services",
    desc: "Sync orders, manage returns, track warehouse stock, and measure ad ROI — all from Astryd.",
    image: landingAssets.industry.business,
    wide: true,
    overlay: 0,
  },
];

// At lg+ the accordion shows 5 slots — "Boutique Fitness" and "Retail Stores"
// share one slot, stacked, so the row mirrors a 5-column bento layout.
const SLOTS: (Industry | Industry[])[] = [
  INDUSTRIES[0],
  [INDUSTRIES[1], INDUSTRIES[2]],
  INDUSTRIES[3],
  INDUSTRIES[4],
  INDUSTRIES[5],
];

function CardBody({ industry }: { industry: Industry }) {
  return (
    <>
      <img
        src={industry.image}
        alt={industry.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {industry.overlay > 0 && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-[inherit]"
          style={{ background: `rgba(0,0,0,${industry.overlay})` }}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[55%] sm:h-[50%] bg-gradient-to-t from-[#050B16]/90 via-[#050B16]/50 to-transparent"
      />

      {/* Collapsed-strip label — visible at rest, fades out on lg+ when any card in the row is hovered */}
      <div className="who-uses-card-label absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-4 xl:p-5 flex flex-col gap-1 sm:gap-1.5">
        <h3 className="features-card-title">
          {industry.title}
        </h3>
        <p
          className={`landing-body leading-relaxed text-[#E8F0F8] line-clamp-3 sm:line-clamp-4 lg:hidden ${
            industry.wide ? "max-w-[611px]" : "max-w-[334px]"
          }`}
        >
          {industry.desc}
        </p>
      </div>

      {/* Expanded panel — lg+ only, fades in on hover as the card grows */}
      <div className="who-uses-card-panel hidden lg:flex absolute inset-0 flex-col justify-end p-5 xl:p-7 bg-gradient-to-t from-[#050B16]/95 via-[#050B16]/65 to-[#050B16]/15">
        <div className="flex flex-col gap-2 max-w-[440px]">
          <h3 className="landing-display-title text-white">
            {industry.title}
          </h3>
          <p className="landing-body leading-relaxed text-[#E8F0F8]">
            {industry.desc}
          </p>
        </div>
      </div>
    </>
  );
}

export function WhoUsesSection() {
  return (
    <SectionShell
      id="who-uses"
      className="section-dark who-uses-section-bg section-figma-bg relative overflow-hidden"
      snap={false}
    >
      <div className="landing-section-content who-uses-section-content relative z-10 w-full px-4 sm:px-5 md:px-6 lg:px-6 xl:px-8 pb-12 sm:pb-16 lg:pb-20">
        {/* Header spacing only — bento/accordion layout frozen */}
        <Reveal y={20} className="mx-auto mb-8 sm:mb-10 lg:mb-[80px] max-w-[1184px] 2xl:max-w-[1400px] text-center">
          <h2 className="landing-display-title text-[#E8F0F8]">
            One platform. Every industry.
          </h2>
          <p className="landing-section-sub mt-4 sm:mt-5 lg:mt-[36px] mx-auto max-w-[60ch] lg:max-w-[1184px] font-light">
            From restaurants to retail, Astryd adapts to your business, unifying
            your operations no matter your industry.
          </p>
        </Reveal>

        <div className="who-uses-accordion mx-auto grid w-full grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:flex lg:gap-3 xl:gap-4">
          {SLOTS.map((slot) => {
            if (!Array.isArray(slot)) {
              const industry = slot;
              return (
                <article
                  key={industry.id}
                  className="who-uses-card relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#0F2540] shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                >
                  <CardBody industry={industry} />
                </article>
              );
            }

            return (
              <div key={slot.map((i) => i.id).join("-")} className="who-uses-card who-uses-stack">
                {slot.map((industry) => (
                  <article
                    key={industry.id}
                    className="who-uses-substack-card relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#0F2540] shadow-[0_18px_45px_rgba(0,0,0,0.22)]"
                  >
                    <CardBody industry={industry} />
                  </article>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
