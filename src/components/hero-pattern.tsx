import React from "react";

type RingProps = {
  r: number;
  opacity: number;
  delay: number;
  duration: number;
  strokeWidth?: number;
};

function Ring({ r, opacity, delay, duration, strokeWidth = 0.75 }: RingProps) {
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
          transformBox: "fill-box",
          transformOrigin: "center",
          animation: `ring-expand ${duration}s cubic-bezier(0.2, 0, 0.3, 1) ${delay}s both`,
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
          transformBox: "fill-box",
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
        <Dot r={3}   opacity={1}     delay={0.0} />
        <Ring r={115} opacity={0.975} delay={0.20} duration={1.1} />
        <Ring r={190} opacity={0.950} delay={0.60} duration={1.6} />
        <Ring r={280} opacity={0.925} delay={0.80} duration={2.2} strokeWidth={0.5} />
        <Ring r={385} opacity={0.900} delay={1.00} duration={2.8} strokeWidth={0.5} />
      </g>

      {/* Secondary node — smaller, lower-left */}
      <g transform="translate(280, 268)">
        <Dot r={1.5} opacity={1}     delay={0.20} />
        <Ring r={32}  opacity={0.975} delay={0.40} duration={0.4} />
        <Ring r={72}  opacity={0.950} delay={0.60} duration={0.8} />
        <Ring r={125} opacity={0.925} delay={0.80} duration={1.3} strokeWidth={0.5} />
      </g>

      {/* Tertiary node — faint, far-right */}
      <g transform="translate(1140, 285)">
        <Dot r={1}   opacity={1}     delay={0.40} />
        <Ring r={22} opacity={0.975} delay={0.60} duration={0.3} strokeWidth={0.5} />
        <Ring r={55} opacity={0.950} delay={0.80} duration={0.6} strokeWidth={0.5} />
      </g>
    </svg>
  );
}
