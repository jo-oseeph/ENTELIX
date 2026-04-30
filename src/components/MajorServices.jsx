import { useEffect, useRef, useState } from 'react';
import { Code, Cloud, Layout, BarChart, Users, Settings } from 'lucide-react';
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
  icon: Layout,
  title: 'Branding & Design',
  description: 'We create clean, modern brand identities and visual systems that build trust and make your business stand out.',
  path: '/branding-design'
},
  {
    icon: Settings,
    title: 'Website Management',
    description: 'Ongoing support, maintenance, updates, and performance monitoring to keep your website secure, up-to-date, and running smoothly at all times.',
    path: '/website-management'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'We design and manage cloud infrastructure that improves performance, reduces costs, and ensures your systems are secure, scalable, and reliable.',
    path: '/cloud-solutions'
  },
    {
  icon: Code,
  title: 'Software Development',
  description: 'We build scalable software systems that automate processes, improve efficiency, and support long-term business growth.',
  path: '/software-development'
}
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