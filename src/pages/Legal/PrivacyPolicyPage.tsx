import React, { useState, useEffect } from "react";
import {
  Shield,
  Eye,
  Database,
  Share2,
  Clock,
  UserCheck,
  Cookie,
  Lock,
  Baby,
  ExternalLink,
  FileText,
  Mail,
  ChevronUp,
  Building2,
  Users,
  CreditCard,
  Bot,
  BookOpen,
  MapPin,
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
  { id: "who-we-are", title: "Who We Are", icon: <Building2 className="h-4 w-4" /> },
  { id: "scope", title: "Scope of This Policy", icon: <Eye className="h-4 w-4" /> },
  { id: "definitions", title: "Definitions", icon: <BookOpen className="h-4 w-4" /> },
  { id: "information-collected", title: "Information We Collect", icon: <Database className="h-4 w-4" /> },
  { id: "how-we-use", title: "How We Use Your Information", icon: <FileText className="h-4 w-4" /> },
  { id: "how-we-share", title: "How We Share Your Information", icon: <Share2 className="h-4 w-4" /> },
  { id: "glba", title: "GLBA Notice", icon: <Shield className="h-4 w-4" /> },
  { id: "retention", title: "Data Retention", icon: <Clock className="h-4 w-4" /> },
  { id: "rights", title: "Your Privacy Rights", icon: <UserCheck className="h-4 w-4" /> },
  { id: "ccpa", title: "California Privacy Rights", icon: <UserCheck className="h-4 w-4" /> },
  { id: "cookies", title: "Cookies & Tracking", icon: <Cookie className="h-4 w-4" /> },
  { id: "security", title: "Data Security", icon: <Lock className="h-4 w-4" /> },
  { id: "children", title: "Children's Privacy", icon: <Baby className="h-4 w-4" /> },
  { id: "third-party", title: "Third-Party Links", icon: <ExternalLink className="h-4 w-4" /> },
  { id: "changes", title: "Changes to This Policy", icon: <FileText className="h-4 w-4" /> },
  { id: "contact", title: "Contact Us", icon: <Mail className="h-4 w-4" /> },
];

const PRIVACY_EMAIL = "customersupport@astryd.ai";
const REGISTERED_ADDRESS = "60 Water Street Apt 605, BK 11201";

