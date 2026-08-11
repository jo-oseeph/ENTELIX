import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Cpu, ArrowRight } from 'lucide-react';

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
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'We design and build native and cross-platform mobile apps that are fast, intuitive, and built to scale with your business.',
      path: '/mobile-app-development',
    },
    {
      icon: Cpu,
      title: 'Custom Software',
      description:
        'We build tailored software systems that automate processes, improve efficiency, and support long-term business growth.',
      path: '/software-development',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)',
      }}
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header — centered */}
        <div
          className={`flex flex-col items-center text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#E93930' }}>
              Services
            </p>
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-xl" style={{ color: '#0B2153' }}>
            Delivering Value Through Our Services
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accentColor = index === 1 ? '#E93930' : '#0B2153';
            return (
              <div
                key={index}
                className={`group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-start text-left gap-4 border-t-4 border-x border-b border-slate-200/70 transition-all duration-700 hover:-translate-y-1.5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                  boxShadow: '0 2px 10px rgba(11,33,83,0.05)',
                  borderTopColor: accentColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(11,33,83,0.12)';
                  e.currentTarget.style.borderTopColor = '#E93930';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(11,33,83,0.05)';
                  e.currentTarget.style.borderTopColor = accentColor;
                }}
              >
                {/* Icon box */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#0B2153' }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-snug" style={{ color: '#0B2153' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <a
                  href={service.path}
                  className="inline-flex items-center gap-2 font-semibold text-sm mt-2 transition-colors duration-200"
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

        {/* View All Services button */}
        <div
          className={`flex justify-center mt-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="/services"
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
            View All Services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;