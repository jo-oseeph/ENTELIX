import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Expert Team",
      description: "Our developers have years of experience in mobile app development.",
      icon: "👥"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing ensures your app performs perfectly on all devices.",
      icon: "✅"
    },
    {
      title: "Timely Delivery",
      description: "We deliver projects on time and within budget.",
      icon: "⏰"
    },
    {
      title: "Ongoing Support",
      description: "Dedicated support team available for maintenance and updates.",
      icon: "🤝"
    },
    {
      title: "Latest Technology",
      description: "We use the latest frameworks and tools for optimal performance.",
      icon: "⚡"
    },
    {
      title: "Cost Effective",
      description: "Get premium quality apps at competitive prices in Kenya.",
      icon: "💰"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ENTELIX?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
