import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { LogoLockup } from "@/components/LogoMark";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--bp-border)",
        background: "var(--bp-bg)",
      }}
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <LogoLockup height={56} />
            <p
              className="mt-5 text-sm max-w-sm leading-relaxed"
              style={{ color: "var(--bp-fg-2)" }}
            >
              Lead systems for founders and revenue leads who want pipeline,
              not promises.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-sm border text-xs"
              style={{ borderColor: "var(--bp-border)", color: "var(--bp-fg-2)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bp-pulse-dot" style={{ background: "var(--bp-accent)" }} />
              <span className="mono">Currently accepting new clients</span>
            </div>
          </div>

          <div>
            <div
              className="text-xs tracking-[0.2em] uppercase mb-4 mono"
              style={{ color: "var(--bp-fg-3)" }}
            >
              Navigate
            </div>
            <ul className="space-y-2.5">
              {[
                ["/", "Home"],
                ["/pricing", "Pricing"],
                ["/blog", "Blog"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm transition-colors hover:opacity-100"
                    style={{ color: "var(--bp-fg-2)" }}
                    data-testid={`footer-link-${label.toLowerCase()}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div
              className="text-xs tracking-[0.2em] uppercase mb-4 mono"
              style={{ color: "var(--bp-fg-3)" }}
            >
              Contact
            </div>
            <ul className="space-y-2.5 text-sm" style={{ color: "var(--bp-fg-2)" }}>
              <li>Mumbai, India</li>
              <li>
                <a
                  href="mailto:hello@blueprynt.io"
                  className="hover:text-[var(--bp-accent)] transition-colors"
                  data-testid="footer-email"
                >
                  hello@blueprynt.io
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/blueprynt-llp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[var(--bp-accent)] transition-colors"
                  data-testid="footer-linkedin"
                >
                  <Linkedin size={14} /> LinkedIn{" "}
                  <ArrowUpRight size={12} className="opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-xs"
          style={{
            borderColor: "var(--bp-border)",
            color: "var(--bp-fg-3)",
          }}
        >
          <div>© {year} Blueprynt. All rights reserved.</div>
          <div className="mono">blueprynt.io</div>
        </div>
      </div>
    </footer>
  );
}
