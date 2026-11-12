import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ExternalLink, ArrowRight, Layers, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore our featured software projects, web platforms, and digital products engineered by Entelix Technologies for businesses and organizations.",
  alternates: {
    canonical: "https://entelix.co.ke/portfolio",
  },
};

interface Project {
  id: string;
  title: string;
  category: string;
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
    description:
      "A mission-driven cybersecurity startup solution empowering organizations with intelligent, affordable protection against evolving cyber threats.",
    image: "/cybex1.png",
    link: "https://cybexv2.vercel.app",
    technologies: ["React", "AI Threat Detection", "Cloud Security", "Vercel"],
    highlights: ["Real-time threat monitoring", "Automated email security", "AI-driven anomaly detection"],
  },
  {
    id: "moihub",
    title: "MoiHub Campus Services Platform",
    category: "Digital Platform",
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
    category: "Enterprise System",
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
    category: "AI & Sustainability",
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
    description:
      "A low-cost, real-time water quality monitoring solution operating entirely offline using an ESP32 micro-controller and local Wi-Fi dashboard to measure TDS and temperature.",
    image: "/project3.PNG",
    technologies: ["ESP32 Firmware", "Local Wi-Fi Server", "Sensor Analytics", "Hardware"],
    highlights: ["Offline-first telemetry", "Real-time TDS monitoring", "Hardware-software integration"],
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Case Studies &amp; Platforms
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Production Software Engineered for Real Impact
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of verified digital products, enterprise platforms, and client software systems deployed in production.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(16,25,38,0.03)] hover:border-[#0B59ED]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 w-full bg-[#101926]/5 overflow-hidden border-b border-[#E5E7EB]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="primary" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-[#101926] mb-2 group-hover:text-[#0B59ED] transition-colors">
                    {project.title}
                  </h2>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5 pb-4 border-b border-[#E5E7EB]">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-[#101926] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B59ED] flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F5F7FA] text-[#64748B] border border-[#E5E7EB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B59ED] hover:text-[#0948c2] uppercase tracking-wider transition-colors pt-2"
                    >
                      <span>Visit Live Solution</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-semibold text-[#64748B] pt-2">
                      Internal Research &amp; Prototype
                    </span>
                  )}
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Build Your High-Performance Solution?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto">
              Our engineers collaborate closely with your stakeholders to define architecture, build milestones, and deliver production software.
            </p>
            <div className="pt-2 flex justify-center">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Project Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
