// src/components/graphicdesign/ApproachSection.jsx
import { Lightbulb, Pencil, Package, HeartHandshake } from "lucide-react";

const ApproachSection = () => {
  const steps = [
    { icon: Lightbulb, title: "Discover", text: "We explore your goals, audience, and brand personality to align vision with results." },
    { icon: Pencil, title: "Design", text: "Our team transforms ideas into visuals — clean, creative, and on-brand every time." },
    { icon: Package, title: "Deliver", text: "We provide polished assets optimized for web, print, and digital channels." },
    { icon: HeartHandshake, title: "Support", text: "We continue improving and refining to ensure your brand stays relevant." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
          Our <span className="text-red-600">Design Approach</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A simple, collaborative process that blends creativity with purpose to deliver lasting impact.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-50 rounded-full">
                    <Icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
