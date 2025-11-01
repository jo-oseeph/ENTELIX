import AboutHero from "./AboutHero";
import AboutIntro from "../About";
import MissionVisionValues from "./MissionVisionValues";
import TeamSection from "./TeamSection";
import AboutCTA from "./AboutCTASection";

const AboutPage = () => {
  return (
    <>
      <div className="pt-20">
        <AboutHero />
        <AboutIntro />
        <MissionVisionValues />
        <TeamSection />
        <AboutCTA />
      </div>
    </>
  );
};

export default AboutPage;


