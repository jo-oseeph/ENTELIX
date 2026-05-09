import { ArrowRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
  

// Projects Data
const projects = [
  {
    id: 1,
    title: "Moilearn",
    category: "Educational Platform",
    description: "A student platform for sharing notes and past papers to support collaborative learning.",
    image: "./images/moilearn.png",
    link: "https://moilearn.vercel.app"
  },
  {
    id: 2,
    title: "Chris Online Store",
    category: "E-commerce Platform",
    description: "An online fashion store with seamless browsing and secure purchasing experience.",
    image: "./images/store.png",
    link: "https://waste-frontend-two.vercel.app/"
  },
  {
    id: 3,
    title: "Serene Spa",
    category: "Wellness Platform",
    description: "A modern spa website showcasing services with a simple and smooth booking experience.",
    image: "./images/spa.png",
    link: "https://serenspa.vercel.app/"
  },
  {
    id: 4,
    title: "MoiHub",
    category: "Student Services Platform",
    description: "A centralized platform connecting students to rentals, food delivery, and essential campus services.",
    image: "./images/moihub.png",
    link: "https://moihub-silk.vercel.app/"
  },
  {
    id: 5,
    title: "Emali Adur Properties",
    category: "Real Estate Platform",
    description: "A real estate platform for browsing, buying, and renting properties with detailed listings.",
    image: "/realestate.png",
    link: "https://onungachristopher3.wixsite.com/emali-adur"
  },
  {
    id: 6,
    title: "Electrify",
    category: "E-commerce Platform",
    description: "A digital products store with secure checkout and M-Pesa integration for instant delivery.",
    image: "./images/electrify.png",
    link: "https://electrify.lovable.app/"
  },
  {
    id: 7,
    title: "TUC Ticketing System",
    category: "Support System",
    description: "A ticketing system for Turkana University allowing users to report issues and admins to track and resolve them efficiently.",
    image: "./images/tuc.png",
    link: "https://helpdesk-system-smoky.vercel.app/login"
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

          <h3 className="text-2xl font-bold text-[#0B2153]  mb-3 group-hover:text-blue-800 transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

        <button
            onClick={handleClick}
            className="self-start px-6 py-3 bg-red-500 border-2 border-red-500 text-white font-medium rounded-md hover:bg-red-600 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            {hasLiveLink ? "View Live" : "Coming Soon"}
            <ArrowRight className="inline-block w-4 h-4 ml-2" />
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
            Recent Projects
          </h2>
            <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6 mt-4">
            A showcase of our latest work, demonstrating our commitment to delivering innovative and impactful digital solutions for our clients.
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