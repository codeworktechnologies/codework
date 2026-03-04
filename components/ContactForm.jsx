"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = "Valid email is required.";
    if (!form.service.trim()) nextErrors.service = "Please choose a service.";
    if (form.message.trim().length < 20) nextErrors.message = "Message must be at least 20 characters.";
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);

    // TODO: Connect to Django DRF API
    // Example: POST /api/contact/ with form payload

    setForm(initialState);
  };

  return (
    <div className="card-surface p-6 md:p-8">
      <h3 className="display-font text-2xl font-bold text-slate-900 dark:text-white">Request a Consultation</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Share your goals. We reply within one business day.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Full Name
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 dark:border-slate-700"
              placeholder="John Carter"
            />
            {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}
          </label>

          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Work Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 dark:border-slate-700"
              placeholder="name@company.com"
            />
            {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Company
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm((prev) => ({ ...prev, company: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 dark:border-slate-700"
              placeholder="Your organization"
            />
          </label>

          <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
            Service Required
            <select
              value={form.service}
              onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 dark:border-slate-700"
            >
              <option value="">Select one</option>
              <option value="Custom Software Development">Custom Software Development</option>
              <option value="Website Development">Website Development</option>
              <option value="E-Commerce Solutions">E-Commerce Solutions</option>
              <option value="Business Automation Systems">Business Automation Systems</option>
              <option value="Mobile App Development">Mobile App Development</option>
            </select>
            {errors.service && <span className="mt-1 block text-xs text-red-600">{errors.service}</span>}
          </label>
        </div>

        <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
          Project Details
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none transition focus:border-blue-500 dark:border-slate-700"
            placeholder="Tell us about your project requirements..."
          />
          {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message}</span>}
        </label>

        <button type="submit" className="button-primary w-full">
          Send Request
        </button>
      </form>

      {submitted && (
        <p className="mt-4 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300">
          Thank you. Your request has been captured successfully.
        </p>
      )}
    </div>
  );
}
