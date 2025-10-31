import AboutHero from "./AboutHero";
import AboutIntro from "../About";
import MissionVisionValues from "./MissionVisionValues";
import TeamSection from "./TeamSection";
import AboutCTA from "./AboutCTASection";

const AboutMain = () => {
  return (
    <>
      <div className="pt-20">
        <div className="px-6 py-4 text-center">
          <h1 className="text-2xl font-bold text-blue-950">About Page</h1>
        </div>

        <AboutHero />
        <AboutIntro />
        <MissionVisionValues />
        <TeamSection />
        <AboutCTA />
      </div>
    </>
  );
};

export default AboutMain;
