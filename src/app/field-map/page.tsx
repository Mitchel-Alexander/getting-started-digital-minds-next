import type { Metadata } from "next";
import { FieldMapContent } from "./field-map-content";

export const metadata: Metadata = {
  title: "Field Map",
  description: "Organisations working on AI consciousness, AI welfare, and digital minds research.",
};

export default function FieldMapPage() {
  return <FieldMapContent />;
}
