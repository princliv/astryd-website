import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  UserCheck,
  Award,
  ClipboardList,
  Server,
  Ban,
  ExternalLink,
  AlertTriangle,
  Scale,
  ShieldCheck,
  Lock,
  Cookie,
  Landmark,
  RefreshCw,
  Power,
  Scissors,
  FileCheck,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  ChevronUp,
  Shield,
} from "lucide-react";
import { LandingNavbar } from "../LandingPage/LandingNavbar";
import { FooterSection } from "../LandingPage/sections/FooterSection";
import "./privacy-policy.css";

interface TocItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const tocItems: TocItem[] = [
  { id: "site-purpose", title: "1. The Site & Its Purpose", icon: <Globe className="h-4 w-4" /> },
  { id: "eligibility", title: "2. Eligibility", icon: <UserCheck className="h-4 w-4" /> },
  { id: "intellectual-property", title: "3. Intellectual Property", icon: <Award className="h-4 w-4" /> },
  { id: "waitlist-forms", title: "4. Waitlist & Contact Forms", icon: <ClipboardList className="h-4 w-4" /> },
  { id: "platform-operators", title: "5. Platform Operators", icon: <Server className="h-4 w-4" /> },
  { id: "prohibited-uses", title: "6. Prohibited Uses", icon: <Ban className="h-4 w-4" /> },
  { id: "third-party-links", title: "7. Third-Party Links", icon: <ExternalLink className="h-4 w-4" /> },
  { id: "disclaimers", title: "8. Disclaimers", icon: <AlertTriangle className="h-4 w-4" /> },
  { id: "limitation-liability", title: "9. Limitation of Liability", icon: <Scale className="h-4 w-4" /> },
  { id: "indemnification", title: "10. Indemnification", icon: <ShieldCheck className="h-4 w-4" /> },
  { id: "privacy", title: "11. Privacy", icon: <Lock className="h-4 w-4" /> },
  { id: "cookies", title: "12. Cookies & Tracking", icon: <Cookie className="h-4 w-4" /> },
  { id: "governing-law", title: "13. Governing Law & Disputes", icon: <Landmark className="h-4 w-4" /> },
  { id: "changes-terms", title: "14. Changes to These Terms", icon: <RefreshCw className="h-4 w-4" /> },
  { id: "termination", title: "15. Termination", icon: <Power className="h-4 w-4" /> },
  { id: "severability", title: "16. Severability & Waiver", icon: <Scissors className="h-4 w-4" /> },
  { id: "entire-agreement", title: "17. Entire Agreement", icon: <FileCheck className="h-4 w-4" /> },
  { id: "contact", title: "18. Contact Information", icon: <Mail className="h-4 w-4" /> },
];

const SUPPORT_EMAIL = "customersupport@astryd.ai";
const SUPPORT_PHONE = "(929) 607-8735";
const REGISTERED_ADDRESS = "60 Water Street, Brooklyn, New York 11201";

