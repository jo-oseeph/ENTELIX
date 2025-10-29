import { useEffect, useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern online shopping experience with seamless checkout and inventory management for retail businesses.',
      image: 'hero-bg.jpg',
      link: 'https://example.com/project1',
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Comprehensive patient management solution with appointment scheduling and medical records integration.',
      image: '/hero-bg.jpg',
      link: 'https://example.com/project2',
      category: 'Mobile App',
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'Real-time analytics and reporting platform for financial institutions with advanced data visualization.',
      image: '/hero-bg.jpg',
      link: 'https://example.com/project3',
      category: 'Web Application',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-red-400 font-bold text-sm uppercase tracking-wider mb-3">
              OUR PORTFOLIO
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Recent Work
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore our latest projects showcasing innovation and excellence in digital solutions
            </p>
            <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white font-semibold text-sm bg-red-500 px-4 py-2 rounded-full hover:bg-red-600 transition-colors"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* View Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-500 font-semibold text-sm hover:gap-3 transition-all group/btn"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button className="group relative px-8 py-4 text-white font-bold text-sm uppercase tracking-wider overflow-hidden rounded-full transition-all duration-300 hover:scale-105 bg-red-500 hover:bg-red-600 inline-flex items-center gap-3 shadow-lg hover:shadow-2xl">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
