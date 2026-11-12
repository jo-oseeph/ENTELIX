import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Code2,
  Globe,
  ShoppingCart,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  Search,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Engineering Services & Capabilities",
  description:
    "Explore our full spectrum of software development services: custom enterprise software, web applications, mobile apps, AI integrations, and cloud solutions.",
  alternates: {
    canonical: "https://entelix.co.ke/services",
  },
};

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    subtitle: "Enterprise Applications & Systems",
    description:
      "We design and build purpose-engineered software platforms that automate workflows, eliminate operational bottlenecks, and seamlessly integrate with your existing databases and enterprise systems.",
    features: [
      "Bespoke business management systems & ERPs",
      "Robust REST & GraphQL API architectures",
      "Scalable relational & NoSQL databases",
      "Role-based access control & enterprise security",
    ],
    href: "/software-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "High-Performance Web Platforms",
    description:
      "Modern, responsive web applications engineered with Next.js, React, and TypeScript. We emphasize lightning-fast load times, flawless responsiveness, clean semantic HTML, and conversion-optimized interfaces.",
    features: [
      "Custom SaaS platforms & web portals",
      "Next.js App Router & Server Components",
      "Accessible, responsive UI across all devices",
      "High Core Web Vitals performance scores",
    ],
    href: "/web-development",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    subtitle: "Modern Digital Commerce",
    description:
      "Tailored e-commerce platforms engineered for high throughput, seamless customer checkout experiences, automated inventory synchronization, and secure mobile money / card payment gateways.",
    features: [
      "Automated checkout & order management",
      "M-Pesa, card, and international payment gateways",
      "Real-time inventory and stock tracking",
      "Admin analytics and sales dashboards",
    ],
    href: "/contact",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "iOS & Android Applications",
    description:
      "Intuitive native and cross-platform mobile applications designed to provide fluid user experiences, offline data synchronization, real-time push notifications, and reliable API backends.",
    features: [
      "Cross-platform iOS and Android apps",
      "Native-level performance and animations",
      "Offline-first architecture and sync",
      "App Store & Google Play deployment support",
    ],
    href: "/contact",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    subtitle: "Intelligent Automation & Models",
    description:
      "We integrate modern artificial intelligence models, automated document processing, conversational assistants, and predictive data pipelines into business software to streamline repetitive tasks.",
    features: [
      "LLM & generative AI workflow integration",
      "Automated data extraction and classification",
      "Intelligent customer support assistants",
      "Predictive analytics and recommendation engines",
    ],
    href: "/contact",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & DevOps",
    subtitle: "Scalable Infrastructure & CI/CD",
    description:
      "Enterprise cloud infrastructure architecture, containerization, automated deployment pipelines, and proactive monitoring to ensure high availability, fault tolerance, and security compliance.",
    features: [
      "AWS, Azure, and Google Cloud infrastructure",
      "Docker containerization & orchestration",
      "Automated CI/CD deployment pipelines",
      "24/7 uptime monitoring and automated backups",
    ],
    href: "/cloud-solutions",
  },
  {
    icon: Palette,
    title: "Branding & Digital Experiences",
    subtitle: "Visual Identity & UI/UX Systems",
    description:
      "Design systems and brand identity engineering that elevate your market presence. We create intuitive user journey wireframes, high-fidelity prototypes, and cohesive digital assets.",
    features: [
      "Comprehensive digital brand guidelines",
      "UI/UX wireframing and interactive prototypes",
      "Component design systems in Figma",
      "Accessible, human-centered ergonomics",
    ],
    href: "/graphic-design",
  },
  {
    icon: Search,
    title: "SEO & Digital Optimization",
    subtitle: "Search Visibility & Speed",
    description:
      "Technical search engine optimization and performance tuning that improves discovery and search engine indexing, coupled with Core Web Vitals optimization and structural metadata markup.",
    features: [
      "Comprehensive technical SEO audits",
      "JSON-LD structured data and schema markup",
      "Core Web Vitals and page speed tuning",
      "Semantic HTML and canonical management",
    ],
    href: "/website-management",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
  "AWS",
  "REST APIs",
  "GraphQL",
  "Redis",
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Engineering Capabilities
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              High-Performance Digital Engineering Services
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              From bespoke software and scalable cloud platforms to modern web and mobile applications, we build solutions engineered for technical resilience and business growth.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card
                  key={service.title}
                  variant="white"
                  hoverable
                  padding="lg"
                  className="flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#EBF2FE] text-[#0B59ED] group-hover:bg-[#0B59ED] group-hover:text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-[#101926] group-hover:text-[#0B59ED] transition-colors">
                          {service.title}
                        </h2>
                        <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-[#E5E7EB]">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm font-medium text-[#101926]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E5E7EB] flex items-center justify-between">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B59ED] hover:text-[#0948c2] uppercase tracking-wider transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Technology Stack Strip */}
      <section className="py-16 md:py-20 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101926]">
              Modern Technology Foundations
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              We leverage modern, industry-standard languages, frameworks, and cloud platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl bg-white border border-[#E5E7EB] text-sm font-semibold text-[#101926] shadow-2xs hover:border-[#0B59ED]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Have a Project in Mind?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Our engineering team is ready to analyze your technical requirements and provide a clear roadmap and quotation.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
