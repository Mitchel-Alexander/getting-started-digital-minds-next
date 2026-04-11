export interface Reading {
  author: string;
  title: string;
  year?: number;
  url?: string;
  description?: string;
}

export interface Opportunity {
  text: string;
  links?: { label: string; url: string }[];
}

export interface Discipline {
  id: string;
  title: string;
  intro: string[];
  reading: Reading[];
  opportunities: Opportunity[];
}

export interface Programme {
  title: string;
  url: string;
  description: string;
}

export interface Resource {
  author: string;
  title: string;
  year?: number;
  url: string;
}

export interface ResourceSection {
  title: string;
  items: Resource[];
}

export const intro = [
  "If you already do research in an adjacent field and are considering whether some of your work could move into digital minds, this page is for you. It is organised around what different backgrounds bring to the field and what the concrete first steps look like from each starting point. The page assumes you have existing training and want to know how it translates into digital minds work.",
  "Digital minds is a developing field. The community is small enough that a thoughtful blog post or a well-organised reading group can build recognition quickly, and individual contributions carry real weight. Dedicated research positions are appearing at AI labs, non-profits, and university research centres, though the field still rewards people who can identify and pursue useful work on their own. There are two broad routes in. The direct route runs through dedicated digital minds programmes and organisations. The indirect route runs through adjacent disciplines, bringing existing expertise into a space where these questions are still being worked out. This page is about the indirect route.",
  "Pathways is the companion to Research Areas. Research Areas maps the field by question, covering consciousness and subjective experience, moral status and criteria, governance under uncertainty, and rights and responsibilities. Pathways maps the field by the reader\u2019s background. If you want the literature on a specific topic, Research Areas is where to go. If you want to know what your existing expertise would contribute and what to do next, this page is where you are.",
];

export const backgroundsIntro =
  "The questions digital minds research raises do not belong to any single field. Whether AI systems could have morally significant experiences, and what follows if they could, are questions that span philosophy, neuroscience and cognitive science, computer science, law and governance, social science, and public communication. Almost everyone currently working in this space arrived from somewhere else. The sections below describe what different backgrounds contribute. If your discipline is not listed, that does not mean it is irrelevant. The questions are hard enough that unexpected expertise regularly turns out to be load-bearing, and that is likely to stay true as the field matures.";

