import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-5"
      data-testid="page-notfound"
    >
      <div className="text-center">
        <div className="mono text-xs tracking-[0.2em] uppercase" style={{ color: "var(--bp-accent)" }}>
          404
        </div>
        <h1 className="mt-3 text-3xl sm:text-4xl tracking-tight font-medium">
          Page not found.
        </h1>
        <p className="mt-4" style={{ color: "var(--bp-fg-2)" }}>
          The link you followed does not exist on blueprynt.io.
        </p>
        <Link to="/" className="mt-8 inline-flex btn-primary font-medium px-5 py-3 rounded-sm">
          Back to home
        </Link>
      </div>
    </div>
  );
}
