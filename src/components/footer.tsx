export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-sm text-muted">
        <p>A project of PRISM &mdash; Partnership for Research Into Sentient Machines</p>
        <p>&copy; {new Date().getFullYear()} PRISM-CDM</p>
      </div>
    </footer>
  );
}
