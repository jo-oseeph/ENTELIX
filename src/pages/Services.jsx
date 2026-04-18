import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/MajorServices";
import AboutCTASection from "../components/about/AboutCTASection.jsx";
import SEO from "../components/SEO";

const Services = () => {
  return (
    <div>
      <SEO
        title="Our Services - Web Development, Custom Software, Graphic Design, & Cloud Solutions | ENTELIX Kenya"
        description="Explore ENTELIX's comprehensive digital services in Kenya including web development, cloud solutions, mobile app development, graphic design, and digital marketing. Transform your business with our expert solutions."
        keywords="web development services Kenya, cloud solutions Nairobi, mobile app development Kenya, software development services East Africa, digital marketing services Kenya, graphic design services Nairobi"
        url="/services"
      />
      <ServicesHero />
      <ServicesSection />
      <AboutCTASection />
    </div>
  );
};

export default Services;
