import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/ServicesSection";
import SEO from "../components/SEO";

const Services = () => {
  return (
    <div>
      <SEO
        title="Our Services - Web Development, Cloud Solutions & Digital Marketing"
        description="Explore ENTELIX's comprehensive digital services including web development, cloud solutions, mobile app development, graphic design, and digital marketing. Transform your business with our expert solutions."
        keywords="web development services, cloud solutions, mobile app development, software development services, digital marketing services, graphic design services"
        url="https://entelix.com/services"
      />
      <ServicesHero />
      <ServicesSection />
    </div>
  );
};

export default Services;
