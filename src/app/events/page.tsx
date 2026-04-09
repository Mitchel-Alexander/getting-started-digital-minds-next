import type { Metadata } from "next";
import { EventsContent } from "./events-content";

export const metadata: Metadata = {
  title: "Events and Opportunities",
  description: "Conferences, workshops, fellowships, courses, and other opportunities in digital minds.",
};

export default function EventsPage() {
  return <EventsContent />;
}
