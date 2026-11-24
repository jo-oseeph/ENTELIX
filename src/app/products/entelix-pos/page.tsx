import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Store,
  WifiOff,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  Layers,
  Cpu,
  Receipt,
  ScanBarcode,
  Smartphone,
  HardDrive,
  RefreshCw,
  Clock,
  Building2,
  Lock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Entelix POS Case Study - Modern Retail & Multi-Branch Point of Sale",
  description:
    "An in-depth case study of Entelix POS: an offline-first, high-speed point of sale and retail intelligence system engineered for supermarkets, retail chains, and merchants.",
  alternates: {
    canonical: "https://entelix.co.ke/products/entelix-pos",
  },
};

const keyMetrics = [
  { value: "< 0.8s", label: "Checkout Transaction Speed", detail: "Instant barcode resolution & ticket finalization" },
  { value: "100%", label: "Offline Operational Continuity", detail: "Sales continue without interruption during internet outages" },
  { value: "0%", label: "Data Discrepancy Rate", detail: "Two-way automated background database synchronization" },
  { value: "15+ hrs", label: "Weekly Admin Time Saved", detail: "Automated end-of-day Z-reports and stock valuation" },
];

const hardwareSupport = [
  { name: "Thermal Receipt Printers", detail: "ESC/POS 58mm and 80mm high-speed USB, Ethernet, and Bluetooth thermal printers" },
  { name: "1D / 2D Barcode Scanners", detail: "Plug-and-play USB & wireless CCD/Laser barcode and QR scanners" },
  { name: "Electronic Cash Drawers", detail: "RJ11/RJ12 automated trigger drawers synchronized to successful receipt prints" },
  { name: "Customer Pole Displays", detail: "Real-time line item and total pricing feedback visible to the customer" },
];

