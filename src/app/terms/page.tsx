import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Briefcase,
  CreditCard,
  Server,
  UserCheck,
  BookOpen,
  RefreshCw,
  ShieldAlert,
  Scale,
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
  title: "Terms and Conditions",
  description:
    "Official terms of service, payment milestones, project delivery scope, and contractual terms for Entelix Technologies clients.",
  alternates: {
    canonical: "https://entelix.co.ke/terms",
  },
};

const termsSections = [
  {
    icon: Briefcase,
    number: "01",
    title: "Services & Project Scope",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        Entelix Technologies provides custom software engineering, web application development, mobile development, cloud architecture, and UI/UX design services. The precise scope, technical specifications, deliverables, and delivery milestones for each engagement are defined separately in a formal written proposal or Service Level Agreement (SLA).
      </p>
    ),
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Payment Milestones & Deposits",
    content: (
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed">
        <p>Our standard project billing structure operates on clear milestone-based invoicing:</p>
        <ul className="space-y-2 pt-1">
          {[
            "An upfront deposit of 30% of the total contract value is required before project kickoff.",
            "Intermediate progress payments may apply for phased multi-month enterprise projects as specified in the proposal.",
            "The remaining final balance is payable upon project completion, quality assurance signoff, and prior to production handover.",
            "Initial deposits are non-refundable once engineering and discovery phases have actively commenced.",
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
    icon: Server,
    number: "03",
    title: "Domain, Hosting & Third-Party Infrastructure",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        Clients maintain primary ownership of their domain names, cloud hosting accounts, and third-party SaaS subscriptions unless explicitly contracted under a managed hosting package. Entelix Technologies is not liable for service disruptions caused by external hosting providers, domain registrar expirations, or third-party API outages.
      </p>
    ),
  },
  {
    icon: UserCheck,
    number: "04",
    title: "Client Obligations & Assets",
    content: (
      <div className="space-y-3 text-[#64748B] text-sm leading-relaxed">
        <p>Timely project delivery requires active client collaboration:</p>
        <ul className="space-y-2 pt-1">
          {[
            "Providing required assets, copy, logos, credentials, and brand guidelines in a timely manner.",
            "Ensuring all supplied content and media are legally owned or appropriately licensed by the client.",
            "Providing consolidated, timely feedback during milestone reviews to avoid project schedule shifts.",
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
    icon: BookOpen,
    number: "05",
    title: "Intellectual Property Ownership",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        Upon full settlement of all outstanding invoices, full intellectual property rights for custom code, design assets, and deliverables are transferred to the client. Entelix Technologies retains ownership of proprietary internal boilerplates, open-source modules, and reusable utility libraries utilized across multiple engagements.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Revisions & Change Requests",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        Each project engagement includes a predefined number of revision rounds during design and staging phases as stipulated in the project agreement. Material additions to scope requested after agreement signing will be quoted separately as an addendum.
      </p>
    ),
  },
  {
    icon: ShieldAlert,
    number: "07",
    title: "Limitation of Liability",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        To the maximum extent permitted by applicable law, Entelix Technologies shall not be held liable for indirect, incidental, or consequential damages resulting from downtime, data loss, third-party platform alterations, or cyber events beyond our direct technical control.
      </p>
    ),
  },
  {
    icon: Scale,
    number: "08",
    title: "Governing Law & Jurisdiction",
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        These Terms and any contractual agreements entered into with Entelix Technologies are governed by and construed in accordance with the laws of the Republic of Kenya. Any dispute shall be resolved through good-faith mediation prior to formal court arbitration in Nairobi, Kenya.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-24 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="primary" size="md">
              Client Agreement
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Clear, transparent guidelines governing our engineering engagements, payment milestones, and professional service deliverables.
            </p>
            <p className="text-xs text-[#64748B] pt-2">
              Last updated: November 2026 • Republic of Kenya
            </p>
          </div>
        </Container>
      </section>

      {/* Terms Sections */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {termsSections.map(({ icon: Icon, number, title, content }) => (
              <Card key={number} variant="white" hoverable padding="lg">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0B59ED]/10 flex items-center justify-center text-[#0B59ED] flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B59ED]">
                      Clause {number}
                    </span>
                    <h2 className="text-xl font-bold text-[#101926] mt-0.5">{title}</h2>
                  </div>
                </div>
                {content}
              </Card>
            ))}
          </div>

          {/* Legal Inquiry Card */}
          <div className="mt-16 bg-[#101926] rounded-2xl p-8 sm:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="neutral" size="sm" className="bg-white/10 text-white border-none">
                Legal &amp; Contracts
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Have Questions Regarding Contract Terms?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact our client relations team if you require a tailored Non-Disclosure Agreement (NDA) or custom Master Services Agreement (MSA).
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-4 text-left">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-[#0B59ED] mb-2" />
                  <p className="text-xs text-slate-400">Contracts Email</p>
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
                  <p className="text-xs text-slate-400">Registered Office</p>
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
