import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Store,
  CalendarCheck,
  ScanBarcode,
  Receipt,
  Smartphone,
  WifiOff,
  Users,
  Calendar,
  Bell,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

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
        {/* Section Header: Our Products, Title, Brief Description */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 md:mb-20">
          <Badge variant="primary" size="md" dot>
            Our Products
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#101926] tracking-tight leading-tight">
            Software Products Built for Modern Enterprises
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Proprietary software platforms engineered by Entelix to solve mission-critical operational challenges—built with offline resilience, high throughput, and modern usability.
          </p>
        </div>

        {/* Two Cards Per Row Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1: Entelix POS */}
          <div className="group bg-white rounded-3xl border border-[#E5E7EB] hover:border-[#0B59ED]/40 shadow-[0_4px_24px_rgba(16,25,38,0.04)] hover:shadow-[0_12px_40px_rgba(11,89,237,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Card Header & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B59ED]/10 text-[#0B59ED]">
                  <Store className="w-3.5 h-3.5" />
                  Retail &amp; Commerce Platform
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101926] tracking-tight group-hover:text-[#0B59ED] transition-colors">
                  Entelix POS
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mt-2.5">
                  High-speed retail point of sale engineered for supermarkets, merchants, and multi-branch chains. Features split-second barcode processing, automated M-Pesa STK push, and uninterrupted offline continuity.
                </p>
              </div>

              {/* Futuristic Interactive Terminal Mockup */}
              <div className="bg-[#101926] rounded-2xl p-4 sm:p-5 text-white shadow-lg border border-white/10 space-y-3">
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-slate-300 text-[11px]">REGISTER #01 • FLAGSHIP STORE</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    OFFLINE-SYNC READY
                  </span>
                </div>

                {/* Scanned Cart Feed */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
                    <div>
                      <p className="font-semibold text-white">Wireless Barcode Scanner</p>
                      <p className="text-[10px] text-slate-400">SKU-4920 • 1 × KES 4,500</p>
                    </div>
                    <span className="font-mono font-bold text-white">4,500.00</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
                    <div>
                      <p className="font-semibold text-white">80mm Thermal Receipt Rolls (Box)</p>
                      <p className="text-[10px] text-slate-400">SKU-1084 • 2 × KES 1,800</p>
                    </div>
                    <span className="font-mono font-bold text-white">3,600.00</span>
                  </div>
                </div>

                {/* Live Total & Quick Tender */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Total Payable</span>
                    <p className="text-lg font-bold font-mono text-emerald-400">KES 8,100.00</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2.5 py-1 rounded bg-[#0B59ED] text-white text-[11px] font-semibold flex items-center gap-1">
                      <Smartphone className="w-3 h-3" /> M-Pesa STK
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/10 text-slate-300 text-[11px] font-medium">
                      Cash
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Features */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#101926]">
                  Key Capabilities
                </p>
                <div className="space-y-2">
                  {posFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 mt-6">
              <Button
                href="/products/entelix-pos"
                variant="primary"
                size="md"
                className="w-full justify-center group-hover:shadow-[0_4px_16px_rgba(11,89,237,0.3)] transition-all"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More &amp; Case Study
              </Button>
            </div>
          </div>

          {/* CARD 2: Entelwork */}
          <div className="group bg-white rounded-3xl border border-[#E5E7EB] hover:border-[#0B59ED]/40 shadow-[0_4px_24px_rgba(16,25,38,0.04)] hover:shadow-[0_12px_40px_rgba(11,89,237,0.08)] transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="p-6 sm:p-8 space-y-6">
              {/* Card Header & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B59ED]/10 text-[#0B59ED]">
                  <CalendarCheck className="w-3.5 h-3.5" />
                  Workforce &amp; HR Governance
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Production Ready
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101926] tracking-tight group-hover:text-[#0B59ED] transition-colors">
                  Entelwork
                </h3>
                <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mt-2.5">
                  Automated leave management platform engineered to eliminate chaotic HR spreadsheets, uncoordinated team absences, and ensure complete labor law compliance.
                </p>
              </div>

              {/* Futuristic Interactive HR Board Mockup */}
              <div className="bg-[#101926] rounded-2xl p-4 sm:p-5 text-white shadow-lg border border-white/10 space-y-3">
                {/* HR Board Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0B59ED] animate-pulse" />
                    <span className="font-mono text-slate-300 text-[11px]">ENTELWORK HR BOARD • 2026 CYCLE</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0B59ED]/20 text-[#0B59ED] border border-[#0B59ED]/40">
                    LABOR ACT COMPLIANT
                  </span>
                </div>

                {/* Balances Mini Row */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Annual</span>
                    <p className="font-bold text-white text-sm">18.5 Days</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Sick</span>
                    <p className="font-bold text-white text-sm">30 Days</p>
                  </div>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5">
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Capacity</span>
                    <p className="font-bold text-emerald-400 text-sm">94% Active</p>
                  </div>
                </div>

                {/* Pending Request Snippet */}
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-white">Lead Engineer Leave Request</p>
                    <p className="text-[10px] text-slate-400">Annual (3 Days) • Handover verified</p>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-1 rounded bg-[#0B59ED] text-white text-[10px] font-semibold">
                      Approve
                    </span>
                  </div>
                </div>
              </div>

              {/* Product Features */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#101926]">
                  Key Capabilities
                </p>
                <div className="space-y-2">
                  {entelworkFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0B59ED] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="p-6 sm:p-8 pt-0 border-t border-gray-100 mt-6">
              <Button
                href="/products/entelwork"
                variant="primary"
                size="md"
                className="w-full justify-center group-hover:shadow-[0_4px_16px_rgba(11,89,237,0.3)] transition-all"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More &amp; Case Study
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
