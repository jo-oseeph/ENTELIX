'use client';

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const posFeatures = [
  "Offline-first local SQLite engine with automated background cloud sync",
  "One-click Daraja M-Pesa STK push with instant payment callback",
  "Centralized multi-store inventory tracking & branch stock transfers",
  "Plug-and-play support for thermal receipt printers & barcode scanners",
  "Cryptographic cashier shift audits, tamper-proof X/Z reports & roles",
];

const entelworkFeatures = [
  "Self-service employee leave booking with operational handover tagging",
  "Multi-tier hierarchical manager approval chains with conflict alerts",
  "Built-in Kenyan Employment Act statutory leave accrual calculations",
  "Interactive department availability heatmap & team holiday calendar",
  "Automated WhatsApp & Email notifications with one-click PDF payroll export",
];

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="py-20 md:py-28 bg-[#F5F7FA] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <Container>
        {/* Section Header: Slide-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3.5 mb-14 md:mb-18"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#0A4FE0]">
            Our Products
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101926] tracking-tight leading-tight">
            Software Products Built for Modern Enterprises
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Proprietary software platforms engineered by Entelix to solve mission-critical operational challenges—built with offline resilience, high throughput, and modern usability.
          </p>
        </motion.div>

        {/* Two Cards Per Row: Staggered Slide-In Animations with Increased Border & CTA Brightness */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1: Entelix POS (Slide in from bottom-left) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl border border-[#0A4FE0]/50 shadow-[0_4px_20px_rgba(16,25,38,0.03)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(16,25,38,0.08)] transition-all duration-300 flex flex-col justify-between p-8 sm:p-10"
          >
            <div className="space-y-6">
              {/* Category label */}
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0A4FE0]">
                  Retail &amp; Commerce Platform
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101926] tracking-tight">
                  Entelix POS
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mt-3">
                  High-speed retail point of sale engineered for supermarkets, merchants, and multi-branch chains. Features split-second barcode processing, automated M-Pesa STK push, and uninterrupted offline continuity.
                </p>
              </div>

              {/* Product Features */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#101926]">
                  Key Capabilities
                </p>
                <div className="space-y-2.5">
                  {posFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0A4FE0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#64748B] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Vivid CTA Button */}
            <div className="pt-8 mt-6 border-t border-gray-100">
              <Link
                href="/products/entelix-pos"
                className="group/btn relative w-full inline-flex items-center justify-between px-7 py-4 rounded-2xl bg-[#0A4FE0] hover:bg-[#0840B8] text-white text-sm font-semibold shadow-[0_4px_16px_rgba(10,79,224,0.25)] hover:shadow-[0_8px_24px_rgba(10,79,224,0.38)] transition-all duration-200 active:scale-[0.98]"
              >
                <span className="tracking-wide">Learn More</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* CARD 2: Entelwork (Slide in with slight stagger delay) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl border border-[#0A4FE0]/50 shadow-[0_4px_20px_rgba(16,25,38,0.03)] hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(16,25,38,0.08)] transition-all duration-300 flex flex-col justify-between p-8 sm:p-10"
          >
            <div className="space-y-6">
              {/* Category label */}
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0A4FE0]">
                  Workforce &amp; HR Governance
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101926] tracking-tight">
                  Entelwork
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mt-3">
                  Automated leave management platform engineered to eliminate chaotic HR spreadsheets, uncoordinated team absences, and ensure complete labor law compliance.
                </p>
              </div>

              {/* Product Features */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#101926]">
                  Key Capabilities
                </p>
                <div className="space-y-2.5">
                  {entelworkFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#0A4FE0] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#64748B] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Vivid CTA Button */}
            <div className="pt-8 mt-6 border-t border-gray-100">
              <Link
                href="/products/entelwork"
                className="group/btn relative w-full inline-flex items-center justify-between px-7 py-4 rounded-2xl bg-[#0A4FE0] hover:bg-[#0840B8] text-white text-sm font-semibold shadow-[0_4px_16px_rgba(10,79,224,0.25)] hover:shadow-[0_8px_24px_rgba(10,79,224,0.38)] transition-all duration-200 active:scale-[0.98]"
              >
                <span className="tracking-wide">Learn More</span>
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-1 transition-transform duration-200">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
