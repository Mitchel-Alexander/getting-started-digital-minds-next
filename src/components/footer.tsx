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
          and{" "}
          <a href="https://digitalminds.cam/" target="_blank" rel="noopener noreferrer" className="underline hover:text-muted">
            Cambridge Digital Minds
          </a>
          . Reach us at{" "}
          <a href="mailto:info@digitalminds.cam" className="underline hover:text-muted">
            info@digitalminds.cam
          </a>
          .
        </span>
      )}
    </span>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-12">
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="text-sm font-semibold text-foreground">
          A Beginner&rsquo;s Guide to Digital Minds
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
