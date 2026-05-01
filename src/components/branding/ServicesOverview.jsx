import {
  Palette,
  LayoutDashboard,
  Brush,
  Layers,
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
              className="p-6 rounded-2xl border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ background: '#0B2153' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E93930';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl mb-4"
                style={{ background: 'rgba(233,57,48,0.15)' }}
              >
                <Icon size={20} color="#E93930" />
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-white text-lg mb-2">
                {title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandingServices;