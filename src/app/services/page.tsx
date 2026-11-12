import ServicesHero from "@/components/ServicesHero";
import ServicesSection from "@/components/MajorServices";
import AboutCTASection from "@/components/about/AboutCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our software engineering services: custom software development, web applications, e-commerce, mobile apps, AI integrations, and cloud solutions.",
  alternates: {
    canonical: "https://entelix.co.ke/services",
  },
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesHero />
      <ServicesSection />
      <AboutCTASection />
    </div>
  );
}
