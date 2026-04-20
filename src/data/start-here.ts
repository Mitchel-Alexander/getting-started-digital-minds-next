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
  "Can AI systems have minds? The question is becoming harder to dismiss and more important to answer. Whether some AI systems might one day have experiences, feelings, or morally relevant states is an open question. Philosophers, consciousness scientists, and AI researchers disagree about how likely it is and what it would take to know. The stakes of getting it wrong run in both directions. Dismissing the possibility could mean ignoring morally significant beings at scale. Overstating it risks diverting moral concern and resources from those who clearly need them.",
  "Digital minds is the research field that takes these questions as its subject. Researchers across philosophy, cognitive science, AI, ethics, and governance are working to develop the conceptual tools, empirical methods, and policy frameworks that would let us assess whether AI systems may be sentient or have morally relevant states, understand what the impacts of this may be, and work out what to do about it. The aim is to have the frameworks ready before they are needed.",
  "This site is designed to help you find your way into work in this area. Research Areas maps the open questions. The field map shows who is working on them and where. Scroll down for practical steps you can take this week.",
];

export const tiersIntro =
  "You do not need to commit to a career change to engage with digital minds. Some of the most useful starting points take an afternoon.";

export const tiers: Tier[] = [
  {
    id: "afternoon",
    title: "An afternoon",
    items: [
      {
        text: "Subscribe to the Digital Minds Newsletter. The closest thing the field has to a shared bulletin board. Covers new research, events, job openings, and policy developments as they happen.",
        links: [
          {
            label: "Digital Minds Newsletter",
            url: "https://www.digitalminds.news/",
          },
        ],
      },
      {
        text: "Read the 80,000 Hours profile on the moral status of digital minds. A short introduction to what the open questions are, why they matter, and where the uncertainty sits.",
        links: [
          {
            label: "80,000 Hours profile on the moral status of digital minds",
            url: "https://80000hours.org/problem-profiles/moral-status-digital-minds/",
          },
        ],
      },
      {
        text: "Browse this Quickstart Guide. A curated reading list that scales with your level of commitment, from a single paper to a full syllabus.",
        links: [
          {
            label: "Quickstart Guide",
            url: "https://aviparrack.substack.com/p/digital-minds-a-quickstart-guide",
          },
        ],
      },
      {
        text: "Watch an episode of Exploring Machine Consciousness (PRISM), Our Lives With Bots, or Conspicuous Cognition. Three channels approaching consciousness, AI, and moral status from different directions. Good for getting a sense of how people in the field actually talk about these questions.",
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
        text: "Read Bradford Saad and Andreas Mogensen\u2019s Digital Minds I (2026). The most comprehensive academic introduction available. It covers the philosophical and cognitive science questions at the center of the field, and it does so without assuming prior expertise in either.",
        links: [
          {
            label: "Digital Minds I",
            url: "https://philpapers.org/archive/SAADMI-2.pdf",
          },
        ],
      },
      {
        text: "Listen to recordings from the NYU Center for Mind Ethics and Policy\u2019s lecture series. Working philosophers present and argue about AI consciousness and moral status, and watching several will reveal how much disagreement there is among people who take the questions seriously.",
        links: [
          {
            label: "NYU Center for Mind Ethics and Policy\u2019s lecture series",
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
        text: "Write something. A summary, a reaction, a set of questions the reading raised. A few hundred words on a blog or shared document can help you to work out what you actually think about a particular topic.",
        links: [],
      },
    ],
  },
  {
    id: "deeper",
    title: "Going deeper",
    items: [
      {
        text: "Start or join a reading group. If your department or institution does not have one, propose it. A handful of people meeting every two weeks to work through a paper is one of the lowest-cost, highest-value things you can organize. Several of the field\u2019s current collaborations began this way.",
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
        text: "Attend a conference or workshop. The Sentient Futures conferences have become one of the places where the digital minds community convenes, and many of the sessions are available online for people who cannot attend in person. Showing up to one likely puts you in the room with people whose work you have been reading.",
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
