import { useEffect, useRef, useState } from "react";
import { Command, Star, Rocket, Sparkles, Zap } from "lucide-react";

const serviceCategories = [
  {
    icon: Command,
    color: "bg-red-500",
    title: "Web & Software Development",
    description:
      "We create responsive websites and custom software solutions tailored to your business goals. Our builds are fast, secure, and scalable, designed to grow as you do.",
    services: [
      // "Process automation",
      // "Custom CRM & ERP",
      // "Data architecture & analytics",
    ],
  },
  {
    icon: Sparkles,
    color: "bg-blue-600",
    title: "Brand & Visual Design",
    description:
      "Your brand deserves visuals that stand out. From logo design to full identity systems, we help businesses express who they are with clarity and style.",
    services: [
      // "E-commerce systems",
      // "Web portals & SaaS",
      // "API development & integrations",
    ],
  },
  {
    icon: Zap,
    color: "bg-green-500",
    title: "Cloud & Integration",
    description:
      "Enhance efficiency with reliable cloud infrastructure and system integrations. We ensure your data, tools, and platforms work seamlessly together.",
    services: [
      // "React Native apps",
      // "Enterprise mobility",
      // "IoT-enabled systems",
    ],
  },
  // {
  //   icon: Star,
  //   color: "bg-purple-600",
  //   title: "SEO & Digital Marketing",
  //   description:
  //     "Visibility fuels growth. We optimize your online presence through data-driven SEO strategies, targeted campaigns, and performance analytics that convert.",
  //   services: [
  //     // "Visual identity & logo", "UX/UI design systems", "Brand documentation"
  //   ]
  //     ,
  // },
  // {
  //   icon: Rocket,
  //   color: "bg-yellow-500",
  //   title: "Web Development",
  //   description:
  //     "We build fast, scalable websites and web apps with precision. Every line of code focuses on performance, security, and clean design.",
  //   services: ["Responsive design", "Performance optimization", "Security implementation"],
  // },
  {
    icon: Command,
    color: "bg-pink-500",
    title: "SEO & Marketing",
    description:
      "We engineer visibility through technical SEO, content strategy, and analytics. The goal: reach your audience, rank higher, and convert effectively.",
    services: [
      // "Technical SEO audit", "Content strategy", "Analytics & reporting"
    ]
      ,
  },
];

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="mb-16">
          <p
            className={`text-red-500 font-bold text-sm uppercase tracking-wider mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
             What We Do 
          </p>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          >
            Our Services
          </h2>
          <div
            className={`mt-4 w-24 h-1 bg-red-500 mx-auto transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
          ></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl border border-gray-200 border-t-2 border-t-red-500 shadow-sm p-6 text-left transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-10" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-blue-950 font-bold text-lg mb-2">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-3">{service.description}</p>

                {/* Numbered List of services */}
                <ol className="text-gray-700 list-decimal list-inside space-y-1 text-sm mb-4">
                  {service.services.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>

                {/* Learn More button */}
                <button className="text-red-500 font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
