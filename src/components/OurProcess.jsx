import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We meet to understand your business, goals, and user needs—defining the scope and vision.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team creates wireframes, prototypes, and a clear roadmap for development.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build with clean, scalable code, integrating features while testing rigorously.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Your product goes live with thorough QA, optimization, and monitoring.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "Ongoing maintenance, updates, and strategic guidance to help you grow.",
  },
];

const OurProcess = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, i])]);
            observer.disconnect();
          }
        },
        { threshold: 0.15 },
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0B2153 0%, #0e2861 55%, #0B2153 100%)",
      }}
    >
      <style>{`
        .process-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .process-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Subtle glow accents */}
      <div
        className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-8 h-[3px] rounded-full bg-white/30" />
            <span className="text-xs font-bold tracking-widest uppercase text-white/60">
              How We Work
            </span>
            <span className="block w-8 h-[3px] rounded-full bg-white/30" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Our Process
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            A straightforward process that keeps your goals clear, your project
            on track, and you informed from start to launch.
          </p>
        </div>

        {/* Steps row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-14 gap-x-4 relative">
          {/* Connector line — desktop only, sits behind the circles */}
          <div
            className="hidden lg:block absolute left-0 right-0"
            style={{
              top: "48px",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.15)",
              zIndex: 0,
            }}
          />

          {steps.map(({ number, title, description }, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`process-card relative z-10 flex flex-col items-center text-center ${
                visibleCards.includes(i) ? "visible" : ""
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Step circle */}
              <div
                className="w-24 h-24 rounded-full flex flex-col items-center justify-center mb-6 flex-shrink-0"
                style={{
                  backgroundColor: "#132a5e",
                  border: "2px solid rgba(255,255,255,0.85)",
                }}
              >
                <span className="text-[10px] font-bold tracking-widest text-cyan-400 mb-0.5">
                  STEP
                </span>
                <span className="text-2xl font-extrabold text-white leading-none">
                  {number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-white/50 max-w-[200px]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;