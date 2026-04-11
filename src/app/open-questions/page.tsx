import type { Metadata } from "next";
import { OpenQuestionsContent } from "./open-questions-content";

export const metadata: Metadata = {
  title: "Open Questions",
  description:
    "A curated directory of unsolved problems in digital minds research, drawn from 10 published research agendas.",
};

export default function OpenQuestionsPage() {
  return <OpenQuestionsContent />;
}
