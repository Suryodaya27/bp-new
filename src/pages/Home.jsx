import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";
import CountUp from "@/components/CountUp";
import Marquee from "@/components/Marquee";
import CaseStudies from "@/components/CaseStudies";
import HeroLeadCard from "@/components/HeroLeadCard";
import MagneticButton from "@/components/MagneticButton";

const problems = [
  {
    title: "You're generating leads but not conversations.",
    body:
      "Traffic moves. Forms trickle in. Nobody replies. The pipeline looks busy and behaves dead.",
  },
  {
    title: "Your outreach is generic. Their inbox ignores it.",
    body:
      "Templates that worked in 2021 get filtered in 2026. Reply rates collapse while volume climbs.",
  },
  {
    title: "You're spending on ads but your follow-up is broken.",
    body:
      "CPLs climb, MQLs stall, and the handoff between marketing and sales leaks on its way to revenue.",
  },
];

const steps = [
  { n: "01", title: "Redesign your ICP", body: "Who you should actually be targeting. Roles, triggers, segment by segment." },
  { n: "02", title: "Build your lead list", body: "200 to 500 verified, enriched contacts per month, sourced and checked." },
  { n: "03", title: "Write your outreach", body: "Sequences that feel personal at scale. Email, LinkedIn, follow-ups." },
  { n: "04", title: "Hand you the dashboard", body: "Track every lead, reply, and pipeline stage live. You own it from day one." },
];

const fields = [
  "First name", "Last name", "Job title", "Seniority", "Persona type",
  "Company", "Industry", "Employee size", "Country", "City",
  "LinkedIn URL", "Professional email", "Personal email", "Phone",
  "Company website", "Company LinkedIn", "Trigger event", "Pain point",
  "General notes", "ICP tier", "Email status",
];

const stats = [
  { v: "30 days", label: "To live pipeline" },
  { v: "200 to 500", label: "Verified leads per month" },
  { v: "21 fields", label: "Per contact" },
  { v: "48 hours", label: "Free proof of value" },
];

