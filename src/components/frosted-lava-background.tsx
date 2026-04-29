interface FrostedLavaBackgroundProps {
  className?: string;
  /** Disable the breathing animation — useful for static contexts like page headers. */
  animated?: boolean;
}

/**
 * Hyperbolic curved gradient strokes seen through a frosted-glass surface,
 * slowly rotating with a small drift. Visual reference: TSD Studio Unsplash
 * gradient images dropped 2026-04-28.
 */
export function FrostedLavaBackground({ className = "", animated = true }: FrostedLavaBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden bg-[#f5f6f8] ${className}`}
      aria-hidden="true"
    >
      {/* Two-lobe composition — static diagonal axis, blobs breathe toward/away */}
      <div className="absolute inset-0">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="lava-grad-a" x1="0%" y1="60%" x2="100%" y2="40%">
              <stop offset="0%" stopColor="#ffa66a" stopOpacity="0" />
              <stop offset="15%" stopColor="#ff8060" stopOpacity="0.9" />
              <stop offset="38%" stopColor="#ff4f88" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#4098ff" stopOpacity="1" />
              <stop offset="88%" stopColor="#2080e0" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1860b8" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="lava-hilite-left" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="lava-hilite-right" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter id="lava-blur-a" x="-25%" y="-25%" width="150%" height="150%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>
          <g transform="translate(120 70) scale(0.8) rotate(-14 600 350)" filter="url(#lava-blur-a)">
            {/* Two separate cell-like blobs — almost touching, breathing toward/away */}
            <g style={animated ? { animation: "lava-blob-left 40s ease-in-out infinite", transformOrigin: "380px 350px" } : undefined}>
              <path
                d="M 200 350 C 200 251, 281 170, 380 170 C 479 170, 560 251, 560 350 C 560 449, 479 530, 380 530 C 281 530, 200 449, 200 350 Z"
                fill="url(#lava-grad-a)"
              />
              <ellipse cx="320" cy="290" rx="110" ry="55" fill="url(#lava-hilite-left)" />
            </g>
            <g style={animated ? { animation: "lava-blob-right 40s ease-in-out infinite", transformOrigin: "820px 350px" } : undefined}>
              <path
                d="M 640 350 C 640 251, 721 170, 820 170 C 919 170, 1000 251, 1000 350 C 1000 449, 919 530, 820 530 C 721 530, 640 449, 640 350 Z"
                fill="url(#lava-grad-a)"
              />
              <ellipse cx="860" cy="290" rx="110" ry="55" fill="url(#lava-hilite-right)" />
            </g>
          </g>
        </svg>
      </div>

      {/* Frosted glass: medium backdrop blur + light wash */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-xl" />

      {/* Horizontal scan-line overlay — the "frosted" surface texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-55 mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(180deg, rgba(255,255,255,0.7) 0 1px, transparent 1px 3px)",
        }}
      />
    </div>
  );
}
