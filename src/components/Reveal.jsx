import React, { useEffect, useState } from "react";

/**
 * Reveal: fade up on scroll. CSS-only, uses IntersectionObserver.
 * Prefer this over framer-motion for body sections to keep bundle light.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className = "",
  as: Tag = "div",
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        transition:
          "opacity 700ms cubic-bezier(0.2,0.8,0.2,1), transform 700ms cubic-bezier(0.2,0.8,0.2,1)",
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
