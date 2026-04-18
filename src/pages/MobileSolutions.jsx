import HeroSection from "../components/mobilesolutions/HeroSection";
import ServicesSection from "../components/mobilesolutions/ServicesSection";
import CtaSection from "../components/mobilesolutions/CtaSection";
import SEO from "../components/SEO";

const MobileSolutions = () => {
  return (
    <div className="flex flex-col">
      <SEO
        title="Mobile App Development Kenya - iOS & Android Apps | ENTELIX"
        description="Build powerful mobile applications with ENTELIX's expert mobile development services in Kenya. We create native iOS, Android apps, and cross-platform solutions for East African businesses."
        keywords="mobile app development Kenya, iOS app development Nairobi, Android app development East Africa, mobile solutions Kenya, app development Nairobi, cross-platform apps Kenya"
        url="/mobile-solutions"
      />
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </div>
  );
};

export default MobileSolutions;
