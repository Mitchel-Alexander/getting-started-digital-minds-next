"use client";

import { FadeIn } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

const sections = [
  {
    id: "what",
    title: "What Are Digital Minds?",
    placeholder: "Content introducing the concept of digital minds — AI systems that might have morally relevant experiences — and why the question matters now.",
  },
  {
    id: "landscape",
    title: "The Landscape at a Glance",
    placeholder: "Content providing a high-level map of the field: key questions (consciousness, welfare, policy), who is working on them, and where the field stands today.",
  },
  {
    id: "guide",
    title: "How to Use This Guide",
    placeholder: "Content explaining the structure of this resource — Research Areas for the intellectual terrain, Pathways for getting involved, Events for what's happening, and the Field Map for who's who.",
  },
  {
    id: "reading",
    title: "Essential Reading",
    placeholder: "Content with a short, curated list of 5–10 key papers, reports, and introductions for someone encountering the field for the first time.",
  },
];

export function StartHereContent() {
  return (
    <>
      <PageHeader
        title="Start Here"
        description="New to digital minds? This page will orient you to the field, explain what this guide covers, and point you to the best places to begin."
      />
      <div className="mx-auto max-w-4xl px-6 py-8">
        {/* TOC */}
        <FadeIn>
          <nav className="flex flex-wrap gap-2" aria-label="Section navigation">
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
    </>
  );
}
