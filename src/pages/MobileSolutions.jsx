import React from "react";
import HeroSection from "../components/mobilesolutions/HeroSection";
import ServicesGrid from "../components/mobilesolutions/ServicesGrid";
import ApproachSection from "../components/mobilesolutions/ApproachSection";
import TechStack from "../components/mobilesolutions/TechStack";
import PricingPlans from "../components/mobilesolutions/PricingPlans";
import WhyChooseUs from "../components/mobilesolutions/WhyChooseUs";
import SEO from "../components/SEO";

const MobileSolutions = () => {
  return (
    <>
      <SEO
        title="Mobile App Development Kenya - iOS & Android Solutions | ENTELIX"
        description="Develop powerful mobile applications with ENTELIX's expert team in Kenya. We create custom iOS and Android apps, cross-platform solutions, and mobile-first experiences for East African businesses."
        keywords="mobile app development Kenya, iOS development Nairobi, Android app development Kenya, cross-platform mobile apps, mobile solutions East Africa, app development Nairobi"
        url="/mobile-solutions"
      />
      <HeroSection />
      <ServicesGrid />
      <ApproachSection />
      <TechStack />
      <PricingPlans />
      <WhyChooseUs />
    </>
  );
};

export default MobileSolutions;
