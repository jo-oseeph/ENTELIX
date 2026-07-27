import React from "react";
import CHeroSection from "../components/contact/HeroSection";
import ContactSection from "../components/contact/ContactSection";
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
      <CHeroSection />
      <ContactSection />
        
      
    </main>
  );
};

export default Contact;
