import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const pillars = [
  "Custom architectures designed around verified business requirements",
  "Disciplined engineering standards and rigorous quality assurance",
  "Scalable, maintainable codebases built for long-term reliability",
  "Transparent project roadmaps and proactive client communication",
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image & Showcase Frame (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_12px_32px_rgba(16,25,38,0.06)] bg-[#F5F7FA]">
              <div className="relative h-[380px] sm:h-[440px] w-full">
                <Image
                  src="/hero2.jpg"
                  alt="Entelix Technologies engineering team discussing system architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Stat card overlay */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-5 border border-[#E5E7EB] shadow-lg">
                <div className="grid grid-cols-2 gap-4 divide-x divide-[#E5E7EB]">
                  <div>
                    <p className="text-2xl font-bold text-[#0B59ED]">Enterprise</p>
                    <p className="text-xs text-[#64748B] mt-0.5">Reliability &amp; Scale</p>
                  </div>
                  <div className="pl-4">
                    <p className="text-2xl font-bold text-[#101926]">Full-Cycle</p>
                    <p className="text-xs text-[#64748B] mt-0.5">Strategy to Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <Badge variant="primary" size="md" dot>
              About Entelix Technologies
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Software Engineering Built Around Real Business Problems
            </h2>

            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
              Entelix Technologies is a software development agency serving businesses, organizations, and growing enterprises. We design, build, and deploy high-performance digital systems that streamline business operations, automate workflows, and create competitive advantages.
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Rather than delivering generic templates, we take a disciplined engineering approach to every engagement. From technical discovery to production deployment, our team builds software that is secure, fast, and engineered to scale seamlessly as your operations expand.
            </p>

            {/* Value checklist */}
            <div className="space-y-3 pt-2">
              {pillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#101926]">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button
                href="/about"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Entelix
              </Button>
              <Button href="/portfolio" variant="ghost" size="md">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

