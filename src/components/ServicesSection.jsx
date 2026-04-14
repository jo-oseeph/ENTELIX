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
      description: 'We design and build custom software systems that solve real business problems. From scalable web applications and eCommerce platforms to high-performance mobile apps, every solution is engineered for speed, security, and growth. We also integrate AI capabilities to automate workflows, enhance decision-making, and give your business a competitive edge.',
      offerings: [
        'Custom Software Development',
        'Web Application Development',
        'eCommerce Development',
        'Mobile App Development',
        'API Development & Integration',
        'AI Integrations'
      ],
      path: '/software-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'We help businesses leverage cloud infrastructure to improve performance, reduce costs, and scale efficiently. From migration to optimization, we ensure your systems remain reliable, secure, and future-ready.',
      offerings: [
        'Cloud Migration',
        'Infrastructure Setup',
        'Cloud Optimization',
        'DevOps & CI/CD',
        'Security & Monitoring'
      ],
      path: '/cloud-solutions'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'We create visual identities that communicate clearly and leave a lasting impression. Every design decision is intentional, aligned with your brand, and built to stand out in competitive markets.',
      offerings: [
        'Logo Design',
        'Brand Identity Systems',
        'Marketing Materials',
        'Social Media Graphics',
        'UI/UX Design'
      ],
      path: '/graphic-design'
    },
    {
      icon: BarChart,
      title: 'SEO & Digital Marketing',
      description: 'We drive measurable growth by positioning your business where it matters most. Through strategic SEO, targeted campaigns, and performance tracking, we turn visibility into consistent results.',
      offerings: [
        'Search Engine Optimization (SEO)',
        'Content Strategy',
        'Paid Advertising (PPC)',
        'Social Media Marketing',
        'Analytics & Reporting'
      ],
      path: '/digital-marketing'
    },
    {
      icon: Users,
      title: 'Consultation Services',
      description: 'We provide strategic guidance to help you make smarter technology decisions. Whether you are planning a new product or optimizing an existing system, we align your tech with your business goals.',
      offerings: [
        'Technical Consulting',
        'Product Strategy',
        'System Architecture Planning',
        'Digital Transformation',
        'AI Strategy & Advisory'
      ],
      path: '/consultation-services'
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