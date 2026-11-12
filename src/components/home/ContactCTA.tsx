import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function ContactCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#101926] text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0B59ED]/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0B59ED] bg-[#0B59ED]/10 border border-[#0B59ED]/30">
            Start Your Next Initiative
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Let&apos;s Build Something That Moves Your Business Forward.
          </h2>

          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Whether you need custom enterprise software, a high-performance web application, or cloud migration, our engineering team is ready to evaluate your requirements and deliver reliable results.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-lg shadow-[#0B59ED]/30"
            >
              Start Your Project Consultation
            </Button>
            <Button
              href="https://wa.me/254719238337?text=Hi%20Entelix%2C%20I%20would%20like%20to%20discuss%20a%20project."
              variant="outline"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4 text-[#0B59ED]" />}
              className="w-full sm:w-auto bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/40"
            >
              Quick WhatsApp Chat
            </Button>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            No obligation consultation • Tailored project estimates • Typical response within 24 hours
          </p>
        </div>
      </Container>
    </section>
  );
}

