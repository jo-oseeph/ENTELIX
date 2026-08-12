import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const ServicesHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const SLATE = "#8C96B8";

  return (
    <section
      className="relative flex items-center justify-center text-center overflow-hidden py-16 sm:py-20 md:py-24"
      style={{
        background: "linear-gradient(160deg, #0B2153 0%, #0e2861 55%, #0B2153 100%)",
      }}
    >
      {/* Subtle glow accents */}
      <div
        className="absolute top-0 right-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(233,57,48,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)" }}
      />

      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-8 max-w-2xl mx-auto flex flex-col items-center">
        <div
          className={`transition-all duration-1000 ease-out flex flex-col items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Small eyebrow title */}
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300 mt-12 mb-4"  style={{
              color: SLATE,
              fontFamily: "sans-serif",
            }}>
            Our Services
          </p>

          {/* Big, non-generic title */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            Practical Software for Real Business Problems
          </h1>

          {/* Brief description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
            We design and build web, mobile, and custom software solutions
            that help businesses operate smarter and grow with confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white transition-all duration-300"
              style={{ backgroundColor: "#E93930" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c92f28")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E93930")}
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white border transition-all duration-300"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
              }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;