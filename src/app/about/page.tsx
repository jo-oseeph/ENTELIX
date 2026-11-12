import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Code2,
  Users2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "About Us - Engineering With Purpose",
  description:
    "Learn about Entelix Technologies, our engineering methodology, our core values, and our commitment to building reliable software systems for businesses.",
  alternates: {
    canonical: "https://entelix.co.ke/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses and organizations through high-performance digital solutions that drive operational efficiency, measurable growth, and long-term impact.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the premier digital engineering and software development partner for organizations across East Africa and globally, setting benchmarks in technical reliability.",
  },
  {
    icon: Heart,
    title: "Core Values",
    description:
      "Engineering integrity, client transparency, technical excellence, and human-centered design define every line of code we write and system we deploy.",
  },
];

const teamMembers = [
  {
    name: "Joseph S.",
    role: "Frontend Engineer",
    image: "/sejjo.jpeg",
    bio: "Specializing in responsive, high-performance web interfaces and modern frontend architecture.",
  },
  {
    name: "Onunga C.",
    role: "Backend & Systems Engineer",
    image: "/chris.jpeg",
    bio: "Architecting secure APIs, database systems, and robust cloud backend infrastructure.",
  },
  {
    name: "Bravin M.",
    role: "UI/UX & Product Designer",
    image: "/brav.jpeg",
    bio: "Crafting intuitive digital experiences, design systems, and ergonomic user journeys.",
  },
];

const capabilities = [
  "End-to-end full-stack software development",
  "Enterprise web application architecture",
  "Scalable cloud deployment and DevOps pipelines",
  "API design, database modeling, and third-party integrations",
  "Comprehensive code review and security audits",
  "Post-launch technical maintenance and SLA support",
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Who We Are
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Engineering Software With Purpose and Precision.
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Entelix Technologies is a software development agency dedicated to transforming complex business requirements into elegant, reliable, and high-performance digital systems.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Agency Overview */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_16px_40px_rgba(16,25,38,0.06)] bg-[#F5F7FA] h-[400px] sm:h-[480px]">
                <Image
                  src="/hero1.jpg"
                  alt="Entelix software engineering workspace"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="neutral" size="sm">
                Our Foundation
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101926] tracking-tight">
                Built to Deliver Measurable Digital Value
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                Founded on the principle that digital technology should solve genuine business challenges, Entelix Technologies collaborates with forward-thinking enterprises, fast-growing companies, and organizations.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                We believe great software requires more than visual polish — it demands rigorous technical foundations, scalable architecture, transparent delivery timelines, and an obsession with quality at every layer of the stack.
              </p>

              <div className="pt-2 grid sm:grid-cols-2 gap-3">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#101926]">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-20 md:py-28 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <SectionHeader
            badge="Guiding Principles"
            title="Mission, Vision & Core Values"
            description="The principles that guide our technical decisions, client relationships, and team culture."
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <Card key={v.title} variant="white" hoverable padding="lg" className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF2FE] text-[#0B59ED] flex items-center justify-center mb-6 flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101926] mb-3">{v.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{v.description}</p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            badge="Engineering Talent"
            title="Meet Our Engineering Team"
            description="A dedicated group of passionate software developers, architects, and designers focused on creating reliable digital products."
            align="center"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                variant="white"
                hoverable
                padding="none"
                className="overflow-hidden flex flex-col"
              >
                <div className="relative h-64 sm:h-72 w-full bg-[#101926]/5">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-[#101926]">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#0B59ED] uppercase tracking-wider mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[#64748B] leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Collaborate With Our Engineering Team?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Discuss your project scope, explore technical possibilities, and get a tailored delivery proposal.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
