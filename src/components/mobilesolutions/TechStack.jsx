import React from "react";

const TechStack = () => {
  const technologies = [
    { category: "iOS", stack: ["Swift", "SwiftUI", "Xcode", "Core Data"] },
    { category: "Android", stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"] },
    { category: "Cross-Platform", stack: ["React Native", "Flutter", "Expo"] },
    { category: "Backend", stack: ["Node.js", "Python", "Firebase", "AWS"] }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-600">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.stack.map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-center">
                    <span className="text-blue-600 mr-2">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
