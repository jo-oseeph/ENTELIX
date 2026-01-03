import React, { useEffect, useRef, useState } from "react";

// Projects Data
const projects = [
  {
    id: 1,
    title: "Offline IoT Water Monitor",
    category: "IoT & Hardware",
    description: "A low-cost, real-time water quality monitoring system for rural households. Operates entirely offline using an ESP32 and local Wi-Fi dashboard.",
    image: "/iot.png",
    link: "project-hero.html"
  },
  {
    id: 2,
    title: "CYBEX: AI-Powered Cybersecurity",
    category: "Cybersecurity & AI",
    description: "A mission-driven startup empowering SMEs with smart, affordable, and effective cybersecurity solutions including real-time threat monitoring.",
    image: "/cybex1.png",
    link: "https://cybexv2.vercel.app"
  },
  {
    id: 3,
    title: "E-Cycle: E-Waste Management Platform",
    category: "Web Platform & Logistics",
    description: "A digital platform connecting e-waste producers with certified recyclers. Features item listing, location matching, and impact tracking.",
    image: "/ewaste1.png",
    link: "https://waste-frontend-two.vercel.app/"
  },
  {
    id: 4,
    title: "Chris's Online Store",
    category: "E-Commerce & Fashion",
    description: "A modern men and women fashion and clothing e-commerce platform offering diverse collections from timeless classics to the latest trends. Features seamless shopping experience with quality pieces for every occasion.",
    image: "/store.png",
    link: "https://66631ddce57e8.site123.me/"
  },
  {
    id: 5,
    title: "JengaSafi: Green Construction Monitor",
    category: "AI & Sustainability",
    description: "An AI-powered sustainability platform tracking real-time CO₂ emissions and recommending greener materials for Kenya's construction industry.",
    image: "/jengasafi.png",
    link: "https://jengasafi-local.vercel.app/"
  },
  {
    id: 6,
    title: "Emali Adur Properties",
    category: "Real Estate Platform",
    description: "A comprehensive real estate platform for buying and renting properties in Kenya. Features intuitive property search tools, virtual tours, and detailed listings with location, price, and amenities filtering.",
    image: "/realestate.png",
    link: "https://onungachristopher3.wixsite.com/emali-adur"
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
            <span className="inline-block px-3 py-1 text-xs font-medium text-red-500 bg-blue-50 rounded-full">
              {project.category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-blue-950 mb-3 group-hover:text-blue-800 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

        <button
            onClick={handleClick}
            className="self-start px-6 py-3 bg-transparent border-2 border-red-500 text-blue-600 font-medium rounded-full hover:bg-red-50 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {hasLiveLink ? "View Demo" : "Coming Soon"}
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
            <span className="text-red-500 font-bold text-sm uppercase tracking-wider mb-3">
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
            Featured Projects
          </h2>
            <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 mt-4">
            Innovative solutions spanning IoT, AI, e-commerce, real estate, sustainability, and digital platforms
          </p>
         
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