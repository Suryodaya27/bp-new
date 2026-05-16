import React from "react";
import { ExternalLink } from "lucide-react";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || "https://calendly.com/blueprynt/intro";

export default function CalendlyEmbed() {
  return (
    <div
      className="border rounded-sm overflow-hidden"
      style={{ borderColor: "var(--bp-border)", background: "var(--bp-bg-2)" }}
      data-testid="calendly-embed"
    >
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: "var(--bp-border)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full bp-pulse-dot"
            style={{ background: "var(--bp-accent)" }}
          />
          <span
            className="text-[11px] tracking-[0.2em] uppercase mono"
            style={{ color: "var(--bp-fg-3)" }}
          >
            Or book a 15 min intro
          </span>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs hover:text-[var(--bp-accent)]"
          style={{ color: "var(--bp-fg-2)" }}
          data-testid="calendly-open-new-tab"
        >
          Open in new tab <ExternalLink size={11} />
        </a>
      </div>
      <iframe
        title="Book a call with Blueprynt"
        src={CALENDLY_URL}
        loading="lazy"
        className="w-full"
        style={{ height: 640, background: "var(--bp-bg)" }}
        data-testid="calendly-iframe"
      />
    </div>
  );
}
