import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // simple on-mount animation: add visible classes
    const el = containerRef.current;
    if (!el) return;
    requestAnimationFrame(() => {
      el.classList.remove("opacity-0", "translate-y-6");
      el.classList.add("opacity-100", "translate-y-0");
    });
  }, []);

  return (
    <section
      className="relative h-[72vh] flex items-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* left->right overlay (red -> midnight blue) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/80 to-[#0B2153]/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div
          ref={containerRef}
          className="max-w-3xl text-left text-white opacity-0 translate-y-6 transition-all duration-700"
        >
          <p className="text-red-200 uppercase tracking-widest text-sm mb-4">// Digital Marketing //</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Grow Visibility. Drive Conversions. Build Trust.
          </h1>
          <p className="text-gray-100 mb-6">
            Data-driven marketing that turns traffic into customers. SEO, content
            strategy, social media and paid campaigns built to deliver measurable growth.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-[#0B2153] font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            Let’s Grow Your Brand
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
