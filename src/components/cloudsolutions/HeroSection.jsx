import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[80vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2153]/90 via-[#0B2153]/80 to-[#a30000]/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Cloud Solutions
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Scalable, secure, and high-performance cloud infrastructure for modern businesses
        </p>
      </div>
    </section>
  );
};

export default HeroSection;