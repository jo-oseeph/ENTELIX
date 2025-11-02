const CtaSection = () => {
  return (
    <section className="relative bg-[#0B2153] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Bring Your App Idea to Life?
        </h2>
        <p className="text-gray-300 mb-6">
          Let’s collaborate to turn your concept into a functional mobile solution
          that drives growth and user engagement.
        </p>
        <button className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-semibold transition-transform duration-300 hover:scale-105">
          Let’s Build It
        </button>
      </div>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-800/40"></div>
    </section>
  );
};

export default CtaSection;
