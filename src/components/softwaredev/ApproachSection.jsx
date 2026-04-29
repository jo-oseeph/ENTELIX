import { Info, Code, CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: Info,
      step: "Step 01",
      title: "Discovery & Planning",
      description: "We define your goals, audience, and scope, producing a clear roadmap before any work begins."
    },
    {
      icon: Code,
      step: "Step 02",
      title: "Design & Development",
      description: "Our team delivers clean, scalable solutions, built with modern tools and structured for long-term growth."
    },
    {
      icon: CheckCircle,
      step: "Step 03",
      title: "Testing & Launch",
      description: "Rigorous QA, performance checks, and a structured deployment, so your product goes live without surprises."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Process</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A clear, structured workflow, from first brief to final launch.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-t-red-500 text-left"
              >
                <span className="absolute top-5 right-5 text-xs font-bold tracking-widest text-red-500 uppercase">
                  {step.step}
                </span>
                <div className="inline-flex items-center justify-center w-14 h-14 bg-red-50 rounded-xl mb-6">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-lg font-bold text-blue-950 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;