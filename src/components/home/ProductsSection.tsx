import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

const products: Product[] = [
  {
    id: "cybex",
    title: "CYBEX: AI Cybersecurity Platform",
    category: "Cybersecurity & AI",
    description:
      "A mission-critical cybersecurity solution providing real-time threat monitoring, automated vulnerability assessment, and AI-driven protection for modern businesses.",
    image: "/cybex1.png",
    link: "https://cybexv2.vercel.app",
    tags: ["Threat Detection", "AI Analytics", "Enterprise Security"],
  },
  {
    id: "moihub",
    title: "MoiHub Campus Services Platform",
    category: "Digital Platform",
    description:
      "A centralized multi-service digital platform connecting university campus communities to verified accommodation, logistics, and student services.",
    image: "/images/moihub.png",
    link: "https://moihub-silk.vercel.app/",
    tags: ["Marketplace Architecture", "Real-Time Listings", "High-Volume"],
  },
  {
    id: "calwiz",
    title: "Calwiz Enterprise Catalogue System",
    category: "Enterprise System",
    description:
      "Product catalogue management platform with an administrative dashboard for updating inventory, dynamic categorization, and automated inquiries.",
    image: "/images/calwiz.png",
    link: "https://calwiz-tech.vercel.app/",
    tags: ["Admin Dashboard", "Catalogue Engine", "Commerce Integration"],
  },
  {
    id: "jengasafi",
    title: "JengaSafi Green Construction Monitor",
    category: "Sustainability & AI",
    description:
      "An environmental analytics platform for the construction industry that tracks carbon footprints, recommends sustainable materials, and generates compliance audits.",
    image: "/jengasafi.png",
    link: "https://jengasafi-local.vercel.app/",
    tags: ["Carbon Analytics", "AI Recommendation", "Reporting"],
  },
  {
    id: "electrify",
    title: "Electrify Instant Commerce Platform",
    category: "E-Commerce",
    description:
      "High-conversion digital store offering automated product fulfillment, secure payment gateways, and instant delivery workflows.",
    image: "/images/electrify.png",
    link: "https://electrify.lovable.app/",
    tags: ["Secure Payments", "Instant Fulfillment", "Digital Storefront"],
  },
  {
    id: "ecycle",
    title: "E-Cycle Logistics Platform",
    category: "Logistics & Web",
    description:
      "E-waste management platform connecting organizations with certified recycling partners, tracking disposal logistics, and measuring environmental impact.",
    image: "/ewaste1.png",
    link: "https://waste-frontend-two.vercel.app/",
    tags: ["Logistics Coordination", "Impact Tracking", "Workflow System"],
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-28 bg-[#F5F7FA] border-t border-[#E5E7EB]">
      <Container>
        <SectionHeader
          badge="Featured Products & Platforms"
          title="Engineered Solutions in Production"
          description="Explore proprietary products, platforms, and client solutions engineered by Entelix Technologies, deployed live and actively serving businesses."
          align="center"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-[0_1px_3px_rgba(16,25,38,0.03)] hover:border-[#0B59ED]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Product Preview Image */}
              <div className="relative h-52 sm:h-56 w-full bg-[#101926]/5 overflow-hidden border-b border-[#E5E7EB]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="primary" size="sm">
                    {product.category}
                  </Badge>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#101926] mb-2 group-hover:text-[#0B59ED] transition-colors">
                  {product.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed flex-1 mb-5">
                  {product.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#F5F7FA] text-[#64748B] border border-[#E5E7EB]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Link Button */}
                <div className="pt-3 border-t border-[#E5E7EB] flex items-center justify-between">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B59ED] hover:text-[#0948c2] uppercase tracking-wider transition-colors"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 text-center">
          <Button
            href="/portfolio"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Complete Portfolio &amp; Case Studies
          </Button>
        </div>
      </Container>
    </section>
  );
}

