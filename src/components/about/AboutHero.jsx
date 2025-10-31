import { useEffect, useState } from "react";

export default function AboutHero() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #05255Dcc, #E93930cc), url('/hero-bg.jpg') center/cover no-repeat",
      }}
    >
      <div
        className={`transition-all duration-1000 ${
          fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-red-400">Entelix</span>
        </h1>
        <p className="text-gray-200 text-lg max-w-xl mx-auto">
          Innovating Africa’s digital future — one solution at a time.
        </p>
      </div>
    </section>
  );
}

export { AboutHero };
