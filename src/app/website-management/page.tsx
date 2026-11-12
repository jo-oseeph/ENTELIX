import HeroSection from "@/components/websiteManagement/HeroSection";
import ServicesSection from "@/components/websiteManagement/ServicesSection";
import WebManageCta from "@/components/websiteManagement/WebManageCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Management & Technical Support",
  description:
    "Secure maintenance, proactive updates, performance monitoring, and ongoing technical support from Entelix Technologies.",
  alternates: {
    canonical: "https://entelix.co.ke/website-management",
  },
};

export default function WebsiteManagementPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <WebManageCta />
    </div>
  );
}

