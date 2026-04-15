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

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
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

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Image LEFT */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative group h-full">
              <div className="absolute -top-6 -right-6 w-full h-full bg-red-500/10 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-950/10 rounded-2xl -z-10"></div>

              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-full">
                <img
                  src="/hero-bg.jpg"
                  alt="Entelix Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content RIGHT */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="space-y-6 flex flex-col justify-between h-full">
              
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-bold text-blue-950">Entelix</span> helps businesses build scalable web, software, and cloud solutions that streamline operations and drive measurable growth. We combine strategy, design, and engineering to deliver high-performing digital products, with AI integrations that improve efficiency and support businesses at every stage.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '5+', label: 'Years Experience' },
                  { value: '500+', label: 'Projects' },
                  { value: '200+', label: 'Clients' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center bg-white rounded-xl py-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-[#FF4D4D]">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-blue-950 font-medium mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="pt-4">
                <button
                  onClick={handleLearnMore}
                  className="group relative inline-flex items-center gap-2 px-8 py-4 text-white font-bold text-sm uppercase tracking-wider rounded-full bg-[#FF4D4D] hover:bg-[#E63946] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E63946] to-[#FF4D4D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;