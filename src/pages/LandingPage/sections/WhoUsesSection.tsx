import { SectionShell } from "../motion/SectionShell";
import { Reveal } from "../motion/Reveal";
import { landingAssets } from "../assets";

const INDUSTRIES = [
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

export function WhoUsesSection() {
  return (
    <SectionShell
      id="who-uses"
      className="section-dark who-uses-section-bg section-figma-bg relative overflow-hidden"
      snap={false}
    >
      <div className="landing-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pb-12 sm:pb-16 lg:pb-20">
        <Reveal y={20} className="mx-auto mb-8 sm:mb-10 lg:mb-14 max-w-[1184px] 2xl:max-w-[1400px] text-center">
          <h2 className="landing-display-title text-[#E8F0F8]">
            One platform. Every industry.
          </h2>
          <p className="mt-4 sm:mt-5 mx-auto max-w-[60ch] lg:max-w-[1184px] font-['Inter'] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-light leading-relaxed text-[#8FA8C8]">
            From restaurants to retail, Astryd adapts to your business, unifying
            your operations no matter your industry.
          </p>
        </Reveal>

        <div className="landing-content-wide mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5">
          {INDUSTRIES.map((industry) => {
            const colSpan = industry.wide ? "lg:col-span-6" : "lg:col-span-3";
            const smSpan = industry.wide ? "sm:col-span-2 lg:col-span-6" : "sm:col-span-1";

            return (
              <article
                key={industry.id}
                className={`who-uses-card relative group overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-[#0F2540] shadow-[0_18px_45px_rgba(0,0,0,0.22)] ${smSpan} ${colSpan}`}
              >
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

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6 xl:p-7 flex flex-col gap-1 sm:gap-1.5">
                  <h3
                    className={`font-['Inter'] font-semibold leading-tight text-white ${
                      industry.wide
                        ? "text-[18px] sm:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]"
                        : "text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
                    }`}
                  >
                    {industry.title}
                  </h3>
                  <p
                    className={`font-['Inter'] font-normal leading-relaxed text-[#E8F0F8] line-clamp-3 sm:line-clamp-4 ${
                      industry.wide
                        ? "text-[12px] sm:text-[13px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] max-w-[611px]"
                        : "text-[11px] sm:text-[12px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px] max-w-[334px]"
                    }`}
                  >
                    {industry.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
