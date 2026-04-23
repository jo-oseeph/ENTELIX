import React from "react";
import HeroSection from "../components/contact/HeroSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <main>
     <SEO
  title="Contact Entelix | Start Your Website or Software Project"
  description="Get in touch with Entelix to discuss your website or custom software project. We build solutions that streamline operations and support business growth."
  keywords="contact Entelix, web development Kenya, software development Kenya, business automation Nairobi, custom software contact"
  url="/contact"
/>
      <HeroSection />
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Contact;
