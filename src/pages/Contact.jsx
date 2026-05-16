import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import MagneticButton from "@/components/MagneticButton";

const API = "/api";


export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    target_market: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [focused, setFocused] = useState(null);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.target_market) {
      toast.error("Please fill name, email, company, and target market.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/leads`, { ...form, source: "contact_form" });
      setDone(true);
      toast.success("Thanks. Someone from our team will reach out shortly.");
    } catch (err) {
      const msg =
        err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-4 py-3 rounded-sm outline-none transition-all duration-200";
  const inputStyle = (name) => ({
    background: "var(--bp-bg)",
    color: "var(--bp-fg)",
    border:
      focused === name
        ? "1px solid var(--bp-accent)"
        : "1px solid var(--bp-border)",
    boxShadow:
      focused === name ? "0 0 0 3px var(--bp-accent-soft)" : "none",
  });

  return (
    <div data-testid="page-contact">
      {/* HERO with side info cards */}
      <section
        className="relative overflow-hidden border-b bp-spotlight"
        style={{ borderColor: "var(--bp-border)" }}
      >
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-14 sm:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <div
                  className="text-xs tracking-[0.2em] uppercase mono"
                  style={{ color: "var(--bp-accent)" }}
                >
                  Claim your 20 leads
                </div>
                <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium leading-[1.05]">
                  Tell us who you want to talk to.
                </h1>
                <p
                  className="mt-6 max-w-2xl leading-relaxed"
                  style={{ color: "var(--bp-fg-2)" }}
                >
                  Share your target market. We build a free list of{" "}
                  <span className="green-underline">20 verified leads</span>{" "}
                  with trigger events, pain points, and ICP scoring, delivered
                  in <span className="green-underline">48 hours</span>.
                </p>
              </Reveal>
            </div>

            <aside className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              <Reveal delay={80}>
                <div
                  className="p-5 rounded-sm bp-hover-lift h-full"
                  style={{
                    border: "1px solid var(--bp-border)",
                    background: "var(--bp-bg-2)",
                  }}
                >
                  <div
                    className="text-xs tracking-[0.2em] uppercase mono"
                    style={{ color: "var(--bp-fg-3)" }}
                  >
                    What you get
                  </div>
                  <ul
                    className="mt-3 space-y-2 text-sm"
                    style={{ color: "var(--bp-fg)" }}
                  >
                    {[
                      "20 verified contacts from your target market",
                      "21 data fields per lead with trigger events",
                      "ICP tier scoring",
                      "Delivered in 48 hours, no obligation",
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: "var(--bp-accent)" }}
                        />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div
                  className="p-5 rounded-sm bp-hover-lift h-full"
                  style={{
                    border: "1px solid var(--bp-border)",
                    background: "var(--bp-bg-2)",
                  }}
                >
                  <div
                    className="text-xs tracking-[0.2em] uppercase mono"
                    style={{ color: "var(--bp-fg-3)" }}
                  >
                    Prefer email?
                  </div>
                  <a
                    href="mailto:hello@blueprynt.io"
                    className="mt-3 inline-block transition-colors hover:text-[var(--bp-accent)]"
                    style={{ color: "var(--bp-fg)" }}
                    data-testid="contact-email-link"
                  >
                    hello@blueprynt.io
                  </a>
                  <div
                    className="mt-2 text-sm"
                    style={{ color: "var(--bp-fg-2)" }}
                  >
                    Mumbai, India. Working with the US, UK, EU, and Australia.
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* FORM + CALENDLY side by side */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form column */}
          <div data-testid="contact-form-column">
            {done ? (
              <Reveal>
                <div
                  className="p-8 rounded-sm h-full"
                  style={{
                    border: "1px solid var(--bp-accent)",
                    background: "var(--bp-accent-soft)",
                  }}
                  data-testid="contact-success"
                >
                  <div
                    className="flex items-center gap-3"
                    style={{ color: "var(--bp-accent)" }}
                  >
                    <CheckCircle2 size={20} />
                    <span className="mono text-xs tracking-[0.2em] uppercase">
                      Received
                    </span>
                  </div>
                  <h2 className="mt-4 text-2xl sm:text-3xl tracking-tight font-medium">
                    Got it. Someone from our team will reach out shortly.
                  </h2>
                  <p
                    className="mt-4 leading-relaxed"
                    style={{ color: "var(--bp-fg-2)" }}
                  >
                    Thanks for reaching out. We have sent a confirmation to{" "}
                    <span style={{ color: "var(--bp-fg)" }}>{form.email}</span>.
                    Someone from the Blueprynt team will be in touch within 24
                    hours to schedule a quick discovery call. After that call,
                    if we are a fit, we build your free 20-lead proof of value.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal>
                <form
                  onSubmit={submit}
                  noValidate
                  className="p-6 sm:p-8 rounded-sm h-full"
                  style={{
                    border: "1px solid var(--bp-border)",
                    background: "var(--bp-bg-2)",
                  }}
                  data-testid="contact-form"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      ["name", "Name", "text", "Your full name"],
                      ["email", "Work email", "email", "you@company.com"],
                      ["company", "Company", "text", "Company name"],
                      ["website", "Website", "text", "company.com"],
                    ].map(([name, label, type, ph]) => (
                      <div key={name}>
                        <label
                          className="block text-xs tracking-[0.2em] uppercase mb-2 mono"
                          style={{ color: "var(--bp-fg-3)" }}
                        >
                          {label}
                        </label>
                        <input
                          type={type}
                          name={name}
                          value={form[name]}
                          onChange={onChange}
                          onFocus={() => setFocused(name)}
                          onBlur={() => setFocused(null)}
                          className={inputCls}
                          style={inputStyle(name)}
                          placeholder={ph}
                          data-testid={`contact-field-${name}`}
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    [
                      "target_market",
                      "Target market",
                      "Industries, roles, geographies, company sizes. The more specific, the better.",
                    ],
                    [
                      "notes",
                      "Notes",
                      "Anything else we should know. Offer, current playbook, timelines.",
                    ],
                  ].map(([name, label, ph]) => (
                    <div key={name} className="mt-5">
                      <label
                        className="block text-xs tracking-[0.2em] uppercase mb-2 mono"
                        style={{ color: "var(--bp-fg-3)" }}
                      >
                        {label}
                      </label>
                      <textarea
                        name={name}
                        value={form[name]}
                        onChange={onChange}
                        onFocus={() => setFocused(name)}
                        onBlur={() => setFocused(null)}
                        rows={3}
                        className={inputCls}
                        style={inputStyle(name)}
                        placeholder={ph}
                        data-testid={`contact-field-${name === "target_market" ? "target" : name}`}
                      />
                    </div>
                  ))}

                  <div className="mt-8">
                    <MagneticButton strength={6}>
                      <button
                        type="submit"
                        disabled={submitting}
                        data-testid="contact-submit"
                        className="inline-flex items-center gap-2 btn-primary font-medium px-5 py-3 rounded-sm disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending..." : "Claim your 20 free leads"}
                        <ArrowRight size={14} />
                      </button>
                    </MagneticButton>
                  </div>
                  <p
                    className="mt-3 text-xs"
                    style={{ color: "var(--bp-fg-3)" }}
                  >
                    No newsletter. No drip. Just your 20-lead file.
                  </p>
                </form>
              </Reveal>
            )}
          </div>

          {/* Calendly column */}
          <div>
            <Reveal delay={120}>
              <CalendlyEmbed />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
