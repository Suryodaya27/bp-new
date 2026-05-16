import React from "react";
import Reveal from "@/components/Reveal";

const cases = [
  {
    company: "Phishtracker",
    sector: "Cybersecurity, product",
    person: "Manoj Singh",
    role: "Founder",
    metric: "4.0%",
    metricLabel: "Reply to meeting rate",
    volume: "2,000+ leads delivered",
    quote:
      "Blueprynt rebuilt our outbound from the ICP up. We have moved past 2,000 verified leads and the meetings are landing with the right buyers, not random inboxes. The system runs whether we are watching it or not.",
  },
  {
    company: "QICL",
    sector: "Cybersecurity, services",
    person: "P. Nair",
    role: "Director",
    metric: "2.8%",
    metricLabel: "Reply to meeting rate",
    volume: "Quarterly pipeline target hit",
    quote:
      "We tried two agencies before Blueprynt. The difference was the research file. Every contact came with a real reason to reach out, and the dashboard meant we never had to ask where a deal was sitting.",
  },
  {
    company: "Confidential",
    sector: "Business coaching, US",
    person: "Founder",
    role: "Anonymous",
    metric: "3.2%",
    metricLabel: "Reply to meeting rate",
    volume: "Booked 3 months out",
    quote:
      "I was sceptical that outbound could work in coaching. Six weeks in, my calendar was booked three months out. They figured out the trigger events that mattered for my offer and built sequences around them.",
  },
  {
    company: "Confidential",
    sector: "Business coaching, UK",
    person: "Founder",
    role: "Anonymous",
    metric: "3.2%",
    metricLabel: "Reply to meeting rate",
    volume: "Steady weekly inbound",
    quote:
      "What I like about Blueprynt is they own the system. I do not have to chase status updates or learn a new tool every Monday. The leads come in, the dashboard tells me where each one is, and we close.",
  },
  {
    company: "Confidential",
    sector: "High ticket agency, US",
    person: "Founder",
    role: "Anonymous",
    metric: "2.2%",
    metricLabel: "Reply to meeting rate",
    volume: "$50k+ deals",
    quote:
      "Two point two percent reply rate sounds small until you remember our average deal is over fifty grand. The math works because the leads are right. That is what they get paid to do.",
  },
];

function Card({ c, i }) {
  return (
    <Reveal delay={i * 60}>
      <article
        className="h-full p-7 rounded-sm border bp-hover-lift"
        style={{
          background: "var(--bp-bg-2)",
          borderColor: "var(--bp-border)",
        }}
        data-testid={`case-${i + 1}`}
      >
        <div className="flex items-center justify-between">
          <div className="text-[11px] tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-fg-3)" }}>
            {c.sector}
          </div>
          <span
            className="mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm"
            style={{
              background: "var(--bp-accent-soft)",
              color: "var(--bp-accent)",
            }}
          >
            {c.metric}
          </span>
        </div>

        <p
          className="mt-6 text-base leading-relaxed"
          style={{ color: "var(--bp-fg)" }}
        >
          “{c.quote}”
        </p>

        <div className="mt-7 pt-5 border-t" style={{ borderColor: "var(--bp-border)" }}>
          <div className="flex items-center justify-between text-sm">
            <div>
              <div style={{ color: "var(--bp-fg)" }}>{c.person}</div>
              <div className="text-xs mono" style={{ color: "var(--bp-fg-3)" }}>
                {c.role} · {c.company}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs mono" style={{ color: "var(--bp-fg-3)" }}>
                {c.metricLabel}
              </div>
              <div className="text-xs" style={{ color: "var(--bp-fg-2)" }}>
                {c.volume}
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section
      className="relative border-t"
      style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg)" }}
      data-testid="case-studies"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <Reveal>
          <div className="max-w-3xl">
            <div
              className="text-xs tracking-[0.2em] uppercase mono"
              style={{ color: "var(--bp-accent)" }}
            >
              Wall of work
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-medium">
              Real teams. Real reply rates.
            </h2>
            <p
              className="mt-5 max-w-2xl leading-relaxed"
              style={{ color: "var(--bp-fg-2)" }}
            >
              Cybersecurity, coaching, high ticket services. Different markets,
              same outcome. The system runs and the meetings land.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <Card key={c.company + i} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
