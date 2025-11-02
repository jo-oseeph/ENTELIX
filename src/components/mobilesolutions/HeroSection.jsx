// src/components/graphicdesign/HeroSection.jsx
const HeroSection = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-red-700/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
          Building Applications That Inspire 
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 animate-fadeInUp delay-200">
          We craft visual identities and digital assets that connect, inspire, and convert — turning ideas into powerful visual stories.
        </p>
        <a
          href="#services"
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
