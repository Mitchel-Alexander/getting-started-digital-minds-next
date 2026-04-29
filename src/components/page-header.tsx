"use client";

import { FadeIn } from "@/components/animate";
import { FrostedLavaBackground } from "@/components/frosted-lava-background";

export function PageHeader({
  title,
  description,
  maxWidth = "max-w-4xl",
}: {
  title: string;
  description?: string;
  /** Tailwind max-width class to match the page's content column. */
  maxWidth?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <FrostedLavaBackground animated={false} className="opacity-40" />
      <div className={`relative mx-auto ${maxWidth} px-6 pb-10 pt-20`}>
        <FadeIn>
          <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
