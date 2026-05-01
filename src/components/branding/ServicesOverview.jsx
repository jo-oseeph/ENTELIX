import {
  Palette,
  LayoutDashboard,
  Brush,
  Layers,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Logo design, color systems, and typography that define your brand and create a strong, professional identity.',
  },
  {
    icon: LayoutDashboard,
    title: 'UI/UX Design',
    description: 'Clean, user-focused designs for websites and apps that improve usability and overall experience.',
  },
  {
    icon: Brush,
    title: 'Social Media Graphics',
    description: 'Engaging and consistent visuals designed to strengthen your presence across all social platforms.',
  },
  {
    icon: Layers,
    title: 'Print & Digital Materials',
    description: 'Posters, flyers, business cards, and marketing assets designed to promote your brand professionally.',
  },
];
const BrandingServices = () => {
  return (
    <section className="py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2153] mb-4">
            Our Graphic Design Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We create clean, modern brand identities and design systems that make your business consistent, recognizable, and professional.
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
            Ready to build a brand that stands out?
          </h3>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: '#E93930' }}
          >
            Start Your Brand
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default BrandingServices;