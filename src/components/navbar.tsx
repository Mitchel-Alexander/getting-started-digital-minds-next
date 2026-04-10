"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/research-areas", label: "Research Areas" },
  { href: "/pathways", label: "Pathways" },
  { href: "/events", label: "Events" },
  { href: "/field-map", label: "Field Map" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/20 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Getting Started in Digital Minds
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-8 lg:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === href
                    ? "text-foreground font-medium"
                    : "text-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="border-t border-border bg-white px-6 py-4 lg:hidden">
          {links.map(({ href, label }) => (
            <li key={href} className="py-2">
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm transition-colors hover:text-accent ${
                  pathname === href
                    ? "text-foreground font-medium"
                    : "text-muted"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
