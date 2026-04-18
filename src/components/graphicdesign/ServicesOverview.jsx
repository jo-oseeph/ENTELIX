import { useEffect, useRef, useState } from 'react';
import { Palette, Brush, FileText, LayoutDashboard } from 'lucide-react';

const services = [
  {
      icon: Palette,
      title: "Brand Identity Design",
      description: "We design logos, color systems, and typography that express your brand’s essence with clarity and impact.",
    },
    {
      icon: Brush,
      title: "Digital Branding",
      description: "From social media visuals to digital ads, we build a consistent and recognizable digital presence for your brand.",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      description: "Beautiful, intuitive, and conversion-driven designs that enhance user experience across web and mobile.",
    },
    {
      icon: FileText,
      title: "Print & Marketing Materials",
      description: "Professional designs for brochures, flyers, posters, and business cards that make your brand memorable.",
    },
];

const ServicesGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
            A full range of our graphic design services
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Designed to bring your ideas to life with precision, speed, and creative excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className={`group relative bg-blue-950 rounded-[18px] p-8 border border-blue-900 overflow-hidden
                transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500
                hover:shadow-[0_12px_32px_rgba(239,68,68,0.15)]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Bottom bar reveal on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-[14px] bg-red-500/15 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-red-500">
                <Icon className="w-5 h-5 text-red-400 transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;