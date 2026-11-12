import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Globe,
  Code2,
  Zap,
  Layout,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Web Development Services - High-Performance Web Applications",
  description:
    "Custom web application development, corporate portals, and responsive websites engineered for speed, clean architecture, and business conversion.",
  alternates: {
    canonical: "https://entelix.co.ke/web-development",
  },
};

const capabilities = [
  {
    icon: Code2,
    title: "Custom Web Applications & SaaS",
    description: "Purpose-built web platforms engineered with Next.js, React, and TypeScript to power sophisticated business operations.",
  },
  {
    icon: Zap,
    title: "Performance & Core Web Vitals",
    description: "Laser-focused optimization ensuring lightning-fast initial load times, instant transitions, and top-tier Google performance scores.",
  },
  {
    icon: Layout,
    title: "Corporate Websites & Portals",
    description: "Professional digital presences engineered for enterprises and growing businesses that communicate trust and authority.",
  },
  {
    icon: Search,
    title: "Technical SEO & Semantic Markup",
    description: "Clean semantic HTML5, structural schema markup, Open Graph metadata, and canonical routing that maximize organic search ranking.",
  },
];

const features = [
  "Next.js App Router & React Server Components",
  "Tailwind CSS responsive design for desktop, tablet, and mobile",
  "TypeScript type-safety throughout codebase",
  "Secure API integrations & relational databases",
  "Accessibility compliance (WCAG 2.2 AA)",
  "Cross-browser compatibility testing",
];

export default function WebDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Web Engineering
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              High-Performance Web Application Development
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              We design and engineer modern web applications, digital platforms, and corporate websites built to perform, convert, and scale effortlessly.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Web Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="What We Deliver"
            title="Engineered for Scalability and Speed"
            description="Our web applications are built on modern frameworks that ensure reliability, long-term maintainability, and outstanding user experiences."
            align="center"
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} variant="white" hoverable padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2FE] text-[#0B59ED] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101926] mb-3">{c.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{c.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Feature Checklist */}
      <section className="py-20 md:py-28 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container size="narrow">
          <SectionHeader
            badge="Engineering Standards"
            title="Modern Architecture Built Into Every Build"
            description="We adhere to strict engineering conventions to deliver software that stands the test of time."
            align="center"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E7EB]">
                <CheckCircle2 className="w-5 h-5 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#101926]">{f}</span>
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
              Ready to Build a High-Performance Web Application?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Partner with Entelix to architect a web platform that delivers seamless performance and drives your business forward.
            </p>
            <div className="pt-2 flex justify-center">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
