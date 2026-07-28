import { useState } from "react";
import "./ContactSection.css";

const RECEIVING_EMAIL = "entelixtech@gmail.com";

const PROJECT_TYPES = [
  "Website",
  "Web App",
  "Mobile App",
  "Custom Software",
  "Saas Platform",
  "Other",
];

const BUDGETS = [
  "Under ksh 50,000",
  "ksh 50,000 – ksh 150,000",
  "ksh 150,000 – ksh 300,000",
  "ksh 300,000+",
];

const TIMELINES = ["ASAP", "1–2 Months", "2–4 Months", "Flexible"];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  businessDetails: "",
  projectType: "",
  description: "",
  budget: "",
  timeline: "",
  notes: "",
};

// Small inline icons — kept dependency-free rather than pulling in
// an icon library for four glyphs.
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Input = ({ label, required, ...props }) => (
  <div className="form-group">
    <input
      className="form-control"
      placeholder={`${label}${required ? " *" : ""}`}
      required={required}
      {...props}
    />
  </div>
);

const Select = ({ label, required, options, ...props }) => (
  <div className="form-group">
    <select
      className="form-control"
      required={required}
      defaultValue=""
      {...props}
    >
      <option value="" disabled hidden>
        {label}
        {required ? " *" : ""}
      </option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const TextArea = ({ label, required, ...props }) => (
  <div className="form-group">
    <textarea
      rows={4}
      className="form-control"
      placeholder={`${label}${required ? " *" : ""}`}
      required={required}
      {...props}
    />
  </div>
);

const ContactSection = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const update = (key) => (e) => {
    setForm((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("submitting");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECEIVING_EMAIL}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry - ${form.company || form.fullName}`,
          ...form,
        }),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-layout">
            <div>
              <h2 className="contact-title">Let's Build Something Great.</h2>

              <p className="contact-description">
                Whether you're launching a startup, upgrading an existing
                platform, or building custom software, we're ready to help.
              </p>

              <div className="info-grid">
                <div className="info-card">
                  <p className="info-label">Phone</p>
                  <div className="info-row">
                    <div className="info-icon">
                      <PhoneIcon />
                    </div>
                    <p className="info-value">+254 719 238 337</p>
                  </div>
                </div>

                <div className="info-card">
                  <p className="info-label">Email</p>
                  <div className="info-row">
                    <div className="info-icon">
                      <MailIcon />
                    </div>
                    <p className="info-value">info@entelix.co.ke</p>
                  </div>
                </div>

                <a
                  className="info-card"
                  href="https://wa.me/254719238337?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="info-label">WhatsApp</p>
                  <div className="info-row">
                    <div className="info-icon">
                      <ChatIcon />
                    </div>
                    <p className="info-value">0719 238 337</p>
                  </div>
                </a>

              </div>
            </div>

            {/* RIGHT */}

            <div>
              <h3 className="form-title">Tell Us About Your Project</h3>

              <p className="form-description">
                Fill out the form below and we'll reach out with the next steps.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <Input
                  label="Your Name"
                  required
                  value={form.fullName}
                  onChange={update("fullName")}
                />

                <Input
                  label=" Your Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                />

                <Input
                  label=" Your Phone Number"
                  required
                  value={form.phone}
                  onChange={update("phone")}
                />

                <Select
                  label="Project Type"
                  required
                  options={PROJECT_TYPES}
                  value={form.projectType}
                  onChange={update("projectType")}
                />

                <Select
                  label="Budget"
                  required
                  options={BUDGETS}
                  value={form.budget}
                  onChange={update("budget")}
                />

                <Select
                  label="Timeline"
                  required
                  options={TIMELINES}
                  value={form.timeline}
                  onChange={update("timeline")}
                />

                <div className="full-width">
                  <TextArea
                    label="Project Description"
                    required
                    value={form.description}
                    onChange={update("description")}
                  />
                </div>

                <div className="form-footer">
                  <p className="status">
                    {status === "success" && "Inquiry received."}

                    {status === "error" && "Submission failed."}
                  </p>

                  <button type="submit" className="submit-btn">
                    {status === "submitting"
                      ? "Submitting..."
                      : "Submit Project Inquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;