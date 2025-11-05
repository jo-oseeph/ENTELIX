import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Joseph S.",
    title: "Frontend Developer",
    image: "/sejjo.jpeg", 
  },
  {
    name: "Onunga C.",
    title: "Backend Developer",
    image: "/chris.jpeg",
  },
  {
    name: "Bravin M.",
    title: "UI/UX Designer",
    image: "/brav.jpeg",
  },
];

const AboutTeam = () => {
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            The brilliant minds driving Entelix forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-gray-50 shadow-md p-6 text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-blue-950">
                {member.name}
              </h4>
              <p className="text-red-500 font-medium mb-2">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
