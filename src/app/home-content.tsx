"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { NetworkCanvas } from "@/components/network-canvas";

const sections = [
  {
    title: "Start Here",
    description: "New to digital minds? A quick orientation to the field, what it covers, and how to use this guide.",
    href: "/start-here",
  },
  {
    title: "Research Areas",
    description: "Explore the key questions driving digital minds research, from AI consciousness to welfare and policy.",
    href: "/research-areas",
  },
  {
    title: "Open Questions",
    description: "36 consolidated questions synthesised from 10 published research agendas, with suggested reading and sources.",
    href: "/open-questions",
  },
  {
    title: "Pathways",
    description: "Find your way into the field, whether you come from philosophy, neuroscience, computer science, or beyond.",
    href: "/pathways",
  },
  {
    title: "Events",
    description: "Conferences, workshops, fellowships, and programmes happening across the digital minds community.",
    href: "/events",
  },
  {
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
          <div className="absolute inset-0 bg-[#67b2b7]" />
          <NetworkCanvas
            nodeCount={130}
            connectionDistance={160}
            parallaxStrength={0.3}
            repulseStrength={0.35}
          />

        </div>

        <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-6xl flex-col justify-center px-6">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-widest text-white/80">
              PRISM-CDM
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
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

      {/* Section rows */}
      <section className="bg-background">
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

      {/* CTA */}
      <section className="relative overflow-hidden mt-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[#67b2b7]" />
          <NetworkCanvas
            nodeCount={50}
            connectionDistance={140}
            parallaxStrength={0.15}
            repulseStrength={0.35}
          />

        </div>

        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A growing field needs new voices
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/80">
              Digital minds research is young, interdisciplinary, and moving
              fast. There has never been a better time to get involved.
            </p>
            <div className="mt-8">
              <Link
                href="/pathways"
                className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-medium text-[#0f766e] transition-all duration-300 hover:opacity-90 hover:scale-105"
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
