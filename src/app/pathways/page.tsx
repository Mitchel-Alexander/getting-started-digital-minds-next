"use client";

import { useState } from "react";
import Link from "next/link";
import {
  intro,
  backgroundsIntro,
  disciplines,
  resourceSections,
  programmesIntro,
  structuredProgrammes,
  intensiveProgrammes,
  type Discipline,
  type Reading,
} from "@/data/pathways";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { PageHeader } from "@/components/page-header";
import { NetworkCanvas } from "@/components/network-canvas";

/* ── Reading item ─────────────────────────────────────────────── */

function ReadingItem({ item }: { item: Reading }) {
  return (
    <div className="border-l-2 border-accent/20 pl-4 py-1">
      <p className="text-sm leading-relaxed">
        <span className="text-foreground">{item.author}</span>
        {", "}
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="italic text-accent hover:underline"
          >
            {item.title}
          </a>
        ) : (
          <span className="italic">{item.title}</span>
        )}
        {item.year && <> ({item.year})</>}
      </p>
      {item.description && (
        <p className="mt-1 text-sm leading-relaxed text-foreground/60">
          {item.description}
        </p>
      )}
    </div>
  );
}

/* ── Discipline card (expandable) ─────────────────────────────── */

function DisciplineCard({ discipline }: { discipline: Discipline }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={discipline.id}
      className="scroll-mt-24 rounded-xl border border-border bg-white transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995] active:bg-white/80"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left group"
      >
        <h3 className="flex-1 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {discipline.title}
        </h3>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`shrink-0 text-border transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${expanded ? "rotate-180" : ""}`}
          style={{
            filter:
              "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.08))",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 7.5l5 5 5-5"
          />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-border">
          {/* Intro prose */}
          <div className="px-6 py-6 space-y-3">
            {discipline.intro.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-foreground/80"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Reading + Opportunities — two columns on lg */}
          <div className="border-t border-border bg-card/40 px-6 py-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Useful reading */}
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
                  Useful reading
                </h4>
                <div className="space-y-4">
                  {discipline.reading.map((item, i) => (
                    <ReadingItem key={i} item={item} />
                  ))}
                </div>
              </div>

              {/* Opportunity ideas */}
              <div>
                <h4 className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
                  Opportunity ideas
                </h4>
                <ul className="space-y-3">
                  {discipline.opportunities.map((opp, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed text-foreground/80 pl-4 border-l-2 border-accent/10"
                    >
                      {opp.text}
                      {opp.links &&
                        opp.links.map((link, li) => (
                          <span key={li}>
                            {" "}
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:underline"
                            >
                              {link.label} &rarr;
                            </a>
                          </span>
                        ))}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Main component ───────────────────────────────────────────── */

export default function PathwaysPage() {
  return (
    <>
      <PageHeader
        title="Pathways"
        description="Digital minds is a young, interdisciplinary field. There is no single route in. This page will help you find yours, whatever your background."
      />

      {/* ── Intro ─────────────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <div className="space-y-4">
              {intro.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-foreground/80"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TOC band ──────────────────────────────────────────── */}
      <section className="border-y border-border bg-[#f0f4f6]/50">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href="#backgrounds"
                className="group rounded-xl border border-border bg-white/60 px-5 py-4 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995]"
              >
                <p className="text-[10px] font-medium uppercase tracking-widest text-accent mb-2">
                  Section 1
                </p>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                  What Your Background Brings
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  How different disciplines contribute to the field.
                </p>
              </a>
              <a
                href="#impact"
                className="group rounded-xl border border-border bg-white/60 px-5 py-4 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995]"
              >
                <p className="text-[10px] font-medium uppercase tracking-widest text-accent mb-2">
                  Section 2
                </p>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                  Finding Your Path to Impact
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Theory of change, research skills, and writing.
                </p>
              </a>
              <a
                href="#programmes"
                className="group rounded-xl border border-border bg-white/60 px-5 py-4 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995]"
              >
                <p className="text-[10px] font-medium uppercase tracking-widest text-accent mb-2">
                  Section 3
                </p>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                  Digital Minds Programmes
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Courses, fellowships, and mentorship programmes.
                </p>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── What Your Background Brings ───────────────────────── */}
      <section id="backgrounds" className="scroll-mt-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                Section 1
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What Your Background Brings
              </h2>
              <p className="mt-4 max-w-3xl text-muted">
                {backgroundsIntro}
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {disciplines.map((d, i) => (
              <FadeIn key={d.id} delay={0.05 * (i + 1)}>
                <DisciplineCard discipline={d} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Finding Your Path to Impact ────────────────────────── */}
      <section
        id="impact"
        className="scroll-mt-16 bg-[#f0f4f6]/30"
      >
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                Section 2
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Finding Your Path to Impact
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-10">
            {resourceSections.map((section, si) => (
              <FadeIn key={section.title} delay={0.05 * (si + 1)}>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-3">
                    {section.items.map((item, i) => (
                      <div key={i} className="text-sm leading-relaxed">
                        <span className="text-foreground">
                          {item.author}
                        </span>
                        {", "}
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="italic text-accent hover:underline"
                        >
                          {item.title}
                        </a>
                        {item.year && (
                          <span className="text-muted"> ({item.year})</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Minds Programmes ───────────────────────────── */}
      <section id="programmes" className="scroll-mt-16 bg-background">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                Section 3
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Digital Minds Programmes
              </h2>
              <p className="mt-4 max-w-3xl text-muted">
                {programmesIntro}
              </p>
            </div>
          </FadeIn>

          {/* Structured Learning */}
          <FadeIn delay={0.05}>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Structured Learning and Mentorship
            </h3>
          </FadeIn>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {structuredProgrammes.map((prog) => (
              <StaggerItem key={prog.title}>
                <a
                  href={prog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995]"
                >
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {prog.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {prog.description}
                  </p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Intensive Development */}
          <FadeIn delay={0.1}>
            <h3 className="text-lg font-semibold text-foreground mt-12 mb-6">
              Intensive Development
            </h3>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="space-y-4">
              {intensiveProgrammes.map((prog) => (
                <a
                  key={prog.title}
                  href={prog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995]"
                >
                  <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                    {prog.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {prog.description}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA footer ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#4098ff]" />
          <NetworkCanvas
            nodeCount={50}
            connectionDistance={140}
            parallaxStrength={0.15}
            repulseStrength={0.25}
          />

        </div>

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Explore the questions driving the field
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              See what researchers are working on across consciousness,
              welfare, governance, and rights.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/research-areas"
                className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[#0f766e] transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                Research Areas
              </Link>
              <Link
                href="/open-questions"
                className="inline-flex h-11 items-center rounded-full border border-white/40 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:scale-105"
              >
                Open Questions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
