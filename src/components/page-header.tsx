"use client";

import { FadeIn } from "@/components/animate";

export function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-[#67b2b7] to-[#4a9298]">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-16">
        <FadeIn>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-white/80">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
