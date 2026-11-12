import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Wrench,
  ShieldCheck,
  Activity,
  Database,
  ArrowRight,
  CheckCircle2,
  Clock,
  Headphones,
  FileCheck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Website Management & Technical Support Services",
  description:
    "Proactive website maintenance, software patching, 24/7 uptime monitoring, daily backups, and ongoing technical support from Entelix Technologies.",
  alternates: {
    canonical: "https://entelix.co.ke/website-management",
  },
};

const services = [
  {
    icon: ShieldCheck,
    title: "Proactive Security & Patching",
    description: "Regular software updates, framework dependency patching, and security audits to defend against vulnerabilities and unauthorized intrusions.",
  },
  {
    icon: Activity,
    title: "24/7 Uptime & Performance Monitoring",
    description: "Continuous health checks, response-time tracking, and instant alerts to resolve performance anomalies before they impact your end-users.",
  },
  {
    icon: Database,
    title: "Automated Backups & Disaster Recovery",
    description: "Scheduled daily offsite backups with tested recovery protocols to ensure immediate restoration in the event of unforeseen data loss.",
  },
  {
    icon: Wrench,
    title: "Ongoing Content & Feature Updates",
    description: "Dedicated developer hours each month for minor layout modifications, new content publishing, bug fixes, and continuous technical enhancements.",
  },
];

const managementBenefits = [
  "Zero downtime guarantee during scheduled updates",
  "SSL certificate management and automated renewals",
  "Monthly performance and analytics reports",
  "Broken link and technical SEO error remediation",
  "Cross-browser and mobile compatibility testing",
  "Direct developer communication channel",
];

const plans = [
  {
    name: "Essential Care",
    description: "Reliable maintenance and protection for corporate websites and digital business presences.",
    features: [
      "Weekly core & dependency updates",
      "Daily automated offsite backups",
      "24/7 uptime and security monitoring",
      "SSL certificate management",
      "Monthly health & performance summary",
      "Standard email technical support",
    ],
  },
  {
    name: "Professional Support",
    featured: true,
    description: "Proactive management and dedicated engineering hours for actively growing businesses.",
    features: [
      "Everything in Essential Care",
      "Up to 10 hours of monthly developer support",
      "Priority response time (< 4 hours)",
      "Performance and Core Web Vitals optimization",
      "Database cleanups and routine indexing",
      "Direct WhatsApp and phone escalation channel",
    ],
  },
  {
    name: "Enterprise SLA",
    description: "Comprehensive management for high-traffic platforms, custom web apps, and mission-critical systems.",
    features: [
      "Everything in Professional Support",
      "Custom monthly engineering allocation",
      "Guaranteed 1-hour critical response SLA",
      "Staging environment testing before deployments",
      "Custom security audits & compliance reporting",
      "Dedicated account engineer and bi-weekly syncs",
    ],
  },
];

export default function WebsiteManagementPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Maintenance &amp; Support
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Website Management &amp; Technical Support
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Keep your digital platforms secure, up-to-date, and performing at peak speeds with our dedicated website maintenance programs.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Choose a Support Plan
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="What We Manage"
            title="Complete Peace of Mind for Your Digital Assets"
            description="Focus on growing your business while our engineering team takes full ownership of technical health, uptime, and ongoing improvements."
            align="center"
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} variant="white" hoverable padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-[#0B59ED]/10 flex items-center justify-center text-[#0B59ED] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101926] mb-3">{s.title}</h3>
                  <p className="text-[#64748B] leading-relaxed text-sm sm:text-base">{s.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Standards & SLA */}
      <section className="py-20 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="neutral" size="sm">
                Operational Standards
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101926] tracking-tight">
                Proactive Maintenance, Not Reactive Fixes
              </h2>
              <p className="text-[#64748B] leading-relaxed text-base">
                Rather than waiting for a critical system failure or customer complaint, we perform regular health audits, test backups routinely, and apply software patches before security vulnerabilities can be exploited.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {managementBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#101926]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED]/10 flex items-center justify-center text-[#0B59ED]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#101926]">Support SLA Commitments</h3>
                  <p className="text-xs text-[#64748B]">Clear response times backed by a written agreement</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#64748B]">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-[#101926]">Critical Incident Response</span>
                  <span className="text-[#0B59ED] font-semibold">&lt; 1 Hour</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-[#101926]">General Inquiries</span>
                  <span>&lt; 4 Hours</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-[#101926]">Backup Cadence</span>
                  <span>Daily automated snapshots</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-[#101926]">Monthly Reporting</span>
                  <span>Full health, traffic &amp; security metrics</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Inquire About Custom Support
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Plans Section */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="Support Plans"
            title="Structured Management for Every Stage"
            description="Transparent maintenance packages designed to protect your investment and keep your digital operations running seamlessly."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? "bg-[#101926] text-white shadow-xl ring-2 ring-[#0B59ED] relative"
                    : "bg-white border border-[#E5E7EB] text-[#101926] hover:shadow-lg hover:border-gray-300"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B59ED] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-6 ${plan.featured ? "text-slate-300" : "text-[#64748B]"}`}>
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-1 text-[#0B59ED]`}
                        />
                        <span className={`text-sm ${plan.featured ? "text-slate-200" : "text-[#64748B]"}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href="/contact"
                  variant={plan.featured ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  Select Plan
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Protect Your Website?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Contact us today to discuss your website infrastructure and set up a reliable maintenance plan.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get Started
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
