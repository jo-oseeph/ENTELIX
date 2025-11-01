import React from "react";
import HeroSection from "../components/softwaredev/HeroSection";
import ApproachSection from '../components/softwaredev/ApproachSection';
import ServicesGrid from '../components/softwaredev/ServicesGrid';
import WhyChooseUs from "../components/softwaredev/WhyChooseUs";

const SoftwareDevelopment = () => {
  return (
    <>
      <HeroSection />
      <ApproachSection/>  
      <ServicesGrid/>    
     <WhyChooseUs/>
      
      {/* You’ll add other sections here later like Overview, ServiceCards, Process, CTA, etc. */}
    </>
  );
};

export default SoftwareDevelopment;
