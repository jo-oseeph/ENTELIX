import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Palette,
  Layout,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  Smartphone,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Brand Identity & UI/UX Design Services",
  description:
    "Elevate your business with Entelix's professional visual identity design, UI/UX engineering, and design systems built for modern digital products.",
  alternates: {
    canonical: "https://entelix.co.ke/graphic-design",
  },
};

const capabilities = [
  {
    icon: Palette,
    title: "Brand Identity Systems",
    description: "Complete visual identities including logos, color systems, typography standards, and brand guideline documentation that establish authority.",
  },
  {
    icon: Layout,
    title: "UI/UX Product Design",
    description: "User research, wireframing, high-fidelity Figma prototypes, and intuitive interface layouts designed for maximum conversion and engagement.",
  },
  {
    icon: Layers,
    title: "Design Systems & Component Libraries",
    description: "Modular, accessible, and scalable design token systems that bridge design and engineering for seamless developer handoff.",
  },
  {
    icon: Sparkles,
    title: "Digital Marketing Collateral",
    description: "High-impact visual assets, marketing decks, product launch graphics, and corporate collateral aligned with your brand guidelines.",
  },
];

const designPillars = [
  "Strategic brand research & competitive benchmarking",
  "Figma component libraries and design tokens",
  "Accessibility-first color contrast and typography",
  "Interactive clickable prototypes for user testing",
  "Pixel-perfect assets optimized for web & mobile",
  "Comprehensive brand guideline documentation",
];

const packages = [
  {
    name: "Brand Essentials",
    description: "Ideal for early-stage companies needing a professional and distinctive visual foundation.",
    deliverables: [
      "Primary & secondary logo marks",
      "Official brand color palette & typography",
      "Core visual brand guide (PDF)",
      "High-res vector assets (SVG, PNG, PDF)",
      "Social media brand profile kit",
    ],
  },
  {
    name: "UI/UX Product Design",
    featured: true,
    description: "Comprehensive product design for web applications, SaaS platforms, and mobile apps.",
    deliverables: [
      "User journey mapping & information architecture",
      "Wireframes & low-fidelity flow prototypes",
      "High-fidelity responsive UI layouts (Figma)",
      "Interactive prototype for developer handoff",
      "Reusable design system components",
    ],
  },
  {
    name: "Complete Digital Identity",
    description: "End-to-end design engagement for established organizations undergoing a digital transformation.",
    deliverables: [
      "Full brand identity system & comprehensive guidelines",
      "Custom web or application UI/UX design suite",
      "Component library & design token specification",
      "Marketing collateral & pitch deck templates",
      "Dedicated design consultation & direct revisions",
    ],
  },
];

export default function GraphicDesignPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Brand & Product Design
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Brand Identity Systems &amp; UI/UX Engineering
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              We create clean visual identity systems, intuitive digital product interfaces, and scalable design architectures that elevate business credibility.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Start a Design Project
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="Capabilities"
            title="Design Engineered for Digital Products"
            description="Our design process combines aesthetic precision with technical feasibility, ensuring that every asset transitions smoothly into production code."
            align="center"
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <Card key={c.title} variant="white" hoverable padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-[#0B59ED]/10 flex items-center justify-center text-[#0B59ED] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101926] mb-3">{c.title}</h3>
                  <p className="text-[#64748B] leading-relaxed text-sm sm:text-base">{c.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Design Standards Section */}
      <section className="py-20 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="neutral" size="sm">
                Design Philosophy
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101926] tracking-tight">
                Form, Function, and Technical Feasibility
              </h2>
              <p className="text-[#64748B] leading-relaxed text-base">
                Great design isn&apos;t just how a product looks—it&apos;s how cleanly it works and how easily it can be engineered. We eliminate guesswork by delivering comprehensive design tokens, production-ready vector assets, and responsive specifications that developers can build with precision.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {designPillars.map((pillar) => (
                  <div key={pillar} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#101926]">{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E5E7EB] shadow-sm space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-[#E5E7EB]">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED]/10 flex items-center justify-center text-[#0B59ED]">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#101926]">Production-Ready Deliverables</h3>
                  <p className="text-xs text-[#64748B]">Structured Figma workspaces ready for implementation</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#64748B]">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-[#101926]">Design Tooling</span>
                  <span>Figma, Illustrator, After Effects</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-[#101926]">Typography Standards</span>
                  <span>Variable web fonts, accessible scales</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-medium text-[#101926]">Color Standards</span>
                  <span>WCAG 2.2 AA compliant palette</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-[#101926]">Export Formats</span>
                  <span>SVG, PNG, PDF, Tokens (JSON)</span>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Request a Design Proposal
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Packages / Engagement Models */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="Packages & Scopes"
            title="Tailored Design Engagements"
            description="Whether you need a fresh visual identity or end-to-end product design, we offer structured engagements to meet your goals."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  pkg.featured
                    ? "bg-[#101926] text-white shadow-xl ring-2 ring-[#0B59ED] relative"
                    : "bg-white border border-[#E5E7EB] text-[#101926] hover:shadow-lg hover:border-gray-300"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0B59ED] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className={`text-sm mb-6 ${pkg.featured ? "text-slate-300" : "text-[#64748B]"}`}>
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pkg.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-1 ${
                            pkg.featured ? "text-[#0B59ED]" : "text-[#0B59ED]"
                          }`}
                        />
                        <span className={`text-sm ${pkg.featured ? "text-slate-200" : "text-[#64748B]"}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href="/contact"
                  variant={pkg.featured ? "primary" : "secondary"}
                  size="md"
                  className="w-full"
                >
                  Select Package
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
              Ready to Transform Your Visual Brand?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Let&apos;s build a cohesive, memorable identity that builds immediate trust with your prospective clients.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Discuss Your Design Goals
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
