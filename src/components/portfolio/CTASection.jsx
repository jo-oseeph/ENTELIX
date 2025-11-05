import React from "react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-bold text-blue-950 mb-3">Like what you see?</h3>
        <p className="text-gray-700 mb-6">Let’s build something great together.</p>
        <Link to="/contact" className="inline-block bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition">
          Get in touch
        </Link>
      </div>
    </section>
  );
};

export default CTASection;


