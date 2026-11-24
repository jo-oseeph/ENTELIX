'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink, CheckCircle2, Filter } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface Project {
  id: string;
  title: string;
  category: string;
  filterGroup: "all" | "saas" | "commerce" | "enterprise" | "hardware";
  description: string;
  image: string;
  link?: string;
  technologies: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "cybex",
    title: "CYBEX: AI Cybersecurity Platform",
    category: "Cybersecurity & AI",
    filterGroup: "saas",
    description:
      "A mission-driven cybersecurity platform empowering organizations with intelligent, real-time protection against evolving cyber threats.",
    image: "/cybex1.png",
    link: "https://cybexv2.vercel.app",
    technologies: ["React", "AI Threat Detection", "Cloud Security", "Vercel"],
    highlights: ["Real-time threat monitoring", "Automated email security", "AI-driven anomaly detection"],
  },
  {
    id: "moihub",
    title: "MoiHub Campus Services Platform",
    category: "Digital Marketplace",
    filterGroup: "enterprise",
    description:
      "A high-volume centralized digital marketplace that connects campus students and local communities to verified rentals, food delivery, and essential services.",
    image: "/images/moihub.png",
    link: "https://moihub-silk.vercel.app/",
    technologies: ["React", "Node.js", "REST APIs", "Tailwind CSS"],
    highlights: ["Multi-vendor listings", "Location-based matching", "Mobile-optimized interface"],
  },
  {
    id: "calwiz",
    title: "Calwiz Enterprise Catalogue System",
    category: "Enterprise Commerce",
    filterGroup: "commerce",
    description:
      "A professional product catalogue and inventory showcase with an administrative dashboard for managing supplies, dynamic pricing, and direct WhatsApp customer inquiries.",
    image: "/images/calwiz.png",
    link: "https://calwiz-tech.vercel.app/",
    technologies: ["Next.js", "Admin Dashboard", "Inventory Engine", "Commerce"],
    highlights: ["Secure admin management", "Instant WhatsApp orders", "Structured product taxonomy"],
  },
  {
    id: "jengasafi",
    title: "JengaSafi Green Construction Monitor",
    category: "Sustainability & AI",
    filterGroup: "saas",
    description:
      "An environmental analytics platform for the construction industry that tracks carbon footprints, recommends sustainable building materials, and generates automated compliance audits.",
    image: "/jengasafi.png",
    link: "https://jengasafi-local.vercel.app/",
    technologies: ["AI Analytics", "React", "Cloud Database", "Reporting API"],
    highlights: ["Carbon footprint computation", "Green material engine", "Automated compliance reports"],
  },
  {
    id: "electrify",
    title: "Electrify Instant Commerce Store",
    category: "E-Commerce",
    filterGroup: "commerce",
    description:
      "A modern digital goods storefront featuring automated instant license dispatch, secure mobile money checkout, and optimized mobile user flows.",
    image: "/images/electrify.png",
    link: "https://electrify.lovable.app/",
    technologies: ["E-Commerce Architecture", "Payment Automation", "Instant Delivery"],
    highlights: ["Instant automated fulfillment", "Secure M-Pesa integration", "High-conversion checkout"],
  },
  {
    id: "ecycle",
    title: "E-Cycle Logistics Platform",
    category: "Logistics & Web",
    filterGroup: "enterprise",
    description:
      "A nationwide digital platform coordinating electronic waste disposal by matching organizations and consumers with certified recycling logistics operators.",
    image: "/ewaste1.png",
    link: "https://waste-frontend-two.vercel.app/",
    technologies: ["Web Platform", "Logistics Routing", "Database Architecture"],
    highlights: ["Disposal request tracking", "Certified recycler directory", "Environmental impact metrics"],
  },
  {
    id: "spa",
    title: "Serene Spa Digital Platform",
    category: "Booking & Wellness",
    filterGroup: "commerce",
    description:
      "A modern wellness website showcasing service menus with an intuitive, seamless reservation and inquiry experience.",
    image: "/images/spa.png",
    link: "https://serenspa.vercel.app/",
    technologies: ["React", "UI/UX Engineering", "Booking Integration"],
    highlights: ["Smooth booking flows", "Responsive visual design", "Fast performance"],
  },
  {
    id: "store",
    title: "Chris Online Fashion Store",
    category: "E-Commerce",
    filterGroup: "commerce",
    description:
      "A digital fashion storefront offering categorized catalog browsing, customer cart management, and streamlined order placement.",
    image: "/images/store.png",
    link: "https://66631ddce57e8.site123.me/",
    technologies: ["E-Commerce Platform", "Catalogue Management", "Mobile Friendly"],
    highlights: ["Product categorization", "Order placement flows", "Clean design"],
  },
  {
    id: "realestate",
    title: "Emali Adur Real Estate",
    category: "Property Platform",
    filterGroup: "enterprise",
    description:
      "A property marketplace platform for browsing, buying, and renting residential and commercial listings with detailed specifications.",
    image: "/realestate.png",
    link: "https://onungachristopher3.wixsite.com/emali-adur",
    technologies: ["Real Estate Listings", "Property Showcase", "Lead Generation"],
    highlights: ["Detailed property sheets", "Inquiry collection", "Location filtering"],
  },
  {
    id: "iot",
    title: "Offline IoT Water Monitor",
    category: "IoT & Hardware",
    filterGroup: "hardware",
    description:
      "A low-cost, real-time water quality monitoring solution operating entirely offline using an ESP32 micro-controller and local Wi-Fi dashboard to measure TDS and temperature.",
    image: "/project3.PNG",
    technologies: ["ESP32 Firmware", "Local Wi-Fi Server", "Sensor Analytics", "Hardware"],
    highlights: ["Offline-first telemetry", "Real-time TDS monitoring", "Hardware-software integration"],
  },
];

const filterCategories = [
  { label: "All Projects", value: "all" },
  { label: "SaaS & AI Platforms", value: "saas" },
  { label: "E-Commerce & Retail", value: "commerce" },
  { label: "Enterprise Systems", value: "enterprise" },
  { label: "Hardware & IoT", value: "hardware" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.filterGroup === activeFilter);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0A4FE0]">
              Our Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101926] tracking-tight leading-tight">
              Production Software Engineered for Real Impact
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Explore our track record of verified digital products, custom web applications, and enterprise platforms deployed live in production.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-[#E5E7EB]">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer select-none ${
                    isActive
                      ? "bg-[#101926] text-white shadow-xs"
                      : "bg-[#F5F7FA] text-[#64748B] hover:text-[#101926] hover:bg-gray-200/70 border border-[#E5E7EB]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#0A4FE0]/40 overflow-hidden shadow-[0_2px_12px_rgba(16,25,38,0.03)] hover:shadow-[0_16px_36px_rgba(16,25,38,0.08)] hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-52 sm:h-56 w-full bg-[#F5F7FA] overflow-hidden border-b border-[#E5E7EB]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-[#101926] border border-white/60 shadow-xs">
                      {project.category}
                    </span>
                  </div>

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

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h2 className="text-lg font-bold text-[#101926] tracking-tight group-hover:text-[#0A4FE0] transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 py-3 border-y border-gray-100">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#101926] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A4FE0] flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-[#F5F7FA] text-[#64748B] border border-[#E5E7EB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A4FE0] hover:text-[#0840B8] transition-colors group/link"
                      >
                        <span>Visit Live Platform</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span className="text-xs font-medium text-[#64748B]">
                        Internal Research &amp; Prototype
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              Ready to Build Your High-Performance Solution?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Our engineering team collaborates closely with your organization to architect, build, and deploy production-grade software solutions.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
