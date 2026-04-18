import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Mobile App Development</h1>
          <p className="text-xl mb-8 text-blue-100">
            Create powerful mobile experiences with custom iOS and Android apps built by our expert team in Kenya.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
