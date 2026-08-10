import { useEffect, useRef, useState } from 'react';
import { Puzzle, Zap, MessagesSquare, Headphones } from 'lucide-react';

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
      icon: Puzzle,
      title: 'Built Around Your Needs',
      description:
        'Solutions are tailored to your goals, workflows, and users instead of forcing your business into a generic system.',
      delay: '0',
    },
    {
      icon: Zap,
      title: 'Reliable & Scalable',
      description:
        'Your software is built to perform reliably today while giving your business room to grow tomorrow.',
      delay: '100',
    },
    {
      icon: MessagesSquare,
      title: 'Clear Communication',
      description:
        'You stay informed throughout the project with clear updates, timelines, and decisions at every stage.',
      delay: '200',
    },
    {
      icon: Headphones,
      title: 'Long-Term Support',
      description:
        "Our relationship doesn't end at launch. You get continued support to keep your solution running, secure, and effective.",
      delay: '300',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
              <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#E93930' }}>
                Why Choose Us
              </p>
              <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight max-w-2xl mx-auto" style={{ color: '#0B2153' }}>
             Built With Purpose
            </h2>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${feature.delay}ms` }}
              >
                <div
                  className="group flex items-start gap-5 h-full bg-white/70 backdrop-blur-sm rounded-2xl p-7 border border-slate-200/70 transition-all duration-500 hover:-translate-y-1.5"
                  style={{ boxShadow: '0 2px 10px rgba(11,33,83,0.05)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(11,33,83,0.12)';
                    e.currentTarget.style.borderColor = 'rgba(233,57,48,0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(11,33,83,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(226,232,240,0.7)';
                  }}
                >
                  {/* Icon box */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundColor: '#0B2153' }}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 leading-snug" style={{ color: '#0B2153' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;