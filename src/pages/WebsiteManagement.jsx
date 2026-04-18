import React from "react";
import HeroSection from "../components/websiteManagement/HeroSection";
import ServicesSection from "../components/websiteManagement/ServicesSection";
import PricingPlans from "../components/websiteManagement/PricingPlans";
import SEO from "../components/SEO";
import AboutCTASection from "../components/about/AboutCTASection";

const WebsiteManagement = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Website Management Kenya - Secure Maintenance, Updates & Monitoring | ENTELIX"
        description="Keep your website secure, fast, and up-to-date with ongoing website management from ENTELIX Kenya. We handle maintenance, performance monitoring, content updates, and technical support for East African businesses."
        keywords="website management Kenya, website maintenance Nairobi, site monitoring Kenya, website support East Africa, website updates Kenya, web performance monitoring"
        url="/website-management"
      />
      <HeroSection />
      <ServicesSection /> 
      <PricingPlans />
      <AboutCTASection />
    </main>
  );
};

export default WebsiteManagement;
