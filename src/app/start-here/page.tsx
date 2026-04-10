import type { Metadata } from "next";
import { StartHereContent } from "./start-here-content";

export const metadata: Metadata = {
  title: "Start Here",
  description: "A quick orientation to digital minds research and how to use this guide.",
};

export default function StartHerePage() {
  return <StartHereContent />;
}
