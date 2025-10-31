import { useEffect, useRef, useState } from "react";
import { Target, Eye, Heart } from "lucide-react"; // for icons

const AboutMissionValues = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const pillars = [
    {
      icon: <Target className="w-8 h-8 text-red-500 mb-4" />,
      title: "Our Mission",
      text: "To empower businesses and communities through innovative digital solutions that drive growth, efficiency, and impact.",
    },
    {
      icon: <Eye className="w-8 h-8 text-blue-950 mb-4" />,
      title: "Our Vision",
      text: "To be Africa’s leading digital transformation partner, enabling a tech-driven future where organizations thrive with confidence.",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500 mb-4" />,
      title: "Our Core Values",
      text: "Innovation, Integrity, and Collaboration — the principles that guide how we work and deliver value to our clients.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Mission, Vision & Core Values
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            What drives Entelix to deliver meaningful, long-lasting digital
            transformation for every client we serve.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl bg-white shadow-md border transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {pillar.icon}
                <h4 className="text-xl font-semibold text-blue-950 mb-3">
                  {pillar.title}
                </h4>
                <p className="text-gray-700">{pillar.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMissionValues;
