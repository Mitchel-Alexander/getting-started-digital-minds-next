import type { Metadata } from "next";
import { PathwaysContent } from "./pathways-content";

export const metadata: Metadata = {
  title: "Pathways",
  description: "Find your way into digital minds research, whatever your background.",
};

export default function PathwaysPage() {
  return <PathwaysContent />;
}
