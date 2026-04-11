"use client";

import { useState } from "react";
import Link from "next/link";
import {
  overview,
  groups,
  type ResearchArea,
  type Reading,
} from "@/data/research-areas";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animate";
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
        {" "}({item.year})
      </p>
      {item.description && (
        <p className="mt-1 text-sm leading-relaxed text-foreground/60">
          {item.description}
        </p>
      )}
    </div>
  );
}

/* ── Reading section (Start here / Go deeper) ─────────────────── */

function ReadingSection({
  label,
  items,
}: {
  label: string;
  items: Reading[];
}) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-widest text-muted mb-4">
        {label}
      </h4>
      <div className="space-y-4">
        {items.map((item, i) => (
          <ReadingItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ── Area card (expandable) ───────────────────────────────────── */

function AreaCard({ area }: { area: ResearchArea }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={area.id}
      className="scroll-mt-24 rounded-xl border border-border bg-white transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995] active:bg-white/80"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left group"
      >
        <h3 className="flex-1 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
          {area.title}
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
            {area.intro.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-foreground/80"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Readings — two columns on lg */}
          <div className="border-t border-border bg-card/40 px-6 py-6">
            <div className="grid gap-8 lg:grid-cols-2">
              <ReadingSection label="Start here" items={area.startHere} />
              <ReadingSection label="Go deeper" items={area.goDeeper} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Group banner labels ──────────────────────────────────────── */

const groupLabels: Record<string, string> = {
  conscious:
    "The first group of questions is empirical and philosophical. What is going on inside AI systems? Could they have experiences?",
  meaning:
    "The second group is ethical. If AI systems have morally relevant properties, what follows for how we treat them?",
  action:
    "The third group is governance. Given deep uncertainty, what should developers, institutions, and the public do now?",
};

/* ── Main component ───────────────────────────────────────────── */

export function ResearchAreasContent() {

  return (
    <>
      <PageHeader
        title="Research Areas"
        description="The field of digital minds spans three broad questions. Each section below introduces the key ideas, debates, and readings."
      />

      {/* ── Overview + TOC ─────────────────────────────────────── */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <FadeIn>
            <div className="max-w-3xl space-y-4">
              {overview.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-foreground/80"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>

          {/* TOC cards */}
          <FadeIn delay={0.1}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {groups.map((group, i) => (
                <a
                  key={group.id}
                  href={`#group-${group.id}`}
                  className="group rounded-xl border border-border bg-card/50 px-5 py-4 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995]"
                >
                  <p className="text-[10px] font-medium uppercase tracking-widest text-accent mb-2">
                    Part {i + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {group.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    {groupLabels[group.id]}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Group sections ────────────────────────────────────── */}
      {groups.map((group, gi) => {
        const isEven = gi % 2 === 0;
        return (
          <section
            key={group.id}
            id={`group-${group.id}`}
            className={`scroll-mt-16 ${isEven ? "bg-background" : "bg-[#f0f4f6]/30"}`}
          >
            <div className="mx-auto max-w-4xl px-6 py-20">
              {/* Group header */}
              <FadeIn>
                <div className="mb-12">
                  <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                    Part {gi + 1} of 3
                  </p>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {group.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-muted">
                    {groupLabels[group.id]}
                  </p>
                </div>
              </FadeIn>

              {/* Area cards */}
              <div className="space-y-4">
                {group.areas.map((area, ai) => (
                  <FadeIn key={area.id} delay={0.05 * (ai + 1)}>
                    <AreaCard area={area} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── CTA footer ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#67b2b7]" />
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
              Ready to go deeper?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Explore the open questions researchers are working on, or find a
              pathway into the field that matches your background.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/open-questions"
                className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[#0f766e] transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                Open Questions
              </Link>
              <Link
                href="/pathways"
                className="inline-flex h-11 items-center rounded-full border border-white/40 px-6 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:scale-105"
              >
                Find Your Pathway
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
