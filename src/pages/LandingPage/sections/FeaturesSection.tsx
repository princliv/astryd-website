import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionShell } from "../motion/SectionShell";
import { Reveal } from "../motion/Reveal";
import { gsap } from "../motion/gsap";
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

const AUTO_SCROLL_MS = 4000;
const SLIDE_DURATION = 1.15;
const SLIDE_EASE = "power3.inOut";

export function FeaturesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const tweeningRef = useRef(false);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const slideToIndexRef = useRef<(index: number) => void>(() => {});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const getCards = () =>
      Array.from(root.querySelectorAll<HTMLElement>("[data-feature-card]"));

    /** Scroll offset that aligns a card with the track’s left content edge */
    const getScrollLeftForIndex = (index: number) => {
      const cards = getCards();
      if (!cards.length) return 0;
      const card = cards[Math.max(0, Math.min(index, cards.length - 1))];
      const maxScroll = Math.max(0, root.scrollWidth - root.clientWidth);
      const styles = window.getComputedStyle(root);
      const padLeft = parseFloat(styles.paddingLeft) || 0;
      const rootRect = root.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const delta = cardRect.left - rootRect.left - padLeft;
      return Math.min(Math.max(0, root.scrollLeft + delta), maxScroll);
    };

    const getMaxScrollIndex = () => {
      const cards = getCards();
      if (cards.length <= 1) return 0;
      const maxScroll = Math.max(0, root.scrollWidth - root.clientWidth);
      if (maxScroll <= 1) return 0;

      let maxIdx = 0;
      for (let i = 0; i < cards.length; i++) {
        if (getScrollLeftForIndex(i) <= maxScroll - 1) maxIdx = i;
      }
      return maxIdx;
    };

    const syncActiveFromScroll = () => {
      if (tweeningRef.current) return;
      const cards = getCards();
      if (!cards.length) return;

      const scrollLeft = root.scrollLeft;
      let nearest = 0;
      let nearestDist = Infinity;

      for (let i = 0; i < cards.length; i++) {
        const dist = Math.abs(getScrollLeftForIndex(i) - scrollLeft);
        if (dist < nearestDist) {
          nearestDist = dist;
          nearest = i;
        }
      }

      if (nearest !== indexRef.current) {
        indexRef.current = nearest;
        setActiveIndex(nearest);
      }
    };

    const slideToIndex = (index: number) => {
      const cards = getCards();
      if (!cards.length) return;

      const clamped = Math.max(0, Math.min(index, cards.length - 1));
      const target = getScrollLeftForIndex(clamped);
      const from = root.scrollLeft;

      indexRef.current = clamped;
      setActiveIndex(clamped);

      // Already there — still update dots, skip tween
      if (Math.abs(from - target) < 1) return;

      // Tween via proxy — direct scrollLeft tweens often jump with no swipe
      root.style.scrollSnapType = "none";
      tweeningRef.current = true;
      tweenRef.current?.kill();

      const proxy = { x: from };
      tweenRef.current = gsap.to(proxy, {
        x: target,
        duration: SLIDE_DURATION,
        ease: SLIDE_EASE,
        overwrite: true,
        onUpdate: () => {
          root.scrollLeft = proxy.x;
        },
        onComplete: () => {
          root.scrollLeft = target;
          tweeningRef.current = false;
          root.style.scrollSnapType = "";
        },
      });
    };

    slideToIndexRef.current = slideToIndex;

    const id = window.setInterval(() => {
      if (pausedRef.current || tweeningRef.current) return;
      const cards = getCards();
      if (cards.length <= 1) return;

      const maxIdx = getMaxScrollIndex();
      if (indexRef.current >= maxIdx) {
        slideToIndex(0);
        return;
      }

      slideToIndex(indexRef.current + 1);
    }, AUTO_SCROLL_MS);

    root.addEventListener("scroll", syncActiveFromScroll, { passive: true });

    return () => {
      window.clearInterval(id);
      root.removeEventListener("scroll", syncActiveFromScroll);
      tweenRef.current?.kill();
      tweeningRef.current = false;
    };
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const slideToIndex = (index: number) => {
    slideToIndexRef.current(index);
  };

  return (
    <SectionShell
      id="features"
      className="section-dark features-section-bg section-figma-bg relative overflow-hidden"
      snap={false}
    >
      <div className="landing-section-content features-section-content relative z-10 w-full pb-12 sm:pb-16 lg:pb-20">
        {/* Headline keeps inset; carousel is full-bleed (0 side padding) */}
        <Reveal
          y={20}
          className="landing-content-wide mx-auto mb-8 px-4 text-center sm:mb-10 sm:px-6 md:px-8 lg:mb-[57px] lg:px-[39px] xl:px-[42px]"
        >
          <h2 className="landing-display-title mx-auto max-w-[1501px] text-white">
            One login. One data set. Full automation.
          </h2>
        </Reveal>

        <div className="features-carousel-shell">
          <div
            ref={scrollRef}
            className="features-carousel"
            onMouseEnter={pause}
            onMouseLeave={resume}
            onPointerDown={() => {
              pause();
              tweenRef.current?.kill();
            }}
            onPointerUp={resume}
            onPointerCancel={resume}
          >
            {FEATURES.map((item) => (
              <article
                key={item.title}
                data-feature-card
                className="features-card"
              >
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

          {/* Figma: chevrons flank pagination at y=2579, not mid-cards */}
          <div className="features-carousel-controls">
            <button
              type="button"
              className="features-carousel-arrow features-carousel-arrow--prev"
              aria-label="Previous feature"
              onClick={() => {
                pause();
                slideToIndex(Math.max(0, indexRef.current - 1));
              }}
            >
              <ChevronLeft className="h-[29px] w-[29px]" strokeWidth={1.5} />
            </button>

            <div
              className="features-carousel-dots"
              role="tablist"
              aria-label="Feature slides"
            >
              {FEATURES.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Go to ${item.title}`}
                  className={
                    i === activeIndex
                      ? "features-carousel-dot features-carousel-dot--active"
                      : "features-carousel-dot"
                  }
                  onClick={() => {
                    pause();
                    slideToIndex(i);
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              className="features-carousel-arrow features-carousel-arrow--next"
              aria-label="Next feature"
              onClick={() => {
                pause();
                slideToIndex(
                  Math.min(FEATURES.length - 1, indexRef.current + 1)
                );
              }}
            >
              <ChevronRight className="h-[29px] w-[29px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
