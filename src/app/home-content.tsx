"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { NetworkCanvas } from "@/components/network-canvas";

const sections = [
  {
    num: "01",
    title: "Research Areas",
    description: "Explore the key questions driving digital minds research, from AI consciousness to welfare and policy.",
    href: "/research-areas",
  },
  {
    num: "02",
    title: "Pathways",
    description: "Find your way into the field, whether you come from philosophy, neuroscience, computer science, or beyond.",
    href: "/pathways",
  },
  {
    num: "03",
    title: "Events",
    description: "Conferences, workshops, fellowships, and programmes happening across the digital minds community.",
    href: "/events",
  },
  {
    num: "04",
    title: "Field Map",
    description: "An interactive directory of organisations working on AI consciousness, welfare, and related research.",
    href: "/field-map",
  },
];

export function HomeContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Animated network background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f0f4f6]" />
          <NetworkCanvas
            nodeCount={90}
            connectionDistance={160}
            parallaxStrength={0.3}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-20">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              PRISM-CDM
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Getting Started in Digital Minds
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              A guide for newcomers to the field of AI consciousness, AI welfare,
              and digital minds research. Whether you come from philosophy,
              neuroscience, computer science, law, or policy, this resource will
              help you find your way in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Section cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-4">
          {/* Featured first card — full width */}
          <FadeIn>
            <Link
              href={sections[0].href}
              className="group relative block rounded-2xl border-l-4 border-accent bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:scale-[1.01]"
            >
              <span className="text-xs font-mono text-accent/50">{sections[0].num}</span>
              <h3 className="mt-2 text-xl font-semibold group-hover:text-accent transition-colors">
                {sections[0].title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {sections[0].description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-accent translate-x-0 group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </Link>
          </FadeIn>

          {/* Remaining cards — three column */}
          <StaggerContainer className="mt-3 grid gap-3 sm:grid-cols-3">
            {sections.slice(1).map((section) => (
              <StaggerItem key={section.title}>
                <Link
                  href={section.href}
                  className="group relative block h-full rounded-2xl border-l-4 border-accent/30 bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-xl hover:shadow-accent/5 hover:scale-[1.02]"
                >
                  <span className="text-xs font-mono text-accent/40">{section.num}</span>
                  <h3 className="mt-2 text-base font-semibold group-hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {section.description}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-accent translate-x-0 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#f0f4f6]" />
          <NetworkCanvas
            nodeCount={50}
            connectionDistance={140}
            parallaxStrength={0.15}
            repulseStrength={0.35}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A growing field needs new voices
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              Digital minds research is young, interdisciplinary, and moving
              fast. There has never been a better time to get involved.
            </p>
            <div className="mt-8">
              <Link
                href="/pathways"
                className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-white transition-all duration-300 hover:opacity-80 hover:scale-105"
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
