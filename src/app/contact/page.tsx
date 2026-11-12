import React from "react";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Start Your Project",
  description:
    "Get in touch with the Entelix Technologies engineering team to discuss your software development, web application, or cloud project.",
  alternates: {
    canonical: "https://entelix.co.ke/contact",
  },
};

const directChannels = [
  {
    icon: Phone,
    title: "Phone Support",
    value: "+254 719 238 337",
    href: "tel:+254719238337",
    subtext: "Mon – Fri, 8:00 AM – 6:00 PM EAT",
  },
  {
    icon: Mail,
    title: "Direct Email",
    value: "info@entelix.co.ke",
    href: "mailto:info@entelix.co.ke",
    subtext: "Typical response within 24 hours",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp Chat",
    value: "+254 719 238 337",
    href: "https://wa.me/254719238337?text=Hi%20Entelix%2C%20I%20would%20like%20to%20discuss%20a%20project.",
    subtext: "Instant messaging & fast inquiries",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Nairobi, Kenya",
    subtext: "Serving clients in East Africa and globally",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="primary" size="md" dot>
              Get in Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
              Let&apos;s Discuss Your Next Software Initiative
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
              Whether you need to architect a custom platform, modernize legacy systems, or explore technical solutions, our engineering consultants are here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#101926] mb-3">
                  Direct Communication Channels
                </h2>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  We maintain open, transparent communication with all prospective and existing partners. Reach out through any of our official channels below.
                </p>
              </div>

              <div className="space-y-4">
                {directChannels.map((c) => {
                  const Icon = c.icon;
                  const Wrapper = c.href ? "a" : "div";
                  return (
                    <Wrapper
                      key={c.title}
                      {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: c.href.startsWith("http") ? "noopener noreferrer" : undefined } : {})}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-[#E5E7EB] bg-[#F5F7FA]/70 hover:bg-white hover:border-[#0B59ED]/30 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] text-[#0B59ED] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B59ED] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-[#64748B] uppercase tracking-wider">
                          {c.title}
                        </p>
                        <p className="text-base font-bold text-[#101926] mt-0.5 group-hover:text-[#0B59ED] transition-colors truncate">
                          {c.value}
                        </p>
                        <p className="text-xs text-[#64748B] mt-0.5">
                          {c.subtext}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Consultation guarantee card */}
              <div className="p-6 rounded-2xl bg-[#101926] text-white space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0B59ED] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Assured</span>
                </div>
                <h3 className="text-base font-bold text-white">
                  NDA &amp; Intellectual Property Protection
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  All discussions, product ideas, and business specifications shared with Entelix Technologies are strictly confidential.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
