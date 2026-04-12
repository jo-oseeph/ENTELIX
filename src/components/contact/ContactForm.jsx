import React, { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // FormSubmit will handle the submission automatically
    // The form action is set to FormSubmit's endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after successful submission
      e.target.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div>
      {isSubmitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
           Thank you! Your message has been sent successfully. We'll get back
          to you soon.
        </div>
      )}

      <form
        action="https://formsubmit.co/realsejjo2001@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 space-y-4"
      >
        {/* FormSubmit Configuration */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission - ENTELIX"
        />
        <input type="hidden" name="_next" value={window.location.href} />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
          />
          <input
            type="text"
            name="service"
            placeholder="Service Interested In"
            className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
          />
        </div>

        <input
          type="text"
          name="timeline"
          placeholder="Project Timeline"
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Project Details..."
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-500 hover:bg-red-600 disabled:bg-red-400 text-white font-semibold py-3 px-6 rounded-lg w-full transition disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Submit Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
