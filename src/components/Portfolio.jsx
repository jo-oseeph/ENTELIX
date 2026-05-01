import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const projects = [
    {
    id: 4,
    title: "MoiHub",
    category: "Student Services Platform",
    description: "A centralized platform connecting students to rentals, food delivery, and essential campus services.",
    image: "./images/moihub.png",
    link: "https://moihub-silk.vercel.app/"
  },
    
    {
      id: 3,
      title: 'Chris Online Store',
      description: "An online fashion store with seamless browsing and secure purchasing experience.",
      image: './images/store.png',
      link: 'https://waste-frontend-two.vercel.app/',
    },
    {
      id: 5,
      title: 'Serene Spa',
     description: "A modern spa website showcasing services with a simple and smooth booking experience.",
      image: './images/spa.png',
      link: 'https://serenespa.vercel.app/',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ backgroundColor: '#0B2153' }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 10%, rgba(220,38,38,0.06) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <p
            className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
            style={{ color: '#ef4444' }}
          >
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight">
            Recent Work
          </h2>
          <div className="mt-3 w-12 h-[3px] rounded-full mx-auto" style={{ backgroundColor: '#ef4444' }} />
          <p className="text-gray-400 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
            A selection of projects showcasing innovation and digital excellence.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 120}ms`,
              }}
            >
              <div
                className="rounded-2xl overflow-hidden flex flex-col transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
                }}
              >
                {/* Screenshot — always fully visible */}
                <div className="relative w-full overflow-hidden" style={{ height: '220px' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle bottom fade into card */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-10"
                    style={{
                      background:
                        'linear-gradient(to bottom, transparent, rgba(10,26,62,0.55))',
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: '#ef4444' }}
                  >
                    View Project
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-white text-sm font-bold uppercase tracking-wider"
            style={{ backgroundColor: '#ef4444' }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;