import React from "react";
import HeroSection from "../components/softwaredev/HeroSection";
import ServicesGrid from '../components/softwaredev/ServicesGrid';
import SoftwareCta from "../components/softwaredev/SoftwareCta";
// import PricingPlans from "../components/softwaredev/PricingPlans.jsx";
import SEO from "../components/SEO";

const SoftwareDevelopment = () => {
  return (
    <>
      <SEO
        title="Custom Software Development Kenya - Enterprise Solutions | Etelix"
        description="Build custom software solutions with Etelix's expert development team in Kenya. We create scalable enterprise applications, SaaS platforms, and tailored software for East African businesses."
        keywords="custom software development Kenya, enterprise software Nairobi, SaaS development East Africa, software solutions Kenya, application development Nairobi, bespoke software Kenya"
        url="/software-development"
      />
      <HeroSection />
      <ServicesGrid/>
      {/* <PricingPlans /> */}

      <SoftwareCta />
    </>
  );
};

export default SoftwareDevelopment;
