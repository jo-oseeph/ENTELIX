import { Cloud, Server, ShieldCheck, Database, Settings } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure Setup",
    description: "We design and deploy reliable, scalable cloud environments on AWS, Azure, or GCP for maximum uptime and performance.",
  },
  {
    icon: Server,
    title: "Cloud Migration",
    description: "Seamlessly move your legacy systems to the cloud with minimal downtime and full data security.",
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security & Compliance",
    description: "Protect your data with robust encryption, monitoring, and compliance with global standards.",
  },
  {
    icon: Database,
    title: "Data Backup & Disaster Recovery",
    description: "Keep your data safe and recoverable with automated backups and robust failover systems.",
  },
  {
    icon: Settings,
    title: "DevOps & Cloud Automation",
    description: "Automate deployment, scaling, and updates to enhance reliability and reduce operational costs.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left - Intro */}
        <div className="md:w-1/2 space-y-5">
          <p className="text-red-600 uppercase tracking-wider">// Our Cloud Services //</p>
          <h2 className="text-4xl font-bold text-[#0B2153] leading-snug">
            Cloud Solutions Built for Growth and Reliability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We help businesses embrace the power of the cloud—enhancing performance, security, and flexibility.
            Our tailored solutions ensure your infrastructure evolves as your business expands.
          </p>
        </div>

        {/* Right - Services Grid */}
        <div className="md:w-1/2 grid sm:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="bg-gray-50 hover:bg-red-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
            >
              <Icon className="text-red-600 mb-3 w-8 h-8" />
              <h3 className="text-lg font-semibold text-[#0B2153] mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
