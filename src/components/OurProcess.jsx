import { useEffect, useRef, useState } from 'react';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery & Strategy',
    description:
      'We analyze your business, goals, and users to define a clear project direction.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design & Prototyping',
    description:
      'We create intuitive, high-fidelity designs aligned with your brand and user experience.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development & Testing',
    description:
      'We build scalable solutions and test thoroughly to ensure performance and reliability.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Support',
    description:
      'We deploy your product and provide ongoing support to keep it running smoothly.',
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
        { threshold: 0.15 }
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ fontFamily: "sans-serif", background: '#f8f9fc' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        .process-card {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .process-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .process-icon-wrap {
          transition: background 0.25s ease, transform 0.25s ease;
        }
         .process-icon-wrap {
          background: #E93930 !important;
          transform: scale(1.08);
        }
         .process-icon {
          color: white !important;
        }
        .process-card-inner {
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
          border: 1px solid transparent;
        }
        .process-card-inner:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 48px rgba(11,33,83,0.12);
          border-color: #E93930;
        }

        .connector-line {
          position: absolute;
          top: 44px;
          left: calc(50% + 44px);
          width: calc(100% - 88px);
          height: 1px;
          background: repeating-linear-gradient(
            90deg,
            #0B2153 0px,
            #0B2153 6px,
            transparent 6px,
            transparent 14px
          );
          opacity: 0.2;
        }

        .step-number {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1;
          color: #0B2153;
          opacity: 0.06;
          position: absolute;
          top: 12px;
          right: 16px;
          pointer-events: none;
          letter-spacing: -0.04em;
        }
      `}</style>

      {/* Background accent */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #0B2153 0%, #E93930 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: '#E93930' }}
          >
            How We Work
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#0B2153', letterSpacing: '-0.02em' }}
          >
            Our Process
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            A clear, structured approach from the first conversation to a successful launch, and beyond.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">

          {/* Connector line — desktop only */}
          <div className="connector-line hidden lg:block" />

          {steps.map(({ number, icon: Icon, title, description, detail }, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className={`process-card ${visibleCards.includes(i) ? 'visible' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="process-card-inner relative bg-white rounded-2xl p-6 h-full flex flex-col"
                style={{ boxShadow: '0 2px 16px rgba(11,33,83,0.07)' }}
              >
                {/* Large bg number */}
                <span className="step-number">{number}</span>

                {/* Icon */}
                <div
                  className="process-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                  style={{ background: 'rgba(11,33,83,0.07)' }}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="process-icon"
                    style={{ color: '#0B2153', transition: 'color 0.25s ease' }}
                  />
                </div>
                {/* Title */}
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: '#0B2153' }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {description}
                </p>

                {/* Detail tags */}
                <p className="detail-tag">{detail}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurProcess;