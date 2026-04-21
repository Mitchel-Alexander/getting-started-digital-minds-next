"use client";

import { FadeIn } from "@/components/animate";

function PageHeaderPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 120"
      preserveAspectRatio="xMidYMax slice"
      fill="none"
      aria-hidden
    >
      {/* Primary node — below bottom edge, rings arc upward */}
      <g transform="translate(720, 158)">
        <circle cx="0" cy="0" r="2"   fill="#67b2b7" opacity="0.35" />
        <circle cx="0" cy="0" r="80"  stroke="#67b2b7" strokeWidth="0.75" opacity="0.45" />
        <circle cx="0" cy="0" r="155" stroke="#67b2b7" strokeWidth="0.65" opacity="0.34" />
        <circle cx="0" cy="0" r="245" stroke="#67b2b7" strokeWidth="0.55" opacity="0.25" />
        <circle cx="0" cy="0" r="355" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.18" />
      </g>
    </svg>
  );
}

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <PageHeaderPattern />
      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-12">
        <FadeIn>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-2xl text-foreground/60 leading-relaxed">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
