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
        title="About ENTELIX - Leading Digital Solutions Company in Kenya"
        description="Learn about ENTELIX, Kenya's premier digital solutions and software development company. We deliver innovative web development, cloud solutions, mobile apps, and digital marketing services across East Africa."
        keywords="about entelix Kenya, digital solutions company Nairobi, software development company East Africa, IT services Kenya, technology company Nairobi"
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


