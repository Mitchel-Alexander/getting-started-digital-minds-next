import React from "react";

type RingProps = {
  r: number;
  opacity: number;
  delay: number;
  strokeWidth?: number;
};

function Ring({ r, opacity, delay, strokeWidth = 0.75 }: RingProps) {
  return (
    <circle
      cx="0"
      cy="0"
      r={r}
      stroke="#67b2b7"
      strokeWidth={strokeWidth}
      fill="none"
      style={
        {
          "--final-opacity": opacity,
          transformOrigin: "center",
          animation: `ring-expand 0.9s cubic-bezier(0.2, 0, 0.3, 1) ${delay}s both`,
        } as React.CSSProperties
      }
    />
  );
}

type DotProps = { r: number; opacity: number; delay: number };

function Dot({ r, opacity, delay }: DotProps) {
  return (
    <circle
      cx="0"
      cy="0"
      r={r}
      fill="#67b2b7"
      style={
        {
          "--final-opacity": opacity,
          transformOrigin: "center",
          animation: `ring-expand 0.4s cubic-bezier(0.2, 0, 0.3, 1) ${delay}s both`,
        } as React.CSSProperties
      }
    />
  );
}

export function HeroPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 320"
      preserveAspectRatio="xMaxYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Primary node — large, upper-right */}
      <g transform="translate(960, 110)">
        <Dot r={3}   opacity={0.55} delay={0.0} />
        <Ring r={55}  opacity={0.20} delay={0.20} />
        <Ring r={115} opacity={0.14} delay={0.40} />
        <Ring r={190} opacity={0.09} delay={0.60} />
        <Ring r={280} opacity={0.06} delay={0.80} strokeWidth={0.5} />
        <Ring r={385} opacity={0.04} delay={1.00} strokeWidth={0.5} />
      </g>

      {/* Secondary node — smaller, lower-left */}
      <g transform="translate(280, 268)">
        <Dot r={1.5} opacity={0.40} delay={0.20} />
        <Ring r={32}  opacity={0.14} delay={0.40} />
        <Ring r={72}  opacity={0.09} delay={0.60} />
        <Ring r={125} opacity={0.05} delay={0.80} strokeWidth={0.5} />
      </g>

      {/* Tertiary node — faint, far-right */}
      <g transform="translate(1140, 285)">
        <Dot r={1}   opacity={0.30} delay={0.40} />
        <Ring r={22} opacity={0.09} delay={0.60} strokeWidth={0.5} />
        <Ring r={55} opacity={0.05} delay={0.80} strokeWidth={0.5} />
      </g>
    </svg>
  );
}
