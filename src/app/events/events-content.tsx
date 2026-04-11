"use client";

import { useState, useMemo } from "react";
import { events, type Event } from "@/data/events";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";
import { PageHeader } from "@/components/page-header";

const eventTypes = ["all", "conference", "workshop", "fellowship", "course", "programme", "seminar"] as const;
const eventFormats = ["all", "in-person", "online", "hybrid"] as const;

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function formatDateFull(dateStr: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function isUpcoming(event: Event): boolean {
  const today = new Date().toISOString().split("T")[0];
  if (event.deadline) {
    return event.deadline >= today;
  }
  const endDate = event.date_end || event.date_start;
  if (!endDate) return true;
  return endDate >= today;
}

function isRecent(event: Event): boolean {
  const today = new Date();
  const sixMonthsAgo = new Date(today);
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const cutoff = sixMonthsAgo.toISOString().split("T")[0];
  const todayStr = today.toISOString().split("T")[0];

  if (event.deadline) {
    return event.deadline < todayStr && event.deadline >= cutoff;
  }
  const checkDate = event.date_end || event.date_start;
  if (!checkDate) return false;
  return checkDate < todayStr && checkDate >= cutoff;
}

const typeColors: Record<string, string> = {
  conference: "text-purple-700 bg-purple-50/80",
  workshop: "text-blue-700 bg-blue-50/80",
  fellowship: "text-emerald-700 bg-emerald-50/80",
  course: "text-amber-700 bg-amber-50/80",
  programme: "text-cyan-700 bg-cyan-50/80",
  seminar: "text-rose-700 bg-rose-50/80",
};

const typeBorderColors: Record<string, string> = {
  conference: "border-l-purple-200",
  workshop: "border-l-blue-200",
  fellowship: "border-l-emerald-200",
  course: "border-l-amber-200",
  programme: "border-l-cyan-200",
  seminar: "border-l-rose-200",
};

function EventCard({ event, isPast }: { event: Event; isPast?: boolean }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-xl border border-border border-l-[3px] ${typeBorderColors[event.type] || ""} bg-white p-6 transition-all duration-200 hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] active:scale-[0.995] active:bg-white/80 ${isPast ? "opacity-60 hover:opacity-80" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-block rounded-full px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider ${typeColors[event.type] || "text-muted bg-card"}`}>
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
        <span className="shrink-0 rounded-full bg-card/60 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
          {event.format.charAt(0).toUpperCase() + event.format.slice(1)}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug group-hover:text-accent transition-colors">
        {event.name}
      </h3>
      <p className="mt-1 text-sm text-foreground/60">{event.organiser}</p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {event.date_start && (
          <span>
            {formatDate(event.date_start)}
            {event.date_end && event.date_end !== event.date_start
              ? ` \u2013 ${formatDateFull(event.date_end)}`
              : ` ${new Date(event.date_start + "T00:00:00").getFullYear()}`}
          </span>
        )}
        <span>{event.location}</span>
      </div>
      {event.deadline && (
        <p className={`mt-2 text-xs font-medium ${isPast ? "text-muted" : "text-accent"}`}>
          {isPast ? "Closed" : "Deadline"}: {formatDateFull(event.deadline)}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-foreground/60 line-clamp-3">
        {event.description}
      </p>
    </a>
  );
}

export function EventsContent() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [formatFilter, setFormatFilter] = useState("all");

  const upcoming = useMemo(
    () =>
      events
        .filter(isUpcoming)
        .sort((a, b) => (a.date_start || "9999").localeCompare(b.date_start || "9999")),
    []
  );

  const recent = useMemo(
    () =>
      events
        .filter(isRecent)
        .sort((a, b) => (b.date_start || "").localeCompare(a.date_start || "")),
    []
  );

  const filteredUpcoming = upcoming.filter((e) => {
    const typeMatch = typeFilter === "all" || e.type === typeFilter;
    const formatMatch = formatFilter === "all" || e.format === formatFilter;
    return typeMatch && formatMatch;
  });

  const filteredRecent = recent.filter((e) => {
    const typeMatch = typeFilter === "all" || e.type === typeFilter;
    const formatMatch = formatFilter === "all" || e.format === formatFilter;
    return typeMatch && formatMatch;
  });

  const totalVisible = filteredUpcoming.length + filteredRecent.length;
  const totalAll = upcoming.length + recent.length;

  return (
    <>
      <PageHeader
        title="Events and Opportunities"
        description="Conferences, workshops, fellowships, courses, and other opportunities in digital minds."
      />
      <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-8">

      <FadeIn delay={0.1}>
        <div className="mt-8 space-y-4">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted">Type</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {eventTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    typeFilter === t
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-white text-muted hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] hover:text-foreground active:scale-[0.97]"
                  }`}
                >
                  {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-muted">Format</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {eventFormats.map((f) => (
                <button
                  key={f}
                  onClick={() => setFormatFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 ${
                    formatFilter === f
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border bg-white text-muted hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-[0_0_0_1px_rgba(13,148,136,0.1),0_4px_16px_rgba(0,0,0,0.04)] hover:text-foreground active:scale-[0.97]"
                  }`}
                >
                  {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted">
            {totalVisible === totalAll ? `${totalAll} events` : `${totalVisible} of ${totalAll} events`}
          </p>
        </div>
      </FadeIn>

      {/* Upcoming */}
      <FadeIn delay={0.2}>
        <h2
          className="mt-12 text-xl font-semibold"
          style={{
            filter:
              "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.06))",
          }}
        >Upcoming</h2>
      </FadeIn>
      {filteredUpcoming.length > 0 ? (
        <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUpcoming.map((event) => (
            <StaggerItem key={event.name}>
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : (
        <p className="mt-6 text-sm text-muted">No upcoming events match your filters.</p>
      )}

      {/* Recently closed */}
      {filteredRecent.length > 0 && (
        <>
          <FadeIn>
            <h2
              className="mt-16 text-xl font-semibold text-muted"
              style={{
                filter:
                  "drop-shadow(1px 1px 0px rgba(255,255,255,0.9)) drop-shadow(-0.5px -0.5px 0px rgba(0,0,0,0.06))",
              }}
            >Recently closed</h2>
          </FadeIn>
          <StaggerContainer className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecent.map((event) => (
              <StaggerItem key={event.name}>
                <EventCard event={event} isPast />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </>
      )}

      {totalVisible === 0 && (
        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            No events match your filters.{" "}
            <button
              onClick={() => {
                setTypeFilter("all");
                setFormatFilter("all");
              }}
              className="text-accent hover:underline"
            >
              Show all events
            </button>
          </p>
        </div>
      )}

      <FadeIn>
        <div className="mt-16 border-t border-border pt-8 text-sm text-muted">
          <p>
            <a href="mailto:mitchelalexanderpass@gmail.com?subject=Event suggestion for Getting Started in Digital Minds" className="text-accent hover:underline">
              Suggest an event
            </a>
            {" \u00b7 "}
            <a href="https://www.digitalminds.news/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Subscribe to the Digital Minds Newsletter
            </a>
          </p>
        </div>
      </FadeIn>
      </div>
      </section>
    </>
  );
}
