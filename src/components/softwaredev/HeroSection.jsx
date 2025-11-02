import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[80vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')", // put your image in public/images
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2153]/90 via-[#0B2153]/80 to-[#a30000]/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Software Development Services
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Empowering businesses with intelligent, secure, and scalable software solutions.
        </p>

        <div>
          <a
            href="#contact" // anchors to contact section on same page or /contact if different page
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
