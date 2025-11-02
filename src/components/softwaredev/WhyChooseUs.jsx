import { ShieldCheck, Users, Zap } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Reliable & Secure",
      text: "We deliver dependable and secure software solutions you can trust."
    },
    {
      icon: Users,
      title: "Expert Team",
      text: "Our developers bring years of experience and passion to every project."
    },
    {
      icon: Zap,
      title: "Agile Delivery",
      text: "Quick iterations, transparent communication, and fast deployment."
    }
  ];

  return (
    <section className="py-20 bg-blue-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
          Your success drives everything we build.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="p-8 bg-blue-900/50 rounded-2xl hover:bg-red-600 transition-all duration-500"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-200">{reason.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
