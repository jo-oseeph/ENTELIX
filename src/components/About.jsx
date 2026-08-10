import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AboutIntro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const handleLearnMore = () => {
    window.location.href = "/about";
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image LEFT — flush, no padding, no decoration */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              
                 <img
                  src="/hero1.jpg"
                  alt="Entelix Team"
                className="w-full h-[400px] md:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Content RIGHT — title + copy together */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            }`}
          >
            <div className="space-y-6">
              <p
                className="text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "#E93930" }}
              >
                — Who We Are —
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight" style={{ color: "#0B2153" }}>
                Technology With Purpose
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Entelix designs and builds digital systems for businesses across
                Kenya and beyond — from lean startups to established
                enterprises. We work closely with every client to understand
                the problem first, then build software shaped around how the
                business actually runs. That focus on fit over flash is what
                sets our work apart.
              </p>

              {/* Optional stats — light touch, not a focal point */}
              <div className="flex items-center gap-8 flex-wrap pt-1">
                {[
                  { value: "3+", label: "Years Experience" },
                  { value: "20+", label: "Projects" },
                  { value: "100+", label: "Clients" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-baseline gap-2">
                    <span className="text-lg font-bold" style={{ color: "#0B2153" }}>
                      {stat.value}
                    </span>
                    <span className="text-sm text-gray-500">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Button — outlined, matches Services section style */}
              <div className="pt-2">
                <button
                  onClick={handleLearnMore}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm border transition-all duration-300"
                  style={{ borderColor: "#0B2153", color: "#0B2153", backgroundColor: "transparent" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0B2153";
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#0B2153";
                  }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
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