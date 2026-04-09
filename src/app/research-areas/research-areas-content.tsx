"use client";

import { FadeIn } from "@/components/animate";

const areas = [
  {
    id: "consciousness",
    title: "Could AI Systems Be Conscious?",
    placeholder: "Content on theories of consciousness, empirical indicators, and the science of AI consciousness will appear here.",
  },
  {
    id: "meaning",
    title: "What Would That Mean?",
    placeholder: "Content on moral status, welfare, sentience, and the normative implications of AI consciousness will appear here.",
  },
  {
    id: "action",
    title: "What Should We Do About It?",
    placeholder: "Content on policy responses, governance frameworks, safety-welfare interfaces, and practical steps will appear here.",
  },
];

export function ResearchAreasContent() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Research Areas
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          The field of digital minds spans three broad questions. Each section
          below will introduce the key ideas, debates, and readings.
        </p>
      </FadeIn>

      {/* TOC */}
      <FadeIn delay={0.1}>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Section navigation">
          {areas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground"
            >
              {area.title}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Sections */}
      {areas.map((area, i) => (
        <section key={area.id} id={area.id} className="mt-16">
          <FadeIn delay={i * 0.05}>
            <h2 className="text-2xl font-semibold">{area.title}</h2>
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/50 p-8">
              <p className="text-sm text-muted italic">{area.placeholder}</p>
            </div>
          </FadeIn>
        </section>
      ))}
    </div>
  );
}
