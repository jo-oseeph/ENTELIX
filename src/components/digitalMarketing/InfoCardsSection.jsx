import React, { useEffect } from "react";
import { TrendingUp, Users, FileText, DollarSign } from "lucide-react";

/*
  Cards:
  - SEO Optimization
  - Social Media Marketing
  - Content Marketing
  - Paid Advertising (PPC)
*/

const CARDS = [
  {
    Icon: TrendingUp,
    title: "SEO Optimization",
    text: "Increase organic visibility and attract search-ready customers through technical SEO, on-page optimization and local search.",
  },
  {
    Icon: Users,
    title: "Social Media Marketing",
    text: "Build brand awareness and engagement with strategic social content, community management and paid social campaigns.",
  },
  {
    Icon: FileText,
    title: "Content Marketing",
    text: "Authority-building content — blog strategy, long-form pieces, and lead magnets that turn visitors into leads.",
  },
  {
    Icon: DollarSign,
    title: "Paid Advertising (PPC)",
    text: "Targeted ad campaigns with measurable ROI across Google Ads and social platforms — optimized for conversions.",
  },
];

const InfoCardsSection = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal-card").forEach((el) => {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <h3 className="text-2xl font-semibold text-[#0B2153]">What We Do</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Practical, measurable marketing services that support every stage of your growth funnel.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 gap-8">
        {CARDS.map(({ Icon, title, text }, i) => (
          <article
            key={i}
            className="reveal-card bg-white p-6 rounded-2xl shadow-md border border-gray-100 opacity-0 translate-y-6 transform transition-all duration-600"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-red-50">
                <Icon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0B2153] mb-1">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default InfoCardsSection;
