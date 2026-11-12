import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Cloud,
  Database,
  ShieldCheck,
  Server,
  Zap,
  ArrowRight,
  CheckCircle2,
  Lock,
  Cpu,
  RefreshCw,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Cloud Solutions & Infrastructure Engineering",
  description:
    "Enterprise cloud migration, modern DevOps automation, resilient database architecture, and 24/7 security monitoring tailored for scaling businesses.",
  alternates: {
    canonical: "https://entelix.co.ke/cloud-solutions",
  },
};

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Hosting & Deployment",
    description: "Reliable production deployments on modern cloud infrastructure (AWS, GCP, Vercel) guaranteeing maximum uptime, low latency, and global reach.",
  },
  {
    icon: Database,
    title: "Database Architecture & Optimization",
    description: "High-performance PostgreSQL, MySQL, and distributed data store configuration with automated replication, indexing, and backup protocols.",
  },
  {
    icon: ShieldCheck,
    title: "Security Hardening & Compliance",
    description: "Multi-layered perimeter defense, SSL/TLS enforcement, role-based access control (RBAC), and automated vulnerability scans to safeguard business assets.",
  },
  {
    icon: Cpu,
    title: "DevOps & CI/CD Pipelines",
    description: "Automated continuous integration and deployment pipelines using GitHub Actions and Docker containers for reliable zero-downtime releases.",
  },
];

const infrastructureBenefits = [
  "99.9% uptime SLA configuration & proactive alerts",
  "Automated daily snapshot backups with disaster recovery",
  "DDoS mitigation & firewall rules configuration",
  "Containerized application architecture (Docker)",
  "Environment segregation (Staging, UAT, Production)",
  "Real-time resource utilization & performance metrics",
];

const stackTechnologies = [
  { name: "Amazon Web Services", category: "Public Cloud" },
  { name: "Google Cloud Platform", category: "Infrastructure" },
  { name: "Vercel & Netlify", category: "Edge & Serverless" },
  { name: "Docker", category: "Containerization" },
  { name: "PostgreSQL & Redis", category: "Databases & Caching" },
  { name: "GitHub Actions", category: "CI/CD Automation" },
];

export default function CloudSolutionsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Infrastructure Engineering
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Cloud Solutions &amp; Modern Infrastructure
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              We design, deploy, and manage secure cloud environments engineered for high availability, fault tolerance, and cost efficiency.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Consult With a Cloud Engineer
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="Services"
            title="Cloud Architecture for Demanding Workloads"
            description="From initial migration to ongoing infrastructure management, our team ensures your digital platforms remain fast, resilient, and protected."
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

      {/* Infrastructure Standards */}
      <section className="py-20 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="neutral" size="sm">
                Reliability & Security
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101926] tracking-tight">
                Engineered for 99.9% Availability & Zero Data Loss
              </h2>
              <p className="text-[#64748B] leading-relaxed text-base">
                Downtime and security breaches cost businesses revenue and trust. We configure hardened production environments with automated health checks, secure secret management, and redundant backup systems that prevent unexpected disruptions.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {infrastructureBenefits.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#101926]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#101926] p-8 sm:p-10 rounded-2xl text-white shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED] flex items-center justify-center text-white">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Enterprise Cloud Stack</h3>
                  <p className="text-xs text-slate-400">Industry-proven technologies we manage</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stackTechnologies.map((tech) => (
                  <div key={tech.name} className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-bold text-white">{tech.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{tech.category}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md" className="w-full">
                  Request Cloud Infrastructure Audit
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Upgrade Your Cloud Infrastructure?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule a technical consultation to assess your current hosting, security, and scalability bottlenecks.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
