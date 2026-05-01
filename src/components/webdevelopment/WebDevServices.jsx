import {
  Globe,
  ShoppingCart,
  Layout,
  Megaphone,
  Code2,
  Wrench,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Tailored websites built from scratch to match your brand, goals, and business needs.',
  },
  {
    icon: Layout,
    title: 'Business Websites',
    description: 'Professional, conversion-focused websites that build trust and turn visitors into clients.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Online stores optimized for smooth shopping, secure payments, and higher sales.',
  },
  {
    icon: Megaphone,
    title: 'Landing Pages',
    description: 'High-converting pages designed for campaigns, lead generation, and marketing performance.',
  },
  {
    icon: Code2,
    title: 'Web Applications',
    description: 'Custom platforms, dashboards, and systems built to streamline and scale your operations.',
  },
  {
    icon: Wrench,
    title: 'Portfolio Websites',
    description: 'Clean, modern portfolios that showcase your work and elevate your personal brand.',
  },
];

const WebDevServices = () => {
  return (
    <section className="py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2153] mb-4">
            High-Performance Web Development
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
           We build fast, modern websites optimized for performance, SEO, to make your business ranked on google and  grow.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
              style={{
                borderColor: '#0B2153',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E93930';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#0B2153';
              }}
            >
              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
                style={{
                  background: 'rgba(11,33,83,0.08)',
                }}
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
            Ready to build something that actually performs?
          </h3>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: '#E93930' }}
          >
            Start Your Web Project
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default WebDevServices;