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
      title: 'MoiHub',
      description:
        'A centralized platform connecting students to rentals, food delivery, and essential campus services.',
      image: './images/moihub.png',
      link: 'https://moihub-silk.vercel.app/',
     
    },
    {
      id: 3,
      title: 'Chris Online Store',
      description:
        'An online fashion store with seamless browsing and a secure purchasing experience.',
      image: './images/store.png',
      link: 'https://66631ddce57e8.site123.me/',
    },
    {
      id: 5,
      title: 'Serene Spa',
      description:
        'A modern spa website showcasing services with a simple and smooth booking experience.',
      image: './images/spa.png',
      link: 'https://serenespa.vercel.app/',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#E93930' }}>
              FEATURED PROJECTS
            </p>
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight" style={{ color: '#0B2153' }}>
           Solutions Built for Real-World Impact
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto mt-4 leading-relaxed">
            From business platforms to custom software, we build digital solutions designed around real business needs.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col border-t-4 border-x border-b border-slate-200/70 transition-all duration-700 hover:-translate-y-1.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 120}ms`,
                boxShadow: '0 2px 10px rgba(11,33,83,0.05)',
                borderTopColor: '#0B2153',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(11,33,83,0.12)';
                e.currentTarget.style.borderTopColor = '#E93930';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(11,33,83,0.05)';
              
              }}
            >
              <div className="relative w-full overflow-hidden" style={{ height: '200px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: '#0B2153' }}>
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold mt-auto transition-colors duration-200"
                  style={{ color: '#E93930' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#c0271f')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#E93930')}
                >
                  View Project
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`flex justify-center mt-14 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm border transition-all duration-300"
            style={{ borderColor: '#0B2153', color: '#0B2153', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0B2153';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#0B2153';
            }}
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