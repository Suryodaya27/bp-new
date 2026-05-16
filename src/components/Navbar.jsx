import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LogoLockup } from "@/components/LogoMark";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md transition-colors"
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--bp-bg) 80%, transparent)"
          : "var(--bp-bg)",
        borderBottom: `1px solid ${scrolled ? "var(--bp-border)" : "transparent"}`,
      }}
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            className="flex items-center"
            data-testid="nav-home-logo"
            onClick={() => setOpen(false)}
          >
            <LogoLockup height={64} />
          </Link>

          <nav
            className="hidden md:flex items-center gap-7"
            aria-label="Primary"
          >
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-sm transition-colors ${
                    isActive ? "" : "hover:opacity-100"
                  }`
                }
                style={({ isActive }) => ({
                  color: isActive ? "var(--bp-fg)" : "var(--bp-fg-2)",
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <ThemeToggle />
            <Link
              to="/contact"
              data-testid="nav-cta-claim"
              className="inline-flex items-center justify-center btn-primary text-sm font-medium px-4 py-2 rounded-sm"
            >
              Claim 20 free leads
            </Link>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="inline-flex items-center justify-center h-9 w-9 rounded-sm border"
              style={{
                color: "var(--bp-fg)",
                borderColor: "var(--bp-border)",
              }}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              data-testid="nav-mobile-toggle"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="md:hidden border-t"
          style={{
            borderColor: "var(--bp-border)",
            background: "var(--bp-bg)",
          }}
        >
          <nav className="flex flex-col px-5 py-4 gap-2" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                className="py-2 text-base"
                style={({ isActive }) => ({
                  color: isActive ? "var(--bp-fg)" : "var(--bp-fg-2)",
                })}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              data-testid="nav-mobile-cta-claim"
              className="mt-2 inline-flex items-center justify-center btn-primary text-sm font-medium px-4 py-3 rounded-sm"
            >
              Claim 20 free leads
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
