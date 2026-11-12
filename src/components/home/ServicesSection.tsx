'use client';

import React from "react";
import Link from "next/link";
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
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Purpose-built enterprise software, workflow automation systems, and scalable backend services tailored to your exact business operations.",
    href: "/software-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive web applications engineered for speed, clean code, and seamless user experiences across every device.",
    href: "/web-development",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Robust digital storefronts with secure payment gateways, inventory synchronization, and streamlined checkout workflows.",
    href: "/services",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android, focusing on intuitive UX, high responsiveness, and reliable performance.",
    href: "/services",
  },
  {
    icon: Cpu,
    title: "AI Integrations",
    description:
      "Practical machine learning and AI integrations that automate repetitive processes, enhance decision-making, and improve efficiency.",
    href: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud architecture, secure infrastructure setup, DevOps automation, and seamless migration on AWS, Azure, and modern cloud providers.",
    href: "/cloud-solutions",
  },
  {
    icon: Palette,
    title: "Branding and Digital Experiences",
    description:
      "Professional visual identity systems, corporate design guidelines, and user interface engineering that reinforce market trust.",
    href: "/graphic-design",
  },
  {
    icon: Search,
    title: "SEO and Digital Optimization",
    description:
      "Technical search engine optimization, Core Web Vitals acceleration, accessibility compliance, and analytics for lasting digital visibility.",
    href: "/services",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5F7FA] border-y border-[#E5E7EB]">
      <Container>
        <SectionHeader
          badge="Core Capabilities"
          title="Engineered for Business Impact"
          description="We provide comprehensive digital engineering services designed to help organizations streamline operations, innovate faster, and scale with confidence."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                variant="white"
                hoverable
                padding="md"
                className="flex flex-col h-full group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-xl bg-[#EBF2FE] text-[#0B59ED] group-hover:bg-[#0B59ED] group-hover:text-white flex items-center justify-center transition-colors duration-300 mb-5 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#101926] mb-3 group-hover:text-[#0B59ED] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B59ED] group-hover:translate-x-1 transition-transform uppercase tracking-wider"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

