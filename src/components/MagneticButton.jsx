import React, { useRef } from "react";

/**
 * MagneticButton: subtle magnetic pull on hover. Wraps any button or link.
 * The child translates toward the pointer up to 8px while inside the bounds.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 8,
  ...rest
}) {
  const ref = useRef(null);
  const innerRef = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const dx = (x / rect.width) * strength * 2;
    const dy = (y / rect.height) * strength * 2;
    inner.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (inner) inner.style.transform = "translate(0px, 0px)";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      <span
        ref={innerRef}
        style={{
          display: "inline-flex",
          transition: "transform 220ms cubic-bezier(0.2,0.8,0.2,1)",
          willChange: "transform",
        }}
        {...rest}
      >
        {children}
      </span>
    </span>
  );
}
