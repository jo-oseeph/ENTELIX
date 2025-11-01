import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";

const TechStack = () => {
  const techs = [
    { icon: <FaReact className="text-sky-500 w-10 h-10" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500 w-10 h-10" />, name: "Node.js" },
    { icon: <FaPython className="text-yellow-400 w-10 h-10" />, name: "Python" },
    { icon: <FaAws className="text-orange-500 w-10 h-10" />, name: "AWS" },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">Our Tech Stack</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Powered by industry-leading tools and frameworks for top performance.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-t-red-500 w-36"
            >
              {tech.icon}
              <p className="mt-3 text-blue-950 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
