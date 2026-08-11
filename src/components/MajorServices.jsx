import { useEffect, useRef, useState } from 'react';
import { Code, Smartphone, Cpu, Bot, TrendingUp, Paintbrush, CheckCircle2, ArrowRight } from 'lucide-react';

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
        'Modern websites and web platforms built to support your business and serve your customers.',
      features: [
        'Business websites',
        'Landing pages',
        'E-commerce platforms',
        'Web applications',
        'Customer portals',
        'Admin dashboards',
      ],
      path: '/web-development',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description:
        'Mobile applications designed to deliver seamless experiences and extend your business to mobile users.',
      features: [
        'Android applications',
        'iOS applications',
        'Cross-platform apps',
        'Customer apps',
        'Business applications',
        'Mobile dashboards',
      ],
      path: '/mobile-app-development',
    },
    {
      icon: Cpu,
      title: 'Custom Software Development',
      description:
        'Purpose-built software designed around your processes, requirements, and specific business challenges.',
      features: [
        'Business management systems',
        'CRM systems',
        'Inventory systems',
        'School management systems',
        'Workflow systems',
        'Enterprise applications',
      ],
      path: '/custom-software',
    },
    {
      icon: Bot,
      title: 'AI Integration & Automation',
      description:
        'Intelligent technologies that automate repetitive work, improve efficiency, and enhance business operations.',
      features: [
        'AI-powered applications',
        'AI chatbots',
        'Intelligent assistants',
        'Workflow automation',
        'Document processing',
        'AI business tools',
      ],
      path: '/ai-integration',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Growth',
      description:
        'Strategies that improve your online visibility, attract the right audience, and create sustainable digital growth.',
      features: [
        'Search engine optimization',
        'Local SEO',
        'Keyword strategy',
        'Content optimization',
        'Website performance',
        'Digital growth strategy',
      ],
      path: '/seo-digital-growth',
    },
    {
      icon: Paintbrush,
      title: 'Graphic Design',
      description:
        'Professional visual design that builds a consistent, recognizable, and credible brand presence.',
      features: [
        'Brand identity',
        'Logo design',
        'Marketing materials',
        'Social media graphics',
        'Business profiles',
        'Digital design assets',
      ],
      path: '/graphic-design',
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 md:py-28"
      style={{
        background: 'linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#E93930' }}>
                Services
              </p>
              <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight" style={{ color: '#0B2153' }}>
              The Full Range of What We Build
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
              From your first website to fully custom systems — everything is built around what your business actually needs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-7 flex flex-col transition-all duration-700 hover:-translate-y-1.5 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 90}ms`,
                  border: '1.5px solid rgba(11,33,83,0.15)',
                  boxShadow: '0 2px 10px rgba(11,33,83,0.05)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(11,33,83,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(11,33,83,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(11,33,83,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(11,33,83,0.15)';
                }}
              >
                {/* Icon box */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mb-5"
                  style={{ backgroundColor: '#0B2153' }}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold leading-snug mb-3" style={{ color: '#0B2153' }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Feature checklist */}
                <ul className="flex flex-col gap-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: '#0B2153' }}
                        strokeWidth={2}
                      />
                      <span className="text-sm text-gray-600 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-slate-200 mb-6" />

                {/* CTA — outlined, navy border */}
                <a
                  href={service.path}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm mt-auto transition-all duration-300"
                  style={{ border: '1.5px solid #0B2153', color: '#0B2153' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0B2153';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#0B2153';
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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