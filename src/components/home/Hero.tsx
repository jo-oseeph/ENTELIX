'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-20 lg:pb-32 bg-white">
      {/* Subtle modern background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(#101926 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gentle ambient light glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#0B59ED]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Supporting Text, CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="primary" size="md" dot>
                Software Engineering &amp; Digital Solutions
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#101926] tracking-tight leading-[1.12]">
              We Build High-Performance{" "}
              <span className="text-[#0B59ED]">Digital Solutions.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              We help businesses transform ideas into powerful digital experiences through custom software, web applications and modern technology solutions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md shadow-[#0B59ED]/20"
              >
                Let&apos;s Talk
              </Button>
              <Button
                href="#services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Key trust indicators */}
            <div className="pt-8 border-t border-[#E5E7EB] flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-10 text-xs font-semibold text-[#64748B]">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#0B59ED]" />
                <span>Custom Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0B59ED]" />
                <span>Enterprise Reliability</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0B59ED]" />
                <span>Scalable Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Quality Workspace & Laptop Mockup (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Workspace Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0_20px_50px_rgba(16,25,38,0.08)] bg-[#F5F7FA]">
                <div className="relative h-[340px] sm:h-[400px] w-full">
                  <Image
                    src="/her2.jpg" 
                    alt="Software engineer working at modern workspace at Entelix Technologies"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle gradient vignette to blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101926]/75 via-transparent to-black/10" />
                </div>

                {/* Branded Screen Overlay Card at bottom of photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#0B59ED] text-white flex items-center justify-center font-bold text-sm shadow-xs flex-shrink-0">
                        EX
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold text-[#101926] truncate">
                          Entelix Digital Core
                        </span>
                        <span className="text-[11px] text-[#64748B]">
                          High-Performance Architecture
                        </span>
                      </div>
                    </div>
                    <Badge variant="primary" size="sm" dot>
                      Live
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Floating Performance Metric Card (top right) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -right-2 sm:-right-4 bg-white rounded-xl p-3 sm:p-3.5 border border-[#E5E7EB] shadow-lg flex items-center gap-3 z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-[#EBF2FE] text-[#0B59ED] flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-[#64748B] tracking-wider">
                    Performance
                  </p>
                  <p className="text-xs font-bold text-[#101926]">
                    99.9% Uptime Grade
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

