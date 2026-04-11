"use client";

import { FadeIn } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

const sources = [
  {
    author: "Shiller et al.",
    title: "A Research Agenda for AI Welfare",
    year: 2024,
    org: "Rethink Priorities",
  },
  {
    author: "Mogensen, Saad & Butlin",
    title: "Research Agenda: AI Consciousness",
    year: 2024,
    org: "Global Priorities Institute",
  },
  {
    author: "GPI Philosophy Research Agenda",
    title: "Digital Minds: Philosophy Research Agenda",
    year: 2024,
    org: "Global Priorities Institute",
  },
  {
    author: "GPI Psychology Research Agenda",
    title: "Digital Minds: Psychology Research Agenda",
    year: 2024,
    org: "Global Priorities Institute",
  },
  {
    author: "Goldstein & Kirk-Giannini",
    title: "AI Wellbeing",
    year: 2026,
    org: "Oxford University Press",
  },
  {
    author: "Eleos AI",
    title: "AI Moral Patienthood: A Position Paper",
    year: 2024,
    org: "Eleos AI",
  },
  {
    author: "Long",
    title: "Research Directions: AI Welfare",
    year: 2026,
    org: "Anthropic",
  },
  {
    author: "Finnveden",
    title: "Project Ideas: Sentience and Rights of Digital Minds",
    year: 2024,
    org: "Forethought Research",
  },
  {
    author: "Caviola",
    title: "The Social Science of Digital Minds: Research Agenda",
    year: 2024,
    org: "Global Priorities Institute",
  },
  {
    author: "Anthis",
    title: "Key Questions for Digital Minds",
    year: 2023,
    org: "Sentience Institute",
  },
];

export function MethodologyContent() {
  return (
    <>
      <PageHeader
        title="Methodology"
        description="How the Open Questions directory was constructed."
      />
      <div className="mx-auto max-w-3xl px-6 py-8 space-y-12">
        <FadeIn delay={0.1}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Process</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The Open Questions directory consolidates research questions from
              10 published sources into 36 questions across 13 headings. Each
              source was read in full and its questions extracted — either
              quoted verbatim where the source states them directly, or derived
              from the source&apos;s argumentative text with citations to the
              originating passage.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              Questions were then grouped by topic, and overlapping questions
              from different sources were consolidated into single entries that
              preserve the distinct contributions of each source. The
              consolidation aimed to reduce redundancy while retaining the
              range of perspectives across the field.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={0.15}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Sources</h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              The directory draws on the following 10 sources, spanning
              philosophy, empirical science, social science, and policy.
            </p>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-card">
                    <th className="py-2.5 px-4 text-xs font-medium uppercase tracking-wider text-muted">
                      Source
                    </th>
                    <th className="py-2.5 px-4 text-xs font-medium uppercase tracking-wider text-muted hidden sm:table-cell">
                      Organisation
                    </th>
                    <th className="py-2.5 px-4 text-xs font-medium uppercase tracking-wider text-muted">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sources.map((s, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-b-0"
                    >
                      <td className="py-2.5 px-4 text-sm">
                        <span className="font-medium">{s.author}</span>
                        {", "}
                        <span className="italic">{s.title}</span>
                      </td>
                      <td className="py-2.5 px-4 text-sm text-muted hidden sm:table-cell">
                        {s.org}
                      </td>
                      <td className="py-2.5 px-4 text-sm text-muted">
                        {s.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        <FadeIn delay={0.2}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Registers
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              Each question is tagged with a register indicating the kind of
              inquiry it represents. These are not mutually exclusive — many
              questions span registers — but the assigned tag reflects the
              question&apos;s primary orientation.
            </p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>
                <strong>Philosophical</strong> — Questions about the nature of
                consciousness, moral status, identity, and value.
              </li>
              <li>
                <strong>Empirical</strong> — Questions that could be addressed
                through experiments, evaluations, or interpretability research.
              </li>
              <li>
                <strong>Social science</strong> — Questions about public
                attitudes, social dynamics, and human behaviour.
              </li>
              <li>
                <strong>Policy</strong> — Questions about governance, norms,
                institutions, and legal frameworks.
              </li>
              <li>
                <strong>Strategic</strong> — Questions about prioritisation,
                sequencing, and how to allocate limited research attention.
              </li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={0.25}>
          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground">
              Limitations
            </h2>
            <p className="text-sm leading-relaxed text-foreground/80">
              This directory is not exhaustive. It reflects the state of 10
              published research agendas as of early 2026 and does not capture
              every question in the field. The consolidation process involves
              editorial judgement — different consolidations of the same
              sources would produce different groupings. Questions that appear
              in only one source are not necessarily less important than those
              that appear in several.
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              The suggested reading lists are selective and intended as
              starting points, not comprehensive bibliographies. The quotations
              are drawn from the source documents and may not reflect the
              authors&apos; most current views.
            </p>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
