import React from "react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0B2153] to-[#E63946] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready to Scale Your Online Presence?</h3>
        <p className="text-gray-100 mb-6">
          Tell us about your goals and we’ll propose a tailored marketing plan to grow traffic and revenue.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#0B2153] font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
        >
          Get a Free Strategy Call
        </a>
      </div>
    </section>
  );
};

export default CTASection;
