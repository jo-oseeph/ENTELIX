import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Paintbrush, BarChart, Settings, Users, ArrowRight } from 'lucide-react';
import ServiceCard from './ServicesCard';

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
  description: 'From landing pages to full web applications, we build fast, modern websites designed to perform, convert, and deliver seamless experiences on every device',
  path: '/web-development'
},
     {
  icon: Paintbrush,
  title: 'Graphic Design',
  description: 'We create clean, modern brand identities and visuals that build trust and make your business stand out.',
  path: '/graphic-design'
},
    {
    icon: Settings,
    title: 'Website Management',
    description: 'Ongoing support, maintenance, updates, and performance monitoring to keep your website secure, up-to-date, and running smoothly at all times.',
    path: '/website-management'
  },
    {
      icon: Users,
      title: 'Consultation Services',
      description: 'We provide expert guidance to help you plan, build, and optimize digital solutions, including AI strategy aligned with your business goals.',
      path: '/consultation-services'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'We design and manage cloud infrastructure that improves performance, reduces costs, and ensures your systems are secure, scalable, and reliable.',
      path: '/cloud-solutions'
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-3">
              SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
              Our Services
            </h2>
              <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4">
              Comprehensive technology solutions to transform your business and drive innovation.
            </p>
          </div>
        </div>

        {/* Services Grid (ONLY 3) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
        <button
  onClick={() => (window.location.href = '/services')}
  className="inline-flex items-center gap-2 px-8 py-4 bg-[#E93930] text-white font-bold text-sm uppercase tracking-wider rounded-full hover:bg-[#E93930] transition-all duration-300 hover:scale-105 hover:shadow-lg"
>
  View More
  <ArrowRight className="w-4 h-4 text-white" />
</button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;