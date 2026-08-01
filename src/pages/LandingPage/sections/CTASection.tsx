import { useState } from "react";
import { ArrowRight, CheckCircle2, CalendarDays, Plug2, LineChart } from "lucide-react";
import { SectionShell } from "../motion/SectionShell";
import { cn } from "@/lib/utils";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

const BENEFITS = [
  {
    icon: CalendarDays,
    title: "Custom platform tour",
    desc: "A 1-on-1 walkthrough tailored to your industry and team size.",
  },
  {
    icon: Plug2,
    title: "Integration assessment",
    desc: "See how Astryd syncs with your POS, banks, and existing tools.",
  },
  {
    icon: LineChart,
    title: "ROI & pricing estimate",
    desc: "Get a clear impact estimate and a plan that fits your growth stage.",
  },
];

const fieldClass = cn(
  "font-['Inter'] h-11 w-full px-3.5 rounded-xl text-[13px] text-white transition-all",
  "bg-[rgba(255,255,255,0.04)] border border-white/10",
  "placeholder:text-[#4A6480]",
  "focus:outline-none focus:border-[#00C4CD] focus:ring-2 focus:ring-[#00C4CD]/25"
);

const labelClass = "font-['Inter'] text-[12px] font-medium text-[#8FA8C8]";

export function CTASection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [describe, setDescribe] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company || !region || !describe) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setRegion("");
    setDescribe("");
  };

  return (
    <SectionShell id="cta" className="section-dark relative overflow-hidden" snap={false}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(0,196,205,0.16) 0%, transparent 55%), radial-gradient(ellipse 55% 50% at 10% 90%, rgba(0,80,90,0.35) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 50% 50%, rgba(15,37,64,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="landing-section-content relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 pb-14 sm:pb-16 lg:pb-20">
        <div className="mx-auto grid max-w-[1200px] 2xl:max-w-[1400px] grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          {/* Left — copy + benefits */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <span className="mb-3 block font-['Inter'] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#00C4CD] sm:text-[12px]">
              Book a demo
            </span>

            <h2 className="landing-display-title mb-4 text-white sm:mb-5">
              Ready to run your business from{" "}
              <span className="text-[#00C4CD]">one dashboard?</span>
            </h2>

            <p className="mb-8 max-w-[460px] font-['Inter'] text-[14px] font-normal leading-relaxed text-[#8FA8C8] sm:text-[15px] md:text-[16px]">
              See how Astryd unifies CRM, finance, inventory, and workforce — with Ask
              Astryd answering questions from your live data.
            </p>

            <ul className="flex flex-col gap-4">
              {BENEFITS.map(({ icon: Icon, title, desc }) => (
                <li
                  key={title}
                  className="flex items-start gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00C4CD]/12">
                    <Icon className="h-5 w-5 text-[#00C4CD]" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h4 className="font-['Inter'] text-[14px] font-semibold text-white">
                      {title}
                    </h4>
                    <p className="mt-0.5 font-['Inter'] text-[12px] leading-relaxed text-[#8FA8C8] sm:text-[13px]">
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-8 font-['Inter'] text-[12px] text-[#4A6480]">
              Questions?{" "}
              <a
                href="mailto:customersupport@astryd.ai"
                className="text-[#00C4CD] transition-opacity hover:opacity-90"
              >
                customersupport@astryd.ai
              </a>
            </p>
          </div>

          {/* Right — form card */}
          <div className="flex items-center lg:col-span-7 lg:justify-end">
            <div
              className={cn(
                "w-full max-w-[560px] 2xl:max-w-[640px] overflow-hidden rounded-xl sm:rounded-2xl border border-white/10",
                "bg-[rgba(255,255,255,0.04)] p-5 shadow-[0_24px_64px_rgba(0,0,0,0.35)] backdrop-blur-md sm:p-7 lg:p-8"
              )}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#34D399]/15">
                    <CheckCircle2 className="h-9 w-9 text-[#34D399]" />
                  </div>
                  <h3 className="mb-3 font-['Inter'] text-[20px] font-semibold text-white">
                    Demo request submitted
                  </h3>
                  <p className="mb-8 max-w-[380px] font-['Inter'] text-[14px] leading-relaxed text-[#8FA8C8]">
                    Thank you, {name}. Our team will reach out at {email} within 24 hours
                    to schedule your session.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-full bg-[#00C4CD] px-8 py-3 text-xs font-semibold text-white transition-transform hover:scale-105"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                  <div className="mb-1">
                    <h3 className="font-['Inter'] text-[18px] font-semibold text-white sm:text-[20px]">
                      Book a live session
                    </h3>
                    <p className="mt-1 font-['Inter'] text-[12px] leading-relaxed text-[#8FA8C8] sm:text-[13px]">
                      Tell us a bit about your business and we&apos;ll prepare a custom demo.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="cta-name">
                        Full name
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="cta-email">
                        Work email
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="cta-company">
                        Company name
                      </label>
                      <input
                        id="cta-company"
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className={labelClass} htmlFor="cta-phone">
                        Phone{" "}
                        <span className="font-normal text-[#4A6480]">(optional)</span>
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass} htmlFor="cta-region">
                      Region / US state
                    </label>
                    <select
                      id="cta-region"
                      required
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className={cn(fieldClass, "appearance-none cursor-pointer pr-10")}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%238FA8C8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: "right 0.75rem center",
                        backgroundSize: "1.25rem",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <option value="" disabled className="bg-[#0A1F2E] text-[#4A6480]">
                        Select state
                      </option>
                      {US_STATES.map((state) => (
                        <option key={state} value={state} className="bg-[#0A1F2E] text-white">
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className={labelClass} htmlFor="cta-describe">
                      How can we help your business?
                    </label>
                    <textarea
                      id="cta-describe"
                      required
                      value={describe}
                      onChange={(e) => setDescribe(e.target.value)}
                      placeholder="Tell us about your requirements..."
                      rows={3}
                      className={cn(fieldClass, "h-auto min-h-[96px] resize-none py-3")}
                    />
                  </div>

                  <button
                    type="submit"
                    className={cn(
                      "mt-1 flex h-12 w-full cursor-pointer items-center justify-center gap-2",
                      "rounded-full bg-[#00C4CD] font-['Inter'] text-[14px] font-semibold text-white",
                      "shadow-none transition-all hover:-translate-y-0.5 hover:brightness-110"
                    )}
                  >
                    Submit demo request
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-center font-['Inter'] text-[11px] text-[#4A6480]">
                    No credit card required · We&apos;ll reply within one business day
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
