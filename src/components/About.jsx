import { useEffect, useRef, useState } from 'react';

const AboutIntro = () => {
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

  const handleLearnMore = () => {
    window.location.href = '/about';
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-red-500 font-bold text-sm uppercase tracking-wider mb-3">
              ABOUT US
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
              Digital Solutions Experts
            </h2>
            <div className="mt-4 w-24 h-1 bg-red-500 mx-auto"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-blue-950">Entelix</span> is a software development company dedicated to helping startups and growing brands transform their ideas into digital solutions that drive measurable impact. We design and develop scalable websites, software systems, and cloud-based platforms that simplify business operations and create real value for{' '}
                <span className="text-red-500 font-semibold">
                   clients
                </span>
                .
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
               Our team blends creativity, strategy, and technical precision to deliver user-focused digital products that strengthen brands and accelerate growth. Whether it's web development, integration, design, or marketing, we focus on solutions that help businesses evolve confidently in the digital era.
              </p>

              {/* Learn More Button */}
              <div className="pt-4">
                <button
                  onClick={handleLearnMore}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full bg-[#FF4D4D] hover:bg-[#E63946] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Learn More About Us</span>
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E63946] to-[#FF4D4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="relative group">
              {/* Background accents */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-red-500/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-950/10 rounded-2xl -z-10"></div>

              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/hero-bg.jpg"
                  alt="Entelix Team"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent"></div>
              </div>

              {/* Accent badge */}
              <div className="absolute -bottom-8 -left-8 bg-red-500 text-white p-6 rounded-xl shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300">
                <p className="text-4xl font-bold">3+</p>
                <p className="text-sm font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;