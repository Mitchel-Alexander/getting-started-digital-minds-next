"use client";

import { FadeIn } from "@/components/animate";

const sections = [
  {
    id: "background",
    title: "What Your Background Brings",
    placeholder: "Content on how different disciplines (philosophy, neuroscience, CS/AI, social science, law/policy) contribute to digital minds research will appear here.",
  },
  {
    id: "getting-started",
    title: "Getting Started",
    placeholder: "Content organised by career stage (students, early career, established researchers) with named programmes, organisations, and concrete next steps will appear here.",
  },
  {
    id: "presence",
    title: "Building Your Presence",
    placeholder: "Content on finding the community, making the case in your institution, public communication, and setting expectations will appear here.",
  },
  {
    id: "programmes",
    title: "Digital Minds Programmes",
    placeholder: "Content on orientation programmes, structured learning and mentorship, and intensive development opportunities will appear here.",
  },
];

export function PathwaysContent() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Pathways
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Digital minds is a young, interdisciplinary field. There is no single
          route in. This page will help you find yours, whatever your background
          and career stage.
        </p>
      </FadeIn>

      {/* TOC */}
      <FadeIn delay={0.1}>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Section navigation">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted transition-all hover:border-accent/30 hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Sections */}
      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="mt-16">
          <FadeIn delay={i * 0.05}>
            <h2 className="text-2xl font-semibold">{s.title}</h2>
            <div className="mt-6 rounded-2xl border border-dashed border-border bg-card/50 p-8">
              <p className="text-sm text-muted italic">{s.placeholder}</p>
            </div>
          </FadeIn>
        </section>
      ))}
    </div>
  );
}
