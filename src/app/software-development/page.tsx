import HeroSection from "@/components/softwaredev/HeroSection";
import ServicesGrid from "@/components/softwaredev/ServicesGrid";
import SoftwareCta from "@/components/softwaredev/SoftwareCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development - Enterprise Solutions",
  description:
    "Build custom software solutions with Entelix Technologies. We engineer scalable enterprise applications, SaaS platforms, and tailored software systems.",
  alternates: {
    canonical: "https://entelix.co.ke/software-development",
  },
};

export default function SoftwareDevelopmentPage() {
  return (
    <div>
      <HeroSection />
      <ServicesGrid />
      <SoftwareCta />
    </div>
  );
}

