import React from "react";

export default function BlueprintBg({ variant = "hero", className = "" }) {
  if (variant === "dots") {
    return (
      <div
        aria-hidden
        className={`absolute inset-0 bp-dot pointer-events-none ${className}`}
      />
    );
  }
  if (variant === "lines") {
    return (
      <div
        aria-hidden
        className={`absolute inset-0 bp-grid-sm pointer-events-none ${className}`}
      />
    );
  }
  // hero variant: grid + radial mask
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <div className={`absolute inset-0 bp-grid bp-radial-mask ${className}`} />
    </div>
  );
}
