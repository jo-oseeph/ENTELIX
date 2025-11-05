import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setFadeIn(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative h-[55vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #05255Dcc, #E93930cc), url('/hero-bg.jpg') center/cover no-repeat",
      }}
    >
      <div
        className={`transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Contact <span className="text-red-400">Entelix</span>
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mx-auto">
          Let’s talk about your goals and how we can help deliver real impact.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
