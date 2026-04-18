import React from "react";
import HeroSection from "../components/contact/HeroSection";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <main>
      <SEO
        title="Contact Us - Get Your Project Started Today | ENTELIX Kenya"
        description="Ready to transform your business? Contact ENTELIX for expert digital solutions in Kenya. Get a free consultation for web development, cloud solutions, mobile apps, and digital marketing services."
        keywords="contact entelix Kenya, digital solutions consultation Nairobi, web development quote Kenya, software development contact East Africa, IT consulting contact Kenya"
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
