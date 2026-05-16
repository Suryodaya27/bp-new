import React from "react";
import { Check, X, Minus } from "lucide-react";
import Reveal from "@/components/Reveal";

const rows = [
  ["ICP redesign and segmentation", "yes", "partial", "no"],
  ["200 to 500 verified leads / month", "yes", "no", "partial"],
  ["21 data fields per lead", "yes", "no", "partial"],
  ["Trigger events and pain points", "yes", "no", "no"],
  ["Live pipeline dashboard you own", "yes", "partial", "no"],
  ["Outreach sequences written for you", "yes", "partial", "yes"],
  ["Time to live pipeline", "30 days", "60 to 90 days", "45 to 60 days"],
  ["You own every asset built", "yes", "yes", "no"],
  ["Setup cost", "$2k to $3k", "$15k to $40k hire", "$3k to $7k"],
  ["Monthly cost", "$1k to $1.5k", "$8k to $14k loaded", "$3k to $6k"],
];

const Cell = ({ value }) => {
  if (value === "yes") {
    return (
      <span
        className="inline-flex items-center gap-2 text-sm"
        style={{ color: "var(--bp-accent)" }}
      >
        <Check size={14} />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span
        className="inline-flex items-center gap-2 text-sm"
        style={{ color: "var(--bp-fg-3)" }}
      >
        <X size={14} />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        className="inline-flex items-center gap-2 text-sm"
        style={{ color: "var(--bp-fg-2)" }}
      >
        <Minus size={14} />
      </span>
    );
  }
  return (
    <span className="text-sm" style={{ color: "var(--bp-fg)" }}>
      {value}
    </span>
  );
};

export default function Comparison() {
  return (
    <section data-testid="comparison-table">
      <Reveal>
        <div className="max-w-3xl">
          <div
            className="text-xs tracking-[0.2em] uppercase mono"
            style={{ color: "var(--bp-accent)" }}
          >
            Compare
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl tracking-tight font-medium">
            Three ways to build pipeline. One that ships.
          </h2>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div
          className="mt-10 overflow-x-auto border rounded-sm"
          style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg)" }}
        >
          <table className="w-full text-left text-sm" data-testid="comparison-grid">
            <thead>
              <tr style={{ background: "var(--bp-bg-2)" }}>
                <th
                  className="px-5 py-4 text-[11px] tracking-[0.2em] uppercase mono font-normal"
                  style={{ color: "var(--bp-fg-3)" }}
                >
                  Capability
                </th>
                <th
                  className="px-5 py-4 text-[11px] tracking-[0.2em] uppercase mono font-normal relative"
                  style={{ color: "var(--bp-accent)" }}
                >
                  Blueprynt
                  <span
                    className="absolute left-0 top-0 h-full w-px"
                    style={{ background: "var(--bp-accent)" }}
                  />
                </th>
                <th
                  className="px-5 py-4 text-[11px] tracking-[0.2em] uppercase mono font-normal"
                  style={{ color: "var(--bp-fg-3)" }}
                >
                  In-house SDR
                </th>
                <th
                  className="px-5 py-4 text-[11px] tracking-[0.2em] uppercase mono font-normal"
                  style={{ color: "var(--bp-fg-3)" }}
                >
                  Typical agency
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r[0]}
                  className="border-t"
                  style={{ borderColor: "var(--bp-border)" }}
                  data-testid={`comparison-row-${i + 1}`}
                >
                  <td className="px-5 py-3.5" style={{ color: "var(--bp-fg)" }}>
                    {r[0]}
                  </td>
                  <td
                    className="px-5 py-3.5 relative"
                    style={{
                      background: "var(--bp-accent-soft)",
                    }}
                  >
                    <Cell value={r[1]} />
                  </td>
                  <td className="px-5 py-3.5">
                    <Cell value={r[2]} />
                  </td>
                  <td className="px-5 py-3.5">
                    <Cell value={r[3]} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
