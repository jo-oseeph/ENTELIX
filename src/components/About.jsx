import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
                <span className="font-bold text-blue-950">Entelix</span> is the
                leading digital solutions provider in Kenya. We are passionate
                about helping businesses in retail, finance, health, and
                corporate industries fully leverage the latest{' '}
                <span className="text-red-500 font-semibold">
                  software technologies
                </span>
                .
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                As a top digital services company, our tech team is dedicated to
                creating solutions that meet your exact needs because we pride
                ourselves on being the best in the industry.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                We build corporate business websites and ecommerce platforms for
                all kinds of businesses. Our services include responsive website
                design, ecommerce development, mobile app development, website
                maintenance, SEO, social media management, and many more.
              </p>
            </div>
          </div>

          {/* Right Image (replaces stats) */}
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
                <p className="text-4xl font-bold">5+</p>
                <p className="text-sm font-semibold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
