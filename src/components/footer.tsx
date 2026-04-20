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

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
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