export default function Home() {
  return (
    <div data-testid="page-home">
      {/* HERO */}
      <section className="relative overflow-hidden noise bp-spotlight" data-testid="hero">
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs"
            style={{
              borderWidth: 1,
              borderColor: "var(--bp-border)",
              background: "var(--bp-bg-2)",
              color: "var(--bp-fg-2)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bp-pulse-dot" style={{ background: "var(--bp-accent)" }} />
            <span className="mono">Pipeline as a system</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.05 }}
            className="mt-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter font-medium leading-[1.05]"
          >
            Your pipeline. Built and running in{" "}
            <span className="green-underline">30 days.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.12 }}
            className="mt-6 text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--bp-fg-2)" }}
          >
            We redesign who you're targeting, build your lead system, and hand
            you a live dashboard of verified, research-backed prospects, ready
            to contact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <MagneticButton strength={6}>
              <Link
                to="/contact"
                data-testid="hero-primary-cta"
                className="group inline-flex items-center gap-2 btn-primary font-medium px-5 py-3 rounded-sm"
              >
                Get your free 20-lead proof of value
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </MagneticButton>
            <a
              href="#how-it-works"
              data-testid="hero-secondary-link"
              className="text-sm transition-colors border-b pb-1"
              style={{ color: "var(--bp-fg-2)", borderColor: "var(--bp-border)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--bp-fg)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--bp-fg-2)")}
            >
              See how it works
            </a>
          </motion.div>
            </div>

            <div className="lg:col-span-5">
              <HeroLeadCard />
            </div>
          </div>

          {/* Stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 border rounded-sm overflow-hidden"
            style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg)" }}
          >
            {stats.map((s, i) => (
              <div
                key={s.v}
                className="p-5 sm:p-6 relative"
                style={{
                  borderRight: i < 3 ? "1px solid var(--bp-border)" : "none",
                  borderBottom: i < 2 ? "1px solid var(--bp-border)" : "none",
                }}
              >
                <div className="text-[11px] tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-fg-3)" }}>
                  {s.label}
                </div>
                <div className="mt-2 text-2xl sm:text-3xl font-medium">
                  <span className="green-underline">
                    <CountUp value={s.v} />
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF MARQUEE */}
      <section
        className="border-y"
        style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg)" }}
        data-testid="social-proof"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-7">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="text-xs tracking-[0.2em] uppercase mono whitespace-nowrap" style={{ color: "var(--bp-fg-3)" }}>
              Trusted by founders in
            </div>
            <div className="flex-1 min-w-0">
              <Marquee />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative" data-testid="problem-section">
        <BlueprintBg variant="dots" className="opacity-50" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                The Problem
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium">
                Most pipelines break in the same three places.
              </h2>
            </div>
          </Reveal>

          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-[1px] border"
            style={{ background: "var(--bp-border)", borderColor: "var(--bp-border)" }}
          >
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="p-8 h-full bp-hover-lift" style={{ background: "var(--bp-bg)" }} data-testid={`problem-card-${i + 1}`}>
                  <div className="text-[11px] tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-fg-3)" }}>
                    0{i + 1}
                  </div>
                  <h3 className="mt-4 text-xl sm:text-2xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section
        id="how-it-works"
        className="border-t"
        style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg)" }}
        data-testid="how-it-works"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                What we do
              </div>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium">
                Four steps. One working pipeline.
              </h2>
              <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>
                No retainers for vague strategy decks. We deliver the lead system, the list, the sequences, and the reporting layer.
              </p>
            </div>
          </Reveal>

          <div
            className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-[1px] border"
            style={{ background: "var(--bp-border)", borderColor: "var(--bp-border)" }}
          >
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div className="relative p-8 h-full bp-hover-lift" style={{ background: "var(--bp-bg)" }} data-testid={`step-card-${i + 1}`}>
                  <div className="mono text-xs tracking-[0.2em]" style={{ color: "var(--bp-accent)" }}>
                    STEP {s.n}
                  </div>
                  <h3 className="mt-5 text-lg sm:text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>{s.body}</p>
                  <div className="mt-6 h-px w-8" style={{ background: "var(--bp-border)" }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD FIELDS */}
      <section className="relative border-t" style={{ borderColor: "var(--bp-border)" }} data-testid="lead-fields-section">
        <BlueprintBg variant="lines" className="opacity-60" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                  The deliverable
                </div>
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium">
                  Not a CSV. A research file.
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>
                  Every contact we hand over comes with{" "}
                  <span className="green-underline">21 data points</span>, so your team opens a conversation, not a spreadsheet.
                </p>
              </div>
              <div className="mono text-xs" style={{ color: "var(--bp-fg-3)" }}>21 columns / per lead</div>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div
              className="mt-12 border rounded-sm overflow-hidden"
              style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg)" }}
              data-testid="lead-fields-grid"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                {fields.map((f, i) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 px-5 py-4 group"
                    style={{
                      borderRight:
                        (i + 1) % 4 !== 0 || (i + 1) % 3 === 0
                          ? "1px solid var(--bp-border)"
                          : "1px solid var(--bp-border)",
                      borderBottom: "1px solid var(--bp-border)",
                    }}
                    data-testid={`lead-field-${i + 1}`}
                  >
                    <span className="mono text-[10px] tracking-[0.2em]" style={{ color: "var(--bp-accent)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CASE STUDIES */}
      <CaseStudies />

      {/* PROOF OF VALUE */}
      <section className="relative border-t" style={{ borderColor: "var(--bp-border)" }} data-testid="proof-of-value">
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-32 text-center">
          <Reveal>
            <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
              Proof of value
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium">
              Before you spend a dollar, see what we find.
            </h2>
            <p className="mt-6 max-w-2xl mx-auto leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>
              We'll build you a free list of <span className="green-underline">20 verified leads</span> from your exact target market, with trigger events, pain points, and ICP scoring, in <span className="green-underline">48 hours</span>.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                data-testid="proof-cta"
                className="inline-flex items-center gap-2 btn-primary font-medium px-5 py-3 rounded-sm"
              >
                Claim your free 20 leads <ArrowRight size={16} />
              </Link>
              <Link
                to="/pricing"
                data-testid="proof-secondary"
                className="text-sm border-b pb-1 transition-colors"
                style={{ color: "var(--bp-fg-2)", borderColor: "var(--bp-border)" }}
              >
                Review pricing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
