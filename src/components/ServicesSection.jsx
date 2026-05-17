import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Paintbrush, Settings, Users, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description:
        'From landing pages to full web applications, we build fast, modern websites designed to perform, convert, and deliver seamless experiences on every device.',
      path: '/web-development',
    },
    {
      icon: Paintbrush,
      title: 'Graphic Design',
      description:
        'We create clean, modern brand identities and visuals that build trust and make your business stand out.',
      path: '/graphic-design',
    },
    {
      icon: Settings,
      title: 'Website Management',
      description:
        'Ongoing support, maintenance, updates, and performance monitoring to keep your website secure, up-to-date, and running smoothly at all times.',
      path: '/website-management',
    },
    {
      icon: Users,
      title: 'Consultation Services',
      description:
        'We provide expert guidance to help you plan, build, and optimize digital solutions, including AI strategy aligned with your business goals.',
        path: '/consultation-services',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'We design and manage cloud infrastructure that improves performance, reduces costs, and ensures your systems are secure, scalable, and reliable.',
      path: '/cloud-solutions',
    },
  ];

  const displayedServices = services.slice(0, 3);

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div
          className={`flex items-end justify-between mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Left: label + heading */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
              <p className="text-sm font-bold uppercase tracking-widest" style={{ color: '#E93930' }}>
                Service
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: '#0B2153' }}>
              Delivering Value Through Our Services
            </h2>
          </div>

          {/* Right: View All link — desktop only */}
          <a
            href="/services"
            className="hidden md:flex items-center gap-1 font-semibold text-sm whitespace-nowrap transition-colors duration-200 group"
            style={{ color: '#0B2153' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#E93930')}
            onMouseLeave={e => (e.currentTarget.style.color = '#0B2153')}
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-7 flex flex-col gap-4 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#0B2153' }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-snug" style={{ color: '#0B2153' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={service.path}
                  className="inline-flex items-center gap-2 font-semibold text-sm w-fit mt-auto transition-colors duration-200 group"
                  style={{ color: '#E93930' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c0271f')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#E93930')}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Mobile: View All button */}
        <div className="md:hidden text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{ backgroundColor: '#E93930' }}
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;