export default function EntelixPOSCaseStudy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-20 md:pb-28 bg-[#101926] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0B59ED_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/#products"
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Products
              </Link>
              <span className="text-slate-600">•</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B59ED] text-white">
                <Store className="w-3.5 h-3.5" />
                Product Case Study
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Production Deployed
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Entelix POS: High-Speed Retail &amp; Multi-Branch Inventory Intelligence
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              An offline-first, high-throughput point of sale engineered to eliminate checkout lines, prevent stock shrinkage, and give retail executives instant visibility across multiple branch locations.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {keyMetrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#0B59ED]">{m.value}</p>
                  <p className="text-xs font-bold text-white mt-1">{m.label}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-tight">{m.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Request Live POS Demo
              </Button>
              <Button href="#architecture" variant="secondary" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Explore Architecture
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Visual Product Showcase / Terminal UI */}
      <section className="py-20 bg-[#F5F7FA] border-b border-[#E5E7EB]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <Badge variant="primary" size="sm">
                Interface &amp; Execution
              </Badge>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101926] tracking-tight">
                Designed for Cashier Speed and Store Manager Clarity
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] max-w-2xl mx-auto">
                Every screen is engineered with high ergonomic contrast, instant keyboard shortcuts, and zero unnecessary modals to keep lines moving.
              </p>
            </div>

            {/* Interactive Terminal Mockup */}
            <div className="bg-[#101926] rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 text-white">
              {/* Top Bar */}
              <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-sm font-bold tracking-wider">ENTELIX POS v2.4 • TERMINAL_01</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="px-2 py-1 rounded bg-white/10 text-slate-300">CASHIER: J. KAMAU</span>
                  <span className="px-2 py-1 rounded bg-[#0B59ED]/20 text-[#0B59ED] border border-[#0B59ED]/40">
                    BRANCH: WESTLANDS FLAGSHIP
                  </span>
                </div>
              </div>

              {/* POS Main Grid */}
              <div className="grid md:grid-cols-12 gap-6 pt-6">
                {/* Left: Product Catalog & Quick Categories (7 cols) */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                      Quick Items &amp; Barcode Input
                    </span>
                    <span className="text-xs font-mono text-emerald-400">Scanner [ACTIVE]</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <ScanBarcode className="w-5 h-5 text-[#0B59ED]" />
                    <input
                      type="text"
                      readOnly
                      value="Scan barcode or type SKU (e.g., 6161100234)..."
                      className="bg-transparent text-sm text-slate-300 w-full focus:outline-none font-mono"
                    />
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-400">
                      ENTER ↵
                    </span>
                  </div>

                  {/* Quick Category Grid */}
                  <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                    <div className="p-2.5 rounded-lg bg-[#0B59ED] text-white text-center cursor-pointer">
                      Beverages (24)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-center cursor-pointer border border-white/5">
                      Snacks &amp; Dry (48)
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-center cursor-pointer border border-white/5">
                      Personal Care (16)
                    </div>
                  </div>

                  {/* Sample Items */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { name: "Premium Arabica Coffee 500g", price: "KES 1,250", stock: "84 in stock" },
                      { name: "Mineral Spring Water 1.5L", price: "KES 120", stock: "320 in stock" },
                      { name: "Organic Honey Jar 500ml", price: "KES 850", stock: "42 in stock" },
                      { name: "Artisan Whole Wheat Loaf", price: "KES 200", stock: "19 in stock" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="p-3 rounded-xl bg-white/5 border border-white/5 hover:border-[#0B59ED] transition-colors cursor-pointer"
                      >
                        <p className="font-semibold text-white truncate">{item.name}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className="font-mono text-emerald-400 font-bold">{item.price}</span>
                          <span className="text-[10px] text-slate-400">{item.stock}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Cart & Tender Panel (5 cols) */}
                <div className="md:col-span-5 bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                      <span className="font-bold text-slate-300">ORDER TICKET #10482</span>
                      <span className="font-mono text-slate-400">3 ITEMS</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-white">Premium Arabica Coffee</p>
                          <p className="text-[10px] text-slate-400">1 × KES 1,250.00</p>
                        </div>
                        <span className="font-mono font-bold text-white">1,250.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-white">Mineral Spring Water 1.5L</p>
                          <p className="text-[10px] text-slate-400">2 × KES 120.00</p>
                        </div>
                        <span className="font-mono font-bold text-white">240.00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium text-white">Artisan Whole Wheat Loaf</p>
                          <p className="text-[10px] text-slate-400">1 × KES 200.00</p>
                        </div>
                        <span className="font-mono font-bold text-white">200.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Checkout calculations */}
                  <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Subtotal</span>
                      <span className="font-mono text-white">KES 1,690.00</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>VAT (16% Included)</span>
                      <span className="font-mono text-white">KES 233.10</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2 border-t border-white/10">
                      <span className="text-sm font-bold text-white">Total Amount</span>
                      <span className="text-2xl font-bold font-mono text-emerald-400">KES 1,690.00</span>
                    </div>

                    {/* Payment Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button className="py-2.5 px-3 rounded-lg bg-[#0B59ED] text-white text-xs font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5" />
                        M-Pesa STK
                      </button>
                      <button className="py-2.5 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1.5">
                        <Receipt className="w-3.5 h-3.5" />
                        Cash Tender
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* The Problem: Why Retailers Struggle with Generic Systems */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <Badge variant="neutral" size="sm">
                The Business Challenge
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101926] tracking-tight">
                The Retail Reality: Fragile Systems Destroy Margin &amp; Customer Trust
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Prior to implementing Entelix POS, retail merchants frequently faced three crippling operational failures with existing off-the-shelf and legacy desktop POS software:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="white" padding="lg" className="border-red-200">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-4">
                  <WifiOff className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2">1. The Internet Drop Freeze</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Cloud-only systems halt during fiber cuts or cellular network drops. Cashiers cannot scan items, customers abandon carts, and sales are permanently lost.
                </p>
              </Card>

              <Card variant="white" padding="lg" className="border-amber-200">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2">2. Multi-Branch Blindness</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Head offices had zero real-time knowledge of branch stock levels, leading to over-ordering in one outlet while another outlet stocked out of bestsellers.
                </p>
              </Card>

              <Card variant="white" padding="lg" className="border-orange-200">
                <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4">
                  <Receipt className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926] mb-2">3. M-Pesa Reconciliation Lag</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Cashiers manually entered M-Pesa confirmation codes from customer phones, causing fraudulent code submissions, typo errors, and daily 3-hour manual reconciliation marathons.
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* The Engineered Solution & Technical Architecture */}
      <section id="architecture" className="py-20 bg-[#F5F7FA] border-y border-[#E5E7EB]">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <Badge variant="primary" size="sm">
                Technical Architecture
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101926] tracking-tight">
                How Entelix POS Solved It: Offline-First SQLite Sync Engine
              </h2>
              <p className="text-base text-[#64748B] leading-relaxed">
                Rather than relying on continuous internet connectivity, Entelix POS utilizes an offline-first architecture where every terminal maintains an embedded high-speed SQLite database with bi-directional conflict resolution.
              </p>
            </div>

            {/* Architectural Pillars */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED]/10 text-[#0B59ED] flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926]">Local SQLite Transaction Storage</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Every scan, cart change, and tender is committed locally in &lt; 0.05ms. Terminals continue at 100% full speed even when disconnected from the internet for weeks.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED]/10 text-[#0B59ED] flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926]">Background Delta Syncing</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  As soon as connectivity is restored, the terminal securely batches and streams encrypted transaction deltas to the centralized cloud database with zero cashier intervention.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED]/10 text-[#0B59ED] flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926]">Direct Daraja M-Pesa STK Push</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  When a customer chooses M-Pesa, the cashier presses one button. A secure STK prompt arrives on the customer&apos;s phone immediately. Once PIN is entered, the POS registers receipt confirmation automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5E7EB] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#0B59ED]/10 text-[#0B59ED] flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#101926]">Cryptographic Shift Auditing</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  Cashiers cannot edit closed transactions. Cash drawer openings without a sale trigger security log entries, and end-of-day X/Z reports are tamper-proof.
                </p>
              </div>
            </div>

            {/* Hardware Compatibility */}
            <div className="p-8 rounded-2xl bg-[#101926] text-white space-y-6">
              <h3 className="text-xl font-bold">Tested Hardware &amp; Peripheral Compatibility</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {hardwareSupport.map((hw) => (
                  <div key={hw.name} className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-bold text-white">{hw.name}</p>
                    <p className="text-xs text-slate-300 mt-1">{hw.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#101926] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="neutral" size="sm" className="bg-white/10 text-white border-none">
              Deploy Entelix POS
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready to Modernize Your Retail Store or Chain?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Book a live demonstration with our product engineers or pilot Entelix POS in your stores.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Book a Guided Demonstration
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

