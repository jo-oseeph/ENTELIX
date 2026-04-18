import React from "react";

const ApproachSection = () => {
  const steps = [
    {
      step: "1",
      title: "Discovery",
      description: "Understand your requirements, target audience, and business goals."
    },
    {
      step: "2",
      title: "Design",
      description: "Create intuitive UI/UX designs that users will love."
    },
    {
      step: "3",
      title: "Development",
      description: "Build your app using cutting-edge mobile technologies."
    },
    {
      step: "4",
      title: "Testing",
      description: "Rigorous testing across devices and platforms for quality assurance."
    },
    {
      step: "5",
      title: "Launch",
      description: "Deploy your app to App Store and Google Play successfully."
    },
    {
      step: "6",
      title: "Support",
      description: "Ongoing maintenance and updates for long-term success."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Approach</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
