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
      {/* Primary node — large, right side */}
      <circle cx="960" cy="110" r="3" fill="#67b2b7" opacity="0.35" />
      <circle cx="960" cy="110" r="55"  stroke="#67b2b7" strokeWidth="0.75" opacity="0.10" />
      <circle cx="960" cy="110" r="115" stroke="#67b2b7" strokeWidth="0.75" opacity="0.07" />
      <circle cx="960" cy="110" r="190" stroke="#67b2b7" strokeWidth="0.75" opacity="0.05" />
      <circle cx="960" cy="110" r="280" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.03" />
      <circle cx="960" cy="110" r="385" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.02" />

      {/* Secondary node — smaller, lower-left */}
      <circle cx="280" cy="268" r="1.5" fill="#67b2b7" opacity="0.25" />
      <circle cx="280" cy="268" r="32"  stroke="#67b2b7" strokeWidth="0.75" opacity="0.07" />
      <circle cx="280" cy="268" r="72"  stroke="#67b2b7" strokeWidth="0.75" opacity="0.05" />
      <circle cx="280" cy="268" r="125" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.03" />

      {/* Tertiary node — faint, mid-right */}
      <circle cx="1140" cy="290" r="1"  fill="#67b2b7" opacity="0.20" />
      <circle cx="1140" cy="290" r="22" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.05" />
      <circle cx="1140" cy="290" r="55" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.03" />
    </svg>
  );
}
