import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Startup",
      price: "$10,000",
      features: ["Single platform", "Basic features", "3 months support", "Up to 2 revisions"]
    },
    {
      name: "Standard",
      price: "$20,000",
      features: ["iOS & Android", "Advanced features", "6 months support", "Unlimited revisions"],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Custom solution", "All features", "12+ months support", "Dedicated team"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md p-8 transition-transform hover:scale-105 ${
                plan.recommended ? "bg-blue-600 text-white ring-2 ring-blue-600 transform scale-105" : "bg-white"
              }`}
            >
              {plan.recommended && <span className="bg-yellow-400 text-blue-600 px-3 py-1 rounded text-sm font-bold">Recommended</span>}
              <h3 className={`text-2xl font-bold mt-4 ${plan.recommended ? "text-white" : "text-blue-600"}`}>{plan.name}</h3>
              <div className="text-3xl font-bold my-6">{plan.price}</div>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="mr-3">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-bold mt-8 transition-colors ${
                plan.recommended ? "bg-white text-blue-600 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
