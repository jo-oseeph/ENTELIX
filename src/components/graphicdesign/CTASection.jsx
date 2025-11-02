// src/components/graphicdesign/CTASection.jsx
const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-950 to-red-700 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Create a <span className="text-red-300">Visual Identity</span> That Speaks for You
        </h2>
        <p className="text-gray-200 mb-8">
          Whether you're building a new brand or revamping your design system, we’ll help you make it unforgettable.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold shadow-md transition-transform duration-300 hover:-translate-y-1"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTASection;
