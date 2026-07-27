import { useEffect, useState } from "react";

// Entelix brand tokens
const NAVY = "#0B2153";
const NAVY_LIGHT = "#15316E";
const RED = "#E93930";
const IVORY = "#F4F5F7";
const SLATE = "#8C96B8";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative h-[55vh] md:h-[65vh] min-h-[340px] flex items-center justify-center text-center overflow-hidden"
      style={{ backgroundColor: NAVY }}
    >
      {/* Soft navy depth glow — no image, matches the main hero */}
      <div
        className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${NAVY_LIGHT} 0%, transparent 70%)`,
          filter: "blur(60px)",
          opacity: 0.55,
        }}
      />
      <div
        className="absolute -bottom-40 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${NAVY_LIGHT} 0%, transparent 70%)`,
          filter: "blur(70px)",
          opacity: 0.35,
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-8 max-w-3xl mx-auto flex flex-col items-center">
        <div
          className={`transition-all duration-1000 ease-out flex flex-col items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-4"
            style={{ color: RED, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Let's Talk
          </span>

          <h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: IVORY }}
          >
            Ready to Build Something{" "}
            <span style={{ color: SLATE }}>Solid?</span>
          </h1>

          <p
            className="text-base md:text-lg font-light leading-relaxed max-w-xl mb-6"
            style={{ color: SLATE }}
          >
            Tell us what's slowing your systems down — we'll tell you exactly
            how we'd fix it, and what it takes to ship it right.
          </p>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm" style={{ color: "rgba(244,245,247,0.5)" }}>
            <a href="/" className="hover:text-white transition-colors duration-200">
              Home
            </a>
            <span style={{ color: "rgba(244,245,247,0.3)" }}>/</span>
            <span style={{ color: RED }} className="font-medium">
              Contact Us
            </span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;