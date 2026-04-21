"use client";

import Link from "next/link";
import { intro, tiersIntro, tiers, type ActionItem } from "@/data/start-here";
import { FadeIn } from "@/components/animate";
import { NodeMark } from "@/components/node-mark";
import { HeroPattern } from "@/components/hero-pattern";
import { FocusMarkSafety, FocusMarkResearch, FocusMarkEvents, FocusMarkFieldMap } from "@/components/focus-marks";

const focusAreas = [
  {
    id: "safety",
    label: "Digital Minds and AI Safety",
    description: "Digital minds and AI welfare research are closely linked with AI safety. Some safety measures — constraint, monitoring, shutdown — have direct implications for AI welfare if the systems involved are moral patients. Many interventions are positive for both. If your background is in AI safety, the technical skills and strategic instincts you have developed are directly useful here.",
    href: "/research-areas#safety-welfare-coordination",
    cta: "Explore Safety-Welfare Coordination",
    mark: <FocusMarkFieldMap size={96} className="text-accent" />,
  },
  {
    id: "research",
    label: "Research Areas",
    description: "The key open questions in digital minds research — from consciousness and sentience to welfare, governance, and long-term futures — with readings for each area.",
    href: "/research-areas",
    cta: "Explore Research Areas",
    mark: <FocusMarkResearch size={96} className="text-accent" />,
  },
  {
    id: "events",
    label: "Events & Opportunities",
    description: "Conferences, workshops, fellowships, and programs across the digital minds community.",
    href: "/events",
    cta: "Explore Events & Opportunities",
    mark: <FocusMarkEvents size={96} className="text-accent" />,
  },
  {
    id: "field-map",
    label: "Field Map",
    description: "An interactive directory of organizations working on AI consciousness, welfare, and related research.",
    href: "/field-map",
    cta: "Explore Field Map",
    mark: <FocusMarkSafety size={96} className="text-accent" />,
  },
];

function RichText({ item }: { item: ActionItem }) {
  if (item.links.length === 0) return <>{item.text}</>;

  let remaining = item.text;
  const parts: (string | React.ReactElement)[] = [];

  for (const link of item.links) {
    const idx = remaining.indexOf(link.label);
    if (idx >= 0) {
      if (idx > 0) parts.push(remaining.slice(0, idx));
      parts.push(
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          {link.label}
        </a>
      );
      remaining = remaining.slice(idx + link.label.length);
    }
  }
  if (remaining) parts.push(remaining);
  return <>{parts}</>;
}

export function HomeContent() {
  return (
    <>
      {/* Hero — sticky, full viewport height, content anchored to bottom */}
      <section className="sticky top-16 h-[50vh] overflow-hidden bg-white flex flex-col justify-start">
        <HeroPattern />
        <div className="relative mx-auto w-full max-w-6xl px-6 pt-12">
          <FadeIn>
            <div>
              <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
                Getting Started<br />in Digital Minds
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-foreground/60 max-w-sm">
                A guide for newcomers to the field of AI consciousness, AI welfare, and digital minds research.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="relative z-10 bg-accent scroll-mt-16">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-24">
          <FadeIn>
            <div className="space-y-4">
              {intro.map((p, i) => (
                <p key={i} className="text-xl leading-relaxed text-white/90">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Learn About — focus areas */}
      <section className="relative z-10 bg-white border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr]">

            {/* Far-left label */}
            <div className="mb-10 lg:mb-0">
              <p className="text-sm font-medium uppercase tracking-widest text-muted lg:sticky lg:top-24 lg:pt-12">
                Learn About
              </p>
            </div>

            {/* Items */}
            <div>
              {focusAreas.map((area) => (
                <FadeIn key={area.id}>
                  <div className="border-t border-border py-12">
                    {/* Full-width title */}
                    <p className="text-sm font-medium uppercase tracking-widest text-accent mb-8">
                      {area.label}
                    </p>
                    {/* Motif + text */}
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-[120px_1fr] sm:items-start">
                      {area.mark}
                      <div>
                        <p className="text-sm leading-relaxed text-foreground/70">
                          {area.description}
                        </p>
                        <Link
                          href={area.href}
                          className="mt-6 inline-block border border-accent rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-colors"
                        >
                          {area.cta}
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* What You Can Do This Week */}
      <section className="relative z-10 border-t border-border bg-[#f8fafa]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <div className="flex items-center gap-2 mb-4">
              <NodeMark size={16} />
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Getting started
              </p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What You Can Do This Week
            </h2>
            <p className="mt-3 text-foreground/60">{tiersIntro}</p>
          </FadeIn>

          <div className="mt-12 space-y-12">
            {tiers.map((tier, ti) => (
              <FadeIn key={tier.id} delay={0.05 * (ti + 1)}>
                <div id={tier.id} className="scroll-mt-24">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground/50 mb-4">
                    {tier.title}
                  </h3>
                  <ul className="space-y-3">
                    {tier.items.map((item, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/70">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span><RichText item={item} /></span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
