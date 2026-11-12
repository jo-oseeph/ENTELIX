import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import CTASection from "../components/portfolio/CTASection";
import AboutCTASection from "../components/about/AboutCTASection.jsx";
import ErrorBoundary from "../components/ErrorBoundary";
import SEO from "../components/SEO";

const Portfolio = () => {
  return (
    <div>
     <SEO
  title="Portfolio | Web & Software Projects by Entelix"
  description="Explore projects by Entelix, showcasing modern websites and custom software systems built to streamline operations and improve efficiency."
  keywords="Entelix portfolio, web development projects Kenya, software projects Kenya, business systems examples, custom software Nairobi"
  url="/portfolio"
/>
      <ErrorBoundary label="Portfolio:HeroSection">
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary label="Portfolio:ProjectsSection">
        <ProjectsSection />
      </ErrorBoundary>
      <ErrorBoundary label="Portfolio:CTASection">
       <AboutCTASection />
      </ErrorBoundary>
    </div>
  );
};

export default Portfolio;
