import HeroSection from "@/components/cloudsolutions/HeroSection";
import CloudServices from "@/components/cloudsolutions/CloudServices";
import CloudCta from "@/components/cloudsolutions/CloudCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions & Infrastructure",
  description:
    "Enterprise cloud migration, modern DevOps, scalable architecture, and reliable cloud management for businesses.",
  alternates: {
    canonical: "https://entelix.co.ke/cloud-solutions",
  },
};

export default function CloudSolutionsPage() {
  return (
    <div className="w-full">
      <HeroSection />
      <CloudServices />
      <CloudCta />
    </div>
  );
}
