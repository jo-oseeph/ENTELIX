import React from "react";
import HeroSection from "../components/Hero.jsx";
import AboutSection from "../components/About.jsx";
import PortfolioSection from "../components/Portfolio.jsx";
import ServicesSection from "../components/ServicesSection";
import AboutCTASection from "../components/about/AboutCTASection.jsx";
// import WhyChooseUs from "../components/about/WhyChooseUs";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div>
      <SEO
        title="Entelix - Leading Digital Solutions & Software Development Company in Kenya"
        description=" Transform your business with Entelix's expert digital solutions. We build modern websites and custom software systems that help businesses streamline operations, automate workflows, and improve efficiency."
        keywords="software development Kenya, web development Nairobi, mobile app development Kenya, cloud solutions East Africa, digital marketing Kenya, graphic design Nairobi, IT consulting Kenya, technology solutions Africa"
      />

      <HeroSection />
       <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      {/* <WhyChooseUs /> */}
      <AboutCTASection />
    </div>
  );
};

export default Home;
