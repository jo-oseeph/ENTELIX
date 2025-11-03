import HeroSection from "../components/cloudsolutions/HeroSection";
import ServicesSection from "../components/cloudsolutions/ServicesSection";
import CTASection from "../components/cloudsolutions/CTASection";

const CloudSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default CloudSolutions;
