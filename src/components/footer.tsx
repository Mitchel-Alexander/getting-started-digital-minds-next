import Link from "next/link";

const links = [
  { label: "Start Here", href: "/start-here" },
  { label: "Research Areas", href: "/research-areas" },
  { label: "Pathways", href: "/pathways" },
  { label: "Events", href: "/events" },
  { label: "Field Map", href: "/field-map" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">
            Getting Started in Digital Minds
          </p>
          <p className="mt-1 text-xs text-muted">
            A project of PRISM &mdash; Partnership for Research Into Sentient
            Machines
          </p>
          <p className="mt-3 text-xs text-muted/60">
            &copy; {new Date().getFullYear()} PRISM-CDM
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
