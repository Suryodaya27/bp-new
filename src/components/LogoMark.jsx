import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Brand logos.
 *  - LogoLockup: full wordmark (auto switches by theme)
 *  - LogoIcon: square icon
 *
 *  We avoid layout shift by reserving height before mount and only
 *  swapping the actual image once the theme is known.
 */

export const LogoIcon = ({ size = 22, className = "" }) => (
  <img
    src="/brand/icon.png"
    alt="Blueprynt"
    width={size}
    height={size}
    className={`block object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

export const LogoLockup = ({ height = 28, className = "" }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Pre-mount: render a transparent placeholder of the same height so
  // the navbar layout doesn't shift.
  if (!mounted) {
    return (
      <span
        aria-label="Blueprynt"
        className={`inline-flex items-center ${className}`}
        style={{ height }}
      >
        <span style={{ width: height * 4.6, height }} />
      </span>
    );
  }

  const src =
    resolvedTheme === "dark" ? "/brand/logo-dark.png" : "/brand/logo-light.png";

  return (
    <img
      src={src}
      alt="Blueprynt"
      className={`block object-contain ${className}`}
      style={{ height, width: "auto" }}
    />
  );
};

export default LogoLockup;
