import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="w-full bg-linear-to-r from-[#E63946] via-[#C71F37] to-[#0B2153] text-white py-20 px-6 relative overflow-hidden">
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-center md:text-left gap-6">
        {/* Text Content */}
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Ready to transform your ideas into powerful digital solutions?
          </h2>
          <p className="text-lg opacity-90">
            Let’s build something extraordinary together.
          </p>
        </div>

        {/* Call to Action Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-[#E63946] font-semibold px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-[#E63946] hover:text-white"
        >
          Start Your Project
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
