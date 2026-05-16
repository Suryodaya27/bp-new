import React from "react";

const items = [
  "B2B SaaS",
  "Cybersecurity",
  "Consulting",
  "Professional services",
  "Agencies",
  "Coaching",
  "DevTools",
  "Fintech",
  "Healthcare IT",
  "Logistics SaaS",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden" data-testid="marquee">
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, var(--bp-bg) 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10"
        style={{
          background:
            "linear-gradient(to left, var(--bp-bg) 0%, transparent 100%)",
        }}
      />
      <div className="bp-marquee-pause">
        <div className="bp-marquee-track py-1">
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className="mono text-sm whitespace-nowrap mx-8 inline-flex items-center gap-3"
              style={{ color: "var(--bp-fg-2)" }}
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{ background: "var(--bp-accent)" }}
              />
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
