import React from "react";
import HeroSection from "../components/digitalMarketing/HeroSection";
import IntroSection from "../components/digitalMarketing/IntroSection";
import InfoCardsSection from "../components/digitalMarketing/InfoCardsSection";
import CTASection from "../components/digitalMarketing/CTASection";
import SEO from "../components/SEO";

const DigitalMarketing = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Digital Marketing Kenya - SEO, PPC & Social Media Marketing | ENTELIX"
        description="Boost your online presence with ENTELIX's digital marketing services in Kenya. We provide SEO optimization, PPC campaigns, social media marketing, and data-driven strategies for East African businesses."
        keywords="digital marketing Kenya, SEO services Nairobi, PPC advertising East Africa, social media marketing Kenya, online marketing Nairobi, digital advertising Kenya"
        url="/digital-marketing"
      />
      <HeroSection />
      <IntroSection />
      <InfoCardsSection />
      <CTASection />
    </main>
  );
};

export default DigitalMarketing;
