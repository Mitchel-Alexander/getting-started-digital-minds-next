"use client";

import { useState, useMemo } from "react";
import { events, type Event } from "@/data/events";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animate";

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
  conference: "border-purple-500/40 text-purple-400",
  workshop: "border-blue-500/40 text-blue-400",
  fellowship: "border-emerald-500/40 text-emerald-400",
  course: "border-amber-500/40 text-amber-400",
  programme: "border-cyan-500/40 text-cyan-400",
  seminar: "border-rose-500/40 text-rose-400",
};

function EventCard({ event, isPast }: { event: Event; isPast?: boolean }) {
  return (
    <a
      href={event.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 ${isPast ? "opacity-60 hover:opacity-80" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`inline-block rounded-full border px-3 py-0.5 text-xs font-medium ${typeColors[event.type] || "border-border text-muted"}`}>
          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
        </span>
        <span className="shrink-0 rounded-full border border-border px-3 py-0.5 text-xs text-muted">
          {event.format.charAt(0).toUpperCase() + event.format.slice(1)}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold leading-snug group-hover:text-accent transition-colors">
        {event.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{event.organiser}</p>
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
      <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
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
    <div className="mx-auto max-w-6xl px-6 py-16">
      <FadeIn>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Events and Opportunities
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Conferences, workshops, fellowships, courses, and other opportunities in digital minds.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 space-y-4">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">Type</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {eventTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setTypeFilter(t)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                    typeFilter === t
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-muted hover:border-accent/30 hover:text-foreground"
                  }`}
                >
                  {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-muted">Format</span>
            <div className="mt-2 flex flex-wrap gap-2">
              {eventFormats.map((f) => (
                <button
                  key={f}
                  onClick={() => setFormatFilter(f)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
                    formatFilter === f
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-muted hover:border-accent/30 hover:text-foreground"
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
        <h2 className="mt-12 text-xl font-semibold">Upcoming</h2>
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
            <h2 className="mt-16 text-xl font-semibold text-muted">Recently closed</h2>
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
  );
}
