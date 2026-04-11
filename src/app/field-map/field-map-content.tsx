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
import { PageHeader } from "@/components/page-header";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const zoneBorderColors: Record<Zone, string> = {
  "digital-minds": "border-blue-700",
  "empirical-foundations": "border-blue-800",
  "philosophical-foundations": "border-teal-700",
  "governance-advocacy": "border-green-800",
  support: "border-neutral-600",
  media: "border-amber-800",
};

const zoneTagColors: Record<Zone, string> = {
  "digital-minds": "bg-blue-100 text-blue-700",
  "empirical-foundations": "bg-blue-100 text-blue-700",
  "philosophical-foundations": "bg-teal-100 text-teal-700",
  "governance-advocacy": "bg-green-100 text-green-700",
  support: "bg-neutral-100 text-neutral-600",
  media: "bg-amber-100 text-amber-700",
};

function OrgCard({ org, onClick }: { org: Organisation; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group w-full text-left rounded-xl border border-border border-l-[3px] ${zoneBorderColors[org.zone]} bg-white p-5 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995] active:bg-white/80 cursor-pointer`}
    >
      {org.logo ? (
        <img
          src={`${basePath}/logos/${org.logo}.png`}
          alt=""
          className="h-16 w-full object-contain mb-3"
        />
      ) : (
        <div className="h-16 mb-3" />
      )}
      <h3 className="text-sm font-semibold leading-snug group-hover:text-accent transition-colors">
        {org.name}
      </h3>
      <div className="mt-1.5 flex items-center gap-1.5 text-xs text-foreground/60">
        <span>{org.org_type.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}</span>
        <span className="text-border">&middot;</span>
        <span>{org.geography}</span>
      </div>
      <p className="mt-2.5 text-xs leading-relaxed text-foreground/60 line-clamp-3">
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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-lg rounded-xl bg-white/90 backdrop-blur-md border border-border overflow-hidden shadow-xl"
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
          {org.logo && (
            <img
              src={`${basePath}/logos/${org.logo}.png`}
              alt=""
              className="h-16 w-auto object-contain mb-4"
            />
          )}
          <h2 className="text-lg font-semibold pr-8">{org.name}</h2>
          <p className="mt-1 text-xs text-muted">
            {zoneLabels[org.zone]}
            {alsoLabel}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs text-foreground/60">
            <span>{org.org_type.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}</span>
            <span className="text-border">&middot;</span>
            <span>{org.geography}</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-foreground/70">
            {org.description}
          </p>
          {org.selected_links && org.selected_links.length > 0 && (
            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-widest text-muted">Selected coverage</p>
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
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-80 hover:scale-105"
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
    <>
      <PageHeader
        title="Field Map"
        description="Organisations working on AI consciousness, AI welfare, and digital minds research."
      />
      <div className="mx-auto max-w-6xl px-6 py-8">
      <FadeIn>
        <p className="text-sm text-muted">
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
              className="rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium transition-all duration-200 text-muted hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] hover:text-foreground active:scale-[0.97]"
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
            <h2
              className={`text-xl font-semibold border-l-4 pl-4 ${zoneBorderColors[zone]}`}
              style={{
                filter:
                  "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.06))",
              }}
            >
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
    </>
  );
}
