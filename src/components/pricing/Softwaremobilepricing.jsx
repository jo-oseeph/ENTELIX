import { Settings, Smartphone, ArrowUpRight } from "lucide-react";

const softwareItems = [
  {
    title: "Business Management Systems",
    price: "KSh 120,000",
    description:
      "Centralized platforms for managing operations, records, staff, and business reporting.",
  },
  {
    title: "Customer & Sales Systems",
    price: "KSh 100,000",
    description:
      "CRM solutions for managing customers, leads, sales activities, and business relationships.",
  },
  {
    title: "Inventory & Stock Systems",
    price: "KSh 90,000",
    description:
      "Track products, stock levels, purchases, sales, and inventory movement in one system.",
  },
  {
    title: "Custom Business Platforms",
    price: "KSh 150,000",
    description:
      "Purpose-built software designed around your unique workflows, processes, and requirements.",
  },
];

const mobileItems = [
  {
    title: "Mobile App MVP",
    price: "KSh 130,000",
    description:
      "A focused mobile application with the essential features needed to launch and validate your idea.",
  },
  {
    title: "Business Mobile App",
    price: "KSh 220,000",
    description:
      "A complete mobile solution for delivering services, managing operations, or connecting with customers.",
  },
  {
    title: "Advanced Mobile App",
    price: "KSh 350,000",
    description:
      "Feature-rich applications with advanced functionality, integrations, authentication, and scalable architecture.",
  },
];

const PricingCard = ({ icon: Icon, title, items, ctaLabel }) => (
  <div
    className="relative rounded-3xl p-8 md:p-10 overflow-hidden h-full"
    style={{
      background:
        "linear-gradient(160deg, #0B2153 0%, #0e2861 55%, #0B2153 100%)",
      border: "1px solid rgba(255,255,255,0.08)",
    }}
  >

    {/* <div
      className="absolute -top-16 -right rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(0,57,48,0.18) 0%, transparent 70%)",
      }}
    /> */}

    <div className="relative h-full flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <Icon className="w-6 h-6" style={{ color: "#E93930" }} strokeWidth={1.75} />
        <h3 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h3>
      </div>

      <div className="flex-1 flex flex-col">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6 ${
              i !== items.length - 1 ? "border-b" : ""
            }`}
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div>
              <p className="font-semibold text-white text-base mb-1">
                {item.title}
              </p>

              <p className="text-xs text-white/45 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </div>

            <p
              className="text-sm font-mono whitespace-nowrap sm:text-right flex-shrink-0"
              style={{ color: "#E93930" }}
            >
              Starting from {item.price}
            </p>
          </div>
        ))}
      </div>

      <a
        href="/contact"
        className="group mt-8 inline-flex items-center justify-between w-full gap-3 px-6 py-4 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        style={{
          backgroundColor: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.6)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#E93930";
          e.currentTarget.style.borderColor = "#E93930";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)";
        }}
      >
        {ctaLabel}

        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  </div>
);

const SoftwareMobilePricing = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span
              className="block w-8 h-[3px] rounded-full"
              style={{ backgroundColor: "#E93930" }}
            />

            <p
              className="text-xs font-bold uppercase tracking-[0.25em]"
              style={{ color: "#E93930" }}
            >
              Software & Mobile Development
            </p>

            <span
              className="block w-8 h-[3px] rounded-full"
              style={{ backgroundColor: "#E93930" }}
            />
          </div>

          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight"
            style={{ color: "#0B2153" }}
          >
            Build the Solution Your Business Needs
          </h2>

          <p className="text-gray-500 text-base max-w-xl mx-auto mt-4 leading-relaxed">
            From business systems to mobile applications, choose a starting
            point that fits your goals and scale with a solution built around
            your requirements.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-7 items-stretch">
          <PricingCard
            icon={Settings}
            title="Custom Software & Systems"
            items={softwareItems}
            ctaLabel="Discuss Your Software Project"
          />

          <PricingCard
            icon={Smartphone}
            title="Mobile App Development"
            items={mobileItems}
            ctaLabel="Discuss Your Mobile App"
          />
        </div>

      </div>
    </section>
  );
};

export default SoftwareMobilePricing;