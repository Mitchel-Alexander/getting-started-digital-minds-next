import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Areas",
  description: "Key research areas in digital minds, from AI consciousness to welfare and policy.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
