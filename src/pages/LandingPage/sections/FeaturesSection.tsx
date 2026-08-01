import { useEffect, useRef } from "react";
import { SectionShell } from "../motion/SectionShell";
import { Reveal } from "../motion/Reveal";
import { gsap, EASE } from "../motion/gsap";
import { landingAssets } from "../assets";

const FEATURES = [
  {
    title: "Point of Sale & Dashboard",
    meta: "Orders · Payments · Display",
    desc: "Your counter, your way. Built for how you actually run your business.",
    image: landingAssets.features.tables,
  },
  {
    title: "Menus, Storefronts & Online Ordering",
    meta: "Products · Ordering · Barcodes · Checkout",
    desc: "Update your menu or storefront instantly. Accept orders online and in person. Scan barcodes at checkout automatically.",
    image: landingAssets.features.menus,
  },
  {
    title: "Inventory Management",
    meta: "Stock · Vendors · Reorders · Barcodes",
    desc: "Real-time stock tracking with barcode scanning, automatic reorder triggers, and vendor syncing.",
    image: landingAssets.features.inventory,
  },
  {
    title: "Memberships & Recurring Payments",
    meta: "Plans · Billing · Renewals",
    desc: "Set it once. Astryd bills your members automatically every cycle.",
    image: landingAssets.features.memberships,
  },
  {
    title: "Time Tracking & Payroll",
    meta: "Hours · Wages · Compliance",
    desc: "Clock-outs feed directly into payroll. One tap to approve. Done.",
    image: landingAssets.features.payroll,
  },
  {
    title: "Accounts Payable",
    meta: "Expenses · Bills · Vendors",
    desc: "Every bill, every vendor, every expense. Tracked automatically.",
    image: landingAssets.features.accountsPayable,
  },
  {
    title: "Invoicing & Accounts Receivable",
    meta: "Invoices · Tracking · Collections",
    desc: "Send invoices and get paid. Astryd chases late payments so you don't have to.",
    image: landingAssets.features.invoicing,
  },
  {
    title: "CRM & Engagement",
    meta: "Clients · Outreach · Retention",
    desc: "Know your customers. Keep them coming back.",
    image: landingAssets.features.crm,
  },
];

const AUTO_SCROLL_MS = 3000;
const SLIDE_DURATION = 0.85;

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const getCards = () =>
      Array.from(root.querySelectorAll<HTMLElement>("[data-feature-card]"));

    const slideToIndex = (index: number) => {
      const cards = getCards();
      if (!cards.length) return;

      const clamped = Math.max(0, Math.min(index, cards.length - 1));
      indexRef.current = clamped;

      const card = cards[clamped];
      const first = cards[0];
      const maxScroll = Math.max(0, root.scrollWidth - root.clientWidth);
      const left = Math.min(card.offsetLeft - first.offsetLeft, maxScroll);

      tweenRef.current?.kill();
      tweenRef.current = gsap.to(root, {
        scrollLeft: left,
        duration: SLIDE_DURATION,
        ease: EASE.enter,
        overwrite: true,
      });
    };

    const id = window.setInterval(() => {
      if (pausedRef.current) return;
      const cards = getCards();
      if (cards.length <= 1) return;

      if (indexRef.current >= cards.length - 1) {
        slideToIndex(0);
        return;
      }

      slideToIndex(indexRef.current + 1);
    }, AUTO_SCROLL_MS);

    return () => {
      window.clearInterval(id);
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <SectionShell
      id="features"
      className="section-dark features-section-bg section-figma-bg relative overflow-hidden"
      snap={false}
    >
      <div className="landing-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pb-12 sm:pb-16 lg:pb-20">
        <Reveal y={20} className="landing-content-wide mx-auto mb-8 sm:mb-10 lg:mb-12 text-center">
          <h2 className="landing-display-title text-white">
            One login. One data set. Full automation.
          </h2>
        </Reveal>

        <div
          ref={scrollRef}
          className="features-carousel"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
          onPointerDown={() => {
            pausedRef.current = true;
            tweenRef.current?.kill();
          }}
          onPointerUp={() => {
            pausedRef.current = false;
          }}
          onPointerCancel={() => {
            pausedRef.current = false;
          }}
        >
          {FEATURES.map((item) => (
            <article key={item.title} data-feature-card className="features-card">
              <div className="features-card-media">
                <img
                  src={item.image}
                  alt={item.title}
                  className={
                    item.image === landingAssets.features.payroll
                      ? "h-full w-full object-cover object-[center_20%]"
                      : "h-full w-full object-cover"
                  }
                  loading="lazy"
                />
              </div>

              <div className="features-card-copy">
                <h3 className="features-card-title">{item.title}</h3>
                <p className="features-card-meta">{item.meta}</p>
                <p className="features-card-desc">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
