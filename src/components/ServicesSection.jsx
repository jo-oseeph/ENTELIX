import { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Cloud, 
  Palette, 
  Smartphone, 
  ShoppingCart, 
  BarChart
} from 'lucide-react';
import ServiceCard from './ServicesCard';
import { Link } from "react-router-dom";


const ServicesSection = () => {
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

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies. Responsive, fast, and scalable solutions tailored to your business needs.',
      path: '/software-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure solutions tailored to your business needs. Migrate, manage, and optimize your cloud environment.',
    
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative and professional design services for your brand. From logos to marketing materials, we bring your vision to life.',
      path: '/graphic-design'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android. User-friendly interfaces with seamless performance.',
        path: '/mobile-solutions'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete online store solutions with payment integration, inventory management, and customer analytics for your business.',
    },
    {
      icon: BarChart,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence. SEO, social media management, and content marketing services.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gray-50">
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