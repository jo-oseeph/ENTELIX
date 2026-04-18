import HeroSection from "../components/cloudsolutions/HeroSection";
import CloudServices from "../components/cloudsolutions/CloudServices";
import CTASection from "../components/cloudsolutions/CTASection";
import SEO from "../components/SEO";

const CloudSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cloud Solutions Kenya - Enterprise Cloud Services & Migration | ENTELIX"
        description="Transform your business with ENTELIX's comprehensive cloud solutions in Kenya. We provide cloud migration, AWS/Azure services, cloud security, and scalable infrastructure for East African businesses."
        keywords="cloud solutions Kenya, cloud migration Nairobi, AWS services East Africa, Azure cloud Kenya, cloud security Nairobi, enterprise cloud services Kenya"
        url="/cloud-solutions"
      />
      <HeroSection />
      <CloudServices />
      <CTASection />
    </div>
  );
};

export default CloudSolutions;
