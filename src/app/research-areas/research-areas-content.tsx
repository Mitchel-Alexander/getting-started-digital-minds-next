"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  disciplineTooltips,
  groups,
  type ResearchArea,
  type Reading,
} from "@/data/research-areas";
import { FadeIn } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

/* ── Table of contents ───────────────────────────────────────────── */

function TableOfContents() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className="hidden xl:block w-56 shrink-0 sticky top-20 self-start max-h-[calc(100vh-5rem)] overflow-y-auto pl-6">
      <div className="pr-4 py-8">

        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            Contents
          </p>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-muted/50 hover:text-muted transition-colors"
            aria-label={collapsed ? "Expand contents" : "Collapse contents"}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              {collapsed
                ? <><path d="M2 5h10M2 9h10" /></>
                : <><path d="M2 4h10M2 7h6M2 10h8" /></>
              }
            </svg>
          </button>
        </div>

        {!collapsed && (
          <nav className="space-y-5">
            {groups.map((group, gi) => (
              <div key={group.id}>
                <a
                  href={`#group-${group.id}`}
                  className="block text-xs font-semibold text-foreground/80 hover:text-accent transition-colors leading-snug mb-2"
                >
                  Part {gi + 1} — {group.title}
                </a>
                <div className="ml-2 border-l border-border pl-3 space-y-1.5">
                  {group.areas.map((area) => (
                    <a
                      key={area.id}
                      href={`#${area.id}`}
                      className="block text-xs text-muted hover:text-accent transition-colors leading-snug py-0.5"
                    >
                      {area.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        )}

      </div>
    </aside>
  );
}

/* ── Discipline chip with tooltip ────────────────────────────────── */

function DisciplineChip({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const tooltip = disciplineTooltips[name];

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Each tooltip ends with "Most relevant to: <comma-separated list>." Split so
  // we can render the relevance line on its own with a bold label.
  const relevantMarker = "Most relevant to:";
  const splitIdx = tooltip ? tooltip.indexOf(relevantMarker) : -1;
  const description = splitIdx >= 0 ? tooltip.slice(0, splitIdx).trim() : tooltip;
  const relevantTo = splitIdx >= 0 ? tooltip.slice(splitIdx + relevantMarker.length).trim() : "";

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
          <span className="block">{description}</span>
          {relevantTo && (
            <span className="mt-2 block">
              <strong className="font-semibold text-foreground">{relevantMarker}</strong>{" "}
              {relevantTo}
            </span>
          )}
          <span className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 border-b border-r border-border bg-white" />
        </span>
      )}
    </span>
  );
}

/* ── Reading item ────────────────────────────────────────────────── */

function ReadingItem({ item }: { item: Reading }) {
  return (
    <div className="pt-5">
      <p className="text-xs font-medium uppercase tracking-widest text-accent mb-1.5">
        {item.author} · {item.year}
      </p>
      <p className="text-sm font-semibold text-foreground leading-snug">
        {item.title}
      </p>
      {item.description && (
        <p className="mt-1.5 text-xs leading-relaxed text-foreground/60">
          {item.description}
        </p>
      )}
      {item.url && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block border border-accent rounded-sm px-3 py-1.5 text-xs font-medium uppercase tracking-widest bg-accent text-white hover:brightness-95 transition-all"
        >
          Read
        </a>
      )}
    </div>
  );
}

/* ── Reading section ─────────────────────────────────────────────── */

function ReadingSection({ label, items }: { label: string; items: Reading[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-xs font-medium uppercase tracking-widest text-muted mb-2">
        {label}
      </h4>
      <div className="space-y-6">
        {items.map((item, i) => (
          <ReadingItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ── Flat area section ───────────────────────────────────────────── */

function AreaSection({ area }: { area: ResearchArea }) {
  return (
    <FadeIn>
      <div id={area.id} className="scroll-mt-24 border-t border-border py-14">
        <h3 className="text-2xl font-semibold text-foreground mb-5">
          {area.title}
        </h3>
        <div className="space-y-3 max-w-2xl mb-10">
          {area.intro.map((p, i) => (
            <p key={i} className="text-sm leading-relaxed text-foreground/70">
              {p}
            </p>
          ))}
        </div>
        <div className="grid gap-10 lg:grid-cols-2">
          <ReadingSection label="Start here" items={area.startHere} />
          <ReadingSection label="Go deeper" items={area.goDeeper} />
        </div>
      </div>
    </FadeIn>
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

      <div className="xl:flex xl:items-start">

        <TableOfContents />

        <div className="flex-1 min-w-0">

          {/* Group sections */}
          {groups.map((group, gi) => (
            <section
              key={group.id}
              id={`group-${group.id}`}
              className={`scroll-mt-24 border-t border-border ${gi % 2 === 0 ? "bg-background" : "bg-[#f0f4f6]/30"}`}
            >
              <div className="mx-auto max-w-4xl px-6 py-20">
                <FadeIn>
                  <div className="mb-4">
                    <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
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
                <div>
                  {group.areas.map((area) => (
                    <AreaSection key={area.id} area={area} />
                  ))}
                </div>
              </div>
            </section>
          ))}

        </div>
      </div>

      {/* CTA footer — outside flex so sidebar stops here */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <FadeIn>
            <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to get involved?
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              See who is working on these questions, or find events and programs to connect with the field.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/field-map" className="inline-block border border-accent rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest bg-accent text-white hover:brightness-95 transition-all">
                Field Map
              </Link>
              <Link href="/events" className="inline-block border border-accent rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest bg-accent text-white hover:brightness-95 transition-all">
                Events & Opportunities
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
