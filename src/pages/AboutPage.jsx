import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/MajorAbout";
import MissionVisionValues from "../components/about/MissionVisionValues";
// import TeamSection from "../components/about/TeamSection";
import AboutCTA from "../components/about/AboutCTASection";
import ErrorBoundary from "../components/ErrorBoundary";
import WhyChooseUs from "../components/about/WhyChooseUs";
import SEO from "../components/SEO";

const AboutPage = () => {
  return (
    <>
     <SEO
  title="About Entelix | Web & Software Development Company in Kenya"
  description="Learn about Entelix, a Kenyan company building modern websites and custom software systems to help businesses streamline operations and scale efficiently."
  keywords="Entelix Kenya, web development Kenya, software development Kenya, business automation Kenya, custom software Nairobi"
  url="/about"
/>
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
          {/* <TeamSection /> */}
        </ErrorBoundary>
        <ErrorBoundary label="AboutCTA">
          <AboutCTA />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default AboutPage;


