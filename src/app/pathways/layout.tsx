import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pathways",
  description: "Find your way into digital minds research, whatever your background.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
