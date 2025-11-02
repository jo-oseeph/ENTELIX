// src/components/graphicdesign/PortfolioPreview.jsx
const PortfolioPreview = () => {
  const projects = [
    { title: "Brand Identity for TechNova", img: "/placeholder1.jpg" },
    { title: "UI Design for E-Shop", img: "/placeholder2.jpg" },
    { title: "Social Media Kit", img: "/placeholder3.jpg" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6">
          Featured <span className="text-red-600">Projects</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          See a glimpse of how our designs help brands grow their identity and connect with their audience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-950 group-hover:text-red-600 transition-colors">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/portfolio"
          className="inline-block mt-10 px-8 py-3 bg-blue-950 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-300"
        >
          View More Work
        </a>
      </div>
    </section>
  );
};

export default PortfolioPreview;
