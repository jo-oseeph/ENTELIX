import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Paintbrush, Settings, ArrowRight } from 'lucide-react';

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
      icon: Cloud,
      title: 'Cloud Solutions',
      description:
        'Reliable hosting, deployment, and cloud infrastructure built for performance, scalability, and security.',
      path: '/cloud-solutions',
    },
    {
      icon: Code,
      title: 'Software Development',
      description:
        'We build scalable software systems that automate processes, improve efficiency, and support long-term business growth.',
      path: '/software-development',
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#E93930' }}>
              Services
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#0B2153' }}>
              Our Services
            </h2>
            <div className="mt-2 mb-5 w-16 h-[3px] rounded-full mx-auto" style={{ backgroundColor: '#E93930' }} />
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions to transform your business and drive innovation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-7 flex flex-col gap-4 border border-gray-100 border-t-4 shadow-md hover:shadow-xl transition-all duration-700 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  borderTopColor: '#0B2153',
                }}
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

      </div>
    </section>
  );
};

export default ServicesSection;