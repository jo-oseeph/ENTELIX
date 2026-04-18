import { useEffect, useRef, useState } from 'react';
import { Star, Clock, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    tier: 'basic',
    badge: 'Basic',
    label: 'Starter Plan',
    price: 'KES 4,999',
    description: 'Essential maintenance to keep your website updated, secure, and running without issues.',
    features: [
      'Basic website maintenance & updates',
      'Security monitoring',
      'Monthly backups',
      'Bug fixes (minor issues)',
      'Email support'
    ],
    cta: 'Get Started',
    featured: false,
    popular: false,
  },
  {
    tier: 'standard',
    badge: 'Standard',
    label: 'Growth Plan',
    price: 'KES 9,999',
    description: 'Ongoing support and optimization for businesses that need consistent performance and updates.',
    features: [
      'Everything in Basic',
      'Regular content updates',
      'Performance optimization',
      'Weekly backups',
      'Priority support'
    ],
    cta: 'Get Started',
    featured: true,
    popular: true,
  },
  {
    tier: 'premium',
    badge: 'Premium',
    label: 'Pro Plan',
    price: 'KES 19,999',
    tag: 'For serious businesses',
    description: 'Full website management with advanced support, monitoring, and continuous improvement.',
    features: [
      'Everything in Standard',
      'Advanced security & monitoring',
      'Daily backups',
      'Speed & performance tuning',
      'Dedicated support'
    ],
    cta: 'Contact Us',
    featured: true,
    popular: false,
  },
];

const badgeStyles = {
  basic:    'bg-red-50 text-red-700',
  standard: 'bg-red-500 text-white',
  premium:  'bg-blue-900/40 text-blue-300',
};

const tagStyles = {
  basic:    'bg-red-50 text-red-700',
  standard: 'bg-red-500/15 text-red-500',
  premium:  'bg-white/5 text-slate-400',
};

const checkStyles = {
  basic:    'bg-red-50',
  standard: 'bg-red-500/15',
  premium:  'bg-white/5',
};

const checkIconStyles = {
  basic:    'text-red-500',
  standard: 'text-red-500',
  premium:  'text-slate-400',
};

const btnStyles = {
  basic:    'bg-blue-950 text-white hover:bg-blue-900',
  standard: 'bg-red-500 text-white hover:bg-red-600',
  premium:  'bg-white/8 text-slate-200 border border-white/10 hover:bg-white/12',
};

const PricingPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
            Pricing Plans
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
            Our Website Management Plans
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Choose the perfect plan to keep your website secure, updated, and performing at its best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map(({ tier, badge, label, price, tag, description, features, delivery, cta, featured, popular }, index) => (
            <div
              key={tier}
              className={`relative rounded-[20px] p-8 border-[1.5px] overflow-hidden
                transition-all duration-500
                ${featured
                  ? 'bg-blue-950 border-blue-900'
                  : 'bg-white border-gray-200'
                }
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Popular corner ribbon */}
              {popular && (
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                  <div className="absolute top-3 -right-6 bg-red-500 text-white text-[10px] font-extrabold tracking-wide px-7 py-1.5 rotate-45">
                    POPULAR
                  </div>
                </div>
              )}

              {/* Badge */}
              <div className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-5 ${badgeStyles[tier]}`}>
                <Star className="w-3 h-3" fill="currentColor" />
                {badge}
              </div>

              {/* Plan label */}
              <p className={`text-xs font-semibold uppercase tracking-widest mb-1 ${featured ? 'text-slate-500' : 'text-gray-400'}`}>
                {label}
              </p>

              {/* Price */}
              <p className={`text-4xl font-extrabold leading-none mb-2 ${featured ? 'text-white' : 'text-blue-950'}`}>
                {price}
              </p>
              {/* Description */}
              <p className={`text-sm leading-relaxed mb-5 pb-5 border-b ${
                featured ? 'text-slate-400 border-white/8' : 'text-gray-500 border-gray-100'
              }`}>
                {description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-6">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className={`w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${checkStyles[tier]}`}>
                      <Check className={`w-2.5 h-2.5 stroke-[2.5] ${checkIconStyles[tier]}`} />
                    </span>
                    <span className={`text-sm leading-snug ${featured ? 'text-slate-300' : 'text-gray-600'}`}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
              {/* CTA */}
              <Link
                to="/contact"
                className={`block w-full py-3.5 rounded-xl text-sm font-bold text-center transition-all duration-200 ${btnStyles[tier]}`}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;