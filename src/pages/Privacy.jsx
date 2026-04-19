import React from "react";
import SEO from "../components/SEO";
import { Mail, Globe, Shield, Eye, Share2, Lock, Clock, UserCheck, Link, RefreshCw } from "lucide-react";

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.531 5.847L.057 23.547a.75.75 0 0 0 .921.921l5.7-1.474A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.184-1.434l-.372-.22-3.384.875.893-3.265-.242-.38A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const sections = [
  {
    icon: Eye,
    number: "01",
    title: "Information We Collect",
    content: (
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
        <p>We collect information necessary to communicate with you, deliver our services, and improve your experience on our platform.</p>
        <ul className="space-y-2">
          {[
            { label: "Personal Information:", detail: "such as your name, email address, phone number, and project details submitted through forms or direct communication." },
            { label: "Usage Data:", detail: "including pages visited, time spent on the site, and general interaction patterns used for analytics and performance improvement." },
            { label: "Third-Party Interactions:", detail: "data collected when you engage with us via platforms such as WhatsApp or other integrated tools." },
          ].map(({ label, detail }) => (
            <li key={label} className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e93930] flex-shrink-0 mt-2" />
              <span><strong className="text-[#11203a]">{label}</strong> {detail}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Shield,
    number: "02",
    title: "How We Use Your Information",
    content: (
      <ul className="space-y-2">
        {[
          "Communicate with you regarding inquiries, projects, and support.",
          "Deliver services, proposals, and project updates.",
          "Improve our website, services, and user experience through analytics.",
          "Comply with applicable legal, regulatory, and business obligations.",
        ].map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e93930] flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Share2,
    number: "03",
    title: "Sharing of Information",
    content: (
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        <p>We do not sell or trade your personal data. We only share information when necessary to operate our services:</p>
        <ul className="space-y-2">
          {[
            "With trusted service providers such as hosting, analytics, or communication tools.",
            "When required by law, regulation, or to protect our legal rights.",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e93930] flex-shrink-0 mt-2" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Lock,
    number: "04",
    title: "Data Security",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        We implement appropriate technical and organizational measures to safeguard your data. While we strive to protect your information, no digital system can guarantee absolute security.
      </p>
    ),
  },
  {
    icon: Clock,
    number: "05",
    title: "Data Retention",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, including legal, operational, and contractual requirements.
      </p>
    ),
  },
  {
    icon: UserCheck,
    number: "06",
    title: "Your Rights",
    content: (
      <ul className="space-y-2">
        {[
          "Request access to the personal data we hold about you.",
          "Request correction of inaccurate or incomplete information.",
          "Request deletion of your data where applicable under law.",
          "Opt out of non-essential communications at any time.",
        ].map((item) => (
          <li key={item} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e93930] flex-shrink-0 mt-2" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Link,
    number: "07",
    title: "Third-Party Links",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Our website may contain links to third-party platforms or services. We are not responsible for the privacy practices or content of those external sites.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    number: "08",
    title: "Updates",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. The latest version will always be available on our website.
      </p>
    ),
  },
];

const Privacy = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <SEO
        title="Privacy Policy | Entelix"
        description="Entelix's privacy policy explains how we collect, use, and protect your personal data."
        keywords="privacy policy Kenya, Entelix privacy policy, data protection"
        url="/privacy"
      />

      {/* Hero */}
      <section className="bg-[#11203a] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#e93930] mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-slate-400 text-base leading-relaxed">
            This policy outlines how Entelix collects,
            uses, and protects your personal information.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map(({ icon: Icon, number, title, content }) => (
            <div
              key={number}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#11203a]/20
                hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#11203a] flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#e93930] mb-0.5">
                    {number}
                  </p>
                  <h2 className="text-lg font-bold text-[#11203a]">{title}</h2>
                </div>
              </div>
              {content}
            </div>
          ))}
        </div>

        {/* Contact card remains unchanged */}
      </section>
    </main>
  );
};

export default Privacy;