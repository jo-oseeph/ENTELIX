import { useEffect, useState } from "react";

const PricingHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white mt-12 mb-4">
            Investment
          </p>

          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            Invest in the Right Technology
          </h1>

          {/* Description */}
          <p className="text-white/60 text-sm sm:text-base leading-relaxed max-w-xl">
            Clear pricing for digital solutions built around your goals,
            requirements, and stage of growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;