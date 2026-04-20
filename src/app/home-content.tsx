"use client";

import Link from "next/link";
import { intro, tiersIntro, tiers, type ActionItem } from "@/data/start-here";
import { FadeIn } from "@/components/animate";

const sections = [
  {
    title: "Research Areas",
    label: "Research",
    description: "The key questions driving digital minds research, from AI consciousness to welfare and policy.",
    href: "/research-areas",
    featured: true,
  },
  {
    title: "Events & Opportunities",
    label: "Events",
    description: "Conferences, workshops, fellowships, and programs across the digital minds community.",
    href: "/events",
    featured: false,
  },
  {
    title: "Field Map",
    label: "Directory",
    description: "An interactive directory of organizations working on AI consciousness, welfare, and related research.",
    href: "/field-map",
    featured: false,
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
      {/* Hero */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-8">
              A field guide
            </p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[3fr_2fr] lg:items-end">
              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
                Getting Started<br />in Digital Minds
              </h1>
              <div className="lg:pb-1">
                <p className="text-base leading-relaxed text-foreground/60 max-w-sm">
                  A guide for newcomers to the field of AI consciousness, AI welfare, and digital minds research.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <div className="space-y-4">
              {intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/70">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Safety & Digital Minds */}
      <section className="bg-white border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <FadeIn>
            <div className="border-l-4 border-accent pl-6 py-1">
              <h2 className="text-base font-bold tracking-tight">
                Digital minds and AI safety
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                Digital minds and AI welfare research are closely linked with AI safety, and people working on either should understand the other. Some AI safety measures — constraint, monitoring, alteration, and shutdown — have implications for AI welfare if the systems involved are moral patients. Some welfare-motivated proposals, including legal standing and rights, have real implications for alignment and oversight. Many interventions are positive on both sides, and it is important that researchers from both communities coordinate closely, collaborate on the shared questions, and identify and push for measures that are good for safety and welfare together. If your background is in AI safety, engaging with digital minds and AI welfare is particularly valuable: the technical skills and strategic instincts the field has developed are directly useful here, and many of the most important open problems sit at the interface.
              </p>
              <p className="mt-3">
                <Link
                  href="/research-areas#safety-welfare-coordination"
                  className="text-sm text-accent hover:underline"
                >
                  See Safety-Welfare Coordination in Research Areas →
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You Can Do This Week */}
      <section className="border-t border-border bg-[#f8fafa]">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
              Getting started
            </p>
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

      {/* Explore — variable card grid */}
      <section className="border-t border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-8">
              Explore
            </p>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {/* Featured card */}
              <Link
                href={sections[0].href}
                className="group lg:col-span-2 rounded-xl border border-border bg-white p-8 hover:border-foreground/20 hover:bg-slate-50 transition-colors"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
                  {sections[0].label}
                </p>
                <h3 className="text-3xl font-bold tracking-tight group-hover:text-accent transition-colors">
                  {sections[0].title}
                </h3>
                <p className="mt-3 text-foreground/60 leading-relaxed max-w-lg">
                  {sections[0].description}
                </p>
                <p className="mt-6 text-sm font-semibold text-accent">
                  Explore →
                </p>
              </Link>

              {/* Secondary cards */}
              <div className="flex flex-col gap-4">
                {sections.slice(1).map((section) => (
                  <Link
                    key={section.href}
                    href={section.href}
                    className="group flex-1 rounded-xl border border-border bg-white p-6 hover:border-foreground/20 hover:bg-slate-50 transition-colors"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                      {section.label}
                    </p>
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-accent transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">
                      {section.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
