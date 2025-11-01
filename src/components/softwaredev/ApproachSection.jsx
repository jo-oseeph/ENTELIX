import { Lightbulb, Code, Rocket } from 'lucide-react';

const ApproachSection = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Planning",
      description: "We begin by understanding your goals, challenges, and requirements to craft a clear, actionable strategy."
    },
    {
      icon: Code,
      title: "Design & Development",
      description: "Our team builds clean, responsive, and scalable solutions using modern tools and technologies."
    },
    {
      icon: Rocket,
      title: "Testing & Deployment",
      description: "We rigorously test, optimize, and launch your product — ensuring a smooth and reliable experience."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Approach</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A streamlined process built for efficiency, quality, and innovation.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-t-red-500"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-xl mb-6">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
