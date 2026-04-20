export function NodeMark({
  size = 18,
  className = "text-accent",
  strokeWidth = 0.75,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={className}
    >
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.25" />
      <circle cx="10" cy="10" r="5.5" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.55" />
      <circle cx="10" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}
