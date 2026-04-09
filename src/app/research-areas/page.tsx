import type { Metadata } from "next";
import { ResearchAreasContent } from "./research-areas-content";

export const metadata: Metadata = {
  title: "Research Areas",
  description: "Key research areas in digital minds, from AI consciousness to welfare and policy.",
};

export default function ResearchAreasPage() {
  return <ResearchAreasContent />;
}
