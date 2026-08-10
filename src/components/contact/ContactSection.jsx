import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

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

const fieldClasses =
  "w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-[#0B2153] text-sm placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E93930] focus:ring-4 focus:ring-[#E93930]/10";

const Input = ({ label, required, ...props }) => (
  <div className="flex flex-col">
    <input
      className={fieldClasses}
      placeholder={`${label}${required ? " *" : ""}`}
      required={required}
      {...props}
    />
  </div>
);

const Select = ({ label, required, options, ...props }) => (
  <div className="flex flex-col">
    <select className={`${fieldClasses} appearance-none`} required={required} defaultValue="" {...props}>
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
  <div className="flex flex-col">
    <textarea
      rows={4}
      className={`${fieldClasses} resize-none`}
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
        headers: { Accept: "application/json" },
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

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+254 719 238 337", href: null },
    { icon: Mail, label: "Email", value: "info@entelix.co.ke", href: null },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "0719 238 337",
      href: "https://wa.me/254719238337?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-14 items-start">

          {/* LEFT — intro + contact details */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#0B2153" }}>
              Let's Build Something Great.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're launching a startup, upgrading an existing
              platform, or building custom software, we're ready to help.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? "a" : "div";
                return (
                  <Wrapper
                    key={label}
                    {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 rounded-2xl p-5 border border-slate-200/70 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "linear-gradient(160deg, #f3f7f6 0%, #eef3f2 45%, #e9efee 100%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 16px 32px rgba(11,33,83,0.10)";
                      e.currentTarget.style.borderColor = "rgba(233,57,48,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.borderColor = "rgba(226,232,240,0.7)";
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(233,57,48,0.12)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: "#E93930" }} strokeWidth={1.9} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: "#0B2153" }}>
                        {label}
                      </p>
                      <p className="text-sm text-gray-500">{value}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl shadow-slate-200/60">
            <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#0B2153" }}>
              Tell Us About Your Project
            </h3>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Fill out the form below and we'll reach out with the next steps.
            </p>

            <form className="grid sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
              <Input label="Your Name" required value={form.fullName} onChange={update("fullName")} />
              <Input label="Your Email" type="email" required value={form.email} onChange={update("email")} />
              <Input label="Your Phone Number" required value={form.phone} onChange={update("phone")} />
              <Select label="Project Type" required options={PROJECT_TYPES} value={form.projectType} onChange={update("projectType")} />
              <Select label="Budget" required options={BUDGETS} value={form.budget} onChange={update("budget")} />
              <Select label="Timeline" required options={TIMELINES} value={form.timeline} onChange={update("timeline")} />

              <div className="sm:col-span-2">
                <TextArea label="Project Description" required value={form.description} onChange={update("description")} />
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-1">
                <p className="text-xs text-gray-500">
                  {status === "success" && "Inquiry received."}
                  {status === "error" && "Submission failed."}
                </p>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-7 py-3 rounded-lg font-semibold text-sm text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#E93930" }}
                  onMouseEnter={(e) => {
                    if (status !== "submitting") e.currentTarget.style.backgroundColor = "#c92f28";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#E93930";
                  }}
                >
                  {status === "submitting" ? "Submitting..." : "Submit Project Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;