import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/MajorServices";
import AboutCTASection from "../components/about/AboutCTASection.jsx";
import SEO from "../components/SEO";

const Services = () => {
  return (
    <div>
    <SEO
  title="Services | Web & Software Development Company in Kenya"
  description="Entelix offers website development, custom software systems, business automation, and supporting services including branding, cloud setup, and maintenance to help businesses operate efficiently."
  keywords="web development Kenya, software development Kenya, business automation Nairobi, custom software Kenya, website design services, cloud solutions Kenya"
  url="/services"
/>
      <ServicesHero />
      <ServicesSection />
      <AboutCTASection />
    </div>
  );
};

export default Services;
