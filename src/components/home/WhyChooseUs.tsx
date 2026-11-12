import React from "react";
import {
  Layers,
  ShieldCheck,
  TrendingUp,
  Users2,
  Headphones,
  Briefcase,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

const reasons = [
  {
    icon: Layers,
    title: "Tailored Solutions",
    description:
      "We design and build systems around your specific operational workflows, preventing the rigid constraints of one-size-fits-all software.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Engineering",
    description:
      "Our solutions adhere to strict engineering standards, clean code principles, comprehensive testing, and enterprise security safeguards.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description:
      "Every architecture is designed to handle increasing workloads, user growth, and business expansion without requiring disruptive rebuilds.",
  },
  {
    icon: Users2,
    title: "User-Focused Design",
    description:
      "Intuitive user interfaces and ergonomic user flows that minimize training time, drive high adoption, and deliver seamless interactions.",
  },
  {
    icon: Headphones,
    title: "Reliable Support",
    description:
      "We provide continuous technical support, proactive monitoring, regular updates, and performance tuning well beyond initial deployment.",
  },
  {
    icon: Briefcase,
    title: "Business-Oriented Development",
    description:
      "Technical decisions are guided by business outcomes: operational efficiency, cost reduction, customer satisfaction, and measurable ROI.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-[#F5F7FA] border-t border-[#E5E7EB]">
      <Container>
        <SectionHeader
          badge="Why Partner With Entelix"
          title="Engineering Reliability That Powers Growth"
          description="We combine technical depth with business acumen to deliver software systems that perform reliably and support your strategic objectives."
          align="center"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card
                key={reason.title}
                variant="white"
                hoverable
                padding="md"
                className="flex flex-col h-full"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EBF2FE] text-[#0B59ED] flex items-center justify-center mb-5 flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {reason.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

