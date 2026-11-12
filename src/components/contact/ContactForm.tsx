'use client';

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

const RECEIVING_EMAIL = "entelixtech@gmail.com";

const PROJECT_TYPES = [
  "Custom Software Development",
  "Web Application / Portal",
  "Mobile App (iOS & Android)",
  "E-Commerce Platform",
  "Cloud & DevOps Migration",
  "UI/UX & Branding",
  "Other Consultation",
];

const BUDGETS = [
  "Under KSh 50,000",
  "KSh 50,000 – KSh 150,000",
  "KSh 150,000 – KSh 300,000",
  "KSh 300,000+",
  "To be determined",
];

const TIMELINES = [
  "Immediate (ASAP)",
  "Within 1 month",
  "1 – 3 months",
  "3+ months",
  "Flexible timeline",
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECEIVING_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry from ${form.fullName} (${form.company || "Individual"})`,
          ...form,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#101926] text-sm placeholder:text-[#64748B]/60 outline-none transition-all duration-200 focus:border-[#0B59ED] focus:ring-4 focus:ring-[#0B59ED]/10";

  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 md:p-10 shadow-xs">
      <h2 className="text-2xl font-bold text-[#101926] mb-2">
        Tell Us About Your Project
      </h2>
      <p className="text-sm text-[#64748B] mb-8">
        Fill out the details below and an engineering consultant will contact you within 24 hours.
      </p>

      {status === "success" && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Inquiry sent successfully!</p>
            <p className="text-emerald-700 mt-0.5">
              Thank you for reaching out. A senior member of our team will review your requirements and follow up promptly.
            </p>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold">Unable to submit form</p>
            <p className="text-red-700 mt-0.5">
              An error occurred while sending your message. Please reach out to us directly at info@entelix.co.ke or via WhatsApp.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Full Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Business Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+254 700 000 000"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Company / Organization
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              placeholder="Company or project name"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label htmlFor="projectType" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={form.projectType}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="" disabled>Select service</option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="" disabled>Select range</option>
              {BUDGETS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
              Desired Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="" disabled>Select timeline</option>
              {TIMELINES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-xs font-semibold text-[#101926] uppercase tracking-wider mb-2">
            Project Overview &amp; Objectives *
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            required
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your current system or what you would like to build..."
            className={`${inputClasses} resize-none`}
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={status === "submitting"}
            rightIcon={<Send className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Submit Project Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
}