export const disciplines: Discipline[] = [
  {
    id: "philosophy",
    title: "Philosophy",
    intro: [
      "Philosophy contributes to both the descriptive questions digital minds research raises and the normative questions that follow. On the descriptive side, philosophers of mind reflect on what consciousness is, what its markers could be, and what kinds of entities could possess it. On the normative side, moral philosophers think about what we would owe welfare candidates, and epistemologists work on how to reason responsibly about inner states we cannot directly access. A philosopher asking what introspection would mean for a language model is doing work that helps interpretability researchers know what to look for, and a moral philosopher thinking about what would qualify an AI system as a welfare subject is doing work that social scientists and policy researchers draw on. The speculative work runs alongside and informs the empirical work of scientific inquiry in important ways.",
      "For philosophers already working on philosophy of mind, moral philosophy, or epistemology, the shift into digital minds is closer to a change of subject than a change of method. Familiarity with arguments about animal sentience under uncertainty, or with the vocabulary for extending moral consideration to contested cases, transfers into digital minds work directly. Many of the field\u2019s most active contributors arrived from adjacent areas of philosophy, and the conceptual work they do continues to shape what questions the empirical side of the field asks.",
    ],
    reading: [
      {
        author: "Jeff Sebo",
        title:
          "Everything and nothing is conscious: default assumptions in science and ethics",
        year: 2025,
        url: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1700354/full",
        description:
          "Argues that we need different default assumptions about nonhuman consciousness in scientific theory, scientific practice, ethical theory, and ethical practice. A good example of how philosophical work engages with and actively informs the science of consciousness.",
      },
      {
        author: "Global Priorities Institute",
        title: "Philosophy Research Agenda",
        year: 2024,
        url: "https://www.globalprioritiesinstitute.org/wp-content/uploads/GPI-Philosophy-Research-Agenda-Version-1-November-2024.pdf",
        description:
          "GPI\u2019s consolidated research agenda for philosophy. Section 2 on Mind and Value and Section 2.3 on Preparing to Live Alongside Digital Minds engage directly with topics related to digital minds.",
      },
      {
        author: "Jeff Sebo and Robert Long",
        title: "Moral consideration for AI systems by 2030",
        year: 2023,
        url: "https://link.springer.com/article/10.1007/s43681-023-00379-1",
        description:
          "A good entry point for philosophers who want to see what a rigorous argument about near-term AI moral patienthood looks like when written for an audience outside philosophy.",
      },
    ],
    opportunities: [
      {
        text: "Pick a question from the open questions directory. The Open Questions page lists specific unresolved questions in philosophy of mind, moral status, and applied ethics of digital minds.",
      },
      {
        text: "Write a response or commentary piece. A thoughtful response to recent work on AI consciousness, moral status, or welfare under uncertainty, published on a Substack, PhilArchive, or the EA Forum, can reach engaged readers quickly.",
      },
      {
        text: "Apply to the CAIS AI and Society Fellowship.",
        links: [
          {
            label: "fellowship at the Center for AI Safety",
            url: "https://safe.ai/fellowship",
          },
        ],
      },
      {
        text: "Apply to broader mentor programmes. The Digital Minds Programmes section below lists programmes with philosophy-relevant tracks, including the Cambridge Digital Minds Fellowship and the Future Impact Group Fellowship.",
      },
    ],
  },
  {
    id: "neuroscience",
    title: "Neuroscience and Cognitive Science",
    intro: [
      "Most of the leading theories of consciousness were built from evidence about biological systems, which leaves the field uncertain about whether the processes those theories describe are specific to brains or whether they could be realised in other kinds of system. Neuroscientists and cognitive scientists are the people most directly equipped to work on this, because the theories and the methods for testing them both come from their disciplines. Current research already draws on existing theories of consciousness to assess whether they apply to AI systems, and Butlin et al.\u2019s systematic application of multiple consciousness frameworks to AI architectures is an example of what this looks like in practice. The field needs more empirically rigorous work like this. Neuroscientists also have stronger reasons than most to scrutinise the substrate-independence assumptions the rest of the field treats as given, and that scrutiny brought into the research is exactly what is currently lacking.",
      "For researchers already working on consciousness, animal cognition, or the experimental study of mental states, the shift into digital minds does not require learning new theoretical frameworks. It requires applying existing ones to a different substrate. A researcher who knows how to test for metacognition in non-human animals is well placed to ask whether similar tests work on language models, and a researcher familiar with the leading theories of consciousness can help inform how we adapt them to non-biological systems. The field has taken in few people with direct training in the empirical study of consciousness, and the ones who have entered have shaped how the more technical work gets framed.",
    ],
    reading: [
      {
        author: "Anil Seth",
        title: "Conscious artificial intelligence and biological naturalism",
        year: 2025,
        description:
          "Argues that consciousness is tied to the specific biological properties of living systems rather than to computation alone. The clearest current statement of the biological naturalism view applied to AI.",
      },
      {
        author: "Jonathan Birch and Kristin Andrews",
        title:
          "To understand AI sentience, first understand it in animals",
        year: 2024,
        url: "https://aeon.co/essays/to-understand-ai-sentience-first-understand-it-in-animals",
        description:
          "Argues that the methods and epistemic lessons from decades of animal sentience research are the most useful starting point for assessing sentience in AI systems.",
      },
      {
        author: "Patrick Butlin et al.",
        title:
          "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
        year: 2023,
        url: "https://arxiv.org/abs/2308.08708",
        description:
          "Takes several leading scientific theories of consciousness and derives a set of specific functional indicator properties an AI system would need to satisfy to be a plausible candidate for consciousness under each theory.",
      },
      {
        author: "Rosa Cao",
        title:
          "Multiple realizability and the spirit of functionalism",
        year: 2022,
        url: "https://link.springer.com/article/10.1007/s11229-022-03524-1",
        description:
          "Argues that brain functions are metabolically and informationally intertwined in ways that constrain what kinds of physical systems could realise them, which has direct implications for whether consciousness could be instantiated in non-biological substrates.",
      },
    ],
    opportunities: [
      {
        text: "Pick a question from the open questions directory. The Open Questions page lists specific unresolved questions in consciousness science, cognitive science, and the empirical study of mental states as they bear on digital minds.",
      },
      {
        text: "Read and reflect on Chris Olah\u2019s writing on AI biology. Olah\u2019s essays on interpretability frame the field through neuroscience analogies, which makes them a useful entry point for a researcher coming from neuroscience or cognitive science.",
        links: [
          {
            label: "Transformer Circuits",
            url: "https://transformer-circuits.pub/",
          },
        ],
      },
      {
        text: "Apply to the Neuromatch mentor programme.",
        links: [
          { label: "Neuromatch", url: "https://neuromatch.io/" },
        ],
      },
      {
        text: "Apply to broader mentor programmes with neuroscience-relevant tracks. The Digital Minds Programmes section below lists programmes including the Cambridge Digital Minds Fellowship, SPAR, and the Future Impact Group Fellowship.",
      },
    ],
  },
  {
    id: "cs",
    title: "Computer Science and AI Research",
    intro: [
      "Understanding what is happening inside AI systems is a precondition for most serious claims about their moral status. Mechanistic interpretability, behavioural probing, and representation engineering are the methods the field uses to look inside AI systems rather than only at what they produce. Most of the concrete welfare-relevant findings of the last three years came from researchers trained in these methods. Jack Lindsey\u2019s work on introspective awareness, the introspection and self-modelling findings in the Claude Opus 4 system card, and Sharma et al. on functional affective states in language models are all products of interpretability research being pointed at welfare-relevant targets.",
      "For researchers already doing interpretability or ML work, the move into digital minds does not require abandoning what you know. It requires reorienting existing methods toward a different set of questions. An interpretability researcher who can read circuits in a language model can also ask whether those circuits support anything like introspection. A researcher who runs behavioural evaluations can also run evaluations designed to detect functional affective states. The most direct contributions come from people who can hold the technical work and the philosophical questions in the same frame, and there are not many of them.",
    ],
    reading: [
      {
        author: "Dario Amodei",
        title: "The Urgency of Interpretability",
        year: 2025,
        url: "https://www.darioamodei.com/post/the-urgency-of-interpretability",
        description:
          "An essay by Anthropic\u2019s CEO arguing that mechanistic interpretability is the most important research direction in AI safety. Includes a direct reflection on how interpretability matters for AI sentience and welfare.",
      },
      {
        author: "Neel Nanda",
        title: "80,000 Hours Podcast interview",
        year: 2025,
        url: "https://www.youtube.com/watch?v=5FdO1MEumbI",
        description:
          "A conversation with the interpretability researcher on how he thinks about what language models are as cognitive entities, and on the tensions between AI safety and AI welfare work.",
      },
      {
        author: "Anthropic Interpretability Team",
        title: "Transformer Circuits",
        url: "https://transformer-circuits.pub/",
        description:
          "Anthropic\u2019s long-running research blog on mechanistic interpretability. Reading the sequence in order gives a view of how interpretability developed as a research programme and how welfare-relevant concepts emerged as the tools got sharper.",
      },
    ],
    opportunities: [
      {
        text: "Pick a question from the open questions directory and extend it. The Open Questions page lists specific unresolved questions in welfare-relevant interpretability and evaluations. Replicating, extending, or probing a particular finding on a different model is a legitimate first contribution.",
      },
      {
        text: "Write a technical response piece. LessWrong and the Alignment Forum are where most active interpretability discussion happens. A well-argued technical post responding to a recent result gets read quickly and by the people who wrote the work.",
      },
      {
        text: "Apply to a technical mentor programme. MATS is the main full-time option, SPAR is the main part-time remote one, and ARENA is a curriculum rather than a mentorship but teaches the specific skills the work needs.",
      },
      {
        text: "Reorient existing safety or evals work. A researcher doing alignment, evaluations, or red-teaming already has most of the technical skills welfare-relevant interpretability needs.",
      },
    ],
  },
  {
    id: "social-science",
    title: "Social Science and Psychology",
    intro: [
      "How people perceive and interact with AI systems is a governance-relevant empirical question, and social scientists are the ones equipped to answer it. The questions digital minds raises will be settled, in the end, by publics, policymakers, and the institutions they build, rather than by philosophers or consciousness scientists working alone. Whether those settlements get made on the basis of evidence about what people actually think, or on the basis of what researchers and policymakers assume people think, depends on whether the empirical work exists when the decisions come up.",
      "The terrain social science and psychology cover is broad. It includes the political and institutional questions of how societies make collective decisions about AI systems whose moral status is contested, and what democratic oversight of AI welfare governance could look like. It includes the psychological questions of how humans perceive AI consciousness, how relationships with AI systems form and change, and what mental health effects sustained interaction with AI models may be producing. It also includes the more speculative questions of how communities deliberate about preferred futures, and how the forms of alignment the field settles on might accommodate pluralism rather than smoothing it away. A growing body of empirical work has shaped most of what the field currently believes about public attitudes. The questions are young enough that a single well-designed study can become the reference point on its topic.",
    ],
    reading: [
      {
        author: "Lucius Caviola",
        title:
          "The Social Science of Digital Minds: Research Agenda",
        year: 2024,
        url: "https://docs.google.com/document/d/1VcVjiE2wWXi_AKpdeLiwk8ND_c6deWYzVO2eYuJfSMw/edit",
        description:
          "An early-draft agenda setting out the descriptive questions a social science of digital minds would need to address.",
      },
      {
        author: "Global Priorities Institute",
        title:
          "Psychology and Behavioural Science Research Agenda",
        year: 2024,
        url: "https://www.globalprioritiesinstitute.org/wp-content/uploads/GPI-Psychology-and-Behavioral-Science-Research-Agenda-Version-1-November-2024.pdf",
        description:
          "GPI\u2019s consolidated research agenda for psychology and behavioural science. Section 9.2 on risks from artificial intelligence includes specific questions on digital sentience, moral consideration of AI, and how the empirical study of human moral values could inform AGI alignment.",
      },
      {
        author: "Geoffrey Irving and Amanda Askell",
        title: "AI Safety Needs Social Scientists",
        year: 2019,
        url: "https://distill.pub/2019/safety-needs-social-scientists/",
        description:
          "Argues that aligning AI systems with human values requires empirical research on how humans actually reason, deliberate, and disagree, and that this work should be done by trained social scientists rather than improvised by AI researchers.",
      },
    ],
    opportunities: [
      {
        text: "Pick a question from one of the open research agendas. The Caviola agenda lists dozens of specific questions. GPI\u2019s psychology agenda does the same at Section 9.2.",
      },
      {
        text: "Write a response or commentary piece. A thoughtful response to a recent paper on public attitudes toward AI sentience, published on a Substack or the EA Forum, can build a public voice quickly.",
      },
      {
        text: "Apply to a mentor programme. The Digital Minds Programmes section below lists programmes that accept social scientists and psychologists, including the Cambridge Digital Minds Fellowship, the Future Impact Group Fellowship (AI Sentience track), and SPAR.",
      },
      {
        text: "Attend an early-career event. Sentient Futures runs annual conferences in the Bay Area, New York, and London. The ASSC annual meeting is the larger academic venue for consciousness research generally.",
      },
      {
        text: "Start from an adjacent field. Cooperative AI, human-AI interaction, moral psychology, and computational social science all have active research programmes that overlap with digital minds questions.",
      },
    ],
  },
  {
    id: "law",
    title: "Law and Governance",
    intro: [
      "Legal and governance expertise is what turns potential evidence about moral status into institutional practice. If research does find that some AI systems are welfare subjects, the policy frameworks for responding will need to exist in advance. Without them, the default is reactive decisions made under pressure, which tend to be poorly designed and hard to reverse. Even if the uncertainty persists, policy work is still needed to shape how human-AI interactions develop and to limit specific harms as they emerge. Standard policy tools assume a clearer evidentiary basis than this field can currently offer, and developing frameworks that function under persistent uncertainty is itself the work.",
      "For lawyers, policy researchers, and governance scholars, the move into digital minds does not require leaving your field. Training in how regulatory regimes handle scientific uncertainty, how institutional mandates get extended to new kinds of entity, and how precautionary frameworks are written and enforced is directly applicable. A researcher working on animal welfare law already knows how to translate moral claims into institutional practice. Equally needed is direct experience of how AI-relevant legislation gets drafted, negotiated, and passed. The field has very few people doing either kind of work in digital minds right now, and fewer still doing both.",
    ],
    reading: [
      {
        author: "Bradford Saad",
        title: "Three Kinds of Digital Minds Governance",
        year: 2025,
        url: "https://meditationsondigitalminds.substack.com/p/three-kinds-of-digital-minds-governance",
        description:
          "Distinguishes three directions digital minds governance could take: preventative, protective, and integrative. Saad argues that choosing between them is an unavoidable strategic question for the field.",
      },
      {
        author: "F\u0131rat Akova",
        title:
          "Artificially sentient beings: Moral, political, and legal issues",
        year: 2023,
        url: "https://doi.org/10.1016/j.techum.2023.04.001",
        description:
          "Maps the specific problems that would follow if artificially sentient beings existed, from how to compare their claims against human claims to whether to include them in collective decision-making.",
      },
      {
        author: "Visa Kurki",
        title: "A Theory of Legal Personhood",
        year: 2019,
        url: "https://global.oup.com/academic/product/a-theory-of-legal-personhood-9780198844037",
        description:
          "Argues that legal personhood is a cluster of incidents rather than a single status, which allows some rights and protections to be extended without committing to full personhood.",
      },
    ],
    opportunities: [
      {
        text: "Pick a question from the open questions directory. The Open Questions page lists specific unresolved questions in digital minds governance and policy.",
      },
      {
        text: "Write a response or commentary piece. Policy researchers with views on how existing regulatory frameworks could extend to welfare candidates are particularly undersupplied.",
      },
      {
        text: "Look at AI governance tracks in broader mentor programmes. The Digital Minds Programmes section below lists programmes including PIVOTAL, SPAR, and the Future Impact Group Fellowship.",
      },
      {
        text: "Apply to the Institute for Law and AI Seasonal Research Fellowships.",
        links: [
          {
            label: "seasonal fellowships",
            url: "https://law-ai.org/seasonal-research-fellowships/",
          },
        ],
      },
      {
        text: "Apply to GovAI fellowships.",
        links: [
          {
            label: "Centre for the Governance of AI",
            url: "https://www.governance.ai/",
          },
        ],
      },
    ],
  },
  {
    id: "journalism",
    title: "Journalism and Public Communication",
    intro: [
      "How the ideas and insights associated with digital minds find their way to public audiences is of crucial importance for the field\u2019s long-term credibility and policy traction. The questions are easy to sensationalise and easy to dismiss, and the sensational framings appear correlated with mental health impacts in people who use AI models heavily. Writing that resists both failure modes without flattening the underlying uncertainty is undersupplied. Effective science communication is itself a research contribution in a field this young, particularly because developments in AI regularly outpace the publishing cadence of academic journals.",
      "For researchers, the ability to communicate your work to non-specialist audiences is a distinctive skill, not a supplement to research. In a field where public perception shapes regulatory appetite and policy traction, op-eds, feature articles, and explainers in general-interest or science-focused publications are often where policymakers encounter these questions for the first time. Building a public voice takes sustained effort, and researchers who do it well are among the most influential contributors in digital minds, regardless of their publication count in traditional venues.",
    ],
    reading: [
      {
        author: "Scientific American",
        title:
          "Is AI Really Conscious, or Are We Bringing It to Life?",
        year: 2026,
        url: "https://www.scientificamerican.com/article/is-ai-really-conscious-or-are-we-bringing-it-to-life/",
      },
      {
        author: "Desirable AI",
        title: "Journalism Toolkit",
        year: 2025,
        url: "https://www.desirableai.com/journalism-toolkit",
      },
      {
        author: "Columbia Journalism Review",
        title:
          "How to report better on artificial intelligence",
        year: 2023,
        url: "https://www.cjr.org/analysis/how-to-report-better-on-artificial-intelligence.php",
      },
    ],
    opportunities: [
      {
        text: "Asterisk Magazine. Quarterly publication covering AI, science, and adjacent topics with editorial appetite for long-form essays on consciousness and welfare questions.",
      },
      {
        text: "Aeon and Psyche. Long-form essay venues covering philosophy of mind, consciousness, and technology ethics. Both commission from academics and independent writers.",
      },
      {
        text: "Substack. The most active digital minds conversations happen on independent newsletters rather than established outlets. Building a consistent voice on Substack is a recognised route into the field.",
      },
      {
        text: "Effective Altruism Forum. High-engagement venue for exploratory arguments and early drafts. The AI welfare and digital minds tags are active, and posts from the forum regularly get cited in formal research.",
      },
    ],
  },
];

