import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService: ${formData.service}\nTimeline: ${formData.timeline}\n\nProject Details:\n${formData.message}`
    );
    window.location.href = `mailto:contact@entelix.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-2xl p-8 space-y-4"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
        />
        <input
          type="text"
          name="service"
          placeholder="Service Interested In"
          value={formData.service}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
        />
      </div>

      <input
        type="text"
        name="timeline"
        placeholder="Project Timeline"
        value={formData.timeline}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Project Details..."
        value={formData.message}
        onChange={handleChange}
        className="border rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500/40"
        required
      />

      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition"
      >
        Submit Message
      </button>
    </form>
  );
};

export default ContactForm;
