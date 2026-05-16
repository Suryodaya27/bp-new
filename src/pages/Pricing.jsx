import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import BlueprintBg from "@/components/BlueprintBg";
import Reveal from "@/components/Reveal";
import Comparison from "@/components/Comparison";

const plans = [
  {
    id: "plan-a",
    name: "Plan A",
    subtitle: "Fixed fee. Clear scope.",
    setup: "$3,000",
    monthly: "$1,500",
    monthlyLabel: "per month",
    commitment: "90-day commitment",
    highlight: false,
    features: [
      "ICP redesign and segmentation",
      "200 to 500 verified leads per month",
      "Outreach sequences, email and LinkedIn",
      "Live pipeline dashboard you own",
      "Weekly optimisation cycle",
    ],
  },
  {
    id: "plan-b",
    name: "Plan B",
    subtitle: "Aligned on outcomes.",
    setup: "$2,000",
    monthly: "$1,000",
    monthlyLabel: "per month + 15% of closed deals",
    commitment: "90-day commitment",
    highlight: true,
    features: [
      "Everything in Plan A",
      "Lower monthly, commission on closed revenue",
      "Weekly pipeline review with a Blueprynt lead",
      "Shared KPI: qualified meetings per week",
    ],
  },
];

export default function Pricing() {
  return (
    <div data-testid="page-pricing">
      <section className="relative overflow-hidden border-b bp-spotlight" style={{ borderColor: "var(--bp-border)" }}>
        <BlueprintBg variant="hero" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-14 sm:pt-28">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                Pricing
              </div>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-medium">
                Two ways to buy pipeline.
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed" style={{ color: "var(--bp-fg-2)" }}>
                Both plans include ICP redesign, list building, outreach sequences, and the live dashboard. Pick the commercial model that fits how you want to run the engagement.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" data-testid="pricing-plans">
            {plans.map((p, idx) => (
              <Reveal key={p.id} delay={idx * 80}>
                <div
                  data-testid={`pricing-${p.id}`}
                  className="relative rounded-sm p-8 sm:p-10 flex flex-col h-full bp-hover-lift"
                  style={{
                    background: p.highlight ? "var(--bp-accent-soft)" : "var(--bp-bg-2)",
                    border: p.highlight ? "1px solid var(--bp-accent)" : "1px solid var(--bp-border)",
                  }}
                >
                  {p.highlight && (
                    <div
                      className="absolute -top-3 left-8 text-[11px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm"
                      style={{ background: "var(--bp-accent)", color: "var(--bp-accent-fg)" }}
                      data-testid="pricing-highlight-tag"
                    >
                      Performance
                    </div>
                  )}

                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--bp-fg-3)" }}>
                        {p.name}
                      </div>
                      <h2 className="mt-2 text-2xl sm:text-3xl font-medium tracking-tight">{p.subtitle}</h2>
                    </div>
                  </div>

                  <div className="mt-8 border-t pt-6" style={{ borderColor: "var(--bp-border)" }}>
                    <div className="flex items-end gap-2">
                      <span className={`text-4xl sm:text-5xl font-medium ${p.highlight ? "green-underline" : ""}`}>
                        {p.setup}
                      </span>
                      <span className="text-sm mb-1" style={{ color: "var(--bp-fg-3)" }}>setup fee</span>
                    </div>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-2xl sm:text-3xl font-medium">{p.monthly}</span>
                      <span className="text-sm mb-1" style={{ color: "var(--bp-fg-2)" }}>{p.monthlyLabel}</span>
                    </div>
                    <div className="mt-3 text-xs mono" style={{ color: "var(--bp-fg-3)" }}>{p.commitment}</div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "var(--bp-fg)" }}>
                        <Check size={16} className="mt-0.5 shrink-0" style={{ color: "var(--bp-accent)" }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    data-testid={`pricing-${p.id}-cta`}
                    className={`mt-10 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm text-sm font-medium ${p.highlight ? "btn-primary" : "btn-ghost-border"}`}
                  >
                    Start with {p.name} <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div
              className="mt-10 p-6 sm:p-8 rounded-sm"
              style={{ border: "1px solid var(--bp-border)", background: "var(--bp-bg-2)" }}
              data-testid="pricing-tool-note"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase mono" style={{ color: "var(--bp-accent)" }}>
                    Tool costs
                  </div>
                  <p className="mt-2 text-sm max-w-3xl leading-relaxed" style={{ color: "var(--bp-fg)" }}>
                    Expect <span className="green-underline">$250 to $750</span> per month in tooling (data, enrichment, sending infrastructure). These stay on your accounts. You own every asset we build, including the dashboard and sequences.
                  </p>
                </div>
                <Link
                  to="/contact"
                  data-testid="pricing-note-cta"
                  className="shrink-0 inline-flex items-center gap-2 text-sm btn-ghost-border px-4 py-2 rounded-sm"
                >
                  Talk to us <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section
        className="border-t"
        style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg-2)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-24">
          <Comparison />
        </div>
      </section>
    </div>
  );
}
