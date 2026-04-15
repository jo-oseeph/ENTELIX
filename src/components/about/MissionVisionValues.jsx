import { useEffect, useRef, useState } from "react";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    number: "01",
    title: "Our Mission",
    text: "To empower businesses and communities through innovative digital solutions that drive growth, efficiency, and lasting impact.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Our Vision",
    text: "To be Africa's leading digital transformation partner, enabling a tech-driven future where organizations thrive with confidence.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Our Core Values",
    text: "Innovation, Integrity, and Collaboration, the principles that guide how we work and deliver value to our clients every day.",
  },
];

const AboutMissionValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-red-500 mb-3">
            Who we are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
            Mission, Vision & Core Values
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            What drives Entelix to deliver meaningful, long-lasting digital
            transformation for every client we serve.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, number, title, text }, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 border border-gray-200 border-t-[3px] border-t-red-500
                hover:shadow-lg transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-red-500" strokeWidth={2} />
              </div>

              {/* Number */}
              <p className="text-xs font-bold tracking-widest text-gray-300 uppercase mb-2">
                {number}
              </p>

              {/* Title */}
              <h3 className="text-lg font-bold text-blue-950 mb-3">{title}</h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-red-500 rounded mb-4" />

              {/* Text */}
              <p className="text-sm text-gray-500 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMissionValues;