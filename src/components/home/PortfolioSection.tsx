'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "cybex",
    title: "CYBEX: AI Cybersecurity Platform",
    category: "Cybersecurity & AI",
    description:
      "A mission-critical cybersecurity solution providing real-time threat monitoring, automated vulnerability assessment, and AI-driven protection for modern businesses.",
    image: "/cybex1.png",
    link: "https://cybexv2.vercel.app",
    tags: ["Threat Detection", "AI Analytics", "Cloud Security"],
  },
  {
    id: "moihub",
    title: "MoiHub Campus Services Platform",
    category: "Digital Marketplace",
    description:
      "A centralized multi-service digital platform connecting university campus communities to verified accommodation, logistics, and student services.",
    image: "/images/moihub.png",
    link: "https://moihub-silk.vercel.app/",
    tags: ["Marketplace Architecture", "Real-Time Listings", "REST APIs"],
  },
  {
    id: "calwiz",
    title: "Calwiz Enterprise Catalogue System",
    category: "Enterprise Commerce",
    description:
      "Product catalogue management platform with an administrative dashboard for updating inventory, dynamic categorization, and automated customer orders.",
    image: "/images/calwiz.png",
    link: "https://calwiz-tech.vercel.app/",
    tags: ["Admin Dashboard", "Catalogue Engine", "WhatsApp Checkout"],
  },
  {
    id: "jengasafi",
    title: "JengaSafi Green Construction Monitor",
    category: "Sustainability & AI",
    description:
      "An environmental analytics platform for the construction industry that tracks carbon footprints, recommends sustainable materials, and generates compliance audits.",
    image: "/jengasafi.png",
    link: "https://jengasafi-local.vercel.app/",
    tags: ["Carbon Analytics", "AI Recommendation", "Reporting API"],
  },
  {
    id: "electrify",
    title: "Electrify Instant Commerce Platform",
    category: "Digital Commerce",
    description:
      "High-conversion digital store offering automated instant product fulfillment, secure mobile money checkout, and optimized mobile user flows.",
    image: "/images/electrify.png",
    link: "https://electrify.lovable.app/",
    tags: ["M-Pesa STK", "Instant Fulfillment", "Digital Storefront"],
  },
  {
    id: "ecycle",
    title: "E-Cycle Logistics Platform",
    category: "Logistics & Web",
    description:
      "Electronic waste management platform coordinating disposal logistics by matching organizations and consumers with certified recycling partners.",
    image: "/ewaste1.png",
    link: "https://waste-frontend-two.vercel.app/",
    tags: ["Logistics Tracking", "Directory Engine", "Impact Metrics"],
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-white border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 md:mb-18"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#0A4FE0]">
            Selected Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101926] tracking-tight leading-tight">
            Engineered Solutions Delivered for Real Businesses
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Explore verified web applications, enterprise systems, and digital platforms designed, engineered, and deployed by Entelix Technologies.
          </p>
        </motion.div>

        {/* Minimal 3-Column Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#0A4FE0]/40 overflow-hidden shadow-[0_2px_12px_rgba(16,25,38,0.03)] hover:shadow-[0_16px_36px_rgba(16,25,38,0.08)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Project Visual Container */}
              <div className="relative h-52 sm:h-56 w-full bg-[#F5F7FA] overflow-hidden border-b border-[#E5E7EB]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-[#101926] border border-white/60 shadow-xs">
                    {project.category}
                  </span>
                </div>

                {/* External Link Pill */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live platform for ${project.title}`}
                    className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#101926]/80 hover:bg-[#0A4FE0] text-white flex items-center justify-center transition-colors shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-lg font-bold text-[#101926] tracking-tight group-hover:text-[#0A4FE0] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Chips */}
                <div className="pt-2 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono font-medium text-[#64748B] bg-[#F5F7FA] border border-[#E5E7EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Link Button */}
                <div className="pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A4FE0] hover:text-[#0840B8] transition-colors group/link"
                  >
                    <span>Visit Live Platform</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation CTA */}
        <div className="mt-14 sm:mt-18 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#101926] hover:bg-[#1A2638] text-white text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5F7FA] text-[#101926] text-sm font-semibold border border-[#E5E7EB] hover:border-[#CBD5E1] transition-all active:scale-[0.98]"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-4 h-4 text-[#0A4FE0]" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

