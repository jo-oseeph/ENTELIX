import React from "react";
import SEO from "../components/SEO";
import {
  Globe, Mail, Briefcase, CreditCard, Server, UserCheck,
  BookOpen, RefreshCw, ShieldAlert, AlertTriangle, XCircle,
  Lock, Scale, RotateCcw
} from "lucide-react";

const WhatsAppIcon = ({ size = 20, className = "" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.531 5.847L.057 23.547a.75.75 0 0 0 .921.921l5.7-1.474A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.523-5.184-1.434l-.372-.22-3.384.875.893-3.265-.242-.38A9.959 9.959 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const sections = [
  {
    icon: Briefcase,
    number: "01",
    title: "Services",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Entelix provides website development, e-commerce solutions, custom software development,
        and related digital consulting services. Project scope, pricing, deliverables, and
        timelines are agreed separately in a written proposal or quotation.
      </p>
    ),
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Payment Terms",
    content: (
      <ul className="space-y-2">
        {[
          "Clients must pay 30% of the total project cost upfront before work begins.",
          "The remaining balance is payable upon project completion and delivery.",
          "Invoices are issued at each payment milestone.",
          "The initial 30% deposit is non-refundable once work has commenced.",
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
    icon: Server,
    number: "03",
    title: "Domain & Hosting",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Clients are responsible for purchasing and maintaining their own domain names and hosting
        plans. Entelix does not include domain or hosting costs in service fees. We may recommend
        third-party providers but are not responsible for their performance.
      </p>
    ),
  },
  {
    icon: UserCheck,
    number: "04",
    title: "Client Responsibilities",
    content: (
      <ul className="space-y-2">
        {[
          "Provide timely content, images, and other required materials.",
          "Ensure all submitted materials are legally owned or licensed.",
          "Give prompt feedback and approvals to avoid project delays.",
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
    icon: BookOpen,
    number: "05",
    title: "Intellectual Property",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Final project deliverables become the client's property only after full payment.
        Pre-existing code, libraries, tools, or frameworks used in development remain the
        intellectual property of Entelix.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Revisions & Changes",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Each project includes a limited number of revisions as specified in the agreement.
        Additional work outside the agreed scope requires a change request and may incur extra fees.
      </p>
    ),
  },
  {
    icon: ShieldAlert,
    number: "07",
    title: "Warranties & Disclaimers",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Entelix delivers services with reasonable skill and care. We do not guarantee that
        websites or software will be free from all defects or will achieve specific commercial
        outcomes. We are not responsible for downtime or failures caused by third-party services,
        hosting providers, payment processors, or external APIs.
      </p>
    ),
  },
  {
    icon: AlertTriangle,
    number: "08",
    title: "Limitation of Liability",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Entelix's liability is limited to the amount paid by the client for the relevant project.
        We are not liable for indirect or consequential losses, including lost revenue, data loss,
        or business opportunity costs.
      </p>
    ),
  },
  {
    icon: XCircle,
    number: "09",
    title: "Termination",
    content: (
      <ul className="space-y-2">
        {[
          "Either party may terminate the agreement with written notice.",
          "The client will be billed for work completed up to the termination date.",
          "Deposits are non-refundable once work has started.",
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
    icon: Lock,
    number: "10",
    title: "Confidentiality",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Both parties agree to keep confidential information private unless authorized in writing
        or required by law.
      </p>
    ),
  },
  {
    icon: Scale,
    number: "11",
    title: "Governing Law",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        These Terms are governed by the laws of Kenya. Any disputes will be resolved in
        Kenyan courts.
      </p>
    ),
  },
  {
    icon: RotateCcw,
    number: "12",
    title: "Updates",
    content: (
      <p className="text-sm text-gray-600 leading-relaxed">
        Entelix may update these Terms at any time. The latest version will always be
        available on entelix.co.ke.
      </p>
    ),
  },
];

const Terms = () => {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <SEO
        title="Terms of Service | Entelix"
        description="Entelix's Terms of Service explain how we deliver web and software development services, payment terms, intellectual property, and client responsibilities."
        keywords="terms of service Kenya, Entelix terms, website development agreement, software services terms"
        url="/terms"
      />

      {/* Hero */}
      <section className="bg-[#11203a] text-white py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase text-[#e93930] mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Terms of Service
          </h1>
          <p className="max-w-2xl text-slate-400 text-base leading-relaxed">
            These Terms govern your use of Entelix's
            website and our services.
          </p>
        </div>
      </section>

      {/* Sections grid */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map(({ icon, number, title, content }) => {
            const SectionIcon = icon;
            return (
              <div
                key={number}
                className="bg-white rounded-2xl p-8 border border-gray-100
                  hover:border-[#11203a]/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#11203a] flex items-center justify-center flex-shrink-0">
                    <SectionIcon className="w-5 h-5 text-white" strokeWidth={2} />
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
            );
          })}
        </div>

        {/* Contact card */}
        <div className="mt-10 bg-[#11203a] rounded-2xl p-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-widest uppercase text-[#e93930] mb-3">
              Questions?
            </p>
            <h3 className="text-2xl font-bold text-white mb-2">
              Need clarification on our terms?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              For questions about these Terms or your client agreement, our team is ready
              to assist you through any of the channels below.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@entelix.co.ke"
                className="flex items-center gap-3 px-5 py-3 bg-white/8 border border-white/10
                  rounded-xl text-sm text-white hover:bg-white/15 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-[#e93930]" />
                info@entelix.co.ke
              </a>
              <a
                href="https://wa.me/254719238337"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 bg-white/8 border border-white/10
                  rounded-xl text-sm text-white hover:bg-white/15 transition-colors duration-200"
              >
                <WhatsAppIcon size={16} className="text-[#e93930]" />
                +254 719 238 337
              </a>
              <a
                href="https://entelix.co.ke"
                className="flex items-center gap-3 px-5 py-3 bg-white/8 border border-white/10
                  rounded-xl text-sm text-white hover:bg-white/15 transition-colors duration-200"
              >
                <Globe className="w-4 h-4 text-[#e93930]" />
                entelix.co.ke
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Terms;