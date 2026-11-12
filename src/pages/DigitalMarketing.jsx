'use client';

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <main className="min-h-screen py-24 px-6 text-center bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#0B59ED]">Digital Solutions</span>
        <h1 className="text-4xl font-bold text-[#101926] mt-3 mb-4">SEO &amp; Digital Optimization</h1>
        <p className="text-[#64748B] mb-8 leading-relaxed">
          Enhance your digital reach with data-driven search engine optimization, technical performance audits, and high-impact digital experiences.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B59ED] text-white font-medium hover:bg-[#0948c2] transition shadow-sm"
        >
          Discuss Your Growth
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </main>
  );
};

export default DigitalMarketing;
