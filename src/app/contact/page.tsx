import CHeroSection from "@/components/contact/HeroSection";
import ContactSection from "@/components/contact/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Let's Build Together",
  description:
    "Get in touch with Entelix Technologies to discuss your custom software, web application, or enterprise engineering project.",
  alternates: {
    canonical: "https://entelix.co.ke/contact",
  },
};

export default function ContactPage() {
  return (
    <div>
      <CHeroSection />
      <ContactSection />
    </div>
  );
}

