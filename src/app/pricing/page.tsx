import PricingHero from "@/components/pricing/PricingHero";
import HowPaymentWorks from "@/components/pricing/HowPaymentWorks";
import PricingPlans from "@/components/pricing/PricingPlans";
import SoftwareMobilePricing from "@/components/pricing/Softwaremobilepricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models",
  description:
    "Transparent pricing and engagement packages for web development, custom software systems, and digital solutions.",
  alternates: {
    canonical: "https://entelix.co.ke/pricing",
  },
};

export default function PricingPage() {
  return (
    <div>
      <PricingHero />
      <HowPaymentWorks />
      <PricingPlans />
      <SoftwareMobilePricing />
    </div>
  );
}

