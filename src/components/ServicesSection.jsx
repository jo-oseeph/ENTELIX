import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Palette, BarChart, Users } from 'lucide-react';
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
    title: 'Software Development',
    description: 'We build custom software, web applications, eCommerce platforms, and mobile apps designed to solve real business problems and scale with growth. AI integrations are included to automate processes and enhance performance.',
    path: '/software-development'
  },
  
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'We create clean, impactful visuals and brand identities that communicate clearly and position your business to stand out in competitive markets.',
    path: '/graphic-design'
  },
  {
    icon: BarChart,
    title: 'SEO & Digital Marketing',
    description: 'We grow your visibility and drive results through targeted SEO strategies, data-driven campaigns, and performance-focused marketing.',
    path: '/digital-marketing'
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions to transform your business and drive innovation.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;