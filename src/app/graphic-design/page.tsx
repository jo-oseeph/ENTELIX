import HeroSection from "@/components/branding/HeroSection";
import PricingPlans from "@/components/branding/PricingPlans";
import ServicesGrid from "@/components/branding/ServicesOverview";
import GraphicsCta from "@/components/branding/GraphicsCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branding & Digital Experiences",
  description:
    "Elevate your brand with Entelix's professional visual design, identity systems, and UI/UX engineering.",
  alternates: {
    canonical: "https://entelix.co.ke/graphic-design",
  },
};

export default function GraphicDesignPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesGrid />
      <PricingPlans />
      <GraphicsCta />
    </div>
  );
}

