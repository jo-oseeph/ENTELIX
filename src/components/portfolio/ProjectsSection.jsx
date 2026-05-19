import { ArrowRight, ExternalLink } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, [index]);

  const hasLiveLink = Boolean(project.link && project.link.startsWith("http"));

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 border-t-4 shadow-md hover:shadow-xl transition-all duration-500 h-full flex flex-col"
        style={{ borderTopColor: '#0B2153' }}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Category badge overlaid on image bottom */}
          <div className="absolute bottom-3 left-3">
            <span
              className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full tracking-wide"
              style={{ backgroundColor: '#0B2153' }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3
            className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-[#E93930]"
            style={{ color: '#0B2153' }}
          >
            {project.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Ghost / outline CTA — no background */}
          <a
            href={hasLiveLink ? project.link : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={!hasLiveLink ? (e) => { e.preventDefault(); alert("Coming soon"); } : undefined}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 group/btn w-fit"
            style={{ color: '#E93930' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0B2153')}
            onMouseLeave={e => (e.currentTarget.style.color = '#E93930')}
          >
            <ExternalLink className="w-4 h-4" />
            {hasLiveLink ? "View Live" : "Coming Soon"}
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setHeaderVisible(true); }); },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => { if (headerRef.current) observer.unobserve(headerRef.current); };
  }, []);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header — left-aligned like the ServicesSection pattern */}
        <div
          ref={headerRef}
          className={`mb-14 transform transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#E93930' }}>
              Portfolio
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#0B2153' }}>
                Recent Projects
              </h2>
              <div className="mt-3 w-16 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            </div>
            <p className="text-gray-500 text-base max-w-lg md:text-right leading-relaxed">
              A showcase of our latest work — innovative, impactful digital solutions built for real results.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;