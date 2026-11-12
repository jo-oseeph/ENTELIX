'use client';

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  const phoneNumber = "254719238337";
  const message = encodeURIComponent(
    "Hi Entelix! I'm interested in discussing a software project."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group flex items-center gap-2.5 focus:outline-none"
          aria-label="Chat with Entelix on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tooltip on left of button */}
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-lg bg-[#101926] text-white text-xs font-semibold shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us
          </span>

          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping" />
            <div className="relative w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95">
              <FaWhatsapp className="w-6 h-6" />
            </div>
          </div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

