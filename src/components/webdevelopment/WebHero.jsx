import React from "react";

const WebHero = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-[55vh] md:h-[80vh] bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2153]/90 via-[#0B2153]/80 to-[#a30000]/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-3 md:mb-4">
          Web Development
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-4 md:mb-6">
          Empowering businesses with fast, secure, and scalable web solutions.
        </p>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm md:text-sm text-white/50">
          <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
          <span className="text-white/30">/</span>
          <a href="/services" className="hover:text-white transition-colors duration-200">Services</a>
          <span className="text-white/30">/</span>
          <span className="text-[#E93930] font-medium">Web Development</span>
        </nav>
      </div>
    </section>
  );
};

export default WebHero;