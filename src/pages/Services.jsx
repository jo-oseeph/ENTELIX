import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/MajorServices";
import AboutCTASection from "../components/about/AboutCTASection.jsx";
import SEO from "../components/SEO";

const Services = () => {
  return (
    <div>
      <SEO
        title="Our Services - Web Development, Custom Software, Graphic Design, & Cloud Solutions"
        description="Explore ENTELIX's comprehensive digital services including web development, cloud solutions, mobile app development, graphic design, and digital marketing. Transform your business with our expert solutions."
        keywords="web development services, cloud solutions, mobile app development, software development services, digital marketing services, graphic design services"
        url="https://entelix.com/services"
      />
      <ServicesHero />
      <ServicesSection />
      <AboutCTASection />
    </div>
  );
};

export default Services;