const PrivacyPolicyPage: React.FC = () => {
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
            Privacy Policy
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#8FA8C8] leading-relaxed">
            Your privacy matters to us. This policy explains how Astryd collects,
            uses, protects, and shares your information.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-[#4A6480]">
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              Effective Date: July 1, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <FileText className="h-4 w-4" />
              Last Updated: July 1, 2026
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
          {/* Sidebar / Table of Contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#4A6480]">
                On this page
              </h3>
              <ul className="space-y-1">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`policy-toc-link flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-all ${
                        activeSection === item.id ? "policy-toc-link-active" : ""
                      }`}
                    >
                      {item.icon}
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <main className="max-w-none">
            {/* Important Notice */}
            <div className="policy-callout-warning mb-10 rounded-xl p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-amber-400 mb-3">
                <Shield className="h-5 w-5" />
                Important Notice
              </h3>
              <p className="text-sm text-[#c8d8ec] leading-relaxed mb-3">
                This Privacy Policy covers three categories of individuals whose data Astryd processes:
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="policy-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="h-4 w-4 text-[#00C4CD]" />
                    <span className="text-sm font-semibold text-white">Business Operators</span>
                  </div>
                  <p className="text-xs text-[#8FA8C8]">SMB owners and managers who subscribe to Astryd</p>
                </div>
                <div className="policy-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-[#00C4CD]" />
                    <span className="text-sm font-semibold text-white">Employees</span>
                  </div>
                  <p className="text-xs text-[#8FA8C8]">Workers whose payroll and HR data is processed through Astryd</p>
                </div>
                <div className="policy-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="h-4 w-4 text-[#00C4CD]" />
                    <span className="text-sm font-semibold text-white">End Customers</span>
                  </div>
                  <p className="text-xs text-[#8FA8C8]">Consumers who transact at POS of an Astryd-enabled business</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#c8d8ec] leading-relaxed">
                Astryd processes sensitive financial data including payroll information, bank account details,
                Social Security Numbers, and payment card transaction data. This policy explains how that data
                is collected, used, protected, and your rights with respect to it.
              </p>
              <p className="mt-3 text-xs text-[#4A6480] italic">
                This policy is not a substitute for legal advice. If you have questions about your specific rights, consult a qualified attorney.
              </p>
            </div>

            {/* Section 1 */}
            <PolicySection id="who-we-are" number="1" title="Who We Are" icon={<Building2 />}>
              <p>
                ResearchPort LLC (doing business as Astryd) ("Astryd," "we," "us," or "our") operates
                an all-in-one point-of-sale, payroll, and financial operating platform designed for small and
                medium-sized businesses ("Platform"). The Platform is accessible at{" "}
                <a href="https://www.astryd.ai" className="policy-link" target="_blank" rel="noopener noreferrer">
                  www.astryd.ai
                </a>{" "}
                and through our mobile and desktop applications.
              </p>
              <p>
                Astryd is the data controller for information collected directly through our Platform. Where
                Astryd processes employee data on behalf of a Business Operator, Astryd acts as a data processor
                and the Business Operator acts as the data controller for that employee data.
              </p>
              <p>
                Astryd is not a bank, money transmitter, or fiduciary, and does not itself hold or transmit funds
                except as an intermediary technology layer facilitating instructions between Business Operators
                and Astryd's payment processing, payroll, and banking partners.
              </p>
              <div className="policy-card p-4 text-sm space-y-2">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#4A6480]" />
                  <span><strong>Registered address:</strong> {REGISTERED_ADDRESS}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#4A6480]" />
                  <span>
                    <strong>Privacy contact:</strong>{" "}
                    <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>
                  </span>
                </p>
              </div>
            </PolicySection>

            {/* Section 2 */}
            <PolicySection id="scope" number="2" title="Scope of This Policy" icon={<Eye />}>
              <p>This Privacy Policy applies to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Business Operators:</strong> Individuals and entities who create an Astryd account,
                  subscribe to the Platform, and use Astryd to manage their POS, payroll, and business financial
                  operations.
                </li>
                <li>
                  <strong>Employees:</strong> Individuals whose personal and payroll data is entered into Astryd
                  by a Business Operator for the purpose of processing payroll, managing HR records, or
                  administering employee banking.
                </li>
                <li>
                  <strong>End Customers:</strong> Consumers who complete a transaction at the point of sale of an
                  Astryd-enabled business, including cardholders whose payment data is processed through Astryd's
                  payment infrastructure.
                </li>
              </ul>
              <p>
                This Policy does not apply to third-party websites, applications, or services that may be linked
                to or integrated with the Platform. Those services are governed by their own privacy policies.
              </p>
              <p>
                Astryd operates in all 50 United States. This Policy is written to comply with applicable federal
                law and the privacy laws of all states in which we operate, including the California Consumer
                Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA).
              </p>
            </PolicySection>

            {/* Section 3 */}
            <PolicySection id="definitions" number="3" title="Definitions" icon={<BookOpen />}>
              <ul className="list-none space-y-3">
                <li>
                  <strong className="text-white">Applicable Data Protection Laws</strong> — all Laws applicable to
                  the Processing of Personal Data under this Policy, including, as applicable, the California
                  Consumer Privacy Act as amended by the California Privacy Rights Act (CCPA), and other U.S. state
                  comprehensive privacy laws.
                </li>
                <li>
                  <strong className="text-white">Customer Data</strong> — information, data, and other content, in
                  any form or medium, that is collected, downloaded, submitted, or otherwise received, directly or
                  indirectly, from a Business Operator or Authorized User by or through the Services, including any
                  Personal Data and Payroll Data.
                </li>
                <li>
                  <strong className="text-white">Personal Data</strong> — any information that identifies, relates
                  to, describes, or is reasonably capable of being associated with an identified or identifiable
                  individual, including Payroll Data, that Astryd Processes in connection with the Platform.
                </li>
                <li>
                  <strong className="text-white">Payroll Data</strong> — Customer Data relating to the calculation,
                  processing, withholding, remittance, or disbursement of wages, salaries, bonuses, benefits
                  contributions, tax withholdings, and related compensation amounts, including bank account and
                  routing numbers, Social Security Numbers, and tax identification information.
                </li>
                <li>
                  <strong className="text-white">Security Incident</strong> — any confirmed unauthorized or
                  unlawful access to, or acquisition, disclosure, use, alteration, or destruction of, Customer Data
                  (including any Personal Data) in Astryd's or a Sub-processor's possession or control.
                </li>
                <li>
                  <strong className="text-white">Sensitive Data</strong> — (a) government-issued identification
                  numbers, including Social Security Numbers; (b) financial account, payment card, or routing
                  numbers; (c) health, health insurance, or biometric data; and (d) any other category of Personal
                  Data subject to heightened protection requirements under Applicable Data Protection Laws.
                </li>
                <li>
                  <strong className="text-white">Sub-processor</strong> — any third party engaged by Astryd to
                  Process Personal Data in connection with the provision of the Platform, including any payment
                  processor, cloud-hosting provider, or other service provider.
                </li>
              </ul>
            </PolicySection>

            {/* Section 4 */}
            <PolicySection id="information-collected" number="4" title="Information We Collect" icon={<Database />}>
              <h4 className="text-base font-semibold text-white mt-2 mb-3 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#00C4CD]" />
                4.1 Business Operators
              </h4>
              <p>When you register and use Astryd as a business operator, we collect:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Account information:</strong> name, business name, email address, phone number, business address, EIN/Tax ID.</li>
                <li><strong>Identity verification:</strong> government-issued ID, date of birth, SSN (last 4 digits or full, as required for banking and payroll setup), beneficial ownership information as required by FinCEN CDD rules.</li>
                <li><strong>Financial information:</strong> business bank account details (routing and account numbers), payment card information, revenue and transaction data processed through the Platform.</li>
                <li><strong>Business operations data:</strong> POS transaction records, inventory data, menu or product information, sales analytics, customer counts.</li>
                <li><strong>Payroll configuration:</strong> pay schedules, compensation structures, benefits elections, tax withholding settings, state unemployment insurance account numbers.</li>
                <li><strong>Device and usage data:</strong> IP address, browser type, operating system, pages visited, session duration, error logs, and API interaction logs.</li>
              </ul>

              <h4 className="text-base font-semibold text-white mt-6 mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-[#00C4CD]" />
                4.2 Employees
              </h4>
              <p>
                When a Business Operator onboards their employees through Astryd, we collect the following
                employee data on behalf of and under instruction from that Business Operator:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Identity:</strong> full legal name, date of birth, home address, Social Security Number (SSN).</li>
                <li><strong>Employment information:</strong> job title, department, hire date, employment type (full-time, part-time, contractor), compensation rate, pay frequency.</li>
                <li><strong>Tax information:</strong> federal and state W-4 elections, state-specific withholding forms, direct deposit bank account routing and account numbers.</li>
                <li><strong>Time and attendance:</strong> clock-in/clock-out records, shift schedules, PTO and leave balances.</li>
                <li><strong>Benefits:</strong> health insurance elections, retirement contribution amounts (where applicable).</li>
              </ul>
              <Callout variant="info" title="Note for Employees">
                If you are an employee whose data appears in Astryd, your employer (the Business Operator)
                controls how your data is collected and used within the Platform. Astryd processes your data
                only as instructed by your employer. For questions about how your employer handles your data,
                please contact your employer directly. For questions about Astryd's processing of your data,
                contact us at{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>.
              </Callout>

              <h4 className="text-base font-semibold text-white mt-6 mb-3 flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-[#00C4CD]" />
                4.3 End Customers
              </h4>
              <p>When a consumer completes a transaction at the point of sale of an Astryd-enabled business, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Payment card data:</strong> cardholder name, card number (tokenized), expiration date, billing ZIP code, transaction amount, and transaction timestamp. Full card numbers are never stored by Astryd — all payment card data is tokenized at the point of capture and processed through our payment infrastructure partner (Finix) in compliance with PCI DSS standards.</li>
                <li><strong>Transaction data:</strong> items purchased, transaction total, tip amount, payment method, and location identifier.</li>
                <li><strong>Contact information (if voluntarily provided):</strong> email address or phone number for receipt delivery, loyalty programs, or marketing opt-ins.</li>
              </ul>
              <Callout variant="info" title="Note for End Customers">
                Astryd processes your payment and transaction data on behalf of the merchant (Business Operator)
                from whom you made a purchase. Astryd does not sell your payment card data to third parties.
                Your data is used to complete your transaction, generate receipts, and support fraud prevention.
                You may contact the merchant directly for questions about their specific use of your data.
              </Callout>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">
                4.4 Data Collected Automatically
              </h4>
              <p>When any user accesses the Platform, we automatically collect:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Log data:</strong> server logs recording IP address, request type, pages accessed, timestamps, and error conditions.</li>
                <li><strong>Device identifiers:</strong> device type, operating system, browser version, and unique device identifiers.</li>
                <li><strong>Cookies and similar technologies:</strong> session cookies, authentication tokens, and analytics cookies. See Section 11 for our Cookie Policy.</li>
              </ul>
            </PolicySection>

            {/* Section 5 */}
            <PolicySection id="how-we-use" number="5" title="How We Use Your Information" icon={<FileText />}>
              <h4 className="text-base font-semibold text-white mt-2 mb-3">5.1 Platform Operations</h4>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Create and maintain your account and authenticate your identity.</li>
                <li>Process payroll runs, calculate tax withholdings, generate pay stubs, and file payroll tax returns on behalf of Business Operators through our payroll tax filing partner (Payroll Tax People LLC, an IRS Bulk Filer).</li>
                <li>Process payment card transactions at the point of sale through our payment infrastructure partner (Finix).</li>
                <li>Execute ACH direct deposit payments to employee bank accounts through our ACH partner (KotaPay).</li>
                <li>Verify and link Business Operator bank accounts through our bank account verification partner (Plaid) to enable ACH payroll disbursements, settlement deposits, and real-time cash position monitoring within the Platform. Business Operators explicitly consent to bank account connection during the Astryd onboarding flow.</li>
                <li>Provide business banking features including business deposit accounts, business debit cards, and float management services.</li>
                <li>Generate analytics, reports, and business intelligence for Business Operators.</li>
              </ul>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">5.2 Legal and Regulatory Compliance</h4>
              <p>We use information as required by law, including to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>File federal and state payroll tax returns (Forms 941, 940, W-2, W-3, state equivalents) on behalf of Business Operators.</li>
                <li>Comply with Bank Secrecy Act (BSA) and Anti-Money Laundering (AML) obligations.</li>
                <li>Respond to lawful requests from government authorities, courts, and law enforcement.</li>
                <li>Verify identity and beneficial ownership as required by FinCEN Customer Due Diligence (CDD) rules.</li>
                <li>Comply with IRS reporting obligations including 1099 issuance where applicable.</li>
              </ul>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">5.3 Communication and Support</h4>
              <p>We use contact information to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Send transactional communications: account confirmations, payroll processing confirmations, payment receipts, tax filing confirmations, and security alerts.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Send product updates, feature announcements, and service notifications.</li>
                <li>Send marketing communications to Business Operators who have opted in. You may opt out at any time.</li>
              </ul>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">5.4 Security and Fraud Prevention</h4>
              <p>
                We use data to detect, investigate, and prevent fraudulent transactions, unauthorized access,
                and other illegal activity. This includes monitoring transaction patterns, verifying identity,
                and analyzing behavioral signals across the Platform.
              </p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3 flex items-center gap-2">
                <Bot className="h-4 w-4 text-[#00C4CD]" />
                5.5 AI-Powered Features
              </h4>
              <p>
                Astryd's Platform includes AI-powered analytics features that process your business data —
                including POS transaction events, payroll runs, and banking activity — to generate insights
                such as cash flow risk alerts, payroll automation suggestions, revenue intelligence, and tax
                liability forecasts. These features operate on your data within Astryd's platform and are not
                used to train external AI models. You may disable AI features in your account settings.
              </p>
            </PolicySection>

            {/* Section 6 */}
            <PolicySection id="how-we-share" number="6" title="How We Share Your Information" icon={<Share2 />}>
              <p className="font-semibold text-white">
                Astryd does not sell your personal information.
              </p>
              <p>We share data only in the following circumstances:</p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">6.1 Service Providers and Sub-processors</h4>
              <p>
                We share data with third-party service providers who process data on our behalf under written
                data processing agreements. All Sub-processors are required to protect Customer Data under
                confidentiality and data protection obligations no less protective than those Astryd maintains.
                Astryd may add, remove, or replace Sub-processors at any time. Key Sub-processors include:
              </p>
              <div className="mt-3 space-y-3">
                <SubprocessorCard
                  name="Finix"
                  description="Payment processing infrastructure. Processes cardholder data for POS transactions."
                  badge="PCI DSS Level 1"
                />
                <SubprocessorCard
                  name="KotaPay"
                  description="ACH payment processing for payroll direct deposit. Processes employee bank account details for direct deposit execution."
                />
                <SubprocessorCard
                  name="Payroll Tax People LLC"
                  description="A division of Payroll People Inc. (est. 1981). Payroll tax impound and filing. Processes employer and employee tax data for federal and state payroll tax filing."
                  badge="IRS Bulk Filer, SSAE16 Type II"
                />
                <SubprocessorCard
                  name="Plaid"
                  description="Bank account verification and read-only bank feed connection. Used to verify Business Operator bank accounts and enable bank data access for cash flow intelligence and ACH payment initiation."
                />
                <SubprocessorCard
                  name="Anthropic (Claude API)"
                  description="Powers Ask Astryd conversational AI and agentic functionality."
                />
                <SubprocessorCard
                  name="Twilio / SendGrid"
                  description="SMS and email delivery for transactional communications, marketing campaigns, and payment reminders."
                />
                <SubprocessorCard
                  name="Cloud Infrastructure Providers"
                  description="Secure hosting and data storage."
                />
                <SubprocessorCard
                  name="Identity Verification Providers"
                  description="KYC/AML compliance."
                />
              </div>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">6.2 Government and Regulatory Authorities</h4>
              <p>
                Astryd shares data with federal and state tax authorities (IRS, state revenue departments) as
                required for payroll tax filing. Astryd responds to lawful subpoenas, court orders, and
                regulatory requests. Where legally permitted, Astryd will notify affected users of such requests.
              </p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">6.3 Business Operators' Access to Employee and Customer Data</h4>
              <p>
                Business Operators have access to all employee and End Customer data entered into or generated
                through their Astryd account. Business Operators are independently responsible for their own
                privacy obligations with respect to their employees and customers under applicable law.
              </p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">6.4 Business Transfers</h4>
              <p>
                If Astryd is acquired, merges with another company, or undergoes a change of control, Customer
                Data may be transferred to the successor entity. Astryd will provide notice and, where required
                by law, obtain consent prior to any such transfer.
              </p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">6.5 With Consent</h4>
              <p>
                Astryd may share data with third parties for other purposes where the applicable user has given
                explicit consent.
              </p>
            </PolicySection>

            {/* Section 7 */}
            <PolicySection id="glba" number="7" title="Gramm-Leach-Bliley Act (GLBA) Notice" icon={<Shield />}>
              <p>
                Astryd provides financial products and services — including business deposit accounts, payment
                processing, and payroll services — that are subject to the Gramm-Leach-Bliley Act (GLBA).
                This section constitutes our GLBA privacy notice.
              </p>
              <div className="mt-4 space-y-4">
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">Categories of NPI collected</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    Social Security Numbers, bank account and routing numbers, payment card information, income
                    and compensation data, tax withholding elections, and transaction histories.
                  </p>
                </div>
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">How we share NPI</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    We share NPI with service providers/processors necessary to deliver the service (Finix, KotaPay, Payroll Tax People LLC, Plaid), with government authorities as required by law, and with your explicit consent. We do not share NPI with affiliates for marketing purposes. We do not sell NPI to third parties.
                  </p>
                </div>
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">How we protect your information</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    We implement and maintain a comprehensive Written Information Security Program (WISP) as required by GLBA's Safeguards Rule (16 CFR Part 314). This includes encryption of NPI in transit and at rest, access controls limiting NPI access to authorized personnel, regular security assessments, and vendor due diligence requirements for subprocessors handling NPI.
                  </p>
                </div>
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-2">Your right to limit sharing</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    You have the right to limit certain sharing of your NPI by contacting us at{" "}
                    <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>.
                    Note that we cannot limit sharing that is required for us to service your account or that is required by law.
                  </p>
                </div>
              </div>
            </PolicySection>

            {/* Section 8 */}
            <PolicySection id="retention" number="8" title="Data Retention" icon={<Clock />}>
              <p>
                We retain personal data for as long as necessary to fulfill the purposes described in this
                Policy, subject to the following minimums:
              </p>
              <div className="policy-table mt-4 text-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-white">Data Type</th>
                      <th className="px-4 py-3 text-left font-semibold text-white">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-3 text-[#c8d8ec]">Payroll records (W-2s, tax filings, SSNs)</td>
                      <td className="px-4 py-3 font-medium text-white">7 years from end of tax year</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#c8d8ec]">Bank account and ACH records</td>
                      <td className="px-4 py-3 font-medium text-white">5 years from transaction date</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#c8d8ec]">Payment card transaction records</td>
                      <td className="px-4 py-3 font-medium text-white">3 years (per PCI DSS / card network rules)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#c8d8ec]">Business Operator account data</td>
                      <td className="px-4 py-3 font-medium text-white">Subscription duration + 3 years</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#c8d8ec]">End customer transaction data</td>
                      <td className="px-4 py-3 font-medium text-white">3 years (or per Business Operator)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">
                After applicable retention periods expire, data is securely deleted or anonymized.
              </p>
            </PolicySection>

            {/* Section 9 */}
            <PolicySection id="rights" number="9" title="Your Privacy Rights" icon={<UserCheck />}>
              <h4 className="text-base font-semibold text-white mt-2 mb-3">9.1 Rights Available to All Users</h4>
              <p>Regardless of your state of residence, you have the following rights:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <RightCard title="Access" description="Request a copy of the personal data we hold about you." />
                <RightCard title="Correction" description="Request correction of inaccurate or incomplete personal data." />
                <RightCard title="Deletion" description="Request deletion of your personal data, subject to legal retention requirements." />
                <RightCard title="Portability" description="Request your data in a structured, machine-readable format." />
                <RightCard title="Opt-out of Marketing" description="Opt out of marketing communications at any time by clicking 'unsubscribe' or contacting us." />
              </div>
              <p className="mt-4">
                To exercise any of these rights, submit a request to{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>.
                We will respond within 30 days. We may require identity verification before processing your
                request. We will not discriminate against you for exercising your privacy rights.
              </p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">9.2 Employee Data Rights</h4>
              <p>
                Employees whose data is processed through Astryd by their employer should direct data access,
                correction, and deletion requests to their employer in the first instance. Where the employer
                has authorized Astryd to respond directly to employee requests, or where the request relates to
                Astryd's own processing activities, contact{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>.
              </p>
            </PolicySection>

            {/* Section 10 */}
            <PolicySection id="ccpa" number="10" title="California Privacy Rights (CCPA / CPRA)" icon={<UserCheck />}>
              <p className="italic text-[#4A6480]">This section applies to California residents only and supplements the rest of this Privacy Policy.</p>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">10.1 Categories of Personal Information Collected</h4>
              <p>In the preceding 12 months, Astryd has collected the following categories of personal information as defined under CCPA:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong>Identifiers:</strong> name, email, phone number, IP address, SSN, EIN, government ID numbers.</li>
                <li><strong>Financial information:</strong> bank account numbers, payment card information, income data, transaction histories.</li>
                <li><strong>Commercial information:</strong> transaction records, products or services purchased, purchase histories.</li>
                <li><strong>Internet or electronic network activity:</strong> browsing history within the Platform, search queries, interaction data.</li>
                <li><strong>Geolocation data:</strong> approximate location derived from IP address; precise location if enabled by the Business Operator's device.</li>
                <li><strong>Professional or employment-related information:</strong> job title, employment status, compensation, work schedule.</li>
                <li><strong>Sensitive personal information:</strong> Social Security Numbers, bank account numbers and credentials, precise geolocation, and racial or ethnic origin where voluntarily provided.</li>
              </ul>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">10.2 Your California Rights</h4>
              <p>As a California resident, you have the right to:</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <RightCard title="Know" description="Request disclosure of the categories and specific pieces of personal information we have collected about you." />
                <RightCard title="Delete" description="Request deletion of personal information, subject to certain exceptions." />
                <RightCard title="Correct" description="Request correction of inaccurate personal information." />
                <RightCard title="Opt-Out of Sale/Sharing" description="Astryd does not sell or share personal information for cross-context behavioral advertising." />
                <RightCard title="Limit Sensitive Data Use" description="Request that we limit our use of sensitive personal information to purposes necessary to provide the Platform." />
                <RightCard title="Non-Discrimination" description="We will not discriminate against you for exercising your CCPA/CPRA rights." />
              </div>

              <h4 className="text-base font-semibold text-white mt-6 mb-3">10.3 How to Submit a California Privacy Request</h4>
              <p>
                Submit requests by email to{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>{" "}
                with the subject line "California Privacy Request." We will verify your identity and respond
                within 45 days. We may extend the response period by an additional 45 days where reasonably
                necessary, with notice. You may designate an authorized agent to submit requests on your behalf.
              </p>
            </PolicySection>

            {/* Section 11 */}
            <PolicySection id="cookies" number="11" title="Cookies and Tracking Technologies" icon={<Cookie />}>
              <p>Astryd uses the following types of cookies and tracking technologies:</p>
              <div className="mt-4 space-y-3">
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-1">Essential Cookies</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    Required for the Platform to function. These include authentication tokens, session management
                    cookies, and CSRF protection tokens. These cannot be disabled without impairing Platform functionality.
                  </p>
                </div>
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-1">Analytics Cookies</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    Used to understand how users interact with the Platform, identify errors, and improve performance.
                    These collect aggregated, non-personally-identifying usage data.
                  </p>
                </div>
                <div className="policy-card p-4">
                  <h5 className="text-sm font-semibold text-white mb-1">Preference Cookies</h5>
                  <p className="text-sm text-[#c8d8ec]">
                    Store your display preferences and settings within the Platform.
                  </p>
                </div>
              </div>
              <p className="mt-4">
                Astryd does not use third-party advertising cookies or cross-site tracking cookies. You may
                manage cookie preferences through your browser settings. Note that disabling essential cookies
                will prevent you from accessing the Platform.
              </p>
            </PolicySection>

            {/* Section 12 */}
            <PolicySection id="security" number="12" title="Data Security" icon={<Lock />}>
              <p>Astryd implements industry-standard security measures to protect personal data, including:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Encryption of all data in transit using TLS 1.2 or higher.</li>
                <li>Encryption of sensitive data at rest, including SSNs, bank account numbers, and payroll tax data.</li>
                <li>Payment card data tokenization at the point of capture — full card numbers are never stored on Astryd systems.</li>
                <li>Role-based access controls limiting employee access to personal data on a need-to-know basis.</li>
                <li>Multi-factor authentication for Platform accounts.</li>
                <li>Regular security assessments and penetration testing.</li>
                <li>Written Information Security Program (WISP) maintained in compliance with GLBA Safeguards Rule.</li>
              </ul>
              <Callout variant="warning" title="Security Notice">
                Despite these measures, no system is completely secure. If you believe your account has been
                compromised, contact{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>{" "}
                immediately. In the event of a data breach affecting your personal information, Astryd will
                notify you as required by applicable state breach notification laws.
              </Callout>
            </PolicySection>

            {/* Section 13 */}
            <PolicySection id="children" number="13" title="Children's Privacy" icon={<Baby />}>
              <p>
                The Astryd Platform is not directed to individuals under the age of 18. We do not knowingly
                collect personal information from minors. If you believe we have inadvertently collected data
                from a minor, contact{" "}
                <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>{" "}
                and we will promptly delete it.
              </p>
            </PolicySection>

            {/* Section 14 */}
            <PolicySection id="third-party" number="14" title="Third-Party Links and Integrations" icon={<ExternalLink />}>
              <p>
                The Platform may contain links to third-party websites or integrations with third-party
                services (such as accounting software, delivery platforms, or payroll benefit providers).
                This Privacy Policy does not apply to those third-party services. We encourage you to review
                the privacy policies of any third-party service before providing your information.
              </p>
            </PolicySection>

            {/* Section 15 */}
            <PolicySection id="changes" number="15" title="Changes to This Policy" icon={<FileText />}>
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Post the updated Policy at{" "}
                  <a href="https://www.astryd.ai/privacy" className="policy-link">www.astryd.ai/privacy</a>{" "}
                  with a revised "Last Updated" date.
                </li>
                <li>Notify Business Operators by email at least 30 days before material changes take effect.</li>
                <li>For changes that materially affect the processing of employee or end customer data, provide notice through the Platform and, where required by law, obtain consent.</li>
              </ul>
              <p className="mt-3">
                Your continued use of the Platform after the effective date of an updated Policy constitutes
                your acceptance of the changes.
              </p>
            </PolicySection>

            {/* Section 16 */}
            <PolicySection id="contact" number="16" title="Contact Us" icon={<Mail />}>
              <p>
                For questions, concerns, or requests regarding this Privacy Policy or Astryd's data practices:
              </p>
              <div className="policy-card mt-4 p-6">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Building2 className="h-4 w-4 mt-0.5 text-[#4A6480]" />
                    <div>
                      <p className="font-semibold text-white">ResearchPort LLC</p>
                      <p className="text-[#8FA8C8]">doing business as Astryd</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 text-[#4A6480]" />
                    <p className="text-[#8FA8C8]">{REGISTERED_ADDRESS}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-[#4A6480]" />
                    <a href={`mailto:${PRIVACY_EMAIL}`} className="policy-link">{PRIVACY_EMAIL}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <ExternalLink className="h-4 w-4 text-[#4A6480]" />
                    <a href="https://www.astryd.ai" className="policy-link" target="_blank" rel="noopener noreferrer">www.astryd.ai</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-[#4A6480]" />
                    <p className="text-[#8FA8C8]">Response time: 30 days (45 days for California CCPA requests)</p>
                  </div>
                </div>
              </div>
            </PolicySection>

            {/* Legal Disclaimer */}
            <div className="policy-card-muted mt-12 p-6">
              <h4 className="text-sm font-semibold text-white mb-2">Legal Disclaimer</h4>
              <p className="text-xs text-[#8FA8C8] leading-relaxed">
                This Privacy Policy is provided for informational purposes and represents Astryd's good-faith
                effort to describe its data practices in plain language. This document does not constitute legal
                advice. Astryd recommends that Business Operators consult qualified legal counsel to assess their
                own privacy obligations with respect to their employees and customers under applicable federal and
                state law, including but not limited to CCPA/CPRA, GLBA, HIPAA (where applicable), and applicable
                state payroll data privacy laws.
              </p>
              <p className="mt-3 text-xs text-[#4A6480]">
                &copy; 2026 ResearchPort LLC. All rights reserved. Astryd is a trademark of ResearchPort LLC.
              </p>
            </div>
          </main>
        </div>
      </div>

      <FooterSection />

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="policy-scroll-top fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

/* ── Reusable sub-components ── */

function PolicySection({
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

function Callout({
  variant,
  title,
  children,
}: {
  variant: "info" | "warning";
  title: string;
  children: React.ReactNode;
}) {
  const className = variant === "info" ? "policy-callout-info" : "policy-callout-warning";
  const titleColor = variant === "info" ? "text-[#00C4CD]" : "text-amber-400";
  return (
    <div className={`mt-4 rounded-lg p-4 ${className}`}>
      <h5 className={`text-sm font-semibold mb-1 ${titleColor}`}>{title}</h5>
      <p className="text-sm text-[#c8d8ec]">{children}</p>
    </div>
  );
}

function SubprocessorCard({
  name,
  description,
  badge,
}: {
  name: string;
  description: string;
  badge?: string;
}) {
  return (
    <div className="policy-card flex items-start gap-3 p-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#8FA8C8]">
        <Shield className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-white">{name}</span>
          {badge && (
            <span className="inline-flex items-center rounded-full bg-[#00C4CD]/10 px-2 py-0.5 text-xs font-medium text-[#00C4CD]">
              {badge}
            </span>
          )}
        </div>
        <p className="mt-1 text-xs text-[#8FA8C8]">{description}</p>
      </div>
    </div>
  );
}

function RightCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="policy-card p-4">
      <h5 className="text-sm font-semibold text-white mb-1">{title}</h5>
      <p className="text-xs text-[#8FA8C8]">{description}</p>
    </div>
  );
}

export default PrivacyPolicyPage;
