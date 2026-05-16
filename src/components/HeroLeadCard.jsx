import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, Linkedin, Building2, MapPin } from "lucide-react";

/**
 * HeroLeadCard: animated mock of a single "research file" record.
 * Reinforces the hero's "Not a CSV. A research file." promise visually.
 *
 * Animations are all subtle:
 *  - the card itself fades + lifts in
 *  - the scanline traverses the card once on mount, then stops
 *  - the "verifying" status pulses
 *  - field rows stagger in
 */

const fields = [
  { k: "Job title", v: "Head of Security" },
  { k: "Seniority", v: "Director", chip: true },
  { k: "Company", v: "Northwind ICS" },
  { k: "Industry", v: "Cybersecurity" },
  { k: "Employees", v: "210" },
  { k: "Country", v: "United Kingdom" },
];

export default function HeroLeadCard() {
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setScanned(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1], delay: 0.18 }}
      className="relative w-full max-w-md mx-auto lg:ml-auto lg:mr-0"
      data-testid="hero-lead-card"
    >
      {/* Floating ID badge above */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.45 }}
        className="absolute -top-3 left-6 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-sm mono text-[10px] tracking-[0.2em] uppercase"
        style={{
          background: "var(--bp-bg)",
          border: "1px solid var(--bp-border)",
          color: "var(--bp-fg-3)",
        }}
      >
        <span
          className="h-1 w-1 rounded-full bp-pulse-dot"
          style={{ background: "var(--bp-accent)" }}
        />
        Lead 0142 / 200
      </motion.div>

      {/* Trigger event chip - top right */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="absolute -top-3 right-6 z-10 inline-flex items-center gap-2 px-2.5 py-1 rounded-sm text-[10px] tracking-[0.15em] uppercase"
        style={{
          background: "var(--bp-accent-soft)",
          color: "var(--bp-accent)",
          border: "1px solid var(--bp-accent)",
        }}
      >
        Trigger · funded series B
      </motion.div>

      <div
        className="relative overflow-hidden rounded-sm bp-hover-lift"
        style={{
          background: "var(--bp-bg-2)",
          border: "1px solid var(--bp-border)",
          boxShadow: "0 30px 80px -40px rgba(0,0,0,0.45)",
        }}
      >
        {/* scan line */}
        {!scanned && (
          <span
            aria-hidden
            className="absolute left-0 right-0 h-px z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--bp-accent), transparent)",
              animation: "bp-scan 1.5s cubic-bezier(0.2,0.8,0.2,1) forwards",
            }}
          />
        )}
        <style>{`
          @keyframes bp-scan {
            0%   { top: 0%;   opacity: 0; }
            10%  { opacity: 1; }
            90%  { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>

        {/* Header row */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b"
          style={{ borderColor: "var(--bp-border)" }}
        >
          <span
            className="mono text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "var(--bp-fg-3)" }}
          >
            research_file.json
          </span>
          <span
            className="inline-flex items-center gap-1.5 mono text-[10px] tracking-[0.15em]"
            style={{ color: "var(--bp-accent)" }}
          >
            <CheckCircle2 size={11} /> Verified
          </span>
        </div>

        {/* Person */}
        <div className="px-5 pt-5">
          <div className="flex items-start gap-4">
            <div
              className="h-11 w-11 rounded-sm shrink-0 flex items-center justify-center mono text-sm"
              style={{
                background: "var(--bp-accent-soft)",
                color: "var(--bp-accent)",
                border: "1px solid var(--bp-accent)",
              }}
            >
              EM
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span
                  className="text-base font-medium truncate"
                  style={{ color: "var(--bp-fg)" }}
                >
                  Elena Marsh
                </span>
                <span
                  className="mono text-[10px] tracking-[0.15em] uppercase px-1.5 py-0.5 rounded-sm"
                  style={{
                    background: "var(--bp-bg)",
                    border: "1px solid var(--bp-border)",
                    color: "var(--bp-fg-3)",
                  }}
                >
                  ICP · Tier 1
                </span>
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: "var(--bp-fg-2)" }}
              >
                Head of Security · Northwind ICS
              </div>
            </div>
          </div>
        </div>

        {/* Field rows */}
        <div className="px-5 pt-5 pb-2 grid grid-cols-2 gap-y-3 gap-x-4">
          {fields.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.05, duration: 0.35 }}
              className="min-w-0"
            >
              <div
                className="mono text-[10px] tracking-[0.2em] uppercase"
                style={{ color: "var(--bp-fg-3)" }}
              >
                {f.k}
              </div>
              <div
                className="text-sm truncate"
                style={{ color: "var(--bp-fg)" }}
              >
                {f.v}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pain point */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.4 }}
          className="mx-5 mt-3 mb-4 p-3 rounded-sm"
          style={{
            background: "var(--bp-bg)",
            border: "1px dashed var(--bp-border)",
          }}
        >
          <div
            className="mono text-[10px] tracking-[0.2em] uppercase mb-1"
            style={{ color: "var(--bp-accent)" }}
          >
            Pain point
          </div>
          <div className="text-sm leading-relaxed" style={{ color: "var(--bp-fg)" }}>
            Scaling SOC coverage to new EU offices without doubling headcount.
          </div>
        </motion.div>

        {/* Channels */}
        <div
          className="px-5 py-3 border-t flex items-center justify-between"
          style={{ borderColor: "var(--bp-border)" }}
        >
          <div className="flex items-center gap-3" style={{ color: "var(--bp-fg-2)" }}>
            <Mail size={13} />
            <Linkedin size={13} />
            <Phone size={13} />
            <Building2 size={13} />
            <MapPin size={13} />
          </div>
          <div
            className="mono text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "var(--bp-fg-3)" }}
          >
            21 of 21 fields
          </div>
        </div>
      </div>

      {/* Stack hint behind the card */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 translate-x-3 translate-y-3 rounded-sm"
        style={{
          background: "var(--bp-bg-2)",
          border: "1px solid var(--bp-border)",
          opacity: 0.6,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20 translate-x-6 translate-y-6 rounded-sm"
        style={{
          background: "var(--bp-bg-2)",
          border: "1px solid var(--bp-border)",
          opacity: 0.3,
        }}
      />
    </motion.div>
  );
}
