import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/About";
import MissionVisionValues from "../components/about/MissionVisionValues";
import TeamSection from "../components/about/TeamSection";
import AboutCTA from "../components/about/AboutCTASection";
import ErrorBoundary from "../components/ErrorBoundary";
import WhyChooseUs from "../components/about/WhyChooseUs";

const AboutPage = () => {
  return (
    <>
      <div className="pt-20">
        <ErrorBoundary label="AboutHero">
          <AboutHero />
        </ErrorBoundary>
        <ErrorBoundary label="AboutIntro">
          <AboutIntro />
        </ErrorBoundary>
        <ErrorBoundary label="MissionVisionValues">
          <MissionVisionValues />
        </ErrorBoundary>
        <WhyChooseUs/>  
        <ErrorBoundary label="TeamSection">
          <TeamSection />
        </ErrorBoundary>
        <ErrorBoundary label="AboutCTA">
          <AboutCTA />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default AboutPage;


