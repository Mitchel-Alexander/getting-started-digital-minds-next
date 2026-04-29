"use client";

import Link from "next/link";
import { intro, tiersIntro, tiers, type ActionItem } from "@/data/start-here";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { PageHeader } from "@/components/page-header";
import { NetworkCanvas } from "@/components/network-canvas";

/* ── Inline link replacer ─────────────────────────────────────── */

function RichText({ item }: { item: ActionItem }) {
  if (item.links.length === 0) {
    return <>{item.text}</>;
  }

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

/* ── Main component ───────────────────────────────────────────── */

export function StartHereContent() {
  return (
    <>
      <PageHeader
        title="Start Here"
        description="New to digital minds? This page will orient you to the field and point you to the best places to begin."
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

      {/* ── What You Can Do This Week ─────────────────────────── */}
      <section className="border-t border-border bg-[#f0f4f6]/30">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What You Can Do This Week
              </h2>
              <p className="mt-4 max-w-2xl text-muted">{tiersIntro}</p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {tiers.map((tier, ti) => (
              <FadeIn key={tier.id} delay={0.05 * (ti + 1)}>
                <div id={tier.id} className="scroll-mt-24">
                  <h3 className="text-lg font-semibold text-foreground mb-5">
                    {tier.title}
                  </h3>
                  <StaggerContainer className="space-y-3">
                    {tier.items.map((item, i) => (
                      <StaggerItem key={i}>
                        <div className="rounded-xl border border-border bg-white px-5 py-4 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)]">
                          <p className="text-sm leading-relaxed text-foreground/80">
                            <RichText item={item} />
                          </p>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </FadeIn>
            ))}
          </div>
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
              Ready to explore the field?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Dive into the research questions, find your pathway in, or see
              who is working on what.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/research-areas"
                className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[#0f766e] transition-all duration-300 hover:opacity-90 hover:scale-105"
              >
                Research Areas
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