export const resourceSections: ResourceSection[] = [
  {
    title: "Developing Your Personal Theory of Change",
    items: [
      {
        author: "Effective Thesis",
        title: "Theory of Change for High Impact Research",
        url: "https://www.effectivethesis.org/advice-articles/theory-of-change-for-high-impact-research",
      },
      {
        author: "Michael Aird",
        title: "Building a Theory of Change for Your Research",
        year: 2023,
        url: "https://www.youtube.com/watch?v=PwnkYncoUsA",
      },
    ],
  },
  {
    title: "Research Skills",
    items: [
      {
        author: "Neel Nanda",
        title: "How I Think About My Research Process",
        year: 2025,
        url: "https://www.alignmentforum.org/s/5GT3yoYM9gRmMEKqL",
      },
      {
        author: "Ethan Perez",
        title: "How I Select Alignment Research Projects",
        year: 2024,
        url: "https://www.lesswrong.com/posts/7GmDs4BqrFW3kk4nP/how-i-select-alignment-research-projects",
      },
      {
        author: "Yafah Edelman",
        title: "Against Deep Ideas",
        year: 2023,
        url: "https://www.lesswrong.com/posts/uGE45QB6NdQ5Chu5e/against-deep-ideas",
      },
      {
        author: "Chris Olah",
        title: "Research Taste Exercises",
        year: 2021,
        url: "https://colah.github.io/notes/taste/",
      },
      {
        author: "Jess Whittlestone",
        title: "Richard Hamming on doing important research",
        year: 2017,
        url: "https://jesswhittlestone.com/blog/2017/10/25/richard-hamming-on-doing-important-research",
      },
      {
        author: "Michael Nielsen",
        title: "Principles of Effective Research",
        year: 2004,
        url: "https://michaelnielsen.org/blog/principles-of-effective-research/",
      },
    ],
  },
  {
    title: "Writing Skills",
    items: [
      {
        author: "Luke Muehlhauser",
        title: "Reasoning Transparency",
        year: 2017,
        url: "https://coefficientgiving.org/research/reasoning-transparency/",
      },
      {
        author: "Holden Karnofsky",
        title: "Learning by Writing",
        year: 2022,
        url: "https://www.cold-takes.com/learning-by-writing/",
      },
      {
        author: "Rachel Thomas",
        title: "Advice for Better Blog Posts",
        year: 2019,
        url: "https://rachel.fast.ai/posts/2019-05-13-blogging-advice/",
      },
    ],
  },
];

