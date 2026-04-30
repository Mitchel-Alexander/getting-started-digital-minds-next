import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events and Opportunities",
  description: "Conferences, workshops, fellowships, courses, and other opportunities in digital minds.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
