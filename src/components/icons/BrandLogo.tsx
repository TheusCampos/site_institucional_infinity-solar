import React from "react";

type Props = {
  className?: string;
};

// Minimal, brand-appropriate solar icon using currentColor
// Responsive via Tailwind size classes passed in className
export const BrandLogo: React.FC<Props> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {/* Outer ring */}
      <circle
        cx="24"
        cy="24"
        r="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      />
      {/* Inner core */}
      <circle cx="24" cy="24" r="6" fill="currentColor" />
      {/* Rays (minimal) */}
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="24" y1="4" x2="24" y2="10" />
        <line x1="24" y1="38" x2="24" y2="44" />
        <line x1="4" y1="24" x2="10" y2="24" />
        <line x1="38" y1="24" x2="44" y2="24" />
        <line x1="10" y1="10" x2="14" y2="14" />
        <line x1="34" y1="34" x2="38" y2="38" />
        <line x1="34" y1="10" x2="38" y2="14" />
        <line x1="10" y1="34" x2="14" y2="38" />
      </g>
    </svg>
  );
};

export default BrandLogo;