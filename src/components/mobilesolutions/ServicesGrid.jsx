import React from "react";

const ServicesGrid = () => {
  const services = [
    {
      title: "Native iOS Apps",
      description: "Build high-performance iOS applications using Swift and latest Apple technologies.",
      icon: "📱"
    },
    {
      title: "Native Android Apps",
      description: "Create robust Android applications with Kotlin and native Android frameworks.",
      icon: "🤖"
    },
    {
      title: "Cross-Platform Solutions",
      description: "Develop apps for multiple platforms with React Native and Flutter.",
      icon: "🔄"
    },
    {
      title: "App Maintenance",
      description: "Keep your apps updated with latest features, security patches, and support.",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