export function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = tocItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(tocItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.offsetTop - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className="policy-page min-h-screen font-['Inter']">
      <LandingNavbar />

      {/* Hero */}
      <div className="policy-content-top relative overflow-hidden border-b border-white/6">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#8FA8C8] leading-relaxed">
            Please read these Terms carefully before accessing or using the Astryd website located at astryd.ai.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#4A6480]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Effective Date: August 1, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4" />
              Last Updated: August 1, 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-12">
          {/* Sidebar / Table of Contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 custom-scrollbar">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#4A6480]">
                On this page
              </h3>
              <ul className="space-y-1">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`policy-toc-link flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs transition-all ${
                        activeSection === item.id ? "policy-toc-link-active" : ""
                      }`}
                    >
                      {item.icon}
                      <span className="truncate">{item.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="max-w-none">
            {/* Preamble Callout Box */}
            <div className="policy-callout-warning mb-10 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-amber-400 mb-3">
                <Shield className="h-5 w-5" />
                Legally Binding Agreement
              </h3>
              <p className="text-sm text-[#c8d8ec] leading-relaxed mb-3">
                Please read these Website Terms of Service (these &quot;Terms&quot;) carefully before accessing or using the Astryd website located at <strong>astryd.ai</strong> and any related subdomains or pages (collectively, the &quot;Site&quot;). These Terms constitute a legally binding agreement between you and ResearchPort LLC dba Astryd (&quot;Astryd,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              </p>
              <p className="text-sm text-[#c8d8ec] leading-relaxed mb-3">
                By accessing or using the Site, submitting information through any form on the Site (including any waitlist, contact, or demo request form), or clicking to accept these Terms, you agree to be bound by these Terms. <strong>If you do not agree, do not access or use the Site.</strong>
              </p>
              <div className="policy-card p-4 mt-4">
                <p className="text-xs text-[#8FA8C8] leading-relaxed">
                  These Terms apply to all visitors, users, and others who access the Site (&quot;Visitors&quot;). If you are an operator or customer who has entered into a separate Software as a Service Agreement with Astryd (a &quot;Customer&quot;), that agreement governs your use of the Astryd platform and services in addition to these Terms.
                </p>
              </div>
            </div>

            {/* Section 1 */}
            <TermsSection id="site-purpose" number="1" title="The Site and Its Purpose" icon={<Globe />}>
              <p>
                The Site provides information about Astryd&apos;s autonomous financial operating agent platform for independent small and medium-sized business operators, including information about features, pricing, and how to request access or a demonstration. The Site is not itself the Astryd platform — access to and use of the Astryd platform is governed by a separate Software as a Service Agreement.
              </p>
              <p>
                Astryd reserves the right to modify, suspend, or discontinue the Site or any portion thereof at any time and without notice. Astryd will not be liable to you or any third party for any modification, suspension, or discontinuation of the Site.
              </p>
            </TermsSection>

            {/* Section 2 */}
            <TermsSection id="eligibility" number="2" title="Eligibility" icon={<UserCheck />}>
              <p>
                The Site is intended for users who are at least 18 years of age. By accessing the Site, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms.
              </p>
              <p>
                If you are accessing the Site on behalf of a business entity, you further represent and warrant that you have the authority to bind that entity to these Terms, and references to &quot;you&quot; in these Terms include both you individually and that entity.
              </p>
            </TermsSection>

            {/* Section 3 */}
            <TermsSection id="intellectual-property" number="3" title="Intellectual Property" icon={<Award />}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.1 Astryd&apos;s Intellectual Property</h3>
                  <p>
                    The Site and all of its contents, features, and functionality — including but not limited to text, graphics, logos, icons, images, audio clips, data compilations, software, and the compilation and arrangement thereof — are the exclusive property of Astryd or its licensors and are protected by United States and international copyright, trademark, trade secret, patent, and other intellectual property laws.
                  </p>
                  <p className="mt-3">
                    The Astryd name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of ResearchPort LLC. You may not use such marks without the prior written permission of Astryd. All other names, logos, product and service names, designs, and slogans on the Site are the trademarks of their respective owners.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.2 Limited License</h3>
                  <p>
                    Astryd grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site solely for your personal, non-commercial informational purposes in accordance with these Terms. This license does not include the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>(a) copy, reproduce, modify, distribute, transmit, display, perform, publish, or create derivative works of any content on the Site;</li>
                    <li>(b) use any data mining, robots, scraping, or similar data gathering or extraction methods;</li>
                    <li>(c) use the Site or its content for any commercial purpose or for any public display, commercial or non-commercial, without Astryd&apos;s prior written consent; or</li>
                    <li>(d) remove any copyright, trademark, or other proprietary notices from any content on the Site.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">3.3 User Submissions</h3>
                  <p>
                    If you submit any information, feedback, ideas, suggestions, or other content to Astryd through the Site (including through any contact form, waitlist form, or demo request form) (collectively, &quot;Submissions&quot;), you grant Astryd a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such Submissions for any purpose without compensation to you. You represent and warrant that you own or have the necessary rights to make the Submissions and that the Submissions do not violate any third party&apos;s rights or any applicable law.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 4 */}
            <TermsSection id="waitlist-forms" number="4" title="Waitlist and Contact Forms" icon={<ClipboardList />}>
              <p>
                The Site may offer the ability to submit your name, email address, business information, and other details to join a waitlist for the Astryd platform, request a demonstration, or contact Astryd. By submitting information through any such form, you:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 my-4">
                <div className="policy-card p-4">
                  <span className="text-xs font-semibold text-[#00C4CD] block mb-1">(a) Accuracy</span>
                  <p className="text-xs text-[#c8d8ec]">Represent and warrant that all information you provide is accurate, current, and complete;</p>
                </div>
                <div className="policy-card p-4">
                  <span className="text-xs font-semibold text-[#00C4CD] block mb-1">(b) Communications Consent</span>
                  <p className="text-xs text-[#c8d8ec]">Consent to Astryd contacting you at the email address and phone number you provide for purposes related to your submission;</p>
                </div>
                <div className="policy-card p-4">
                  <span className="text-xs font-semibold text-[#00C4CD] block mb-1">(c) No Access Guarantee</span>
                  <p className="text-xs text-[#c8d8ec]">Acknowledge that submission does not guarantee platform access, create contractual obligations, or constitute a service offer;</p>
                </div>
                <div className="policy-card p-4">
                  <span className="text-xs font-semibold text-[#00C4CD] block mb-1">(d) Privacy Agreement</span>
                  <p className="text-xs text-[#c8d8ec]">Agree to Astryd&apos;s Privacy Policy with respect to the collection, use, and disclosure of your information.</p>
                </div>
              </div>
              <p>
                Joining a waitlist does not establish a customer relationship with Astryd and does not entitle you to access the Astryd platform. Access to the platform is subject to Astryd&apos;s acceptance and the execution of a separate Software as a Service Agreement.
              </p>
            </TermsSection>

            {/* Section 5 */}
            <TermsSection id="platform-operators" number="5" title="Platform Operators — Additional Terms" icon={<Server />}>
              <p>
                If you are a Customer who has entered into a Software as a Service Agreement with Astryd (an &quot;Operator&quot;), the following additional terms apply to your use of the Site:
              </p>
              <ul className="list-disc pl-6 space-y-3 mt-3">
                <li>
                  <strong>(a) SaaS Agreement Controls:</strong> Your use of the Astryd platform, including the dashboard, payroll functionality, payment processing, and all related modules, is governed exclusively by your Software as a Service Agreement and the exhibits thereto. In the event of any conflict between these Terms and your Software as a Service Agreement with respect to your use of the platform, your Software as a Service Agreement controls.
                </li>
                <li>
                  <strong>(b) Public Informational Site:</strong> These Terms apply to your access and use of the Site (astryd.ai) in its capacity as a public-facing informational website, including any marketing pages, blog content, help center articles, and documentation pages accessible without login.
                </li>
                <li>
                  <strong>(c) Access Credentials Security:</strong> Your Access Credentials for the Astryd platform are personal to you. You agree not to share your Access Credentials with any unauthorized person and to notify Astryd immediately at <a href={`mailto:${SUPPORT_EMAIL}`} className="policy-link">{SUPPORT_EMAIL}</a> if you become aware of any unauthorized use of your Access Credentials or any other security breach.
                </li>
              </ul>
            </TermsSection>

            {/* Section 6 */}
            <TermsSection id="prohibited-uses" number="6" title="Prohibited Uses" icon={<Ban />}>
              <p>You agree not to use the Site:</p>
              <div className="grid gap-3 sm:grid-cols-2 mt-4">
                {[
                  { code: "(a)", text: "In any way that violates any applicable federal, state, local, or international law or regulation;" },
                  { code: "(b)", text: "For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way;" },
                  { code: "(c)", text: "To transmit, or procure the sending of, any advertising or promotional material without Astryd's prior written consent (e.g., spam, chain letters);" },
                  { code: "(d)", text: "To impersonate or attempt to impersonate Astryd, an Astryd employee, another user, or any other person or entity;" },
                  { code: "(e)", text: "To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which may harm Astryd or users;" },
                  { code: "(f)", text: "In any manner that could disable, overburden, damage, or impair the Site or interfere with any other party's use of the Site;" },
                  { code: "(g)", text: "To use any robot, spider, or other automatic device, process, or means to access the Site for monitoring or copying material;" },
                  { code: "(h)", text: "To introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful;" },
                  { code: "(i)", text: "To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site or connected servers/databases;" },
                  { code: "(j)", text: "To otherwise attempt to interfere with the proper working of the Site." },
                ].map((item) => (
                  <div key={item.code} className="policy-card p-3 flex items-start gap-2.5">
                    <span className="font-mono text-xs font-semibold text-[#00C4CD] shrink-0 mt-0.5">{item.code}</span>
                    <p className="text-xs text-[#c8d8ec]">{item.text}</p>
                  </div>
                ))}
              </div>
            </TermsSection>

            {/* Section 7 */}
            <TermsSection id="third-party-links" number="7" title="Third-Party Links and Content" icon={<ExternalLink />}>
              <p>
                The Site may contain links to third-party websites, resources, or services that are not owned or controlled by Astryd. Astryd has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. Astryd does not warrant the offerings of any of these entities or their websites.
              </p>
              <p>
                You acknowledge and agree that Astryd shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such third-party websites or services. We strongly advise you to read the terms and privacy policies of any third-party websites you visit.
              </p>
            </TermsSection>

            {/* Section 8 */}
            <TermsSection id="disclaimers" number="8" title="Disclaimers" icon={<AlertTriangle />}>
              <div className="space-y-4">
                <div className="policy-card-muted p-5 uppercase font-medium text-xs leading-relaxed text-[#c8d8ec] tracking-wide border-amber-500/20">
                  THE SITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS, AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. ASTRYD MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SITE OR THE INFORMATION, CONTENT, MATERIALS, OR PRODUCTS INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THE SITE.
                </div>
                <div className="policy-card-muted p-5 uppercase font-medium text-xs leading-relaxed text-[#c8d8ec] tracking-wide border-amber-500/20">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ASTRYD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. ASTRYD DOES NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ASTRYD DOES NOT WARRANT THE ACCURACY, COMPLETENESS, OR TIMELINESS OF ANY INFORMATION PROVIDED ON THE SITE, INCLUDING INFORMATION ABOUT PRODUCT FEATURES, PRICING, AVAILABILITY, OR REGULATORY COMPLIANCE.
                </div>
                <div className="policy-callout-info p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-[#00C4CD] mb-1">No Professional Advice</h4>
                  <p className="text-xs text-[#c8d8ec] leading-relaxed">
                    The information on the Site regarding Astryd&apos;s platform, features, pricing, integrations, and availability is provided for general informational purposes only and is subject to change without notice. Nothing on the Site constitutes legal, financial, tax, accounting, or business advice. Astryd is not a law firm, accounting firm, financial advisor, or licensed professional service provider. You should consult qualified professionals before making any business, legal, financial, or tax decisions.
                  </p>
                </div>
              </div>
            </TermsSection>

            {/* Section 9 */}
            <TermsSection id="limitation-liability" number="9" title="Limitation of Liability" icon={<Scale />}>
              <div className="space-y-4">
                <div className="policy-card-muted p-5 uppercase font-medium text-xs leading-relaxed text-[#c8d8ec] tracking-wide">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL ASTRYD, ITS AFFILIATES, LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, LOSS OF DATA, LOSS OF GOODWILL, SERVICE INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE, OR THE COST OF SUBSTITUTE PRODUCTS OR SERVICES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF, OR INABILITY TO USE, THE SITE OR ANY CONTENT THEREON, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT ASTRYD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                </div>
                <div className="policy-card p-4 border-[#00C4CD]/30 bg-[#00C4CD]/5">
                  <div className="text-sm font-semibold text-white mb-1">Liability Cap</div>
                  <p className="uppercase text-xs font-semibold text-[#00C4CD]">
                    IN NO EVENT WILL ASTRYD&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE EXCEED ONE HUNDRED DOLLARS ($100.00). THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE-STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                  </p>
                </div>
                <p className="text-xs text-[#8FA8C8]">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain types of damages. Accordingly, some of the above disclaimers and limitations may not apply to you.
                </p>
              </div>
            </TermsSection>

            {/* Section 10 */}
            <TermsSection id="indemnification" number="10" title="Indemnification" icon={<ShieldCheck />}>
              <p>
                You agree to defend, indemnify, and hold harmless Astryd, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3 text-sm text-[#c8d8ec]">
                <li>(a) your violation of these Terms;</li>
                <li>(b) your use of the Site, including but not limited to any use of the Site&apos;s content, other than as expressly authorized in these Terms;</li>
                <li>(c) your Submissions; or</li>
                <li>(d) your violation of any applicable law or the rights of any third party.</li>
              </ul>
            </TermsSection>

            {/* Section 11 */}
            <TermsSection id="privacy" number="11" title="Privacy" icon={<Lock />}>
              <p>
                Your use of the Site is also governed by Astryd&apos;s Privacy Policy, available at{" "}
                <Link to="/privacy" className="policy-link font-medium">
                  astryd.ai/privacy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
              <p className="mt-2">
                By using the Site, you consent to the collection, use, and disclosure of your information as described in the Privacy Policy. If you do not agree with the Privacy Policy, your remedy is to stop using the Site.
              </p>
            </TermsSection>

            {/* Section 12 */}
            <TermsSection id="cookies" number="12" title="Cookies and Tracking Technologies" icon={<Cookie />}>
              <p>
                The Site may use cookies, web beacons, pixel tags, and similar tracking technologies to collect information about your interactions with the Site, to analyze usage and trends, and to improve the Site and our services.
              </p>
              <p className="mt-2">
                By using the Site, you consent to the use of such technologies in accordance with our Privacy Policy. Most browsers allow you to refuse or delete cookies. If you do so, some features of the Site may not function properly.
              </p>
            </TermsSection>

            {/* Section 13 */}
            <TermsSection id="governing-law" number="13" title="Governing Law and Dispute Resolution" icon={<Landmark />}>
              <p>
                These Terms and any dispute or claim arising out of or related to these Terms, their subject matter, or their formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the internal laws of the State of New York, without giving effect to any choice or conflict of law provision or rule.
              </p>
              <p className="mt-3">
                Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Site shall be instituted exclusively in the federal courts of the United States or the courts of the State of New York, in each case located in New York County, New York. You waive any and all objections to the exercise of jurisdiction over you by such courts and to venue in such courts.
              </p>
              <div className="policy-card-muted p-4 mt-4 border-amber-500/30">
                <span className="text-xs font-semibold text-amber-400 block mb-1 uppercase tracking-wider">Jury Trial Waiver</span>
                <p className="uppercase text-xs font-semibold text-white leading-relaxed">
                  YOU AND ASTRYD EACH IRREVOCABLY WAIVE ANY RIGHT TO A TRIAL BY JURY IN ANY ACTION, PROCEEDING, OR CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE.
                </p>
              </div>
            </TermsSection>

            {/* Section 14 */}
            <TermsSection id="changes-terms" number="14" title="Changes to These Terms" icon={<RefreshCw />}>
              <p>
                Astryd reserves the right to revise and update these Terms at any time in its sole discretion. All changes are effective immediately when posted on the Site and apply to all access to and use of the Site thereafter.
              </p>
              <p className="mt-3">
                Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page periodically so you are aware of any changes, as they are binding on you. Astryd may, but is not obligated to, provide notice of material changes to these Terms by posting a notice on the Site&apos;s homepage or sending an email to any address you have provided to Astryd.
              </p>
            </TermsSection>

            {/* Section 15 */}
            <TermsSection id="termination" number="15" title="Termination" icon={<Power />}>
              <p>
                Astryd reserves the right to terminate or suspend your access to all or part of the Site at any time, with or without cause, with or without notice, effective immediately.
              </p>
              <p className="mt-3">
                Provisions of these Terms that by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
              </p>
            </TermsSection>

            {/* Section 16 */}
            <TermsSection id="severability" number="16" title="Severability and Waiver" icon={<Scissors />}>
              <p>
                If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of these Terms will continue in full force and effect.
              </p>
              <p className="mt-3">
                No waiver by Astryd of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Astryd to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
            </TermsSection>

            {/* Section 17 */}
            <TermsSection id="entire-agreement" number="17" title="Entire Agreement" icon={<FileCheck />}>
              <p>
                These Terms, together with the Privacy Policy and, if applicable, any Software as a Service Agreement between you and Astryd, constitute the sole and entire agreement between you and Astryd regarding the Site and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Site.
              </p>
              <p className="mt-3">
                For Customers, the Software as a Service Agreement controls in the event of any conflict with these Terms with respect to platform services.
              </p>
            </TermsSection>

            {/* Section 18 */}
            <TermsSection id="contact" number="18" title="Contact Information" icon={<Mail />}>
              <p className="mb-4">
                If you have any questions about these Terms or the Site, please contact Astryd at:
              </p>
              <div className="policy-card p-5 space-y-3">
                <div className="font-semibold text-white text-base">ResearchPort LLC dba Astryd</div>
                <div className="flex items-start gap-2.5 text-sm text-[#c8d8ec]">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#00C4CD]" />
                  <span>{REGISTERED_ADDRESS}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#c8d8ec]">
                  <Mail className="h-4 w-4 shrink-0 text-[#00C4CD]" />
                  <span>
                    Customer Support:{" "}
                    <a href={`mailto:${SUPPORT_EMAIL}`} className="policy-link">
                      {SUPPORT_EMAIL}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-[#c8d8ec]">
                  <Phone className="h-4 w-4 shrink-0 text-[#00C4CD]" />
                  <span>
                    Phone:{" "}
                    <a href={`tel:9296078735`} className="policy-link">
                      {SUPPORT_PHONE}
                    </a>
                  </span>
                </div>
              </div>
            </TermsSection>

            {/* Legal Disclaimer Box */}
            <div className="mt-12 rounded-xl border border-white/10 bg-white/3 p-6 text-xs leading-relaxed text-[#8FA8C8]">
              <div className="font-semibold text-white mb-2 uppercase tracking-wider text-[11px]">
                Legal Disclaimer
              </div>
              <p>
                These Terms of Service have been prepared for general informational and planning purposes. They do not constitute legal advice and should be reviewed and approved by qualified legal counsel prior to publication on the Astryd website. © 2026 ResearchPort LLC. All rights reserved.
              </p>
            </div>
          </main>
        </div>
      </div>

      <FooterSection />

      {/* Back to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="policy-scroll-top fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

function TermsSection({
  id,
  number,
  title,
  icon,
  children,
}: {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-12 scroll-mt-28">
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00C4CD]/10 text-[#00C4CD]">
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "h-4.5 w-4.5" })}
        </div>
        <h2 className="text-2xl font-semibold text-white">
          <span className="text-[#4A6480] mr-1">{number}.</span> {title}
        </h2>
      </div>
      <div className="prose-policy space-y-3 text-sm leading-relaxed text-[#c8d8ec]">
        {children}
      </div>
    </section>
  );
}

export default TermsOfServicePage;
