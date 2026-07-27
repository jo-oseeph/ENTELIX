import { useEffect, useState } from "react";

// Entelix brand tokens
const NAVY = "#0B2153";
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
      className="relative py-24 md:py-32 flex items-center justify-center text-center border-b"
      style={{ backgroundColor: NAVY, borderColor: "rgba(244,245,247,0.06)" }}
    >
      <div className="relative z-10 px-6 sm:px-8 max-w-xl mx-auto flex flex-col items-center">
        <div
          className={`transition-all duration-700 ease-out flex flex-col items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >

          {/* Heading */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-5 leading-[1.15] tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: IVORY }}
          >
            Ready to build something solid?
          </h1>

          {/* Supporting copy */}
          <p
            className="text-base md:text-lg font-light leading-relaxed max-w-sm lg:max-w-none lg:whitespace-nowrap"
            style={{ color: SLATE }}
          >
            Lets discuss how we can bring your idea to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;