import { useEffect, useRef, useState } from 'react';

const WhyChooseUs = () => {
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

  const features = [
    {
      title: 'Client-Centered Approach',
      description: 'Every project begins with your goals, not our assumptions.',
      delay: '0'
    },
    {
      title: 'Skilled & Passionate Team',
      description: 'A team that codes, designs, and innovates with intent.',
      delay: '100'
    },
    {
      title: 'End-to-End Solutions',
      description: 'From concept to maintenance, we deliver complete digital experiences.',
      delay: '200'
    },
    {
      title: 'Results that Matter',
      description: 'We focus on measurable growth, not just visual appeal.',
      delay: '300'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-blue-950 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-3">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What Sets Us Apart
            </h2>
            <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="relative h-full bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-red-500/20">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-red-500 to-transparent group-hover:h-full transition-all duration-500 rounded-tl-2xl"></div>
                
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-950 group-hover:text-red-500 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-red-500/5 rounded-tl-full group-hover:w-32 group-hover:h-32 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div
          className={`text-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;