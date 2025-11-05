import React from "react";
import HeroSection from "../components/portfolio/HeroSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import CTASection from "../components/portfolio/CTASection";
import ErrorBoundary from "../components/ErrorBoundary";

const Portfolio = () => {
  return (
    <div>
      <ErrorBoundary label="Portfolio:HeroSection">
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary label="Portfolio:ProjectsSection">
        <ProjectsSection />
      </ErrorBoundary>
      <ErrorBoundary label="Portfolio:CTASection">
        <CTASection />
      </ErrorBoundary>
    </div>
  );
};

export default Portfolio;
