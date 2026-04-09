"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";

const sections = [
  {
    title: "Research Areas",
    description: "Explore the key questions driving digital minds research, from AI consciousness to welfare and policy.",
    href: "/research-areas",
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
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16 pt-24 sm:pt-32">
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
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              A guide for newcomers to the field of AI consciousness, AI welfare,
              and digital minds research. Whether you come from philosophy,
              neuroscience, computer science, law, or policy, this resource will
              help you find your way in.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="mt-10 flex gap-4">
              <Link
                href="/research-areas"
                className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-white transition-opacity hover:opacity-80"
              >
                Start Exploring
              </Link>
              <Link
                href="/field-map"
                className="inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
              >
                Field Map
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Attribution */}
        <p className="absolute bottom-4 right-6 text-xs text-muted/40">
          Photo by Planet Volumes on Unsplash
        </p>
      </section>

      {/* Section cards */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <FadeIn>
            <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
              Explore
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2">
            {sections.map((section) => (
              <StaggerItem key={section.title}>
                <Link
                  href={section.href}
                  className="group block rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {section.description}
                  </p>
                  <span className="mt-4 inline-block text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore &rarr;
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
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
                className="inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-white transition-opacity hover:opacity-80"
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
