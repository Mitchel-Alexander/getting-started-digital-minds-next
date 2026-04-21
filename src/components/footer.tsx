"use client";

import { useState } from "react";

function FeedbackLink() {
  const [open, setOpen] = useState(false);
  return (
    <span>
      <button
        onClick={() => setOpen(!open)}
        className="text-xs text-muted/60 underline hover:text-muted transition-colors"
      >
        Send us feedback on this site
      </button>
      {open && (
        <span className="block mt-2 text-xs text-muted/60 max-w-sm">
          This resource is produced by{" "}
          <a href="https://www.prism-global.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted">
            PRISM
          </a>{" "}
          and the{" "}
          <a href="https://digitalminds.cam/" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted">
            Centre for Digital Minds
          </a>
          . Reach us at{" "}
          <a href="mailto:placeholder@digitalminds.guide" className="underline hover:text-muted">
            placeholder@digitalminds.guide
          </a>
          .
        </span>
      )}
    </span>
  );
}

function FooterPattern() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1200 130"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      aria-hidden
    >
      {/* Primary node — above top edge, rings arc downward */}
      <g transform="translate(720, -38)">
        <circle cx="0" cy="0" r="2"   fill="#67b2b7" opacity="0.35" />
        <circle cx="0" cy="0" r="80"  stroke="#67b2b7" strokeWidth="0.75" opacity="0.45" />
        <circle cx="0" cy="0" r="155" stroke="#67b2b7" strokeWidth="0.65" opacity="0.34" />
        <circle cx="0" cy="0" r="245" stroke="#67b2b7" strokeWidth="0.55" opacity="0.25" />
        <circle cx="0" cy="0" r="355" stroke="#67b2b7" strokeWidth="0.5"  opacity="0.18" />
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-12">
      <FooterPattern />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-foreground">
          Getting Started in Digital Minds
        </p>
        <p className="mt-3 text-xs text-muted/60">
          &copy; {new Date().getFullYear()}
        </p>
        <p className="mt-3">
          <FeedbackLink />
        </p>
      </div>
    </footer>
  );
}
