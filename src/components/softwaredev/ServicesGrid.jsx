import {
  Building2,
  Users,
  Package,
  GraduationCap,
  Workflow,
  Network,
} from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Business Management Systems',
    description: 'Centralized systems to manage day-to-day operations, records, and reporting from one place.',
  },
  {
    icon: Users,
    title: 'CRM Systems',
    description: 'Tools to manage customer relationships, track leads, and streamline your sales process.',
  },
  {
    icon: Package,
    title: 'Inventory Systems',
    description: 'Systems to track stock levels, orders, and inventory movement in real time.',
  },
  {
    icon: GraduationCap,
    title: 'School Management Systems',
    description: 'Platforms to manage students, staff, records, and day-to-day school operations.',
  },
  {
    icon: Workflow,
    title: 'Workflow Systems',
    description: 'Custom workflows that automate approvals, tasks, and internal processes.',
  },
  {
    icon: Network,
    title: 'Enterprise Applications',
    description: 'Large-scale applications built to support complex, organization-wide needs.',
  },
];

const SoftwareDevServices = () => {
  return (
    <section className="py-24 bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2153] mb-4">
            Scalable Software Development Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We build custom software systems designed to streamline operations, automate processes, and support long-term business growth.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

export default SoftwareDevServices;