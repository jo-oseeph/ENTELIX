import AboutHero from "./AboutHero";
import AboutIntro from "../About";
import MissionVisionValues from "./MissionVisionValues";
import TeamSection from "./TeamSection";
import AboutCTA from "./AboutCTASection";
import ErrorBoundary from "../ErrorBoundary";

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


