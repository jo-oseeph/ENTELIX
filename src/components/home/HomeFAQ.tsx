'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "What types of software solutions does Entelix build?",
    answer:
      "We design and engineer custom software applications, scalable web platforms, enterprise business management systems, e-commerce storefronts, mobile applications, and cloud infrastructures tailored to the unique workflows of businesses and corporate organizations.",
  },
  {
    question: "How are project timelines and estimates determined?",
    answer:
      "We begin with a discovery consultation to evaluate your functional scope, system integrations, and technical requirements. Following this assessment, we provide a detailed project specification containing milestone deliverables, transparent cost estimates, and clear delivery timelines.",
  },
  {
    question: "Do you offer post-launch technical support and maintenance?",
    answer:
      "Yes. Our client partnerships extend beyond initial deployment. We offer structured maintenance and support packages that encompass continuous monitoring, security updates, regular database backups, performance tuning, and planned feature enhancements.",
  },
  {
    question: "Can Entelix modernize or take over existing software systems?",
    answer:
      "Yes. We frequently conduct code audits, performance optimizations, and infrastructure refactoring for established platforms seeking to modernize their architecture, transition to the cloud, or scale for increased traffic.",
  },
  {
    question: "How does the development process work?",
    answer:
      "We follow an iterative 5-step delivery process: Discovery & Consultation, Planning & Architecture, Design & Engineering, Testing & QA, and Deployment & Ongoing Support. You receive transparent weekly sprint reports, staging preview access, and direct team communication throughout.",
  },
  {
    question: "How do we get started with Entelix?",
    answer:
      "You can submit a project inquiry via our contact form or reach out directly on WhatsApp or telephone. We will arrange an initial consultation to discuss your technical needs, timeline, and goals.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#E5E7EB]">
      <Container size="narrow">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Common Questions About Our Services"
          description="Everything you need to know about partnering with Entelix Technologies for your software development initiatives."
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-[#0B59ED]/40 bg-[#F5F7FA]/60 shadow-xs"
                    : "border-[#E5E7EB] bg-white hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B59ED]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#101926]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#0B59ED] text-white rotate-180"
                        : "bg-[#F5F7FA] text-[#64748B]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#64748B] leading-relaxed border-t border-[#E5E7EB]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

