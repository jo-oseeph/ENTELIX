import { CheckCircle2, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Basic',
    price: 'KSh 25,000',
    note: 'Starting from',
    description: 'A solid starting point for small businesses that need a functional, professional system.',
    features: [
      'Single-module system',
      'Up to 3 user roles',
      'Core CRUD functionality',
      'Basic reporting',
      '2 weeks of support',
    ],
    cta: 'Get Started',
    theme: 'light',
  },
  {
    name: 'Standard',
    price: 'KSh 75,000',
    note: 'Starting from',
    description: 'Our most popular package — built for growing businesses that need more depth and flexibility.',
    features: [
      'Multi-module system',
      'Unlimited user roles',
      'Advanced reporting & analytics',
      'Third-party integrations',
      'Admin dashboard',
      '1 month of support',
    ],
    cta: 'Get Started',
    theme: 'navy',
    popular: true,
  },
  {
    name: 'Premium',
    price: 'KSh 150,000+',
    note: 'Starting from',
    description: 'A fully custom, enterprise-grade system engineered around your exact processes.',
    features: [
      'Fully custom architecture',
      'Complex workflow automation',
      'API development & integrations',
      'Scalable infrastructure',
      'Priority support',
      '3 months of support',
    ],
    cta: 'Talk to Us',
    theme: 'red',
  },
];

const themeStyles = {
  light: {
    background: '#ffffff',
    border: '1.5px solid rgba(11,33,83,0.12)',
    titleColor: '#0B2153',
    priceColor: '#0B2153',
    noteColor: '#94a3b8',
    descColor: '#64748b',
    checkColor: '#E93930',
    featureColor: '#475569',
    dividerColor: 'rgba(11,33,83,0.1)',
    buttonBg: '#E93930',
    buttonColor: '#ffffff',
    buttonHoverBg: '#c92f28',
  },
  navy: {
    background: 'linear-gradient(160deg, #0B2153 0%, #12336e 55%, #0B2153 100%)',
    border: '1.5px solid rgba(233,57,48,0.4)',
    titleColor: '#ffffff',
    priceColor: '#ffffff',
    noteColor: 'rgba(255,255,255,0.5)',
    descColor: 'rgba(255,255,255,0.65)',
    checkColor: '#E93930',
    featureColor: 'rgba(255,255,255,0.85)',
    dividerColor: 'rgba(255,255,255,0.15)',
    buttonBg: '#ffffff',
    buttonColor: '#0B2153',
    buttonHoverBg: '#f1f1f1',
  },
  red: {
    background: 'linear-gradient(160deg, #E93930 0%, #c92f28 100%)',
    border: '1.5px solid rgba(255,255,255,0.2)',
    titleColor: '#ffffff',
    priceColor: '#ffffff',
    noteColor: 'rgba(255,255,255,0.7)',
    descColor: 'rgba(255,255,255,0.85)',
    checkColor: '#ffffff',
    featureColor: 'rgba(255,255,255,0.95)',
    dividerColor: 'rgba(255,255,255,0.25)',
    buttonBg: '#ffffff',
    buttonColor: '#E93930',
    buttonHoverBg: '#f1f1f1',
  },
};

const PricingSection = () => {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: 'linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
            <p className="text-xs font-bold uppercase tracking-[0.25em]" style={{ color: '#E93930' }}>
              Pricing
            </p>
            <span className="block w-8 h-[3px] rounded-full" style={{ backgroundColor: '#E93930' }} />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight" style={{ color: '#0B2153' }}>
            Packages Built Around Your Project
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Every project is different — these packages are a starting point. We'll scope the details after understanding your requirements.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-7 items-start">
          {tiers.map((tier) => {
            const t = themeStyles[tier.theme];
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1.5 ${
                  tier.popular ? 'md:scale-105 shadow-2xl' : 'shadow-md'
                }`}
                style={{ background: t.background, border: t.border }}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
                    style={{ backgroundColor: '#E93930', color: '#ffffff' }}
                  >
                    Most Popular
                  </span>
                )}

                {/* Tier name */}
                <h3 className="text-lg font-bold mb-1" style={{ color: t.titleColor }}>
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: t.descColor }}>
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: t.noteColor }}>
                    {tier.note}
                  </p>
                  <p className="text-3xl font-extrabold" style={{ color: t.priceColor }}>
                    {tier.price}
                  </p>
                </div>

                {/* Divider */}
                <div className="mb-6" style={{ borderTop: `1px solid ${t.dividerColor}` }} />

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-4 h-4 flex-shrink-0 mt-0.5"
                        style={{ color: t.checkColor }}
                        strokeWidth={2}
                      />
                      <span className="text-sm leading-snug" style={{ color: t.featureColor }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm transition-all duration-300"
                  style={{ backgroundColor: t.buttonBg, color: t.buttonColor }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = t.buttonHoverBg)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = t.buttonBg)}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;