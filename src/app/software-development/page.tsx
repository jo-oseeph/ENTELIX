import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Code2,
  Database,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Server,
  Layers,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Custom Software Development - Enterprise Solutions",
  description:
    "Bespoke enterprise software, business management systems, and automated workflows engineered for scale, reliability, and security by Entelix Technologies.",
  alternates: {
    canonical: "https://entelix.co.ke/software-development",
  },
};

const solutions = [
  {
    icon: Server,
    title: "Operations & Business Management Systems",
    description: "Centralized platforms that unify internal processes, inventory, staff assignments, customer communications, and financial reporting.",
  },
  {
    icon: Database,
    title: "API Architecture & Database Modeling",
    description: "High-throughput REST and GraphQL backend services backed by optimized PostgreSQL or NoSQL databases built for data integrity.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Access Control",
    description: "Granular role-based permissions (RBAC), multi-factor authentication, end-to-end data encryption, and audit logging.",
  },
  {
    icon: Cpu,
    title: "Automated Workflows & Integrations",
    description: "Intelligent background jobs, scheduled tasks, automated invoice processing, and webhooks connecting disparate third-party tools.",
  },
];

const checklist = [
  "Modular, clean-code architecture with comprehensive documentation",
  "Automated testing suite covering critical business logic",
  "Scalable database schema with transaction safety",
  "Secure API token management and rate limiting",
  "Zero-downtime deployment workflows and backup strategies",
  "Dedicated SLA support and maintenance agreements",
];

export default function SoftwareDevelopmentPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Custom Engineering
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Bespoke Software Engineering for Growing Enterprises
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              We design and build custom software systems that solve complex operational problems, eliminate manual bottlenecks, and give businesses room to scale.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Discuss Your Software Scope
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="Tailored Systems"
            title="Engineered Around Your Specific Workflows"
            description="Our software solutions replace fragmented spreadsheets and off-the-shelf compromises with custom-built operational systems."
            align="center"
          />

          <div className="grid sm:grid-cols-2 gap-8">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.title} variant="white" hoverable padding="lg">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2FE] text-[#0B59ED] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101926] mb-3">{s.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{s.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Quality Standards */}
      <section className="py-20 md:py-28 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container size="narrow">
          <SectionHeader
            badge="Engineering Rigor"
            title="Architectural Standards We Uphold"
            description="Every custom system is engineered with discipline, security, and future adaptability in mind."
            align="center"
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E5E7EB]">
                <CheckCircle2 className="w-5 h-5 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#101926]">{item}</span>
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
              Ready to Build Your Custom Software Solution?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Schedule an architecture discovery call with our engineering leads to outline your technical requirements and receive a formal proposal.
            </p>
            <div className="pt-2 flex justify-center">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request Custom Proposal
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
