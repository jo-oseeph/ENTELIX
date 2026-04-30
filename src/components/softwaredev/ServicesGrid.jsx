import {
  Layers,
  Smartphone,
  Cpu,
  Database,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Custom Software Systems',
    description: 'Tailored software built to match your business workflows and operational needs.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Applications',
    description: 'Scalable mobile apps designed for performance, usability, and real-world business impact.',
  },
  {
    icon: Cpu,
    title: 'Automation & Integrations',
    description: 'Streamline operations with automated workflows and seamless system integrations.',
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Robust backend systems and APIs built for scalability, security, and performance.',
  },
];

const SoftwareDevServices = () => {
  return (
    <section className="py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2153] mb-4">
            Scalable Software Development
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We build custom software systems designed to streamline operations, automate processes, and support long-term business growth.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: '#E5E7EB' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E93930';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
              }}
            >
              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
                style={{ background: 'rgba(11,33,83,0.08)' }}
              >
                <Icon size={20} color="#E93930" />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-[#0B2153] text-lg mb-2">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <h3 className="text-xl md:text-2xl font-bold text-[#0B2153] mb-4">
            Need a system that actually scales with your business?
          </h3>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: '#E93930' }}
          >
            Build Your Software System
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default SoftwareDevServices;