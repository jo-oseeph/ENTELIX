import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutCTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#E93930] text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 text-center lg:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-white/85 text-sm md:text-base max-w-xl">
            Let's build something tailored to your needs.
          </p>
        </div>

        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 bg-white text-[#0B2153] font-semibold py-3 px-7 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 flex-shrink-0"
        >
          Get in Touch
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

export default AboutCTASection;