import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Moilearn",
    category: "Educational Platform",
    description: "A student platform for sharing notes and past papers to support collaborative learning.",
    image: "./images/moilearn.png",
    link: "https://moilearn.vercel.app",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    title: "Chris Online Store",
    category: "E-commerce Platform",
    description: "An online fashion store with seamless browsing and secure purchasing experience.",
    image: "./images/store.png",
    link: "https://66631ddce57e8.site123.me/",
    tech: ["React", "Express", "Tailwind"],
  },
  {
    id: 3,
    title: "Serene Spa",
    category: "Wellness Platform",
    description: "A modern spa website showcasing services with a simple and smooth booking experience.",
    image: "./images/spa.png",
    link: "https://serenspa.vercel.app/",
    tech: ["React", "Supabase", "Tailwind"],
  },
  {
    id: 4,
    title: "MoiHub",
    category: "Student Services Platform",
    description: "A centralized platform connecting students to rentals, food delivery, and essential campus services.",
    image: "./images/moihub.png",
    link: "https://moihub-silk.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 5,
    title: "Emali Adur Properties",
    category: "Real Estate Platform",
    description: "A real estate platform for browsing, buying, and renting properties with detailed listings.",
    image: "/realestate.png",
    link: "https://onungachristopher3.wixsite.com/emali-adur",
    tech: ["Wix"],
  },
  {
    id: 6,
    title: "Electrify",
    category: "E-commerce Platform",
    description: "A digital products store with secure checkout and M-Pesa integration for instant delivery.",
    image: "./images/electrify.png",
    link: "https://electrify.lovable.app/",
    tech: ["React", "Node.js", "M-Pesa API"],
  },
  {
    id: 7,
    title: "TUC Ticketing System",
    category: "Support System",
    description: "A ticketing system for Turkana University allowing users to report issues and admins to track and resolve them efficiently.",
    image: "./images/tuc.png",
    link: "https://helpdesk-system-smoky.vercel.app/login",
    tech: ["React", "Express", "MongoDB"],
  },
];

const ProjectCard = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 90);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [index]);

  const hasLiveLink = Boolean(project.link && project.link.startsWith("http"));

  return (
    <div
      ref={cardRef}
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
    >
      <div
        className="group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border-t-4 border-x border-b border-slate-200/70 transition-all duration-500 hover:-translate-y-1.5 h-full flex flex-col"
        style={{ borderTopColor: "#0B2153", boxShadow: "0 2px 10px rgba(11,33,83,0.05)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 16px 32px rgba(11,33,83,0.12)";
          e.currentTarget.style.borderTopColor = "#E93930";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(11,33,83,0.05)";
          e.currentTarget.style.borderTopColor = "#0B2153";
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden">
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-3 left-3">
            <span
              className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full tracking-wide"
              style={{ backgroundColor: "#0B2153" }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2" style={{ color: "#0B2153" }}>
            {project.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-2.5 py-1 rounded-md"
                style={{ backgroundColor: "rgba(11,33,83,0.06)", color: "#0B2153" }}
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={hasLiveLink ? project.link : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={
              !hasLiveLink
                ? (e) => {
                    e.preventDefault();
                    alert("Coming soon");
                  }
                : undefined
            }
            className="inline-flex items-center gap-2 text-sm font-semibold mt-auto transition-colors duration-200"
            style={{ color: "#E93930" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c0271f")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#E93930")}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {hasLiveLink ? "View Project" : "Coming Soon"}
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setHeaderVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header — centered, consistent with the rest of the site */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transform transition-all duration-1000 ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: "#E93930" }} />
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#E93930" }}>
              Portfolio
            </p>
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: "#E93930" }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight" style={{ color: "#0B2153" }}>
            Recent Projects
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed">
            A showcase of the digital solutions we've built — real products, for real businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;