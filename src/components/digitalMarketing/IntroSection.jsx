import React from "react";

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: short text */}
        <div>
          <h2 className="text-3xl font-bold text-[#0B2153] mb-4">
            Why Digital Marketing Matters
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A great product needs an audience. We combine SEO, content, social media and paid strategies
            to increase qualified traffic, improve conversions, and build long-term brand authority.
            Every tactic is measurable and aligned to your business goals.
          </p>
        </div>

        {/* Right: small visual / bullets */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>
            <div>
              <h4 className="font-semibold text-[#0B2153]">Audience-first strategies</h4>
              <p className="text-gray-600 text-sm">We target users who convert, not just clicks.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>
            <div>
              <h4 className="font-semibold text-[#0B2153]">Measurable results</h4>
              <p className="text-gray-600 text-sm">KPIs and dashboards so you always know performance.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>
            <div>
              <h4 className="font-semibold text-[#0B2153]">Integrated approach</h4>
              <p className="text-gray-600 text-sm">SEO, content, social and ads aligned to one growth plan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
