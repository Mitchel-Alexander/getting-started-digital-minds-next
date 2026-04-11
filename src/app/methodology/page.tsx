import type { Metadata } from "next";
import { MethodologyContent } from "./methodology-content";

export const metadata: Metadata = {
  title: "Methodology",
  description:
    "How the Open Questions directory was constructed: sources, extraction process, consolidation, and limitations.",
};

export default function MethodologyPage() {
  return <MethodologyContent />;
}
