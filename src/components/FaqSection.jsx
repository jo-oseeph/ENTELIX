import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Which type of services do you offer?",
    answer:
      "We build custom websites, web applications, mobile apps, SaaS platforms, and business management systems tailored to your needs.",
  },
  {
    question: "How much does a software project cost?",
    answer:
      "Project costs depend on the scope, features, complexity, and timeline. We first understand your requirements before providing a tailored estimate.",
  },
  {
    question: "How long does it take to build a project?",
    answer:
      "Timelines vary by project size and complexity. After reviewing your requirements, we provide a clear development timeline and milestones.",
  },
  {
    question: "Do you provide support after the project launches?",
    answer:
      "Yes. We provide ongoing maintenance, technical support, updates, and improvements to keep your software reliable as your needs evolve.",
  },
  {
    question: "How do we get started with a project?",
    answer:
      "Simply contact us with an overview of what you need. We'll discuss your goals, requirements, and the best approach for moving forward.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes. We work with startups, SMEs, and established organizations, tailoring the solution to the business's specific needs and stage of growth.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div
      className="rounded-2xl border bg-white transition-colors duration-300"
      style={{ borderColor: isOpen ? "#E93930" : "rgba(233,57,48,0.25)" }}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-5 px-6 py-5 text-left"
      >
        <span
          className="text-base md:text-lg font-semibold transition-colors duration-300"
          style={{ color: isOpen ? "#E93930" : "#0B2153" }}
        >
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300"
          style={{
            borderColor: isOpen ? "#E93930" : "rgba(11,33,83,0.2)",
            backgroundColor: isOpen ? "#E93930" : "transparent",
          }}
        >
          <ChevronDown
            className="w-4 h-4 transition-transform duration-300"
            style={{
              color: isOpen ? "#ffffff" : "#0B2153",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-in-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden" ref={contentRef}>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed px-6 pb-5">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndexes, setOpenIndexes] = useState([0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleToggle = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span
              className="block w-8 h-[3px] rounded-full"
              style={{ backgroundColor: "#E93930" }}
            />
            <p
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "#E93930" }}
            >
              FAQ
            </p>
            <span
              className="block w-8 h-[3px] rounded-full"
              style={{ backgroundColor: "#E93930" }}
            />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight"
            style={{ color: "#0B2153" }}
          >
            Questions You Might Have
          </h2>
        </div>

        {/* FAQ Grid */}
        <div
          className={`grid md:grid-cols-2 gap-5 items-start transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndexes.includes(index)}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
