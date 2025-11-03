import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-fadeInUp");
      });
    });
    document.querySelectorAll(".fade-element").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section
      className="relative bg-gradient-to-br from-[#0B2153]/90 via-[#0B2153]/80 to-[#E63946]/70 text-white py-32 px-6 flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="max-w-3xl mx-auto fade-element opacity-0 translate-y-10 transition-all duration-1000">
        <p className="uppercase tracking-widest text-red-300 mb-4">// Cloud Solutions //</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Scale, Secure, and Simplify with Cloud Innovation
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Empower your business with reliable, scalable, and cost-efficient cloud services that grow with you.
        </p>
        <a
          href="#contact"
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
        >
          Get a Free Consultation
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
