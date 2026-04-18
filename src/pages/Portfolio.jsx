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
        title="Our Portfolio - Successful Digital Projects & Case Studies | ENTELIX Kenya"
        description="Explore ENTELIX's portfolio of successful digital projects in Kenya. See our web development, mobile apps, cloud solutions, and digital marketing case studies across East Africa."
        keywords="portfolio entelix Kenya, digital projects Nairobi, web development case studies East Africa, mobile app portfolio Kenya, digital solutions showcase Nairobi"
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
