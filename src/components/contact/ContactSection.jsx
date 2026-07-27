import { useState } from "react";
import "./ContactSection.css";

const RECEIVING_EMAIL = "you@entelix.co";

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

// const DECISION_ROLES = [
//   "I make the final call",
//   "I influence the decision",
//   "Just researching for now",
// ];

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

                  <p className="info-value">+254 719 238 337</p>
                </div>

                <div className="info-card">
                  <p className="info-label">Email</p>

                  <p className="info-value">hello@entelix.co</p>
                </div>

                <a
                  className="info-card"
                  href="https://wa.me/254719238337?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="info-label">WhatsApp</p>

                  <p className="info-value">0719 238 337</p>
                </a>

                <div className="info-card">
                  <p className="info-label">Response</p>

                  <p className="info-value">Within 24 Hours</p>
                </div>
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
