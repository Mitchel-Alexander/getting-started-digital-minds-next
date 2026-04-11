export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
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
    </footer>
  );
}
