import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[55vh] md:h-[65vh] min-h-[340px] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-950/60 to-red-600/40"></div>

      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-8 max-w-3xl mx-auto flex flex-col items-center">
        <div
          className={`transition-all duration-1000 ease-out flex flex-col items-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
            ABOUT US
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50">
            <a href="/" className="hover:text-white transition-colors duration-200">Home</a>
            <span className="text-white/30">/</span>
            <span className="text-[#E93930] font-medium">About Us</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;