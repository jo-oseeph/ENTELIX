import { useEffect, useRef, useState } from "react";
import { Target, Eye } from "lucide-react";

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

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: "#E93930" }} />
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: "#E93930" }}>
              About Entelix
            </p>
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: "#E93930" }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight" style={{ color: "#0B2153" }}>
            The Story Behind Us
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — story text */}
          <div
            className={`space-y-12 transition-all duration-700 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: "#E93930" }}
              >
                Overview
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#0B2153" }}>
                Who We Are
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                ENTELIX is a software development company focused on building
                practical digital solutions for modern businesses. We design
                and develop web applications, mobile apps, and custom software
                that help organizations solve operational challenges, improve
                efficiency, and deliver better experiences to their customers.
              </p>
            </div>

            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-2"
                style={{ color: "#E93930" }}
              >
                Our Origin
              </p>
              <h3 className="text-xl md:text-2xl font-bold mb-4" style={{ color: "#0B2153" }}>
                Why We Exist
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                ENTELIX was founded to bridge the gap between business needs
                and technology. Too many businesses struggle with systems that
                are expensive, inflexible, or poorly suited to how they
                operate. We started ENTELIX to build technology around the
                business, creating reliable and scalable solutions that solve
                real problems and support long-term growth.
              </p>
            </div>
          </div>

          {/* Right — Mission & Vision cards */}
          <div
            className={`space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            {/* Mission card — light background */}
            <div
              className="rounded-2xl p-8 md:p-10 border border-slate-200/70"
              style={{
                background: "linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "#0B2153" }}
              >
                <Target className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#E93930" }}
              >
                Our Mission
              </p>
              <p className="text-base md:text-lg font-normal leading-relaxed" style={{ color: "#0B2153" }}>
                To build practical, reliable software that helps businesses
                operate better and grow with confidence.
              </p>
            </div>

            {/* Vision card — bluish/navy background */}
            <div
              className="rounded-2xl p-8 md:p-10"
              style={{
                background: "linear-gradient(160deg, #0B2153 0%, #12336e 55%, #0B2153 100%)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <Eye className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] mb-3"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Our Vision
              </p>
               <p className="text-white text-base md:text-lg font-normal leading-relaxed">
                To be the technology partner businesses turn to for solutions
                that actually fit the way they work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;