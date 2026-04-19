import React, { useState, useRef } from "react";
import { Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("https://formsubmit.co/ajax/entelixtech@gmail.com", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(formRef.current),
    })
      .then((res) => res.json())
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch(() => setIsSubmitting(false));
  };

  const inputClass =
    "border border-blue-950/30 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-950/40 focus:border-blue-950 transition text-sm text-gray-800 placeholder:text-gray-400";

  return (
    <div>
      {isSubmitted && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-sm text-green-800 font-medium">
            Thank you! Your message has been sent. We'll get back to you soon.
          </p>
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-8 space-y-4"
      >
        {/* FormSubmit config */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Contact Form Submission - ENTELIX" />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className={inputClass}
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className={inputClass}
        />

        {/* Subject */}
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className={inputClass}
        />

        {/* Message */}
        <textarea
          name="message"
          rows="5"
          placeholder="Your message..."
          required
          className={`${inputClass} resize-none`}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 w-full py-3 rounded-lg
            bg-red-500 hover:bg-red-600 disabled:opacity-60 disabled:cursor-not-allowed
            text-white font-semibold text-sm transition"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" strokeWidth={2} />
              Submit Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;