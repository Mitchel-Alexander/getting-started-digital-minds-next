"use client";

import { useState, useMemo, useCallback } from "react";
import {
  questions,
  headings,
  registerLabels,
  type Register,
  type ConsolidatedQuestion,
} from "@/data/open-questions";
import Link from "next/link";
import { FadeIn } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

const registers: Register[] = ["phil", "emp", "soc", "pol", "str"];

const registerColors: Record<Register, string> = {
  phil: "border-purple-300 text-purple-700 bg-purple-50",
  emp: "border-blue-300 text-blue-700 bg-blue-50",
  soc: "border-amber-300 text-amber-700 bg-amber-50",
  pol: "border-emerald-300 text-emerald-700 bg-emerald-50",
  str: "border-rose-300 text-rose-700 bg-rose-50",
};

function RegisterPill({ register }: { register: Register }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium ${registerColors[register]}`}
    >
      {registerLabels[register]}
    </span>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`shrink-0 text-border transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${open ? "rotate-90" : ""}`}
      style={{
        filter:
          "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.08))",
      }}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
    </svg>
  );
}

function ExpandedDetail({ q }: { q: ConsolidatedQuestion }) {
  const hasQuotes = q.quotes && q.quotes.length > 0;
  const hasReading = q.reading && q.reading.length > 0;
  const isEmpty = !hasQuotes && !hasReading;

  return (
    <div className="px-4 pb-4 pt-1 space-y-4">
      {/* Gloss — always shown in expanded view for mobile, hidden on lg where it's already in the table */}
      <p className="text-sm text-muted leading-relaxed lg:hidden">{q.gloss}</p>

      {/* Quotes */}
      {hasQuotes && (
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-muted mb-2">
            From the literature
          </h4>
          <div className="space-y-2">
            {q.quotes!.map((quote, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-accent/30 pl-3 text-sm leading-relaxed text-foreground/80"
              >
                <p className="italic">&ldquo;{quote.text}&rdquo;</p>
                <cite className="mt-1 block text-xs text-muted not-italic">
                  — {quote.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      )}

      {/* Suggested reading */}
      {hasReading && (
        <div>
          <h4 className="text-xs font-medium uppercase tracking-wider text-muted mb-2">
            Suggested reading
          </h4>
          <ul className="space-y-1.5">
            {q.reading!.map((item, i) => (
              <li key={i} className="text-sm">
                <span className="font-medium text-foreground">
                  {item.author}
                </span>
                , <span className="italic">{item.title}</span>, {item.year}.
                {item.note && (
                  <span className="text-muted"> {item.note}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isEmpty && (
        <p className="text-xs text-muted italic">
          Quotations and suggested reading for this question are forthcoming.
        </p>
      )}

      {/* Sources */}
      <div className="xl:hidden">
        <h4 className="text-xs font-medium uppercase tracking-wider text-muted mb-1">
          Sources
        </h4>
        <p className="text-xs text-muted">{q.sources.join("; ")}</p>
      </div>
    </div>
  );
}

function QuestionRow({
  q,
  isExpanded,
  onToggle,
}: {
  q: ConsolidatedQuestion;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <tr
        className={`border-b border-border last:border-b-0 cursor-pointer transition-all duration-200 ${
          isExpanded
            ? "bg-card"
            : "hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.08)_inset,0_2px_8px_rgba(0,0,0,0.03)]"
        }`}
        onClick={onToggle}
      >
        <td className="py-3 px-4 text-sm leading-relaxed">
          <div className="flex items-start gap-2">
            <ChevronIcon open={isExpanded} />
            <span>{q.question}</span>
          </div>
        </td>
        <td className="py-3 px-4 text-sm text-muted hidden lg:table-cell">
          {q.gloss}
        </td>
        <td className="py-3 px-4 hidden md:table-cell">
          <RegisterPill register={q.register} />
        </td>
        <td className="py-3 px-4 text-xs text-muted hidden xl:table-cell">
          {q.sources.join("; ")}
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-gradient-to-b from-card/60 to-card/20">
          <td colSpan={4} className="border-l-2 border-accent/40">
            <ExpandedDetail q={q} />
          </td>
        </tr>
      )}
    </>
  );
}

function HeadingGroupHeader({
  heading,
  count,
}: {
  heading: string;
  count: number;
}) {
  return (
    <tr className="bg-card">
      <td
        colSpan={4}
        className="py-2.5 px-4 text-sm font-semibold text-foreground"
      >
        {heading}
        <span className="ml-2 text-xs font-normal text-muted">
          {count} {count === 1 ? "question" : "questions"}
        </span>
      </td>
    </tr>
  );
}

function MobileCard({
  q,
  isExpanded,
  onToggle,
}: {
  q: ConsolidatedQuestion;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-b border-border py-4 last:border-b-0 cursor-pointer transition-all duration-200 ${
        isExpanded
          ? "bg-card/40 -mx-4 px-4 rounded-xl"
          : "hover:bg-white/60 hover:backdrop-blur-sm hover:-mx-4 hover:px-4 hover:rounded-xl hover:shadow-[0_0_0_1px_rgba(13,148,136,0.08)_inset,0_2px_8px_rgba(0,0,0,0.03)]"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start gap-2">
        <ChevronIcon open={isExpanded} />
        <div className="flex-1">
          <div className="flex items-start gap-2 mb-1">
            <RegisterPill register={q.register} />
          </div>
          <p className="mt-1 text-sm leading-relaxed">{q.question}</p>
          {!isExpanded && (
            <p className="mt-1.5 text-xs text-muted italic">{q.gloss}</p>
          )}
        </div>
      </div>
      {isExpanded && (
        <div
          className="mt-3 ml-6 border-l-2 border-accent/40 pl-3"
          onClick={(e) => e.stopPropagation()}
        >
          <ExpandedDetail q={q} />
        </div>
      )}
    </div>
  );
}

export function OpenQuestionsContent() {
  const [headingFilter, setHeadingFilter] = useState("all");
  const [registerFilter, setRegisterFilter] = useState<Register | "all">(
    "all"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const toggleExpanded = useCallback((id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const filtered = useMemo(() => {
    return questions.filter((q) => {
      const headingMatch =
        headingFilter === "all" || q.heading === headingFilter;
      const registerMatch =
        registerFilter === "all" || q.register === registerFilter;
      const searchMatch =
        searchQuery === "" ||
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.gloss.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.sources.some((s) =>
          s.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return headingMatch && registerMatch && searchMatch;
    });
  }, [headingFilter, registerFilter, searchQuery]);

  const grouped = useMemo(() => {
    const groups: { heading: string; items: ConsolidatedQuestion[] }[] = [];
    let currentHeading = "";
    for (const q of filtered) {
      if (q.heading !== currentHeading) {
        currentHeading = q.heading;
        groups.push({ heading: currentHeading, items: [] });
      }
      groups[groups.length - 1].items.push(q);
    }
    return groups;
  }, [filtered]);

  return (
    <>
      <PageHeader
        title="Open Questions"
        description="36 consolidated questions across 13 headings, synthesised from 10 published research agendas."
      />
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Filters */}
        <FadeIn delay={0.1}>
          <div className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              {/* Heading dropdown */}
              <div className="flex-1">
                <label
                  htmlFor="heading-filter"
                  className="block text-xs font-medium uppercase tracking-wider text-muted mb-2"
                >
                  Heading
                </label>
                <select
                  id="heading-filter"
                  value={headingFilter}
                  onChange={(e) => setHeadingFilter(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="all">All headings</option>
                  {headings.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search */}
              <div className="flex-1">
                <label
                  htmlFor="search"
                  className="block text-xs font-medium uppercase tracking-wider text-muted mb-2"
                >
                  Search
                </label>
                <input
                  id="search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions, context, or sources..."
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            {/* Register pills */}
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                Register
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => setRegisterFilter("all")}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                    registerFilter === "all"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-muted hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] hover:text-foreground"
                  }`}
                >
                  All
                </button>
                {registers.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRegisterFilter(r)}
                    className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                      registerFilter === r
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-muted hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] hover:text-foreground"
                    }`}
                  >
                    {registerLabels[r]}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted">
              {filtered.length === questions.length
                ? `${questions.length} questions`
                : `${filtered.length} of ${questions.length} questions`}
            </p>
          </div>
        </FadeIn>

        {/* Sources note */}
        <FadeIn delay={0.15}>
          <p className="mt-8 text-sm text-muted">
            This directory draws on 10 published sources. Questions are
            reproduced verbatim where quoted; derived questions paraphrase
            source material with citations. For the full list of sources,
            extraction process, and limitations, see the{" "}
            <Link
              href="/methodology"
              className="text-accent hover:underline"
            >
              methodology page
            </Link>
            .
          </p>
        </FadeIn>

        {/* Desktop table */}
        <FadeIn delay={0.2}>
          <div className="mt-8 hidden md:block overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border bg-card">
                  <th className="py-3 px-4 text-xs font-medium uppercase tracking-wider text-muted">
                    Question
                  </th>
                  <th className="py-3 px-4 text-xs font-medium uppercase tracking-wider text-muted hidden lg:table-cell">
                    Context
                  </th>
                  <th className="py-3 px-4 text-xs font-medium uppercase tracking-wider text-muted">
                    Register
                  </th>
                  <th className="py-3 px-4 text-xs font-medium uppercase tracking-wider text-muted hidden xl:table-cell">
                    Source(s)
                  </th>
                </tr>
              </thead>
              {grouped.map((group) => (
                <tbody key={group.heading}>
                  <HeadingGroupHeader
                    heading={group.heading}
                    count={group.items.length}
                  />
                  {group.items.map((q) => (
                    <QuestionRow
                      key={q.id}
                      q={q}
                      isExpanded={expandedIds.has(q.id)}
                      onToggle={() => toggleExpanded(q.id)}
                    />
                  ))}
                </tbody>
              ))}
              {filtered.length === 0 && (
                <tbody>
                  <tr>
                    <td
                      colSpan={4}
                      className="py-12 text-center text-sm text-muted"
                    >
                      No questions match your filters.{" "}
                      <button
                        onClick={() => {
                          setHeadingFilter("all");
                          setRegisterFilter("all");
                          setSearchQuery("");
                        }}
                        className="text-accent hover:underline"
                      >
                        Clear filters
                      </button>
                    </td>
                  </tr>
                </tbody>
              )}
            </table>
          </div>
        </FadeIn>

        {/* Mobile list */}
        <FadeIn delay={0.2}>
          <div className="mt-8 md:hidden">
            {grouped.map((group) => (
              <div key={group.heading} className="mb-6">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {group.heading}
                  <span className="ml-2 text-xs font-normal text-muted">
                    {group.items.length}
                  </span>
                </h3>
                <div className="rounded-xl border border-border px-4">
                  {group.items.map((q) => (
                    <MobileCard
                      key={q.id}
                      q={q}
                      isExpanded={expandedIds.has(q.id)}
                      onToggle={() => toggleExpanded(q.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="py-12 text-center text-sm text-muted">
                No questions match your filters.{" "}
                <button
                  onClick={() => {
                    setHeadingFilter("all");
                    setRegisterFilter("all");
                    setSearchQuery("");
                  }}
                  className="text-accent hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </FadeIn>

      </div>
    </>
  );
}
