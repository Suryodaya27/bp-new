import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      data-testid="theme-toggle"
      className={`relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--bp-border)] hover:border-[var(--bp-accent)] text-[var(--bp-fg-2)] hover:text-[var(--bp-fg)] transition-colors ${className}`}
    >
      <Sun
        size={15}
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-0 -rotate-45 scale-75" : "opacity-100 rotate-0 scale-100"
        }`}
      />
      <Moon
        size={15}
        className={`absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-45 scale-75"
        }`}
      />
    </button>
  );
}
