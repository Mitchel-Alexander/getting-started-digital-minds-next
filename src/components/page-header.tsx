"use client";

import { FadeIn } from "@/components/animate";
import { NetworkCanvas } from "@/components/network-canvas";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#f0f4f6]" />
        <NetworkCanvas
          nodeCount={40}
          connectionDistance={120}
          parallaxStrength={0.2}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <FadeIn>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-muted">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
