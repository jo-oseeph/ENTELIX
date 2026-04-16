import React from "react";
import HeroSection from "../components/softwaredev/HeroSection";
import ApproachSection from '../components/softwaredev/ApproachSection';
import ServicesGrid from '../components/softwaredev/ServicesGrid';
import PricingPlans from "../components/softwaredev/PricingPlans.jsx";

const SoftwareDevelopment = () => {
  return (
    <>
      <HeroSection />
      <ServicesGrid/>    
      <ApproachSection/>  
      <PricingPlans />
      
      {/* You’ll add other sections here later like Overview, ServiceCards, Process, CTA, etc. */}
    </>
  );
};

export default SoftwareDevelopment;
