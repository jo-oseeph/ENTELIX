import React, { useEffect, useRef, useState } from "react";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Offline IoT Water Monitor",
    category: "IoT & Hardware",
    description: "A low-cost, real-time water quality monitoring system for rural households. Operates entirely offline using an ESP32 and local Wi-Fi dashboard.",
    image: "/img4.jpeg",
    link: "project-hero.html"
  },
  {
    id: 2,
    title: "CYBEX: AI-Powered Cybersecurity",
    category: "Cybersecurity & AI",
    description: "A mission-driven startup empowering SMEs with smart, affordable, and effective cybersecurity solutions including real-time threat monitoring.",
    image: "/img2.png",
    link: "https://cybexv2.vercel.app"
  },
  {
    id: 3,
    title: "E-Cycle: E-Waste Management Platform",
    category: "Web Platform & Logistics",
    description: "A digital platform connecting e-waste producers with certified recyclers. Features item listing, location matching, and impact tracking.",
    image: "/img1.jpeg",
    link: "https://waste-frontend-two.vercel.app/"
  },
  {
    id: 4,
    title: "AI Health Translator",
    category: "AI & Healthcare",
    description: "A specialized AI translator that bridges the language gap in healthcare, providing instant translation into local Kenyan languages.",
    image: "/img3.jpeg",
    link: "project-health-translator.html"
  },
  {
    id: 5,
    title: "JengaSafi: Green Construction Monitor",
    category: "AI & Sustainability",
    description: "An AI-powered sustainability platform tracking real-time CO₂ emissions and recommending greener materials for Kenya's construction industry.",
    image: "/hero-bg.jpg",
    link: "https://jengasafi-local.vercel.app/"
  },
  {
    id: 6,
    title: "Kazi Nyumbani: AI Property Valuation",
    category: "Web Platform & AI",
    description: "An AI-powered real estate platform using machine learning to predict property valuation and analyze neighborhood growth in Kenya.",
    image: "/img5.jpeg",
    link: "project-kazi-nyumbani.html"
  }
];

// Individual Project Card Component
const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const hasLiveLink = Boolean(project.link && project.link.startsWith("http"));

  const handleClick = () => {
    if (hasLiveLink) {
      window.open(project.link, "_blank");
    } else {
      alert("Coming soon");
    }
  };

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
          <div className="aspect-video rounded-xl overflow-hidden bg-white shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          <button
            onClick={handleClick}
            className="self-start px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            {hasLiveLink ? "View Demo →" : "Coming Soon"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Projects Section Component
const ProjectsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-semibold rounded-full">
              Portfolio
            </span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative solutions spanning IoT, AI, sustainability, and digital platforms
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;