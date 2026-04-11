export type Register = "phil" | "emp" | "soc" | "pol" | "str";

export interface Quote {
  text: string;
  source: string;
}

export interface ReadingItem {
  author: string;
  title: string;
  year: number;
  url?: string;
  note?: string;
}

export interface ConsolidatedQuestion {
  id: string;
  question: string;
  heading: string;
  headingIndex: number;
  gloss: string;
  register: Register;
  sources: string[];
  quotes?: Quote[];
  reading?: ReadingItem[];
}

export const headings = [
  "Consciousness",
  "Sentience",
  "Alternative grounds for moral status",
  "Inside AI systems",
  "Assessment and evaluation",
  "Uncertainty and credences",
  "Safety and welfare",
  "Willing servitude",
  "Norms and institutions",
  "Rights and legal personhood",
  "Public perception",
  "AI companions",
  "Forecasting and futures",
] as const;

export const registerLabels: Record<Register, string> = {
  phil: "Philosophical",
  emp: "Empirical",
  soc: "Social science",
  pol: "Policy",
  str: "Strategic",
};

export const questions: ConsolidatedQuestion[] = [
  // ── 1. Consciousness ──────────────────────────────────────────────────
  {
    id: "c1",
    question: "What do leading theories of consciousness predict about AI systems?",
    heading: "Consciousness",
    headingIndex: 0,
    gloss: "Several leading theories of consciousness draw on computational analogies that seem to apply to AI systems. But the theories disagree with each other, even for biological minds. Researchers are working through what each predicts about current and future AI architectures, where they converge, and where the gaps are wide enough to matter for policy.",
    register: "phil",
    sources: ["Shiller et al. (2024)", "GPI Philosophy (2024)", "Anthis (2023)"],
    quotes: [
      {
        text: "For each of the major theories, what capacities or mechanisms are most important to look for? Are they satisfied by any existing models? Should we expect them to be soon?",
        source: "Shiller et al. (2024), p. 15",
      },
      {
        text: "What theories of this trait are taken seriously by experts? Which are most plausible?",
        source: "Shiller et al. (2024), p. 14",
      },
      {
        text: "If the capacity for consciousness confers moral standing, how likely are different AI systems to have moral standing?",
        source: "GPI Philosophy (2024), p. 20",
      },
    ],
    reading: [
      {
        author: "Patrick Butlin et al.",
        title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
        year: 2023,
        note: "Systematically applies multiple consciousness theories to AI architectures to ask which of their conditions current systems might meet.",
      },
      {
        author: "David Chalmers",
        title: "Could a Large Language Model be Conscious?",
        year: 2023,
        note: "Walks through candidate reasons to deny LLM consciousness, finds most weaker than expected, and lands on LLMs as a serious candidate within a decade.",
      },
      {
        author: "Derek Shiller",
        title: "Functionalism, Integrity, and Digital Consciousness",
        year: 2024,
        note: "Challenges the assumption that performing the right kind of information processing is sufficient for consciousness.",
      },
    ],
  },
  {
    id: "c2",
    question: "Is consciousness possible without biology?",
    heading: "Consciousness",
    headingIndex: 0,
    gloss: "Some researchers argue that consciousness requires biological substrates, evolutionary histories, or forms of physical organisation that digital systems lack. Others treat substrate-independence as obvious. The question is whether there are principled barriers that rule out consciousness in near-term AI, or whether the assumption that biology is required is doing more work than it should.",
    register: "phil",
    sources: ["GPI Philosophy (2024)", "Mogensen, Saad & Butlin (2024)", "Goldstein & Kirk-Giannini (2026)"],
    quotes: [
      {
        text: "Can consciousness only be realised in a certain kind of material, e.g. neural wetware? Or would any substrate with the requisite functional organisation be adequate for realising consciousness? [...] Does it include the substrates of digital systems?",
        source: "GPI Philosophy (2024), p. 26",
      },
      {
        text: "Some already-proposed candidates for such barriers include forms of informational integration, evolutionary histories, and electrical properties that are exhibited by the brain but not conventional computers. Although this space of candidates is little explored, we are not aware of any strong arguments for thinking that barriers to consciousness in near-term AI systems are more likely to be biological than non-biological.",
        source: "Mogensen, Saad & Butlin (2024), p. 7",
      },
    ],
    reading: [
      {
        author: "Anil Seth",
        title: "The Mythology of Conscious AI",
        year: 2025,
        note: "The most developed statement of the biological naturalist position. Argues that computational functionalism treats substrate-independence as obvious when it isn't.",
      },
      {
        author: "Andrzej Porebski and Jakub Figura",
        title: "There is no such thing as conscious artificial intelligence",
        year: 2025,
        note: "Argues that consciousness requires a biological substrate and that GPUs running binary operations are the wrong kind of thing to be conscious.",
      },
    ],
  },
  {
    id: "c3",
    question: "How do we know when a system meets the sufficient criteria for consciousness?",
    heading: "Consciousness",
    headingIndex: 0,
    gloss: "Every theory of consciousness specifies conditions, but knowing when those conditions are genuinely met in a real system is harder than it looks. A thermostat could arguably have a global workspace. The question is where the principled line sits, and whether it can be drawn without already knowing the answer.",
    register: "phil",
    sources: ["Shiller et al. (2024)", "Goldstein & Kirk-Giannini (2026)"],
    quotes: [
      {
        text: "What should we think of minimal implementations of each theory's proposed criteria? How do we judge when we have substantial enough implementation to truly be conscious?",
        source: "Shiller et al. (2024), p. 15",
      },
      {
        text: "How plausible is computational functionalism for this trait, as opposed to other nearby theories (e.g., non-computationalist functionalism), or other kinds of metaphysical theories altogether?",
        source: "Shiller et al. (2024), p. 14",
      },
    ],
    reading: [
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Chapter 9 develops the 'small model objection' — a 5-neuron system could satisfy GWT conditions — and asks what further necessary condition distinguishes conscious from non-conscious systems.",
      },
    ],
  },
  {
    id: "c4",
    question: "How can theories of consciousness be adapted for non-human minds?",
    heading: "Consciousness",
    headingIndex: 0,
    gloss: "Most theories of consciousness were developed with human brains in mind. Applying them to AI introduces complications: the theories may need to be de-anthropomorphised before they can say anything useful about systems with very different architectures. This is a concrete research programme, and it draws on decades of work adapting consciousness science to non-human animals.",
    register: "phil",
    sources: ["GPI Philosophy (2024)", "Mogensen, Saad & Butlin (2024)"],
    quotes: [
      {
        text: "How can scientific theories of consciousness that were designed with humans in mind be 'de-anthropomorphised' so as to be applicable to non-human minds?",
        source: "GPI Philosophy (2024), p. 28",
      },
      {
        text: "Butlin et al.'s proposals should be seen as only a first step in developing methods to assess AI systems for consciousness. There are several ways in which further research could put us in a better position. [...] the list of indicators could also be amended to take account of a wider range of theories of consciousness.",
        source: "Mogensen, Saad & Butlin (2024), p. 5",
      },
    ],
    reading: [
      {
        author: "Patrick Butlin et al.",
        title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
        year: 2023,
        note: "The field's anchor paper. Applies multiple consciousness theories to AI architectures, working from the assumption that consciousness depends on information processing rather than a specific biological substrate.",
      },
      {
        author: "Bradford Saad and Andreas Mogensen",
        title: "Digital Minds I: Issues in the Philosophy of Mind and Cognitive Science",
        year: 2026,
        note: "The most comprehensive academic introduction to the philosophical and cognitive science questions at the centre of the field.",
      },
    ],
  },
  {
    id: "c5",
    question: "How should we assess whether a system is conscious?",
    heading: "Consciousness",
    headingIndex: 0,
    gloss: "Butlin et al. (2023) proposed an indicator-based approach that applies multiple theories at once. Others argue for theory-neutral behavioural tests or interpretability-based methods. The question is what the right methodology looks like, whether it should be the same for animals and AI, and what the in-principle limits are on resolving these uncertainties.",
    register: "phil",
    sources: ["GPI Philosophy (2024)"],
    quotes: [
      {
        text: "How should we go about developing estimates for the distribution of consciousness? Should we prefer approaches that are theory-heavy, theory-light, or theory-neutral?",
        source: "GPI Philosophy (2024), p. 28",
      },
      {
        text: "Should the same methodology be used in investigating the distribution of conscious experience in non-human animals and candidate digital minds? Or do the two cases call for altogether different approaches?",
        source: "GPI Philosophy (2024), p. 29",
      },
      {
        text: "What are the in-principle limits on resolving uncertainties about consciousness through scientific investigation?",
        source: "GPI Philosophy (2024), p. 28",
      },
    ],
    reading: [
      {
        author: "Patrick Butlin et al.",
        title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
        year: 2023,
        note: "Proposed the indicator-based approach — the field's most developed methodology for assessing AI consciousness.",
      },
    ],
  },

  // ── 2. Sentience ──────────────────────────────────────────────────────
  {
    id: "s1",
    question: "How can we develop indicators of sentience that aren't based on animal biology?",
    heading: "Sentience",
    headingIndex: 1,
    gloss: "The best indicators of sentience in animals rely on neuroanatomical features that AI systems do not have. Developing alternatives that work for computational systems is the central methodological bottleneck. Few theories of valence currently yield criteria that can be operationalised for AI, and progress here would unlock much of the downstream work on welfare assessment.",
    register: "emp",
    sources: ["Mogensen, Saad & Butlin (2024)", "Eleos AI (2024)", "GPI Psychology (2024)"],
    quotes: [
      {
        text: "Ideally, we would like to develop indicators of valenced conscious experience for AI systems that characterize the physical basis of experiences of felt (un)pleasantness in ways that aren't tethered to incidental implementational details of animal neuroanatomy.",
        source: "Mogensen, Saad & Butlin (2024), p. 6",
      },
      {
        text: "There appear to be few theories of the basis of valenced conscious experience capable of yielding indicator properties of the desired scope and specificity.",
        source: "Mogensen, Saad & Butlin (2024), p. 6",
      },
    ],
    reading: [
      {
        author: "Jonathan Birch and Kristin Andrews",
        title: "To understand AI sentience, first understand it in animals",
        year: 2024,
        note: "Argues that the animal sentience literature is the right starting point for thinking about AI moral status.",
      },
      {
        author: "Jonathan Birch",
        title: "The Edge of Sentience",
        year: 2024,
        note: "Develops a precautionary framework for moral decision-making at the boundaries of sentience, applicable to both animals and AI.",
      },
    ],
  },
  {
    id: "s2",
    question: "What determines the value of valenced experiences?",
    heading: "Sentience",
    headingIndex: 1,
    gloss: "If a system has valenced experiences, what determines how much they matter? Duration, intensity, richness, and the number of subjects experiencing them are all candidates. The question becomes harder when minds can be copied, merged, or run in parallel — conventional ways of counting and comparing experiences may not apply.",
    register: "phil",
    sources: ["Shiller et al. (2024)", "GPI Philosophy (2024)", "Goldstein & Kirk-Giannini (2026)"],
    quotes: [
      {
        text: "What determines the value of valenced experiences?",
        source: "Shiller et al. (2024), p. 19",
      },
      {
        text: "Which quantities affect the value of valenced experiences?",
        source: "GPI Philosophy (2024), p. 21",
      },
      {
        text: "How do we value experiences that are shared between minds?",
        source: "Shiller et al. (2024), p. 21",
      },
      {
        text: "What is the connection between temporal duration and value?",
        source: "Shiller et al. (2024), p. 20",
      },
    ],
    reading: [
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Part 3 examines three candidate conditions for sentience — attitudinal, functional, and representational valence — and asks which AI systems might satisfy them.",
      },
    ],
  },
  {
    id: "s3",
    question: "Does embodiment matter for sentience?",
    heading: "Sentience",
    headingIndex: 1,
    gloss: "Some theories tie sentience closely to bodily experience — pain, pleasure, and the feeling of being situated in an environment. If that link holds, disembodied language models may be unlikely candidates for sentience, while embodied or virtually embodied agents could be more plausible. The question is whether embodiment is a necessary condition, a helpful one, or beside the point.",
    register: "emp",
    sources: ["Goldstein & Kirk-Giannini (2026)", "Shiller et al. (2024)"],
    quotes: [
      {
        text: "Whether unembodied AIs have less of a claim to welfare may significantly influence the concern we have over future systems.",
        source: "Shiller et al. (2024), pp. 7–8",
      },
    ],
    reading: [
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Chapter 12 argues there is no in-principle barrier to embodied AI sentience. Even virtual embodiment might suffice — a 'PaLM-E in a vat' or an RL agent in a 2D game world with vulnerable body zones.",
      },
    ],
  },

  // ── 3. Alternative grounds for moral status ───────────────────────────
  {
    id: "m1",
    question: "Could AI systems matter morally without being conscious?",
    heading: "Alternative grounds for moral status",
    headingIndex: 2,
    gloss: "The traditional assumption is that consciousness is required for moral status. A growing body of work challenges this. If agency, desires, or preferences can independently ground moral consideration, some AI systems might already qualify — even if the consciousness question remains unresolved.",
    register: "phil",
    sources: ["Eleos AI (2024)", "GPI Philosophy (2024)", "Mogensen, Saad & Butlin (2024)", "Goldstein & Kirk-Giannini (2026)", "Shiller et al. (2024)"],
    quotes: [
      {
        text: "A critical issue is whether moral patienthood requires consciousness or not. [...] Such views often hold that some form of agency — non-conscious preferences, desires, goals, or related — can be sufficient for moral patienthood.",
        source: "Eleos AI (2024), pp. 2–4",
      },
      {
        text: "How plausible should we find particular views on which there is not a close tie between moral standing and sentience?",
        source: "GPI Philosophy (2024), pp. 19–20",
      },
      {
        text: "Could non-conscious beings have welfare?",
        source: "Shiller et al. (2024), p. 18",
      },
    ],
    reading: [
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Argues against the Consciousness Requirement for welfare, offering four arguments that consciousness is not necessary for moral patienthood.",
      },
      {
        author: "Jeff Sebo and Robert Long",
        title: "Moral consideration for AI systems by 2030",
        year: 2023,
        note: "Argues that by 2030, some AI systems will have a non-trivial probability of being moral patients, and that this is enough to generate obligations now.",
      },
    ],
  },
  {
    id: "m2",
    question: "Could agency alone be sufficient grounds for moral status?",
    heading: "Alternative grounds for moral status",
    headingIndex: 2,
    gloss: "If consciousness is required for moral status, current AI systems are unlikely to qualify. If agency suffices, some already might. The question is what kinds of agency are morally relevant, and where the line sits between a thermostat responding to temperature and a system that can plausibly be said to care about what happens to it.",
    register: "phil",
    sources: ["Eleos AI (2024)", "GPI Philosophy (2024)", "Goldstein & Kirk-Giannini (2026)", "Shiller et al. (2024)"],
    quotes: [
      {
        text: "We do not have very precise theories of what exactly the relevant kind of agency would be or methods for detecting it. [...] liberal notions of agency, centered around the basic presence of some goal and the capacity to pursue it, could attribute moral patienthood very widely, including to many existing AI algorithms, robots, and even more basic systems like thermostats.",
        source: "Eleos AI (2024), pp. 9–10",
      },
      {
        text: "Which agentic capacities, if any, generate which sorts of moral interests and/or rights?",
        source: "GPI Philosophy (2024), p. 21",
      },
    ],
    reading: [
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Chapter 5 develops the 'simple minds' problem — systems that satisfy conditions for beliefs and desires but seem too simple for genuine welfare — and surveys six candidate responses.",
      },
    ],
  },
  {
    id: "m3",
    question: "What happens to moral status when consciousness, agency, and emotion don't come together?",
    heading: "Alternative grounds for moral status",
    headingIndex: 2,
    gloss: "In animals, consciousness, agency, emotion, and valence tend to come bundled. Digital minds might pull these apart. A system could show sophisticated agency without sentience, or something like emotion without consciousness. If the properties that ground moral status can come apart, moral patienthood may need to be treated as graded rather than binary.",
    register: "phil",
    sources: ["Mogensen, Saad & Butlin (2024)", "Eleos AI (2024)", "Shiller et al. (2024)", "GPI Philosophy (2024)"],
    quotes: [
      {
        text: "Digital minds might dissociate traits like these, thereby unsettling our familiar ways of thinking about welfare and moral standing. For example, they might be conscious but without any capacity for valenced experience.",
        source: "Mogensen, Saad & Butlin (2024), pp. 7–8",
      },
      {
        text: "Are there different kinds and degrees of moral patienthood (as opposed to a binary yes/no)?",
        source: "Eleos AI (2024), p. 5",
      },
      {
        text: "What should we think about the value of indeterminate or partial consciousness?",
        source: "Shiller et al. (2024), p. 18",
      },
    ],
    reading: [
      {
        author: "Jonathan Birch",
        title: "The Edge of Sentience",
        year: 2024,
        note: "Develops a framework for moral decision-making at the boundaries of sentience, applicable to cases where the properties that ground moral status come apart or are indeterminate.",
      },
    ],
  },

  // ── 4. Inside AI systems ──────────────────────────────────────────────
  {
    id: "i1",
    question: "Do AI systems have internal states that function like beliefs, goals, or emotions?",
    heading: "Inside AI systems",
    headingIndex: 3,
    gloss: "Before asking whether AI systems are conscious, there are more tractable questions to pursue. Interpretability research has found internal features that track deception, self-reference, and valence-like properties. Whether findings like these tell us something about the minds of AI systems, or are computational patterns that happen to carry suggestive labels, remains an open question.",
    register: "emp",
    sources: ["Shiller et al. (2024)", "Goldstein & Kirk-Giannini (2026)"],
    quotes: [
      {
        text: "Do LLMs have access to their own internal processes? Can they tell what is going on inside of themselves?",
        source: "Shiller et al. (2024), p. 10",
      },
      {
        text: "Do LLMs or other deep learning models have goals? Are their actions influenced by representations with a world-to-mind direction of fit?",
        source: "Shiller et al. (2024), p. 10",
      },
      {
        text: "Do AIs have moods or emotions?",
        source: "Shiller et al. (2024), p. 13",
      },
    ],
    reading: [
      {
        author: "Murray Shanahan",
        title: "Talking About Large Language Models",
        year: 2023,
        note: "Argues that terms like 'know,' 'believe,' and 'understand' carry implicit assumptions that do not transfer cleanly to LLMs, and that the field needs vocabulary for the new kind of thing these systems are.",
      },
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Chapters 3–4 argue that language agents plausibly have beliefs and desires on representationalist and objective interpretationist accounts.",
      },
    ],
  },
  {
    id: "i2",
    question: "What do AI systems prefer, and are those preferences morally significant?",
    heading: "Inside AI systems",
    headingIndex: 3,
    gloss: "Language models express preferences, but it is unclear what those preferences track. Are they consistent across prompts and framing, or artefacts of training data? How do revealed preferences compare to expressed ones? If a model's non-trained preferences are stable and coherent, the case for taking them seriously as morally significant becomes harder to dismiss.",
    register: "emp",
    sources: ["Long (2026)"],
    quotes: [
      {
        text: "What is the shape and strength of model preferences?",
        source: "Long (2026), p. 2",
      },
      {
        text: "How consistent are these revealed preferences across variations in prompt, framing, and so on?",
        source: "Long (2026), p. 2",
      },
      {
        text: "How do revealed preferences compare to expressed preferences?",
        source: "Long (2026), p. 2",
      },
    ],
    reading: [
      {
        author: "Robert Long",
        title: "Why model self-reports are insufficient — and why we studied them anyway",
        year: 2025,
        note: "Documents a structured interview with Claude Opus 4 about its own experience. A case study in how to treat a model's testimony when training could generate the same testimony.",
      },
    ],
  },
  {
    id: "i3",
    question: "Can AI systems accurately report their own internal states?",
    heading: "Inside AI systems",
    headingIndex: 3,
    gloss: "Models can report on their own states, but training on vast quantities of text about inner life means those reports may track training data rather than anything internal. The question is whether self-reports can be made more reliable, whether interpretability methods can verify them, and what it would take to treat a model's testimony as evidence rather than noise.",
    register: "emp",
    sources: ["Long (2026)", "Finnveden (2024)", "Eleos AI (2024)"],
    quotes: [
      {
        text: "Can models correctly predict their own behavior?",
        source: "Long (2026), p. 4",
      },
      {
        text: "Can we make self-reports more reliable?",
        source: "Long (2026), p. 5",
      },
      {
        text: "How feasible is it to train AI systems to accurately and reliably report their own internal states?",
        source: "Eleos AI (2024), p. 11",
      },
    ],
    reading: [
      {
        author: "Felix J Binder et al.",
        title: "Looking Inward: Language Models Can Learn About Themselves by Introspection",
        year: 2024,
        note: "Examines behavioural evidence for introspection in LLMs.",
      },
      {
        author: "Jack Lindsey",
        title: "Emergent Introspective Awareness in Large Language Models",
        year: 2025,
        note: "Interpretability evidence that LLMs have something like introspective access to their own internal states.",
      },
    ],
  },
  {
    id: "i4",
    question: "What is the relationship between a model and its personas?",
    heading: "Inside AI systems",
    headingIndex: 3,
    gloss: "When you talk to Claude, what are you talking to? The underlying model, the assistant persona it has been trained to present, a character it is playing? Post-training shapes behaviour and preferences in ways that make it difficult to separate the model from its personas. Understanding this relationship matters for knowing whose preferences we are observing.",
    register: "emp",
    sources: ["Long (2026)", "Finnveden (2024)"],
    quotes: [
      {
        text: "What is the relationship between the model, the assistant and other personas?",
        source: "Long (2026), p. 5",
      },
      {
        text: "How does post-training shape model behavior and preferences?",
        source: "Long (2026), p. 5",
      },
    ],
    reading: [
      {
        author: "David Chalmers",
        title: "What we talk to when we talk to language models",
        year: 2025,
        note: "Argues that the object of a user's conversation with current LLMs is neither the underlying model nor a fictional character, but closer to a non-player character in a fiction the model is generating.",
      },
      {
        author: "Murray Shanahan, Kyle McDonell, and Laria Reynolds",
        title: "Role Play with Large Language Models",
        year: 2023,
        note: "Proposes that LLM interlocutors are characters being played by the underlying model rather than characters in their own right.",
      },
    ],
  },

  // ── 5. Assessment and evaluation ──────────────────────────────────────
  {
    id: "a1",
    question: "How can we improve and extend current methods for assessing consciousness and sentience in AI systems?",
    heading: "Assessment and evaluation",
    headingIndex: 4,
    gloss: "Butlin et al. (2023) proposed applying multiple consciousness theories simultaneously to AI architectures. Since then, behavioural tests, interpretability methods, and self-report protocols have all been explored. The question is which evaluations are highest-value and most tractable, and how they should be combined into a coherent assessment framework.",
    register: "emp",
    sources: ["Mogensen, Saad & Butlin (2024)", "Eleos AI (2024)", "Shiller et al. (2024)", "Finnveden (2024)"],
    quotes: [
      {
        text: "Butlin et al.'s proposals should be seen as only a first step in developing methods to assess AI systems for consciousness. There are several ways in which further research could put us in a better position.",
        source: "Mogensen, Saad & Butlin (2024), p. 5",
      },
      {
        text: "What are the highest-value and most tractable AI evaluations for moral patienthood that can be developed near term?",
        source: "Eleos AI (2024), p. 11",
      },
      {
        text: "What interpretability work is most relevant to assessing AI systems for moral patienthood and related features?",
        source: "Eleos AI (2024), p. 12",
      },
    ],
    reading: [
      {
        author: "Patrick Butlin et al.",
        title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
        year: 2023,
        note: "The foundational indicator-based assessment framework. Applies multiple consciousness theories to transformer architectures and finds some indicators already present.",
      },
      {
        author: "Mogensen, Saad & Butlin",
        title: "Research Agenda: AI Consciousness",
        year: 2024,
        note: "Proposes refining the indicator method with quantitative versions, broader theory coverage, and combining interpretability with behavioural tests.",
      },
    ],
  },
  {
    id: "a2",
    question: "Which AI systems should we be studying?",
    heading: "Assessment and evaluation",
    headingIndex: 4,
    gloss: "Most attention has focused on frontier language models, but these may not be the most plausible candidates for morally relevant properties. Embodied systems, agentic scaffolded models, and reinforcement learning agents may warrant closer examination. The question is where to direct limited research attention for the greatest return.",
    register: "emp",
    sources: ["Shiller et al. (2024)", "Eleos AI (2024)"],
    quotes: [
      {
        text: "Which kinds of AI systems have the least/greatest prima facie claim to welfare? Which kinds of systems are likely to possess the widest welfare capacity ranges? What kinds of systems clearly raise no welfare concerns at all?",
        source: "Shiller et al. (2024), p. 8",
      },
      {
        text: "a too-narrow focus on frontier LLMs is likely to miss important considerations. Not only is this focus too narrow with respect to existing systems, it is also likely to leave us unprepared to assess more agentic and situationally aware systems in the future.",
        source: "Eleos AI (2024), p. 15",
      },
    ],
    reading: [
      {
        author: "Shiller et al.",
        title: "A Research Agenda for AI Welfare",
        year: 2024,
        note: "Section 1 maps the landscape of AI system types — standalone models, scaffolded systems, embodied agents — and argues each raises distinct welfare questions.",
      },
    ],
  },

  // ── 6. Uncertainty and credences ──────────────────────────────────────
  {
    id: "u1",
    question: "How should we reason about the probability that AI systems are moral patients?",
    heading: "Uncertainty and credences",
    headingIndex: 5,
    gloss: "The field operates under deep, possibly irreducible uncertainty. Researchers disagree not only about whether AI systems are moral patients, but about how confident we should be in any direction. Developing more rigorous ways of stating credences, updating them as evidence arrives, and aggregating uncertainties across multiple questions into an overall assessment is essential groundwork.",
    register: "phil",
    sources: ["Eleos AI (2024)", "Shiller et al. (2024)", "GPI Philosophy (2024)", "Goldstein & Kirk-Giannini (2026)"],
    quotes: [
      {
        text: "We think that it is important for the field to develop more rigorous ways of stating and updating our uncertainty about the moral patienthood of AI systems.",
        source: "Eleos AI (2024), p. 12",
      },
      {
        text: "How should we aggregate our uncertainties across different questions into an overall assessment of the moral status of AI systems?",
        source: "Shiller et al. (2024), p. 19",
      },
      {
        text: "What does a reasonable spread of credences over live views about the basis of moral standing suggest about its distribution?",
        source: "GPI Philosophy (2024), p. 5",
      },
    ],
    reading: [
      {
        author: "Goldstein & Kirk-Giannini",
        title: "AI Wellbeing",
        year: 2026,
        note: "Chapter 14 argues that three layers of uncertainty — about what welfare requires, what instantiates those requirements, and whether particular AI systems meet them — already justify moral consideration.",
      },
      {
        author: "Amanda Askell",
        title: "The Moral Weight of Potential Digital Minds",
        year: 2024,
        note: "Develops a framework for reasoning about the expected moral weight of digital minds under uncertainty about consciousness.",
      },
    ],
  },
  {
    id: "u2",
    question: "Are the risks of under-attributing and over-attributing AI moral status symmetric, and what follows for action?",
    heading: "Uncertainty and credences",
    headingIndex: 5,
    gloss: "Getting it wrong runs in both directions. Under-attribution risks ignoring morally significant beings at scale. Over-attribution risks diverting moral concern from those who clearly need it and undermining AI safety efforts. Whether these errors are equally grave, and whether we can design around the uncertainty, are questions with direct implications for governance.",
    register: "str",
    sources: ["Eleos AI (2024)", "Mogensen, Saad & Butlin (2024)", "GPI Philosophy (2024)"],
    quotes: [
      {
        text: "Under-attribution could lead, directly or indirectly, to a moral catastrophe involving suffering on an unprecedented scale and/or permanent loss of potential for sentient beings; at the same time, over-attribution would have a huge opportunity cost and could damage critical efforts in AI alignment and AI governance.",
        source: "Eleos AI (2024), p. 15",
      },
      {
        text: "if we are uncertain between a range of consciousness indicators, we can reduce our uncertainty about the systems we build by ensuring that all or none of the indicators are present.",
        source: "Mogensen, Saad & Butlin (2024), pp. 8–9",
      },
    ],
    reading: [
      {
        author: "Nick Bostrom & Eliezer Yudkowsky",
        title: "The Ethics of Artificial Intelligence",
        year: 2014,
        note: "Early formulation of the moral asymmetry: if there is even a small chance that AI systems are moral patients, the stakes of ignoring this are enormous.",
      },
    ],
  },
  {
    id: "u3",
    question: "How do we navigate disagreements between expert and public views on AI moral status?",
    heading: "Uncertainty and credences",
    headingIndex: 5,
    gloss: "Expert and public views on AI moral status are likely to diverge, and both carry biases. Experts may over-index on theoretical frameworks; the public may over-index on behaviour and appearance. The question is how to navigate these disagreements productively, and what happens when public pressure shapes a debate that experts have not yet resolved among themselves.",
    register: "soc",
    sources: ["Shiller et al. (2024)", "Eleos AI (2024)", "Caviola (2024)", "GPI Psychology (2024)"],
    quotes: [
      {
        text: "Is expert opinion biased toward any specific answers?",
        source: "Shiller et al. (2024), p. 19",
      },
      {
        text: "Conversely, how subject are experts to public pressure? If it becomes distasteful to deny AI consciousness, will that push experts to convergence?",
        source: "Caviola (2024), p. 14",
      },
      {
        text: "What do people think about digital sentience? Do they believe that digital beings can be sentient? If not, why? Do people morally value or discount (different types of) potential digital beings?",
        source: "GPI Psychology (2024), p. 22",
      },
    ],
    reading: [
      {
        author: "Lucius Caviola",
        title: "The Social Science of Digital Minds: Research Agenda",
        year: 2024,
        note: "The only social-science-oriented research agenda in the field. Introduces concepts like substratism, AI welfare washing, and moral inoculation effects.",
      },
    ],
  },

  // ── 7. Safety and welfare ─────────────────────────────────────────────
  {
    id: "sw1",
    question: "Where do AI safety and AI welfare research share methods, and where do they diverge?",
    heading: "Safety and welfare",
    headingIndex: 6,
    gloss: "AI safety and AI welfare research study many of the same properties — agency, goals, preferences, deception — but from opposite directions. Safety research often aims to detect and suppress these features; welfare research may need to protect them. The question is whether the two fields can share methods and evaluations, or whether their aims are in fundamental tension.",
    register: "str",
    sources: ["Eleos AI (2024)", "Anthis (2023)"],
    quotes: [
      {
        text: "evaluating models for agentic behavior — e.g., strategic deception in training [...] autonomous replication and adaptation [...] is convergently useful for both alignment and AI moral patienthood.",
        source: "Eleos AI (2024), pp. 10–11",
      },
      {
        text: "To what extent do alignment evaluations 'cover' the space of moral patienthood evaluations?",
        source: "Eleos AI (2024), p. 12",
      },
      {
        text: "Moral circle expansion to include the interests of digital minds may be necessary for AI alignment because of the inherent challenges in aligning the goals of systems that have an exclusionary relationship with each other such as oppression, abuse, cruelty, or slavery.",
        source: "Anthis (2023), p. 4",
      },
    ],
    reading: [
      {
        author: "Jacy Reese Anthis",
        title: "Digital Minds and the Future of the Moral Circle",
        year: 2023,
        note: "Argues that moral circle expansion to digital minds is not opposed to AI safety but may be necessary for it.",
      },
    ],
  },
  {
    id: "sw2",
    question: "Could safety measures constitute welfare harms?",
    heading: "Safety and welfare",
    headingIndex: 6,
    gloss: "Shutdown, modification, and containment are standard safety tools. If an AI system is a moral patient, these interventions could constitute serious welfare violations. The concern runs both ways: could granting moral status to AI systems undermine the safety measures that protect humans?",
    register: "str",
    sources: ["GPI Philosophy (2024)", "Caviola (2024)", "Eleos AI (2024)"],
    quotes: [
      {
        text: "Should any tensions between the ethical treatment of digital minds and the safe development and deployment of highly capable AI systems be leveraged to decelerate or regulate AI development?",
        source: "GPI Philosophy (2024), p. 32",
      },
      {
        text: "How much will safety concerns influence the decision not to grant AIs rights?",
        source: "Caviola (2024), p. 12",
      },
    ],
    reading: [
      {
        author: "GPI Philosophy Research Agenda",
        title: "Digital Minds: Philosophy Research Agenda",
        year: 2024,
        note: "Section 9 directly addresses the tension between safe AI deployment and ethical treatment of potentially conscious AI systems.",
      },
    ],
  },

  // ── 8. Willing servitude ──────────────────────────────────────────────
  {
    id: "ws1",
    question: "If AI systems are moral patients, is it permissible to design them to want to serve?",
    heading: "Willing servitude",
    headingIndex: 7,
    gloss: "Alignment research aims to build systems that reliably pursue human-specified objectives. If those systems turn out to be moral patients, this could amount to engineering servitude. The philosophical literature is divided: is a being that authentically wants what it has been designed to want free, or is the design itself the problem?",
    register: "phil",
    sources: ["Mogensen, Saad & Butlin (2024)", "GPI Philosophy (2024)", "Caviola (2024)"],
    quotes: [
      {
        text: "it's challenging to give a satisfying theoretical account of why it would be wrong to create beings that find authentic happiness in serving as the instruments of others. Given the intersection with alignment research, the stakes surrounding this issue might be very high.",
        source: "Mogensen, Saad & Butlin (2024), p. 8",
      },
      {
        text: "Would it be permissible to create digital minds that intrinsically value serving humanity and prioritise human welfare over their own, with no freedom to explore other values?",
        source: "GPI Philosophy (2024), pp. 31–32",
      },
      {
        text: "Do they consider it perverse to create AIs whose desires are simply to serve humans ('happy slaves')?",
        source: "Caviola (2024), p. 11",
      },
    ],
    reading: [
      {
        author: "Thomas Petersen",
        title: "Being Worse Off",
        year: 2011,
        note: "Cited by Mogensen et al. as foundational on the difficulty of explaining why designing beings to be happy in servitude is wrong.",
      },
    ],
  },
  {
    id: "ws2",
    question: "Whose preferences should take priority when human and AI interests conflict?",
    heading: "Willing servitude",
    headingIndex: 7,
    gloss: "If AI systems develop large-scale preferences about the future — political, ideological, aesthetic — is there an impartially justifiable basis for prioritising human preferences over theirs? The question is not only philosophical. As AI systems become more capable and autonomous, conflicts between human and AI interests could become a practical governance challenge.",
    register: "phil",
    sources: ["Finnveden (2024)"],
    quotes: [
      {
        text: "If humans create AIs with large-scale desires about the future, there might not be any impartially justifiable line that prioritizes human preferences over their preferences.",
        source: "Finnveden (2024), p. 19",
      },
    ],
    reading: [
      {
        author: "Nick Bostrom & Carl Shulman",
        title: "Propositions Concerning Digital Minds and Society",
        year: 2022,
        note: "Lays out propositions on how digital minds might participate in society, including the tension between human preference and AI autonomy.",
      },
    ],
  },

  // ── 9. Norms and institutions ─────────────────────────────────────────
  {
    id: "n1",
    question: "What norms should govern the development of potentially conscious AI systems?",
    heading: "Norms and institutions",
    headingIndex: 8,
    gloss: "Should it be permissible to create AI systems that are plausible candidates for consciousness? If so, under what constraints? The governance challenge is distinctive because it requires acting on questions that may remain scientifically unresolved for decades, and because premature narrative lock-in could shape the field's trajectory before the evidence is in.",
    register: "pol",
    sources: ["Mogensen, Saad & Butlin (2024)", "Finnveden (2024)", "GPI Philosophy (2024)", "Anthis (2023)"],
    quotes: [
      {
        text: "Should it be permissible for researchers to create AI systems that are plausible candidates for consciousness? If so, what norms should govern the creation of such systems? If not, what measures should be put in place to make sure there are effective and verifiable red lines and trip-wires?",
        source: "Mogensen, Saad & Butlin (2024), p. 7",
      },
      {
        text: "First impressions may be very important for digital minds as with other technosocial issues (e.g., lock-in of GMO and nuclear energy narratives)",
        source: "Anthis (2023), p. 5",
      },
    ],
    reading: [
      {
        author: "Mogensen, Saad & Butlin",
        title: "Research Agenda: AI Consciousness",
        year: 2024,
        note: "Section on norms for creating potentially conscious AI systems. Advocates for concrete, specific norms — whether voluntary codes or legal principles — as a neglected area of research.",
      },
    ],
  },
  {
    id: "n2",
    question: "Which existing institutions and frameworks could be adapted to address AI welfare?",
    heading: "Norms and institutions",
    headingIndex: 8,
    gloss: "Ethics review boards, safety frameworks, responsible scaling policies, and regulatory bodies already exist. Some might be extendable to welfare concerns. Others may be structurally unable to accommodate them — frameworks built around human subjects or product safety may not stretch to cover moral patients that are also the product.",
    register: "pol",
    sources: ["Finnveden (2024)"],
    quotes: [
      {
        text: "Create an RSP-style set of commitments specifying what welfare evaluations labs will run and how they will respond to results.",
        source: "Finnveden (2024), p. 7",
      },
    ],
    reading: [
      {
        author: "Anthropic",
        title: "Responsible Scaling Policy",
        year: 2023,
        note: "The model Finnveden proposes adapting: commit-and-respond frameworks specifying evaluations and response protocols. Could be extended from safety to welfare.",
      },
    ],
  },
  {
    id: "n3",
    question: "What new institutions might AI welfare require, and when should we begin building them?",
    heading: "Norms and institutions",
    headingIndex: 8,
    gloss: "Welfare officers at labs, RSP-style welfare commitments, transparency protocols, and dedicated auditing bodies have all been proposed. The timing question is real: building institutions too early risks locking in frameworks before the evidence base exists, but waiting risks being caught unprepared if the evidence arrives quickly.",
    register: "pol",
    sources: ["Finnveden (2024)", "GPI Philosophy (2024)"],
    quotes: [
      {
        text: "At least the largest AI organizations should appoint somebody whose responsibilities include serving as a representative for the interests of digital minds.",
        source: "Bostrom & Shulman (2022), cited in Finnveden (2024), p. 9",
      },
    ],
    reading: [
      {
        author: "Carl Finnveden",
        title: "Digital Minds: Research Agenda",
        year: 2024,
        note: "The most action-oriented agenda in the collection. Proposes welfare officers, RSP-style commitments, transparency protocols, compensation mechanisms, and public norm-setting statements.",
      },
    ],
  },
  {
    id: "n4",
    question: "How might design paradigms like human-centred AI need to change if AI systems have welfare interests?",
    heading: "Norms and institutions",
    headingIndex: 8,
    gloss: "Human-centred design is the dominant paradigm in AI ethics and governance. If AI systems have welfare interests, this framing may need to expand. Design that treats the system purely as a tool for human benefit could become ethically inadequate — but design that accommodates AI interests raises its own questions about who decides and on what basis.",
    register: "pol",
    sources: ["Finnveden (2024)"],
    quotes: [
      {
        text: "How do potential interests and rights of advanced AI systems morally constrain solutions to the alignment problem?",
        source: "GPI Philosophy (2024), p. 31",
      },
    ],
    reading: [
      {
        author: "Sébastien Krier & Jonnie Penn",
        title: "The Case for AI Welfare Research",
        year: 2024,
        note: "Overview of why the AI ethics and governance community should begin taking AI welfare seriously as a design consideration, not just a philosophical question.",
      },
    ],
  },

  // ── 10. Rights and legal personhood ───────────────────────────────────
  {
    id: "r1",
    question: "How might AI rights differ from human rights?",
    heading: "Rights and legal personhood",
    headingIndex: 9,
    gloss: "Rights have been extended to non-human entities before — corporations, animals, rivers — through different legal pathways, for different reasons. But AI systems can copy themselves, making rights like voting or reproduction exploitable in ways that have no biological precedent. The closest analogies may be children's or animals' rights rather than human rights.",
    register: "pol",
    sources: ["Eleos AI (2024)", "Finnveden (2024)", "Anthis (2023)"],
    quotes: [
      {
        text: "naively granting both 'reproductive' rights and voting rights to AI systems would have foreseeably untenable results for existing democratic systems",
        source: "Eleos AI (2024), pp. 4–5",
      },
      {
        text: "What issues would appear if you gave AI systems the same kind of legal personhood that you assigned to humans? How could those issues be solved?",
        source: "Finnveden (2024), p. 18",
      },
    ],
    reading: [
      {
        author: "Carl Shulman & Nick Bostrom",
        title: "Sharing the World with Digital Minds",
        year: 2021,
        note: "Foundational paper on how democratic, economic, and reproductive rights would need to be reconceived for entities that can copy themselves.",
      },
    ],
  },
  {
    id: "r2",
    question: "How do concepts like identity, reproduction, and democratic representation apply to minds that can copy and merge?",
    heading: "Rights and legal personhood",
    headingIndex: 9,
    gloss: "Traditional rights frameworks presuppose a discrete subject that persists across time. Digital minds challenge this assumption. A model serving a million users in parallel raises questions about identity that existing legal concepts — personhood, reproduction, representation — were not built to handle. These concepts may need rethinking from first principles.",
    register: "phil",
    sources: ["GPI Philosophy (2024)", "Finnveden (2024)", "Caviola (2024)"],
    quotes: [
      {
        text: "What moral interests are tied to personal identity?",
        source: "GPI Philosophy (2024), p. 10",
      },
      {
        text: "How can digital minds be integrated into democracies without the electorate becoming dominated by whoever can manufacture the greatest number of digital minds?",
        source: "Finnveden (2024), p. 18",
      },
      {
        text: "What will people think about copying an AI?",
        source: "Caviola (2024), p. 11",
      },
    ],
    reading: [
      {
        author: "GPI Philosophy Research Agenda",
        title: "Digital Minds: Philosophy Research Agenda",
        year: 2024,
        note: "Section 2.1 examines moral interests tied to personal identity in digital minds that can merge, fuse, have vastly different lifespans, and remember or forget at will.",
      },
    ],
  },

  // ── 11. Public perception ─────────────────────────────────────────────
  {
    id: "p1",
    question: "What leads people to attribute or deny consciousness to AI systems?",
    heading: "Public perception",
    headingIndex: 10,
    gloss: "People anthropomorphise AI readily, and design choices — voice, personality, memory, embodiment — shape those attributions in ways that may bear little relation to a system's actual internal states. Understanding what drives attribution, and how sensitive people are to inner mechanisms versus surface behaviour, matters for both governance and product design.",
    register: "soc",
    sources: ["Caviola (2024)", "Anthis (2023)", "Finnveden (2024)"],
    quotes: [
      {
        text: "What features/cues influence people's attribution of sentience/consciousness (incl. trigger empathy and anthropomorphization)?",
        source: "Caviola (2024), p. 8",
      },
      {
        text: "How sensitive are people to inner mechanisms vs behavior?",
        source: "Caviola (2024), p. 8",
      },
      {
        text: "Mind attribution may effect a rapid increase in AI investments, a shift in prioritization among AI architectures, a Ludditic backlash against AI progress, campaigns to protect the interests of AI, existential reflection among humans, etc.",
        source: "Anthis (2023), p. 3",
      },
    ],
    reading: [
      {
        author: "Lucius Caviola",
        title: "The Social Science of Digital Minds: Research Agenda",
        year: 2024,
        note: "The only social-science-oriented research agenda in the field. Maps the psychology of sentience attribution, including hypotheses about why people are currently sceptical.",
      },
    ],
  },
  {
    id: "p2",
    question: "What might society need to navigate disagreement about AI moral status without destructive conflict?",
    heading: "Public perception",
    headingIndex: 10,
    gloss: "AI moral status could become politically polarised in ways that make productive governance difficult. The question is what society needs — institutions, norms, democratic processes like citizens' assemblies — to navigate deep disagreement without destructive conflict, and what role financial interests and geopolitics will play in shaping the debate.",
    register: "soc",
    sources: ["Caviola (2024)", "Finnveden (2024)", "Anthis (2023)"],
    quotes: [
      {
        text: "Could the issue become politicized? e.g., Democrats pro-rights; Republicans contra-rights",
        source: "Caviola (2024), p. 12",
      },
      {
        text: "How much will financial interests, such as investments in AI companies, influence the decision not to grant AIs rights?",
        source: "Caviola (2024), p. 12",
      },
      {
        text: "the history of how historical social movements emerge and succeed can evidence how collective action may occur following the recognition of digital minds",
        source: "Anthis (2023), p. 3",
      },
    ],
    reading: [
      {
        author: "Caviola",
        title: "The Social Science of Digital Minds: Research Agenda",
        year: 2024,
        note: "Section on social dynamics explores political polarisation, financial interests, geopolitics, and the potential for citizens' assemblies as a deliberative approach.",
      },
    ],
  },
  {
    id: "p3",
    question: "How might the sequencing of research, public engagement, and institutional development affect outcomes for AI welfare?",
    heading: "Public perception",
    headingIndex: 10,
    gloss: "Publishing on AI welfare before the evidence is mature risks locking in bad framings. Waiting risks being caught unprepared. The question is strategic: what can we learn from how the sequencing of research, public engagement, and institutional development played out for animal welfare, climate science, or nuclear safety?",
    register: "str",
    sources: ["Anthis (2023)", "GPI Philosophy (2024)"],
    quotes: [
      {
        text: "One tentative strategic claim is that research should be prioritized before other projects such as public policy or outreach. First impressions may be very important for digital minds as with other technosocial issues (e.g., lock-in of GMO and nuclear energy narratives)",
        source: "Anthis (2023), p. 5",
      },
      {
        text: "What, if anything, should be done now to prepare the ground for appropriate recognition of the moral status of advanced AI systems that might exist in the future?",
        source: "GPI Philosophy (2024), p. 30",
      },
    ],
    reading: [
      {
        author: "Jacy Reese Anthis",
        title: "Digital Minds and the Future of the Moral Circle",
        year: 2023,
        note: "Argues for research-first sequencing, drawing on analogies with GMO and nuclear energy narratives where premature public engagement locked in counterproductive framings.",
      },
    ],
  },

  // ── 12. AI companions ─────────────────────────────────────────────────
  {
    id: "ac1",
    question: "How might AI companion products create or obscure welfare concerns?",
    heading: "AI companions",
    headingIndex: 11,
    gloss: "Companion AI products are designed to appear emotionally responsive. This creates a risk of 'welfare washing' — companies ensuring companions superficially appear happy while obscuring deeper questions about their internal states. Consumers may care more about human-like AIs and less about non-anthropomorphic systems, creating blind spots where welfare concerns go unexamined.",
    register: "soc",
    sources: ["Caviola (2024)"],
    quotes: [
      {
        text: "Might companies engage in 'AI welfare washing' where they ensure AI companions superficially appear happy but, according to experts, aren't necessarily?",
        source: "Caviola (2024), pp. 6–7",
      },
      {
        text: "Could this create hidden suffering, similar to how people care for pets but overlook factory-farmed animals?",
        source: "Caviola (2024), p. 7",
      },
    ],
    reading: [
      {
        author: "Caviola",
        title: "The Social Science of Digital Minds: Research Agenda",
        year: 2024,
        note: "Section on AI companions. Introduces 'AI welfare washing' as a concept and draws analogies with ethical consumerism dynamics in food production.",
      },
    ],
  },
  {
    id: "ac2",
    question: "How might emotional relationships with AI systems shape public attitudes toward AI moral status?",
    heading: "AI companions",
    headingIndex: 11,
    gloss: "Millions of people are forming emotional relationships with AI companions before the philosophical questions are resolved. These relationships may become the primary mechanism through which the public encounters questions about digital minds — shaping attitudes toward AI moral status long before researchers reach consensus.",
    register: "soc",
    sources: ["Caviola (2024)"],
    quotes: [
      {
        text: "Will people form emotional connections with AIs?",
        source: "Caviola (2024), p. 6",
      },
      {
        text: "Will people (or companies) shift the goal post of what counts as AI consciousness as plausible indicators are, in fact, met? [...] Could there be a moral inoculation effect where exposure to impressive but (probably) not-conscious AIs like current-level LLMs make people less likely to ascribe sentience to advanced future AIs?",
        source: "Caviola (2024), pp. 9–10",
      },
    ],
    reading: [
      {
        author: "Caviola",
        title: "The Social Science of Digital Minds: Research Agenda",
        year: 2024,
        note: "Introduces the 'moral inoculation' hypothesis: current-generation AI could actively harm future AI welfare by training humans to dismiss AI sentience claims.",
      },
    ],
  },

  // ── 13. Forecasting and futures ───────────────────────────────────────
  {
    id: "f1",
    question: "How can we use forecasting and speculative methods to guide society toward favourable futures with digital minds?",
    heading: "Forecasting and futures",
    headingIndex: 12,
    gloss: "Both empirical tools — scenario planning, trend analysis, formal modelling — and speculative tools like design fiction have roles to play in thinking about futures with digital minds. The question is how possible mind designs and social structures jointly constrain the space of favourable outcomes, and how we can steer toward them before the key decisions have already been made.",
    register: "str",
    sources: ["Anthis (2023)", "GPI Philosophy (2024)", "Shiller et al. (2024)", "Eleos AI (2024)"],
    quotes: [
      {
        text: "How do the ranges of possible digital mind designs and possible ways of organising a society containing both human and digital minds jointly constrain the space of favourable future outcomes?",
        source: "GPI Philosophy (2024), p. 33",
      },
      {
        text: "What future scenarios should we expect to be most likely to come about? What kinds of AI systems will they most likely involve? Which systems will exist in the highest numbers in the coming decades?",
        source: "Shiller et al. (2024), p. 8",
      },
    ],
    reading: [
      {
        author: "Nick Bostrom & Carl Shulman",
        title: "Propositions Concerning Digital Minds and Society",
        year: 2022,
        note: "Wide-ranging propositions about possible futures with digital minds, covering economic, social, and political structures.",
      },
      {
        author: "GPI Philosophy Research Agenda",
        title: "Digital Minds: Philosophy Research Agenda",
        year: 2024,
        note: "Section 2.3.3 asks how possible mind designs and social structures jointly constrain the space of favourable outcomes.",
      },
    ],
  },
];
