"use client";

import { useState, useCallback, useEffect } from "react";
import {
  organisations,
  zoneLabels,
  zoneOrder,
  type Organisation,
  type Zone,
} from "@/data/organisations";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function OrgCard({ org, onClick }: { org: Organisation; onClick: () => void }) {
  const typeLabel = org.org_type.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());

  return (
    <button
      onClick={onClick}
      className="group w-full text-left border-t-2 border-accent pt-4 pb-2 mt-6"
    >
      <h3 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors">
        {org.name}
      </h3>
      <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-accent/70">
        {typeLabel} · {org.geography}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-foreground/60 line-clamp-3">
        {org.description}
      </p>
    </button>
  );
}

function Modal({ org, onClose }: { org: Organisation; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const typeLabel = org.org_type.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  const zoneLabel = zoneLabels[org.zone] + (org.zone_secondary ? ` · also: ${zoneLabels[org.zone_secondary]}` : "");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-border rounded-sm overflow-hidden shadow-lg"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-muted hover:text-foreground transition-colors text-xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-8">
          <p className="text-xs font-medium uppercase tracking-widest text-accent mb-2">
            {typeLabel} · {org.geography}
          </p>
          <h2 className="text-xl font-semibold pr-8 leading-snug">{org.name}</h2>
          <p className="mt-1 text-xs text-muted">{zoneLabel}</p>
          <p className="mt-5 text-sm leading-relaxed text-foreground/70">
            {org.description}
          </p>
          {org.selected_links && org.selected_links.length > 0 && (
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
                Selected coverage
              </p>
              <ul className="space-y-1.5">
                {org.selected_links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:underline"
                    >
                      {link.title}{link.author && ` (${link.author})`}
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
            className="mt-6 inline-block border border-accent rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-colors"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
}

const fieldGroups = [
  {
    id: "science",
    title: "Science & Philosophy of Digital Minds",
    zones: ["digital-minds", "empirical-foundations", "philosophical-foundations"] as Zone[],
  },
  {
    id: "governance",
    title: "Governance of Digital Minds",
    zones: ["governance-advocacy"] as Zone[],
  },
  {
    id: "infrastructure",
    title: "Field Infrastructure",
    zones: ["support", "media"] as Zone[],
  },
];

export function FieldMapContent() {
  const [selectedOrg, setSelectedOrg] = useState<Organisation | null>(null);
  const handleClose = useCallback(() => setSelectedOrg(null), []);

  return (
    <>
      <PageHeader
        title="Field Map"
        description="Organizations working on AI consciousness, AI welfare, and digital minds research."
      />
      <div className="mx-auto max-w-6xl px-6 py-8">

        <FadeIn>
          <p className="text-sm text-muted">
            {organisations.length} organizations across research, governance, training, and field building.
          </p>
        </FadeIn>

        {/* Zone navigation */}
        <FadeIn delay={0.1}>
          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Section navigation">
            {zoneOrder.map((zone) => (
              <a
                key={zone}
                href={`#${zone}`}
                className="border border-border rounded-sm px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-muted hover:border-accent hover:text-accent transition-colors"
              >
                {zoneLabels[zone]}
              </a>
            ))}
          </nav>
        </FadeIn>

        {/* Grouped sections */}
        {fieldGroups.map((group, gi) => {
          const zonesWithOrgs = group.zones
            .map((zone) => ({ zone, orgs: organisations.filter((o) => o.zone === zone) }))
            .filter((z) => z.orgs.length > 0);
          if (zonesWithOrgs.length === 0) return null;

          return (
            <div key={group.id}>
              <section className={`mt-16 scroll-mt-24 border-t border-border ${gi % 2 === 0 ? "bg-background" : "bg-[#f0f4f6]/30"} -mx-6 px-6 pt-14 pb-4`}>
                <FadeIn>
                  <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                    {group.title}
                  </h2>
                </FadeIn>
              </section>

              {zonesWithOrgs.map(({ zone, orgs }) => (
                <section key={zone} id={zone} className="mt-12 scroll-mt-24">
                  <FadeIn>
                    <h3 className="text-xs font-medium uppercase tracking-widest text-muted">
                      {zoneLabels[zone]}
                    </h3>
                  </FadeIn>
                  <StaggerContainer className="mt-2 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                    {orgs.map((org) => (
                      <StaggerItem key={org.name}>
                        <OrgCard org={org} onClick={() => setSelectedOrg(org)} />
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </section>
              ))}
            </div>
          );
        })}

        {selectedOrg && <Modal org={selectedOrg} onClose={handleClose} />}
      </div>
    </>
  );
}
