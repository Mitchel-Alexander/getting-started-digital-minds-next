export interface ActionItem {
  text: string;
  links: { label: string; url: string }[];
}

export interface Tier {
  id: string;
  title: string;
  items: ActionItem[];
}

export const intro = [
  "Could some AI systems be candidates for moral status? Experts across relevant disciplines remain deeply uncertain. If they are, we may be creating beings with morally relevant experiences at enormous scale. If they aren't, attention directed at them is attention taken from beings who plainly need it.",
  "Digital minds is the research field that studies this question. Researchers in philosophy, cognitive science, AI, policy and law are building the tools needed to address it.",
];

export const tiersIntro =
  "You do not need to commit to a career change to engage with digital minds. Some of the most useful starting points take an afternoon.";

export const tiers: Tier[] = [
  {
    id: "afternoon",
    title: "An afternoon",
    items: [
      {
        text: "Subscribe to the Digital Minds Newsletter. The closest thing the field has to a shared bulletin board, covering new research, events, jobs, and policy as they happen.",
        links: [
          {
            label: "Digital Minds Newsletter",
            url: "https://www.digitalminds.news/",
          },
        ],
      },
      {
        text: "Read the 80,000 Hours profile on the moral status of digital minds. A short, accessible introduction to the field’s central questions and where the uncertainty sits.",
        links: [
          {
            label: "80,000 Hours profile on the moral status of digital minds",
            url: "https://80000hours.org/problem-profiles/moral-status-digital-minds/",
          },
        ],
      },
      {
        text: "Browse the Quickstart Guide by Avi Parrack and Štěpán Los. A curated reading list with options ranging from a single paper to a full syllabus.",
        links: [
          {
            label: "Quickstart Guide",
            url: "https://aviparrack.substack.com/p/digital-minds-a-quickstart-guide",
          },
        ],
      },
      {
        text: "Watch an episode of Exploring Machine Consciousness (PRISM), Our Lives With Bots, or Conspicuous Cognition. Three channels approaching the questions from different directions, useful for getting a sense of how people in the field actually talk.",
        links: [
          {
            label: "Exploring Machine Consciousness",
            url: "https://www.youtube.com/@PRISM_Global",
          },
          {
            label: "Our Lives With Bots",
            url: "https://www.youtube.com/@OurLivesWithBots",
          },
          {
            label: "Conspicuous Cognition",
            url: "https://www.youtube.com/@conspicuouscognition/videos",
          },
        ],
      },
    ],
  },
  {
    id: "weekend",
    title: "A weekend",
    items: [
      {
        text: "Read Bradford Saad and Andreas Mogensen\u2019s Digital Minds I (2026). The most comprehensive academic introduction available, covering the central philosophical and cognitive science questions without assuming prior expertise in either.",
        links: [
          {
            label: "Digital Minds I",
            url: "https://philpapers.org/archive/SAADMI-2.pdf",
          },
        ],
      },
      {
        text: "Listen to recordings from the NYU Center for Mind, Ethics, and Policy lecture series. Working philosophers presenting and arguing about AI consciousness and moral status. Watching several reveals how much disagreement there is among people who take the questions seriously.",
        links: [
          {
            label: "NYU Center for Mind, Ethics, and Policy lecture series",
            url: "https://www.youtube.com/@nyucenterformindethicspolicy/videos",
          },
        ],
      },
      {
        text: "Read one skeptical voice. Anil Seth\u2019s The Mythology of AI Consciousness (2025) argues consciousness may require biological substrates. John Dorsch\u2019s Against AI Welfare (2025) challenges the coherence of the welfare concept itself. The field takes both positions seriously. You should too.",
        links: [
          {
            label: "The Mythology of AI Consciousness",
            url: "https://www.noemamag.com/the-mythology-of-conscious-ai/",
          },
          {
            label: "Against AI Welfare",
            url: "https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.70016",
          },
        ],
      },
      {
        text: "Write something. A summary, a reaction, a set of questions the reading raised. A few hundred words on a blog or shared document can help you work out what you actually think.",
        links: [],
      },
    ],
  },
  {
    id: "deeper",
    title: "Going deeper",
    items: [
      {
        text: "Start or join a reading group. If your department or institution does not have one, propose it. A handful of people meeting every two weeks to work through a paper is one of the lowest-cost, highest-value things you can organise. Several of the field\u2019s current collaborations began this way.",
        links: [],
      },
      {
        text: "Register for the Cambridge Digital Minds online course. Eight weeks covering consciousness theories, welfare assessment, governance, and public perception. Free, approximately 3.5 hours per week.",

        links: [
          {
            label: "Cambridge Digital Minds online course",
            url: "https://digitalminds.cam/course/",
          },
        ],
      },
      {
        text: "Apply for a structured program. The Neuromatch AI Sentience Scholars Program, Future Impact Group Fellowship, and Sentient Futures Fellowship all offer mentored research within a cohort. See Events & Opportunities for the full list.",
        links: [
          {
            label: "Neuromatch AI Sentience Scholars Program",
            url: "https://neuromatch.io/ai-sentience-scholars/",
          },
          {
            label: "Future Impact Group Fellowship",
            url: "https://futureimpact.group/fellowship",
          },
          {
            label: "Sentient Futures Fellowship",
            url: "https://www.sentientfutures.ai/",
          },
        ],
      },
      {
        text: "Attend a conference or workshop. The Sentient Futures conferences have become a convening point for the digital minds community, with many sessions available online for those who cannot attend in person. Showing up to one likely puts you in the room with people whose work you have been reading.",
        links: [
          {
            label: "Sentient Futures conferences",
            url: "https://www.youtube.com/@sentfutures/videos",
          },
        ],
      },
    ],
  },
];
