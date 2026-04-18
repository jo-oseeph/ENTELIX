// src/pages/GraphicDesign.jsx
import HeroSection from "../components/graphicdesign/HeroSection";
import ServicesOverview from "../components/graphicdesign/ServicesOverview";
import ApproachSection from "../components/graphicdesign/ApproachSection";
import PortfolioPreview from "../components/graphicdesign/PortfolioPreview";
import CTASection from "../components/graphicdesign/CTASection";
import SEO from "../components/SEO";

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
       <ServicesOverview />
      <ApproachSection />
      <PortfolioPreview />
      <CTASection />
    </div>
  );
};

export default GraphicDesign;
