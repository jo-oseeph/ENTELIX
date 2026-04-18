import { useEffect, useRef, useState } from 'react';
import { Cloud, Database, UploadCloud, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Reliable and scalable cloud hosting solutions designed to keep your applications fast, secure, and always available."
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description: "Secure and flexible storage systems that allow you to store, manage, and access your data efficiently at any scale."
  },
  {
    icon: UploadCloud,
    title: "Cloud Migration",
    description: "Seamless migration of your applications and data to the cloud with minimal downtime and zero data loss."
  },
  {
    icon: ShieldCheck,
    title: "Cloud Security & Monitoring",
    description: "Advanced security and real-time monitoring to protect your infrastructure, detect threats, and ensure system reliability."
  }
];
const CloudServices = () => {
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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center max-w-xl mx-auto mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-bold tracking-widest uppercase text-red-500 mb-3">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
            Cloud Solution Services Tailored for Your Business
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            We design and manage cloud infrastructure that improves performance, reduces costs, and ensures your systems are secure, scalable, and reliable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description }, index) => (
            <div
              key={index}
              className={`group relative bg-blue-950 rounded-[18px] p-8 border border-blue-900 overflow-hidden
                transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500
                hover:shadow-[0_12px_32px_rgba(239,68,68,0.15)]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Bottom bar reveal on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

              {/* Icon */}
              <div className="w-12 h-12 rounded-[14px] bg-red-500/15 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-red-500">
                <Icon className="w-5 h-5 text-red-400 transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-2">{title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-slate-400">{description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CloudServices;