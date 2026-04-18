import React from "react";
import HeroSection from "../components/Hero.jsx";
import AboutSection from "../components/About.jsx";
// import OurServices from '../components/Services.jsx'
// import PortfolioSection from "../components/Portfolio.jsx";
import ServicesSection from "../components/ServicesSection";
import AboutCTASection from "../components/about/AboutCTASection.jsx";
// import StatsStrip from "../components/StatsStrip.jsx";
import WhyChooseUs from "../components/about/WhyChooseUs";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="ENTELIX - Leading Digital Solutions & Software Development Company in Kenya"
        description="Transform your business with ENTELIX's expert digital solutions in Kenya. We specialize in web development, cloud solutions, mobile apps, graphic design, and digital marketing. Get innovative technology solutions that drive growth."
        keywords="software development Kenya, web development Nairobi, mobile app development Kenya, cloud solutions East Africa, digital marketing Kenya, graphic design Nairobi, IT consulting Kenya, technology solutions Africa"
      />

      <HeroSection />
       <ServicesSection />
      <AboutSection />
      {/* <PortfolioSection /> */}
{/*      
      <OurServices />  */}
      {/* <CTABanner /> */}
      <WhyChooseUs />
      <AboutCTASection />
    </div>
  );
};

export default Home;
