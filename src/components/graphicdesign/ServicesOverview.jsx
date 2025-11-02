// src/components/graphicdesign/ServicesOverview.jsx
import { Palette, Brush, LayoutDashboard, FileText } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Palette,
      title: "Brand Identity Design",
      desc: "We design logos, color systems, and typography that express your brand’s essence with clarity and impact.",
    },
    {
      icon: Brush,
      title: "Digital Branding",
      desc: "From social media visuals to digital ads, we build a consistent and recognizable digital presence for your brand.",
    },
    {
      icon: LayoutDashboard,
      title: "UI/UX Design",
      desc: "Beautiful, intuitive, and conversion-driven designs that enhance user experience across web and mobile.",
    },
    {
      icon: FileText,
      title: "Print & Marketing Materials",
      desc: "Professional designs for brochures, flyers, posters, and business cards that make your brand memorable.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
          Our <span className="text-red-600">Design Services</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every design we create is backed by strategy, purpose, and deep understanding of your brand’s goals.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-t-red-500 p-8 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors">
                    <Icon className="w-10 h-10 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-blue-950 mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
