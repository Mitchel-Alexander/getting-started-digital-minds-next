"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  overviewIntro,
  overviewConnector,
  disciplineTooltips,
  groups,
  type ResearchArea,
  type Reading,
} from "@/data/research-areas";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

/* ── Discipline chip with tooltip ────────────────────────────────── */

function DisciplineChip({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const tooltip = disciplineTooltips[name];

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <span ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="cursor-default border-b border-dotted border-accent/50 text-foreground/80 hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        aria-describedby={open ? `tooltip-${name}` : undefined}
      >
        {name}
      </button>
      {open && tooltip && (
        <span
          id={`tooltip-${name}`}
          role="tooltip"
          className="absolute bottom-full left-0 z-50 mb-2 w-72 rounded-xl border border-border bg-white px-4 py-3 text-xs leading-relaxed text-foreground/80 shadow-lg"
        >
          {tooltip}
          <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 border-b border-r border-border bg-white" />
        </span>
      )}
    </span>
  );
}

/* ── Reading item ────────────────────────────────────────────────── */

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

/* ── Reading section (Start here / Go deeper) ────────────────────── */

function ReadingSection({ label, items }: { label: string; items: Reading[] }) {
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

/* ── Area card (expandable) ──────────────────────────────────────── */

function AreaCard({ area }: { area: ResearchArea }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id={area.id}
      className="scroll-mt-24 rounded-xl border border-border bg-white transition-all duration-200 hover:bg-slate-50"
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left group"
        aria-expanded={expanded}
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
          className={`shrink-0 text-border transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
          style={{
            filter:
              "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.08))",
          }}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 7.5l5 5 5-5" />
        </svg>
      </button>

      {expanded && (
        <div className="border-t border-border">
          <div className="px-6 py-6 space-y-3">
            {area.intro.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-foreground/80">
                {p}
              </p>
            ))}
          </div>
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

/* ── Main component ──────────────────────────────────────────────── */

export function ResearchAreasContent() {
  return (
    <>
      <PageHeader
        title="Research Areas"
        description="The key questions driving digital minds research, with readings for each area."
      />

      {/* Overview */}
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <FadeIn>
            <p className="text-base leading-relaxed text-foreground/80 max-w-3xl">
              {overviewIntro}
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {groups.map((group, i) => (
                <a
                  key={group.id}
                  href={`#group-${group.id}`}
                  className="group rounded-xl border border-border bg-card/50 px-5 py-5 transition-all duration-200 hover:bg-slate-50"
                >
                  <p className="text-[10px] font-medium uppercase tracking-widest text-accent mb-2">
                    Part {i + 1}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                    {group.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted italic">{group.subtitle}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    Disciplines:{" "}
                    {group.disciplines.map((d, di) => (
                      <span key={d}>
                        <DisciplineChip name={d} />
                        {di < group.disciplines.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-10 text-sm leading-relaxed text-foreground/60 max-w-3xl border-l-2 border-accent/20 pl-4">
              {overviewConnector}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Group sections */}
      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={`group-${group.id}`}
          className={`scroll-mt-16 border-t border-border ${gi % 2 === 0 ? "bg-background" : "bg-[#f0f4f6]/30"}`}
        >
          <div className="mx-auto max-w-4xl px-6 py-20">
            <FadeIn>
              <div className="mb-12">
                <p className="text-xs font-medium uppercase tracking-widest text-accent mb-3">
                  Part {gi + 1} of {groups.length}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {group.title}
                </h2>
                <p className="mt-2 text-muted italic">{group.subtitle}</p>
                <p className="mt-4 text-sm text-muted">
                  Disciplines:{" "}
                  {group.disciplines.map((d, di) => (
                    <span key={d}>
                      <DisciplineChip name={d} />
                      {di < group.disciplines.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
              </div>
            </FadeIn>

            <div className="space-y-4">
              {group.areas.map((area, ai) => (
                <FadeIn key={area.id} delay={0.05 * (ai + 1)}>
                  <AreaCard area={area} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA footer */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to get involved?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              See who is working on these questions, or find events and programs to connect with the field.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/field-map"
                className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:opacity-80 hover:scale-105"
              >
                Field Map
              </Link>
              <Link
                href="/events"
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground hover:scale-105"
              >
                Events & Opportunities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
