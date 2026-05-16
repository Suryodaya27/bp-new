import React, { useEffect, useRef, useState } from "react";

/**
 * Animated count-up. Works with numeric strings such as "200" or "200 to 500".
 * For ranges we animate the leading number only.
 */
export default function CountUp({
  value,
  duration = 1400,
  className = "",
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState("");
  const startedRef = useRef(false);

  // Parse leading number for animation.
  const match = String(value).match(/^(\d[\d,]*)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : null;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = Math.round(target * eased);
            setDisplay(v.toLocaleString() + suffix);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display || (target !== null ? "0" + suffix : value)}
    </span>
  );
}
