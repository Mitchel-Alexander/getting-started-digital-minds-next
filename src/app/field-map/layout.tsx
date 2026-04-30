import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Map",
  description: "Organisations working on AI consciousness, AI welfare, and digital minds research.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
