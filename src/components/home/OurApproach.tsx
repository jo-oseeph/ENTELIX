import React from "react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We analyze your business objectives, operational workflows, and technical requirements to define clear project scope and KPIs.",
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "Our architects establish data models, technology stacks, security requirements, and a milestone-driven implementation roadmap.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We design intuitive, high-fidelity interfaces and write clean, modular, and maintainable code adhering to modern engineering standards.",
  },
  {
    number: "04",
    title: "Testing & Deployment",
    description:
      "Comprehensive quality assurance, automated unit/integration testing, security scans, and a seamless zero-downtime production launch.",
  },
  {
    number: "05",
    title: "Support & Improvement",
    description:
      "Continuous performance monitoring, security patches, regular backups, and feature enhancements to support your evolving business.",
  },
];

export default function OurApproach() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#E5E7EB]">
      <Container>
        <SectionHeader
          badge="Our Delivery Process"
          title="A Structured Path From Concept to Production"
          description="A disciplined, transparent delivery framework that ensures projects launch on schedule, within scope, and built to the highest technical standards."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative flex flex-col p-6 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0B59ED]/30 transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#0B59ED] bg-[#EBF2FE] px-2.5 py-1 rounded-md">
                  STEP {step.number}
                </span>
                {idx < steps.length - 1 && (
                  <span className="hidden lg:block w-4 h-px bg-[#E5E7EB] group-hover:bg-[#0B59ED]/40 transition-colors" />
                )}
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[#101926] mb-2.5 group-hover:text-[#0B59ED] transition-colors">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed flex-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

