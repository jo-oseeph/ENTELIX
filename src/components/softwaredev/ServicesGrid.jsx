import { Globe, Smartphone, Layers, Cpu } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, scalable, and high-performance web applications."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Beautiful, functional mobile apps for Android and iOS."
    },
    {
      icon: Layers,
      title: "UI/UX Design",
      description: "User-focused designs that blend creativity with usability."
    },
    {
      icon: Cpu,
      title: "API Integration",
      description: "Reliable backend systems and seamless API integrations."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          A full range of digital services designed to bring your ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-500 shadow-md"
              >
                <Icon className="w-10 h-10 mx-auto mb-4 text-red-500 group-hover:text-white" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
