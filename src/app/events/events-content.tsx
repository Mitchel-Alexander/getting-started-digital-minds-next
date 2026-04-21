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
  if (event.deadline) return event.deadline >= today;
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
  if (event.deadline) return event.deadline < todayStr && event.deadline >= cutoff;
  const checkDate = event.date_end || event.date_start;
  if (!checkDate) return false;
  return checkDate < todayStr && checkDate >= cutoff;
}

function EventCard({ event, isPast }: { event: Event; isPast?: boolean }) {
  const dateStr = event.date_start
    ? event.date_end && event.date_end !== event.date_start
      ? `${formatDate(event.date_start)} – ${formatDateFull(event.date_end)}`
      : formatDateFull(event.date_start)
    : null;

  const meta = [event.type, event.format]
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" · ");

  return (
    <div className={`border-t border-border pt-6 pb-2 ${isPast ? "opacity-55" : ""}`}>
      <p className="text-xs font-medium uppercase tracking-widest text-accent mb-1.5">
        {meta}
      </p>
      <h3 className="text-sm font-semibold text-foreground leading-snug">
        {event.name}
      </h3>
      <p className="mt-1 text-xs text-muted">{event.organizer}</p>
      <div className="mt-1.5 flex flex-wrap gap-x-3 text-xs text-muted">
        {dateStr && <span>{dateStr}</span>}
        {event.location && <span>{event.location}</span>}
      </div>
      {event.deadline && (
        <p className="mt-1 text-xs font-medium text-accent">
          {isPast ? "Closed" : "Deadline"}: {formatDateFull(event.deadline)}
        </p>
      )}
      <p className="mt-2.5 text-xs leading-relaxed text-foreground/60 line-clamp-3">
        {event.description}
      </p>
      {event.url && !isPast && (
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block border border-accent rounded-sm px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-accent hover:bg-accent hover:text-white transition-colors"
        >
          Register
        </a>
      )}
    </div>
  );
}

export function EventsContent() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [formatFilter, setFormatFilter] = useState("all");

  const upcoming = useMemo(
    () => events.filter(isUpcoming).sort((a, b) => (a.date_start || "9999").localeCompare(b.date_start || "9999")),
    []
  );

  const recent = useMemo(
    () => events.filter(isRecent).sort((a, b) => (b.date_start || "").localeCompare(a.date_start || "")),
    []
  );

  const filteredUpcoming = upcoming.filter((e) => {
    return (typeFilter === "all" || e.type === typeFilter) && (formatFilter === "all" || e.format === formatFilter);
  });

  const filteredRecent = recent.filter((e) => {
    return (typeFilter === "all" || e.type === typeFilter) && (formatFilter === "all" || e.format === formatFilter);
  });

  const totalVisible = filteredUpcoming.length + filteredRecent.length;
  const totalAll = upcoming.length + recent.length;

  const filterBtn = (active: boolean) =>
    `border rounded-sm px-3 py-1.5 text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
      active
        ? "border-accent bg-accent text-white"
        : "border-border text-muted hover:border-accent hover:text-accent"
    }`;

  return (
    <>
      <PageHeader
        title="Events and Opportunities"
        description="Conferences, workshops, fellowships, courses, and other opportunities in digital minds."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12">

          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Type</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {eventTypes.map((t) => (
                    <button key={t} onClick={() => setTypeFilter(t)} className={filterBtn(typeFilter === t)}>
                      {t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-xs font-medium uppercase tracking-widest text-muted">Format</span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {eventFormats.map((f) => (
                    <button key={f} onClick={() => setFormatFilter(f)} className={filterBtn(formatFilter === f)}>
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
            <h2 className="mt-12 font-serif text-2xl font-semibold tracking-tight">Upcoming</h2>
          </FadeIn>
          {filteredUpcoming.length > 0 ? (
            <StaggerContainer key={typeFilter + formatFilter} className="mt-2 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="mt-16 font-serif text-2xl font-semibold tracking-tight text-muted">Recently closed</h2>
              </FadeIn>
              <StaggerContainer key={typeFilter + formatFilter} className="mt-2 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                {filteredRecent.map((event) => (
                  <StaggerItem key={event.name}>
                    <EventCard event={event} isPast />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </>
          )}

          {totalVisible === 0 && (
            <div className="mt-12">
              <p className="text-sm text-muted">
                No events match your filters.{" "}
                <button
                  onClick={() => { setTypeFilter("all"); setFormatFilter("all"); }}
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
                {" · "}
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
