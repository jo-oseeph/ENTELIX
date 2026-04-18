// src/pages/GraphicDesign.jsx
import HeroSection from "../components/graphicdesign/HeroSection";
import ServicesOverview from "../components/graphicdesign/ServicesOverview";
// import PortfolioPreview from "../components/graphicdesign/PortfolioPreview";
import PricingPlans from "../components/graphicdesign/PricingPlans";
import SEO from "../components/SEO";
import ServicesGrid from "../components/graphicdesign/ServicesOverview";
import AboutCTA from "../components/about/AboutCTASection";

const GraphicDesign = () => {
  return (
    <div className="w-full">
      <SEO
        title="Graphic Design Kenya - Professional Branding & Visual Design | ENTELIX"
        description="Elevate your brand with ENTELIX's professional graphic design services in Kenya. We create stunning logos, branding, marketing materials, and visual designs for East African businesses."
        keywords="graphic design Kenya, logo design Nairobi, branding services East Africa, marketing materials Kenya, visual design Nairobi, creative design Kenya"
        url="/graphic-design"
      />
      <HeroSection />
       <ServicesGrid />
       <PricingPlans />
      {/* <PortfolioPreview /> */}
     <AboutCTA />
    </div>
  );
};

export default GraphicDesign;
