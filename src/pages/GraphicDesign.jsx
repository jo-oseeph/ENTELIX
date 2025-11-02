// src/pages/GraphicDesign.jsx
import HeroSection from "../components/graphicdesign/HeroSection";
import ServicesOverview from "../components/graphicdesign/ServicesOverview";
import ApproachSection from "../components/graphicdesign/ApproachSection";
import PortfolioPreview from "../components/graphicdesign/PortfolioPreview";
import CTASection from "../components/graphicdesign/CTASection";

const GraphicDesign = () => {
  return (
    <div className="w-full">
      <HeroSection />
       <ServicesOverview /> 
      <ApproachSection />
      <PortfolioPreview />
      <CTASection /> 
    </div>
  );
};

export default GraphicDesign;
