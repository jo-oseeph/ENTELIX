import HeroSection from "../components/cloudsolutions/HeroSection";
import CloudServices from "../components/cloudsolutions/CloudServices";
import SEO from "../components/SEO";
import CloudCta from "../components/cloudsolutions/CloudCta";
// import PricingPlans from "../components/cloudsolutions/PricingPlans";

const CloudSolutions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Cloud Solutions Kenya - Enterprise Cloud Services & Migration | Entelix"
        description="Transform your business with Entelix's comprehensive cloud solutions in Kenya. We provide cloud migration, AWS/Azure services, cloud security, and scalable infrastructure for East African businesses."
        keywords="cloud solutions Kenya, cloud migration Nairobi, AWS services East Africa, Azure cloud Kenya, cloud security Nairobi, enterprise cloud services Kenya"
        url="/cloud-solutions"
      />
      <HeroSection />
      <CloudServices />
      {/* <PricingPlans /> */}
      <CloudCta />
   
    </div>
  );
};

export default CloudSolutions;
