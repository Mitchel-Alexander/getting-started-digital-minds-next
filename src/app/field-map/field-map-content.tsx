"use client";

import { useState, useCallback, useEffect } from "react";
import {
  organisations,
  zoneLabels,
  zoneOrder,
  zoneAccents,
  type Organisation,
  type Zone,
} from "@/data/organisations";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";

const zoneBorderColors: Record<Zone, string> = {
  "digital-minds": "border-purple-800",
  "empirical-foundations": "border-blue-800",
  "philosophical-foundations": "border-teal-700",
  "governance-advocacy": "border-green-800",
  support: "border-neutral-600",
  media: "border-amber-800",
};

const zoneTagColors: Record<Zone, string> = {
  "digital-minds": "bg-purple-900/40 text-purple-300",
  "empirical-foundations": "bg-blue-900/40 text-blue-300",
  "philosophical-foundations": "bg-teal-900/40 text-teal-300",
  "governance-advocacy": "bg-green-900/40 text-green-300",
  support: "bg-neutral-800/60 text-neutral-300",
  media: "bg-amber-900/40 text-amber-300",
};

function OrgCard({ org, onClick }: { org: Organisation; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 cursor-pointer"
    >
      <span className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${zoneTagColors[org.zone]}`}>
        {zoneLabels[org.zone]}
      </span>
      <h3 className="mt-3 text-sm font-semibold leading-snug group-hover:text-accent transition-colors">
        {org.name}
      </h3>
      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-muted">
        <span>{org.org_type.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}</span>
        <span className="text-border">&middot;</span>
        <span>{org.geography}</span>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-muted line-clamp-3">
        {org.description}
      </p>
    </button>
  );
}

function Modal({
  org,
  onClose,
}: {
  org: Organisation;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const alsoLabel = org.zone_secondary ? ` \u00b7 also: ${zoneLabels[org.zone_secondary]}` : "";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-card border border-border overflow-hidden"
        style={{ borderTopColor: zoneAccents[org.zone], borderTopWidth: 3 }}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-muted hover:text-foreground transition-colors"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-8">
          <h2 className="text-lg font-semibold pr-8">{org.name}</h2>
          <p className="mt-1 text-xs text-muted">
            {zoneLabels[org.zone]}
            {alsoLabel}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-muted">
            <span>{org.org_type.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}</span>
            <span className="text-border">&middot;</span>
            <span>{org.geography}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            {org.description}
          </p>
          {org.selected_links && org.selected_links.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-muted">Selected coverage</p>
              <ul className="mt-2 space-y-1">
                {org.selected_links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {link.title}
                      {link.author && ` (${link.author})`}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <a
            href={org.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
          >
            Visit website &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export function FieldMapContent() {
  const [selectedOrg, setSelectedOrg] = useState<Organisation | null>(null);

  const handleClose = useCallback(() => setSelectedOrg(null), []);

  const orgsByZone = zoneOrder.map((zone) => ({
    zone,
    orgs: organisations.filter((o) => o.zone === zone),
  })).filter((g) => g.orgs.length > 0);

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Field Map
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Organisations working on AI consciousness, AI welfare, and digital minds research.
        </p>
        <p className="mt-2 text-sm text-muted">
          {organisations.length} organisations across research, governance, training, and field building.
        </p>
      </FadeIn>

      {/* TOC pills */}
      <FadeIn delay={0.1}>
        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Section navigation">
          {orgsByZone.map(({ zone }) => (
            <a
              key={zone}
              href={`#${zone}`}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all border-border text-muted hover:border-accent/30 hover:text-foreground`}
            >
              {zoneLabels[zone]}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Sections */}
      {orgsByZone.map(({ zone, orgs }) => (
        <section key={zone} id={zone} className="mt-14">
          <FadeIn>
            <h2 className={`text-xl font-semibold border-l-4 pl-4 ${zoneBorderColors[zone]}`}>
              {zoneLabels[zone]}
            </h2>
          </FadeIn>
          <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orgs.map((org) => (
              <StaggerItem key={org.name}>
                <OrgCard org={org} onClick={() => setSelectedOrg(org)} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      ))}

      {/* Modal */}
      {selectedOrg && <Modal org={selectedOrg} onClose={handleClose} />}
    </div>
  );
}
