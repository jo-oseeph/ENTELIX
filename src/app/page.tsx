import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import OurApproach from "@/components/home/OurApproach";
import ProductsSection from "@/components/home/ProductsSection";
import ContactCTA from "@/components/home/ContactCTA";
import HomeFAQ from "@/components/home/HomeFAQ";

export const metadata: Metadata = {
  title: "Entelix Technologies - We Build High-Performance Digital Solutions",
  description:
    "We help businesses transform ideas into powerful digital experiences through custom software, web applications, mobile apps, and modern cloud technologies.",
  alternates: {
    canonical: "https://entelix.co.ke",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <OurApproach />
      <ProductsSection />
      <ContactCTA />
      <HomeFAQ />
    </>
  );
}
