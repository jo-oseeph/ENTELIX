'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] lg:max-h-[900px] flex items-center py-12 md:py-16 lg:py-20 bg-white">
      {/* Subtle modern background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#101926 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gentle ambient light glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0B59ED]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Supporting Text, Modern CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#101926] tracking-tight leading-[1.14]">
              We Build High-Performance{" "}
              <span className="text-[#0B59ED]">Digital Solutions.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We help businesses transform ideas into powerful digital experiences through custom software, web applications and modern technology solutions.
            </p>

            {/* Modern CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA: Let's Talk */}
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0B59ED] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(11,89,237,0.25)] hover:bg-[#0948c2] hover:shadow-[0_6px_20px_rgba(11,89,237,0.35)] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Let&apos;s Talk</span>
                <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform duration-200">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>

              {/* Secondary CTA: Explore Products */}
              <Link
                href="/#products"
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#F5F7FA] text-[#101926] font-semibold text-sm border border-[#E5E7EB] hover:bg-white hover:border-[#CBD5E1] hover:shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <Layers className="w-4 h-4 text-[#0B59ED] group-hover:scale-110 transition-transform duration-200" />
                <span>Explore Products</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Clean Workspace & Screen Mockup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Workspace Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_16px_40px_rgba(16,25,38,0.06)] bg-[#F5F7FA]">
                <div className="relative h-[320px] sm:h-[370px] lg:h-[400px] w-full">
                  <Image
                    src="/hero1.jpg"
                    alt="Software engineer working at modern workspace at Entelix Technologies"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101926]/70 via-transparent to-black/10" />
                </div>

                {/* Branded Screen Overlay at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-white/80 shadow-md">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-[#0B59ED] text-white flex items-center justify-center font-bold text-xs shadow-xs flex-shrink-0">
                        EX
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-[#101926] truncate">
                          Entelix Digital Core
                        </span>
                        <span className="text-[11px] text-[#64748B] truncate">
                          High-Performance Digital Solutions
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EBF2FE] text-[#0B59ED] border border-[#0B59ED]/15 flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B59ED] animate-pulse" />
                      Live
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
