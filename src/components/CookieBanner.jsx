import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CONSENT_KEY = "bp-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const v = localStorage.getItem(CONSENT_KEY);
    if (!v) {
      const t = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const decide = (choice) => {
    localStorage.setItem(CONSENT_KEY, choice);
    setShow(false);
    // Future: hook analytics initialisation here when accepted
    if (choice === "accepted" && typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("bp-consent-accepted"));
    }
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      data-testid="cookie-banner"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-[60] sm:max-w-md"
    >
      <div
        className="border bp-hover-lift backdrop-blur-md p-4 sm:p-5 rounded-sm"
        style={{
          background: "color-mix(in srgb, var(--bp-bg) 90%, transparent)",
          borderColor: "var(--bp-border)",
        }}
      >
        <div className="flex items-start gap-3">
          <span
            className="mt-1 h-1.5 w-1.5 rounded-full bp-pulse-dot"
            style={{ background: "var(--bp-accent)" }}
          />
          <div className="flex-1">
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--bp-fg)" }}
            >
              We use minimal cookies for site analytics. No tracking pixels, no
              ad networks. See our{" "}
              <Link
                to="/privacy"
                className="underline decoration-dotted underline-offset-4 hover:text-[var(--bp-accent)]"
              >
                privacy note
              </Link>
              .
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button
                onClick={() => decide("accepted")}
                data-testid="cookie-accept"
                className="btn-primary text-xs font-medium px-3 py-1.5 rounded-sm"
              >
                Accept
              </button>
              <button
                onClick={() => decide("declined")}
                data-testid="cookie-decline"
                className="btn-ghost-border text-xs px-3 py-1.5 rounded-sm"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
