import HeroSection from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/About";
import PortfolioSection from "@/components/Portfolio";
import OurProcess from "@/components/OurProcess";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import FaqSection from "@/components/FaqSection";
import AboutCTASection from "@/components/about/AboutCTASection";

export const metadata = {
  title: "Entelix Technologies - We Build High-Performance Digital Solutions",
  description:
    "We help businesses transform ideas into powerful digital experiences through custom software, web applications and modern technology solutions.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <OurProcess />
      <WhyChooseUs />
      <FaqSection />
      <AboutCTASection />
    </>
  );
}
