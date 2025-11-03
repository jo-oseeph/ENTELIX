import React from "react";
import HeroSection from "../components/digitalMarketing/HeroSection";
import IntroSection from "../components/digitalMarketing/IntroSection";
import InfoCardsSection from "../components/digitalMarketing/InfoCardsSection";
import CTASection from "../components/digitalMarketing/CTASection";

const DigitalMarketing = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <InfoCardsSection />
      <CTASection />
    </main>
  );
};

export default DigitalMarketing;
