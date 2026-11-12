import HeroSection from "@/components/portfolio/HeroSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import AboutCTASection from "@/components/about/AboutCTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description:
    "Explore our featured software engineering projects, web applications, and digital platforms built for businesses and organizations.",
  alternates: {
    canonical: "https://entelix.co.ke/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <AboutCTASection />
    </div>
  );
}
