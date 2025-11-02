import { Smartphone, Layers, ShoppingBag, Wrench, Shield } from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Custom Mobile App Development",
    description:
      "Tailored apps built for performance, scalability, and a seamless user experience.",
  },
  {
    icon: Layers,
    title: "Cross-Platform App Development",
    description:
      "Build once, deploy everywhere — efficient, modern, and cost-effective solutions.",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Apps",
    description:
      "Empowering your business with engaging mobile shopping experiences.",
  },
  {
    icon: Wrench,
    title: "App Maintenance & Optimization",
    description:
      "Keep your app running smoothly with updates and performance tuning.",
  },
  {
    icon: Shield,
    title: "App Security & Compliance",
    description:
      "Ensure user data safety and meet global standards for security and privacy.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left - Services List */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-[#0B2153] mb-6">
            Our Mobile Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const { icon: Icon, title, description } = service;
              return (
                <div
                  key={i}
                  className="bg-gray-50 hover:bg-red-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon className="text-red-600 mb-3 w-8 h-8" />
                  <h3 className="text-lg font-semibold text-[#0B2153] mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - Intro */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-red-600 uppercase tracking-wider">// Mobile App Solutions //</p>
          <h2 className="text-4xl font-bold text-[#0B2153] leading-snug">
            Empowering Businesses Through Mobile Innovation
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We build intuitive, secure, and scalable mobile apps that help your business
            connect with users seamlessly. Our designs focus on usability, performance,
            and brand consistency to keep users engaged and returning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
