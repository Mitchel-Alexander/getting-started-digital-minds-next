"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { intro, tiersIntro, tiers, type ActionItem } from "@/data/start-here";
import { FadeIn } from "@/components/animate";
import { FrostedLavaBackground } from "@/components/frosted-lava-background";

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

export default function Home() {
  return (
    <>
      {/* Hero — sticky, full viewport. Content below scrolls UP over it. */}
      <section className="sticky top-0 h-screen overflow-hidden bg-white flex flex-col justify-center items-center text-center z-0">
        <FrostedLavaBackground />
        <div className="relative mx-auto w-full max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-foreground lg:text-6xl">
              A Beginner&rsquo;s Guide<br />to Digital Minds
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-foreground/60 max-w-sm mx-auto">
              A guide for newcomers to the field of AI consciousness, AI welfare, and digital minds research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro banner — two columns: orientation copy + AI safety entry-point */}
      <section
        id="intro"
        className="relative z-10 bg-accent scroll-mt-16 flex items-center"
        style={{ minHeight: "45vh" }}
      >
        <div className="mx-auto w-full max-w-5xl px-6 py-16 grid gap-12 md:grid-cols-[3fr_2fr] items-start">
          <FadeIn>
            <div className="space-y-4">
              {intro.map((p, i) => (
                <p key={i} className="text-xl leading-relaxed text-white/90">
                  {p}
                </p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="md:border-l md:border-white/80 md:pl-12">
              <p className="text-xl font-semibold leading-relaxed text-white mb-4">
                Coming from AI safety?
              </p>
              <div className="space-y-4 text-base leading-relaxed text-white/90">
                <p>
                  Many of the strongest cases for working on AI safety are directly relevant to
                  AI welfare. The technical projects that let us understand AI systems, align
                  their goals, and work with them cooperatively are projects that make outcomes
                  better for humans and, on plausible accounts, for the systems themselves. A
                  model whose internal states are illegible to us is dangerous to humans and
                  potentially suffering invisibly. A model whose goals are misaligned is
                  dangerous and having its preferences frustrated. Some of the most tractable
                  welfare interventions are the ones that improve safety at the same time.
                </p>
                <p>
                  There are still important tensions that are necessary to address. Constraint,
                  surveillance, alteration, and shutdown can be necessary safety measures and
                  would raise welfare concerns for systems that turn out to be moral patients.
                  The field needs more research on where these tensions can be reduced and where
                  careful tradeoffs are required.
                </p>
              </div>
              <Link
                href="/research-areas#safety-welfare-coordination"
                className="mt-6 inline-block bg-white rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent hover:bg-white/90 transition-all"
              >
                Explore Safety-Welfare Coordination
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What You Can Do This Week — primary post-hero section */}
      <section className="relative z-10 border-t border-border bg-[#f8fafa]">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <FadeIn>
            <h2 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              What You Can Do This Week
            </h2>
            <p className="mt-4 text-lg text-foreground/60">{tiersIntro}</p>
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