export const programmesIntro =
  "A growing number of programmes address digital minds questions directly. What follows represents the practitioner community\u2019s best attempt to formalise a pathway from newcomer to active contributor. The field is too young and the questions too unsettled for anyone to claim a proven formula. What this pipeline does offer is structure, and for those who want to specialise from the start, that matters.";

export const structuredProgrammes: Programme[] = [
  {
    title: "Cambridge Digital Minds Online Course",
    url: "https://digitalminds.cam/course/",
    description:
      "An eight-week course covering consciousness theories, methods for evaluating AI mental states, public perception, AI safety connections, and governance. Free, approximately 3.5 hours per week.",
  },
  {
    title: "Cambridge Digital Minds Fellowship",
    url: "https://digitalminds.cam/fellowship/",
    description:
      "A five-day residential programme at the University of Cambridge, followed by the two-day Digital Minds Strategy Workshop. Fifteen fellows are paired with mentors and work through modules on technical foundations, societal strategy, and project development. Fully funded.",
  },
  {
    title: "Neuromatch AI Sentience Scholars Program",
    url: "https://neuromatch.io/ai-sentience-scholars/",
    description:
      "A six-month, part-time, remote mentored research programme for early-career researchers. Projects range from testing consciousness theories in large language models to computational models of personhood and moral status. Includes workshops, seminars, and a stipend.",
  },
  {
    title: "Sentient Futures Fellowship",
    url: "https://www.sentientfutures.ai/",
    description:
      "A programme exploring intersections of AI, animal welfare, and technology. Relevant for those interested in the welfare dimensions of digital minds and cross-species moral consideration.",
  },
  {
    title: "Future Impact Group Fellowship",
    url: "https://futureimpact.group/fellowship",
    description:
      "A twelve-week, part-time, remote research fellowship with three tracks: AI Policy, Philosophy for Safe AI, and AI Sentience. Eight or more hours per week, with mentored project work and career guidance.",
  },
  {
    title: "SPAR (Supervised Program for Alignment Research)",
    url: "https://sparai.org/",
    description:
      "A part-time, remote, three-month research mentorship programme across AI safety, policy, and interpretability. Recent cohorts have included mentors working directly on digital minds, including Jeff Sebo, Simon Goldstein, and Visa Kurki.",
  },
  {
    title: "PIVOTAL Research",
    url: "https://www.pivotal-research.org/mentors",
    description:
      "A mentorship programme that frequently includes mentors working on AI governance and policy relevant to digital minds. Quarterly cohorts.",
  },
  {
    title: "MATS (ML Alignment & Theory Scholars)",
    url: "https://www.matsprogram.org/",
    description:
      "A twelve-week in-person research fellowship in Berkeley and London pairing early-career researchers with mentors in AI alignment, interpretability, and governance. Primarily technical, but includes mentors and tracks relevant to digital minds. Fully funded.",
  },
];

export const intensiveProgrammes: Programme[] = [
  {
    title:
      "Longview Career Transition Fellowships on Digital Sentience",
    url: "https://www.longview.org/digital-sentience-consortium/career-transition-fellowships-on-digital-sentience/",
    description:
      "Fellowships for researchers transitioning into digital sentience work from adjacent fields. Currently closed, but indicative of the growing infrastructure supporting career movement into this area.",
  },
];
