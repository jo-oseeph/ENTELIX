import { useEffect, useState } from "react";

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[65vh] min-h-[400px] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Gradient overlay (from the main Hero) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-950/60 to-red-600/40"></div>

      {/* Hero content */}
      <div className="relative z-10 px-6 sm:px-8 max-w-3xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 leading-tight">
            About Entelix
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed">
            Building Digital Solutions That Help Businesses Grow
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
