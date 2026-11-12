import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Eye,
  Shield,
  Share2,
  Lock,
  Clock,
  UserCheck,
  ExternalLink,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Entelix Technologies privacy policy detailing our data collection, security standards, and client confidentiality commitments.",
  alternates: {
    canonical: "https://entelix.co.ke/privacy",
  },
};

const sections = [
  {
    icon: Eye,
    number: "01",
    title: "Information We Collect",
    content: (
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed">
        <p>
          We collect information strictly necessary to communicate with you, deliver our software engineering and design services, and improve your user experience on our platform.
        </p>
        <ul className="space-y-2.5 pt-1">
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] flex-shrink-0 mt-2" />
            <span>
              <strong className="text-[#101926]">Personal Information:</strong> Name, professional email address, phone number, company name, and project scope submitted through contact forms or direct inquiry.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] flex-shrink-0 mt-2" />
            <span>
              <strong className="text-[#101926]">Technical Usage Data:</strong> Anonymized analytical metrics including browser type, operating system, pages visited, session duration, and referral paths to optimize site performance.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] flex-shrink-0 mt-2" />
            <span>
              <strong className="text-[#101926]">Communication Records:</strong> Correspondence logs from inquiries via WhatsApp, email, or scheduled consultation calls.
            </span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    icon: Shield,
    number: "02",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed">
        <p>Your information is utilized solely for legitimate operational and client service purposes:</p>
        <ul className="space-y-2 pt-1">
          {[
            "Evaluating project requirements and preparing accurate proposals and quotations.",
            "Delivering software engineering, web development, and design services.",
            "Providing ongoing technical support, system maintenance, and updates.",
            "Complying with statutory, regulatory, and legal tax compliance obligations in Kenya.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Share2,
    number: "03",
    title: "Sharing of Information",
    content: (
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed">
        <p>
          We do not sell, rent, or monetize your personal or company data. We only share information with third parties when strictly required for service delivery:
        </p>
        <ul className="space-y-2 pt-1">
          {[
            "Trusted cloud hosting and infrastructure partners (e.g., AWS, Vercel, Google Cloud) hosting customer environments under strict confidentiality.",
            "When required by applicable law, court order, or governmental regulatory authority in Kenya.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] flex-shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    icon: Lock,
    number: "04",
    title: "Data Security Standards",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        We implement rigorous technical and organizational measures to safeguard data against unauthorized access, loss, or alteration. These include end-to-end TLS encryption, secure database credentials, restricted team access, and regular vulnerability audits.
      </p>
    ),
  },
  {
    icon: Clock,
    number: "05",
    title: "Data Retention",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        We retain personal data and project documentation only for as long as necessary to fulfill contractual agreements, maintain project codebases, and satisfy legal accounting requirements.
      </p>
    ),
  },
  {
    icon: UserCheck,
    number: "06",
    title: "Your Rights",
    content: (
      <ul className="space-y-2 text-sm text-[#64748B] leading-relaxed">
        {[
          "Request access to personal data and records Entelix maintains regarding your account.",
          "Request rectification of outdated, incorrect, or incomplete information.",
          "Request deletion of personal information where no overriding legal obligation exists.",
          "Opt out of non-essential promotional correspondence at any time.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] flex-shrink-0 mt-2" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: ExternalLink,
    number: "07",
    title: "Third-Party Links & Services",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        Our website may reference external third-party tools, domain registrars, or cloud services. We do not control and are not responsible for the privacy practices, cookie policies, or content of external sites.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    number: "08",
    title: "Policy Updates",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        Entelix Technologies reserves the right to revise this Privacy Policy periodically to reflect service evolutions or statutory legal changes. The latest version is always accessible on this page.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="primary" size="md">
              Legal &amp; Privacy
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Our transparent commitment to protecting your business data, project confidentiality, and personal information.
            </p>
            <p className="text-xs text-[#64748B] pt-2">
              Last updated: November 2026 • Effective immediately
            </p>
          </div>
        </Container>
      </section>

      {/* Policy Sections */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map(({ icon: Icon, number, title, content }) => (
              <Card key={number} variant="white" hoverable padding="lg">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B59ED]/10 flex items-center justify-center text-[#0B59ED] flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B59ED]">
                      Section {number}
                    </span>
                    <h2 className="text-xl font-bold text-[#101926] mt-0.5">{title}</h2>
                  </div>
                </div>
                {content}
              </Card>
            ))}
          </div>

          {/* Contact Verification Card */}
          <div className="mt-16 bg-[#101926] rounded-2xl p-8 sm:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="neutral" size="sm" className="bg-white/10 text-white border-none">
                Data Protection Officer
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Questions Regarding Your Privacy?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                If you have inquiries regarding how Entelix Technologies manages your data, contact our office directly.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-4 text-left">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-[#0B59ED] mb-2" />
                  <p className="text-xs text-slate-400">Email Address</p>
                  <a href="mailto:info@entelix.co.ke" className="text-sm font-semibold hover:text-[#0B59ED] transition-colors">
                    info@entelix.co.ke
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-[#0B59ED] mb-2" />
                  <p className="text-xs text-slate-400">Direct Telephone</p>
                  <a href="tel:+254719238337" className="text-sm font-semibold hover:text-[#0B59ED] transition-colors">
                    +254 719 238 337
                  </a>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#0B59ED] mb-2" />
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm font-semibold">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
