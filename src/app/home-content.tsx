"use client";

import Link from "next/link";
import { intro, tiersIntro, tiers, type ActionItem } from "@/data/start-here";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";

const sections = [
  {
    title: "Research Areas",
    description: "The key questions driving digital minds research, from AI consciousness to welfare and policy.",
    href: "/research-areas",
  },
  {
    title: "Events & Opportunities",
    description: "Conferences, workshops, fellowships, and programs across the digital minds community.",
    href: "/events",
  },
  {
    title: "Field Map",
    description: "An interactive directory of organizations working on AI consciousness, welfare, and related research.",
    href: "/field-map",
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#67b2b7] to-[#4a9298]">
        <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center px-6">
          <FadeIn delay={0.1}>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Getting Started in Digital Minds
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80">
              A guide for newcomers to the field of AI consciousness, AI welfare,
              and digital minds research. Whether you come from philosophy,
              neuroscience, computer science, law, or policy, this resource will
              help you find your way in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <div className="space-y-4">
              {intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-foreground/80">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* AI Safety & Digital Minds */}
      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <FadeIn>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 px-8 py-7">
              <h2 className="text-lg font-semibold tracking-tight">
                Digital minds and AI safety
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                Digital minds and AI welfare research are closely linked with AI safety, and people working on either should understand the other. Some AI safety measures — constraint, monitoring, alteration, and shutdown — have implications for AI welfare if the systems involved are moral patients. Some welfare-motivated proposals, including legal standing and rights, have real implications for alignment and oversight. Many interventions are positive on both sides, and it is important that researchers from both communities coordinate closely, collaborate on the shared questions, and identify and push for measures that are good for safety and welfare together. If your background is in AI safety, engaging with digital minds and AI welfare is particularly valuable: the technical skills and strategic instincts the field has developed are directly useful here, and many of the most important open problems sit at the interface.
              </p>
              <p className="mt-4">
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
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <FadeIn>
            <div className="mb-10">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What You Can Do This Week
              </h2>
              <p className="mt-4 text-muted">{tiersIntro}</p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {tiers.map((tier, ti) => (
              <FadeIn key={tier.id} delay={0.05 * (ti + 1)}>
                <div id={tier.id} className="scroll-mt-24">
                  <h3 className="text-base font-semibold text-foreground mb-4">
                    {tier.title}
                  </h3>
                  <ul className="space-y-3">
                    {tier.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-foreground/80"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        <span>
                          <RichText item={item} />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section rows */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="pb-4 pt-8 text-lg font-medium uppercase tracking-widest text-muted">
              Explore
            </h2>
          </FadeIn>
          <StaggerContainer className="divide-y divide-border border-t border-border">
            {sections.map((section) => (
              <StaggerItem key={section.title}>
                <Link
                  href={section.href}
                  className="group flex items-center gap-8 py-14 pr-4 -mx-4 px-4 rounded-2xl transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995] active:bg-white/80 sm:gap-12"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors sm:text-3xl">
                      {section.title}
                    </h3>
                    <p className="mt-3 text-lg leading-relaxed text-muted">
                      {section.description}
                    </p>
                  </div>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="shrink-0 text-border group-hover:translate-x-1 transition-all"
                    style={{
                      filter:
                        "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.08))",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 5l5 5-5 5"
                    />
                  </svg>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
