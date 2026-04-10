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

        <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center px-6">
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

      {/* Section rows */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <StaggerContainer className="divide-y divide-border">
            {sections.map((section) => (
              <StaggerItem key={section.title}>
                <Link
                  href={section.href}
                  className="group flex items-center gap-6 py-7 transition-colors hover:bg-card/50 sm:gap-8"
                >
                  <span className="text-sm font-mono text-accent/40 group-hover:text-accent transition-colors">
                    {section.num}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {section.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {section.description}
                    </p>
                  </div>
                  <span className="text-lg text-accent/30 group-hover:text-accent group-hover:translate-x-1 transition-all">
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
