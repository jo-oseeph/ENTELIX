import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Pricing Packages & Engagement Models",
  description:
    "Transparent pricing and engagement packages for custom software, web applications, and enterprise systems from Entelix Technologies.",
  alternates: {
    canonical: "https://entelix.co.ke/pricing",
  },
};

const webPackages = [
  {
    name: "Starter Package",
    badge: "Startup & SME",
    price: "KES 30,000",
    description: "A solid digital foundation for emerging businesses seeking a professional, high-performing web presence.",
    features: [
      "Up to 5 custom-designed pages",
      "Mobile-responsive, modern UI/UX",
      "Contact and inquiry collection forms",
      "Technical SEO & Open Graph setup",
      "SSL security and fast CDN hosting setup",
      "Standard deployment and handover",
    ],
    popular: false,
    cta: "Choose Starter",
  },
  {
    name: "Business Package",
    badge: "Most Popular",
    price: "KES 60,000+",
    description: "Custom web applications for expanding organizations that need dynamic functionality and database integration.",
    features: [
      "Custom web application (up to 15 pages)",
      "Content management and administrative dashboard",
      "REST API and relational database integration",
      "Payment gateway or WhatsApp commerce integration",
      "Core Web Vitals speed optimization",
      "30 days post-launch technical support",
    ],
    popular: true,
    cta: "Start Business Project",
  },
  {
    name: "Enterprise Package",
    badge: "Scale & Reliability",
    price: "KES 100,000+",
    description: "Bespoke digital platforms engineered with complex workflows, custom backend logic, and scalable architecture.",
    features: [
      "Advanced custom software or SaaS platform",
      "Role-based access control (RBAC) & user auth",
      "Multi-service API and third-party integrations",
      "Automated workflows and optional AI models",
      "Cloud architecture and scalable database design",
      "Comprehensive QA, security audit & SLA support",
    ],
    popular: false,
    cta: "Request Enterprise Proposal",
  },
];

const specializedSystems = [
  {
    title: "Business Management Systems (ERP/Operations)",
    price: "From KSh 120,000",
    description: "Centralized systems for operations tracking, internal records, staff management, and automated reporting.",
  },
  {
    title: "CRM & Customer Engagement Platforms",
    price: "From KSh 100,000",
    description: "Custom CRM platforms for lead tracking, customer communication pipelines, and sales automation.",
  },
  {
    title: "Inventory & Stock Tracking Systems",
    price: "From KSh 90,000",
    description: "Multi-branch inventory controls, stock movements, supplier management, and reorder alerting.",
  },
  {
    title: "Mobile Application MVP (iOS & Android)",
    price: "From KSh 130,000",
    description: "A focused, cross-platform mobile app featuring core functional flows to validate your business model.",
  },
  {
    title: "Full-Featured Enterprise Mobile App",
    price: "From KSh 220,000",
    description: "Comprehensive mobile platform with offline-first synchronization, push alerts, and backend APIs.",
  },
  {
    title: "Dedicated Cloud Setup & Migration",
    price: "From KSh 50,000",
    description: "Infrastructure migration, secure AWS/Azure architecture, containerization, and automated CI/CD.",
  },
];

const paymentSteps = [
  {
    step: "1",
    title: "30% Project Deposit",
    desc: "Work begins immediately following scope approval, architecture definition, and initial deposit.",
  },
  {
    step: "2",
    title: "Milestone Reviews",
    desc: "Transparent sprint demonstrations on staging environments where you test features in progress.",
  },
  {
    step: "3",
    title: "70% Delivery Balance",
    desc: "Remaining balance is payable upon final QA approval, client sign-off, and production deployment.",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Transparent Investment
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Predictable Pricing &amp; Flexible Engagement
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Clear milestone-driven investment plans tailored to your technical scope. No hidden charges or opaque contracts.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Packages */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {webPackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-[#101926] text-white shadow-2xl border-2 border-[#0B59ED] lg:-translate-y-2"
                    : "bg-white text-[#101926] border border-[#E5E7EB] shadow-xs hover:border-[#0B59ED]/40 hover:shadow-lg"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${
                      pkg.popular
                        ? "bg-[#0B59ED] text-white"
                        : "bg-[#EBF2FE] text-[#0B59ED]"
                    }`}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <h2 className={`text-xl font-bold mb-2 ${pkg.popular ? "text-white" : "text-[#101926]"}`}>
                  {pkg.name}
                </h2>
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${pkg.popular ? "text-gray-300" : "text-[#64748B]"}`}>
                  {pkg.description}
                </p>

                <div className="mb-6 pb-6 border-b border-white/10 border-[#E5E7EB]">
                  <span className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${pkg.popular ? "text-white" : "text-[#101926]"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-xs block mt-1 ${pkg.popular ? "text-gray-400" : "text-[#64748B]"}`}>
                    Milestone-based billing
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "text-[#0B59ED]" : "text-[#0B59ED]"
                        }`}
                      />
                      <span className={`text-xs sm:text-sm ${pkg.popular ? "text-gray-200" : "text-[#101926]"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  href="/contact"
                  variant={pkg.popular ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                >
                  {pkg.cta}
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Specialized Software & Systems */}
      <section className="py-20 md:py-28 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <SectionHeader
            badge="Custom Software & Mobile"
            title="Specialized Systems & Enterprise Pricing"
            description="Tailored software systems engineered to solve operational bottlenecks and power large-scale enterprise workflows."
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedSystems.map((item) => (
              <Card key={item.title} variant="white" hoverable padding="md" className="flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#101926] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-xs font-bold font-mono text-[#0B59ED]">
                    {item.price}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#101926] hover:text-[#0B59ED] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Payment Milestones */}
      <section className="py-20 md:py-28">
        <Container size="narrow">
          <SectionHeader
            badge="Payment Structure"
            title="How Project Payments Work"
            description="We believe in aligned incentives and clear accountability at every stage of the project lifecycle."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {paymentSteps.map((step) => (
              <div
                key={step.title}
                className="p-6 rounded-2xl bg-white border border-[#E5E7EB] text-center space-y-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#EBF2FE] text-[#0B59ED] font-mono font-bold text-sm flex items-center justify-center mx-auto">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-[#101926]">{step.title}</h4>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Need a Tailored Quotation for Your Scope?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Every business has unique requirements. Contact us with your project details and we will formulate an exact cost and delivery timeline.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Custom Proposal
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
