const S = 0.65;

type MarkProps = { size?: number; className?: string };

// Shared primary node position across all four variants for continuity.
// Small node rotates: bottom-left → top-left → top-right → bottom-right.

function Mark({ size, className, sx, sy }: MarkProps & { sx: number; sy: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      overflow="visible"
      fill="none"
      aria-hidden
      className={className}
    >
      {/* Primary node — fixed position */}
      <circle cx="65" cy="58" r="2.5" fill="currentColor" />
      <circle cx="65" cy="58" r="20"  stroke="currentColor" strokeWidth={S}        opacity="0.75" />
      <circle cx="65" cy="58" r="38"  stroke="currentColor" strokeWidth={S}        opacity="0.563" />
      <circle cx="65" cy="58" r="55"  stroke="currentColor" strokeWidth={S * 0.75} opacity="0.422" />
      {/* Secondary node — position varies per variant */}
      <circle cx={sx} cy={sy} r="1.5" fill="currentColor" />
      <circle cx={sx} cy={sy} r="10"  stroke="currentColor" strokeWidth={S}        opacity="0.75" />
      <circle cx={sx} cy={sy} r="22"  stroke="currentColor" strokeWidth={S}        opacity="0.563" />
      <circle cx={sx} cy={sy} r="35"  stroke="currentColor" strokeWidth={S * 0.75} opacity="0.422" />
    </svg>
  );
}

export function FocusMarkSafety(p: MarkProps) {
  return <Mark {...p} sx={32} sy={92} />;   // bottom-left
}

export function FocusMarkResearch(p: MarkProps) {
  return <Mark {...p} sx={28} sy={26} />;   // top-left
}

export function FocusMarkEvents(p: MarkProps) {
  return <Mark {...p} sx={96} sy={24} />;   // top-right
}

export function FocusMarkFieldMap(p: MarkProps) {
  return <Mark {...p} sx={98} sy={90} />;   // bottom-right
}
