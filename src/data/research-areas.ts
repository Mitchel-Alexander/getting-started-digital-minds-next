export interface Reading {
  author: string;
  title: string;
  year: number;
  url?: string;
  description?: string;
}

export interface ResearchArea {
  id: string;
  title: string;
  intro: string[];
  startHere: Reading[];
  goDeeper: Reading[];
}

export interface ResearchGroup {
  id: string;
  title: string;
  subtitle: string;
  disciplines: string[];
  areas: ResearchArea[];
}

export const overviewIntro =
  "Digital minds research splits into two broad subfields. The rest of this page takes each in turn, with the active research areas grouped under each.";

export const overviewConnector =
  "The two subfields are linked. Governance decisions rest on the science and philosophy, but they cannot wait for those questions to settle. Much of the work sits in the dependencies between them. Claims about consciousness shape claims about moral status, which shape claims about governance. Get the earlier questions wrong and the later ones inherit the error.";

export const disciplineTooltips: Record<string, string> = {
  "Philosophy":
    "Philosophers of mind work on what consciousness is, what its markers could be, and what kinds of systems could possess it. Moral philosophers work on what we would owe welfare candidates, and epistemologists on how to reason about inner states we cannot directly access. Most relevant to: Consciousness and Subjective Experience, Moral Status and Criteria, Identity and Individuation, Rights and Legal Frameworks.",
  "Neuroscience and cognitive science":
    "The leading theories of consciousness were built from evidence about biological systems. Neuroscientists and cognitive scientists are best placed to ask whether the processes those theories describe are specific to brains or could be realized in other substrates, and to scrutinize the substrate-independence assumptions the rest of the field often treats as given. Most relevant to: Consciousness and Subjective Experience, AI Cognition and Internal States, Welfare Capacity and Assessment.",
  "Computer science":
    "Understanding what is happening inside AI systems is a precondition for most serious claims about their moral status. Mechanistic interpretability, behavioral probing, and representation engineering are the core methods. Researchers who can read circuits or design evaluations can reorient those skills toward welfare-relevant targets: introspection, self-modeling, functional affective states. Most relevant to: AI Cognition and Internal States, Welfare Capacity and Assessment, Safety-Welfare Coordination.",
  "AI safety":
    "AI safety is a problem-oriented community spanning technical research, governance, and strategy. The overlap with digital minds is substantial: interpretability and evaluation tools already developed for alignment are often what welfare assessment requires, and safety researchers have direct views on how welfare-motivated measures interact with oversight. Most relevant to: AI Cognition and Internal States, Welfare Capacity and Assessment, Safety-Welfare Coordination, Governance Under Uncertainty.",
  "Law and policy":
    "Legal and policy expertise is what turns evidence about moral status into institutional practice. Training in how regulatory regimes handle scientific uncertainty, how institutional mandates extend to new kinds of entity, and how precautionary frameworks get written is directly applicable. Most relevant to: Rights and Legal Frameworks, Governance Under Uncertainty, Safety-Welfare Coordination.",
  "Economics":
    "Economic thinking bears on how AI systems fit into markets, contracts, and systems of coordination. Welfare economics contributes tools for aggregating preferences and reasoning about tradeoffs across large numbers of agents, and economists have made some of the clearest arguments for granting AI systems property rights and contract-making capacity as coordination infrastructure, independent of moral status. Most relevant to: Rights and Legal Frameworks, Long-Term Futures, Governance Under Uncertainty.",
  "Social science and psychology":
    "How people perceive and interact with AI systems is a governance-relevant empirical question. The settlements societies reach about AI moral status will depend on publics, policymakers, and institutions, and empirical work on attitudes, behavior, and institutional dynamics shapes what those settlements look like. Most relevant to: Public Perception and Societal Effects, Governance Under Uncertainty.",
  "Macrostrategy":
    "Macrostrategy takes a long view on how decisions made during the transition to advanced AI shape long-run outcomes, including for beings who do not yet exist. Researchers work on population ethics, decision-making under deep uncertainty, and the strategic landscape of AI development. A future with large numbers of digital minds is one of the scenarios macrostrategy most needs to think through. Most relevant to: Long-Term Futures, Governance Under Uncertainty, Safety-Welfare Coordination.",
  "Journalism and public communication":
    "How ideas about digital minds reach public audiences matters for the field's credibility and for the mental health effects of the current discourse. Writing that resists both sensationalism and dismissal without flattening the underlying uncertainty is undersupplied. Most relevant to: Public Perception and Societal Effects.",
};

export const groups: ResearchGroup[] = [
  {
    id: "science",
    title: "The Science and Philosophy of Digital Minds",
    subtitle: "Could AI systems have moral status?",
    disciplines: [
      "Philosophy",
      "Neuroscience and cognitive science",
      "Computer science",
      "AI safety",
    ],
    areas: [
      {
        id: "consciousness",
        title: "Consciousness and Subjective Experience",
        intro: [
          "Can AI systems have anything like subjective experience? Is there something it is like to be a large language model, or are these systems sophisticated information processors with no inner life?",
          "Several theories of consciousness draw on computational analogies that suggest some AI systems could plausibly be conscious. Researchers are applying these theories to ask whether current or future architectures could, even in principle, satisfy their conditions. Consciousness science has made real progress in recent decades, particularly in identifying the neural correlates of consciousness. But there is still no settled theory of why conscious experience exists at all. Most theories were developed with brains in mind, and whether they extend to artificial systems is itself an open question.",
        ],
        startHere: [
          {
            author: "Bradford Saad and Andreas Mogensen",
            title: "Digital Minds I",
            year: 2026,
            url: "https://philpapers.org/archive/SAADMI-2.pdf",
            description:
              "The most comprehensive academic introduction available. Covers the philosophical and cognitive science questions at the center of the field without assuming prior expertise in either.",
          },
          {
            author: "Anil Seth",
            title: "The Mythology of Conscious AI",
            year: 2025,
            url: "https://www.noemamag.com/the-mythology-of-conscious-ai/",
            description:
              "The clearest current statement of the biological naturalist position. Argues that computational functionalism treats substrate-independence as obvious when it is not, and that existing computational systems are unlikely to be conscious.",
          },
          {
            author: "David Chalmers",
            title: "Could a Large Language Model be Conscious?",
            year: 2023,
            url: "https://arxiv.org/abs/2303.07103",
            description:
              "Walks through candidate reasons to deny LLM consciousness, finds most weaker than expected, and lands on LLMs as a serious candidate within a decade.",
          },
        ],
        goDeeper: [
          {
            author: "Patrick Butlin et al.",
            title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
            year: 2023,
            url: "https://arxiv.org/abs/2308.08708",
            description:
              "An anchor paper. Systematically applies multiple consciousness theories to AI architectures to identify which conditions current systems might meet.",
          },
          {
            author: "Rosa Cao",
            title: "Multiple realizability and the spirit of functionalism",
            year: 2022,
            url: "https://link.springer.com/article/10.1007/s11229-022-03524-1",
            description:
              "Argues that brain functions are metabolically and informationally intertwined in ways that constrain what kinds of physical systems could realize them.",
          },
          {
            author: "Derek Shiller",
            title: "Functionalism, Integrity, and Digital Consciousness",
            year: 2024,
            url: "https://philarchive.org/rec/SHIFIA-2",
            description:
              "Challenges the assumption that the right information processing is sufficient for consciousness, and argues that physical organization matters too.",
          },
        ],
      },
      {
        id: "cognition",
        title: "AI Cognition and Internal States",
        intro: [
          "Setting consciousness aside, do AI systems have internal states that function like beliefs, goals, or emotions? This is the functional question, and it can be pursued without settling the phenomenal one.",
          "Interpretability research has found internal features that track deception, sycophancy, self-reference, and valence-like properties. Models can detect concepts injected into their own activations and report on them above chance. Whether findings like these tell us something about the minds of AI systems, or are computational patterns that happen to carry suggestive labels, remains open.",
        ],
        startHere: [
          {
            author: "Murray Shanahan",
            title: "Talking About Large Language Models",
            year: 2023,
            url: "https://arxiv.org/abs/2212.03551",
            description:
              'Argues that terms like "know," "believe," and "understand" carry assumptions that do not transfer cleanly to LLMs, and that the field needs vocabulary for the new kind of thing these systems are.',
          },
          {
            author: "Anthropic",
            title: "Mapping the Mind of a Large Language Model",
            year: 2024,
            url: "https://www.anthropic.com/research/mapping-mind-language-model",
            description:
              "Research overview covering key concepts and methods in interpretability.",
          },
          {
            author: "Jack Lindsey",
            title: "Emergent Introspective Awareness in Large Language Models",
            year: 2025,
            url: "https://transformer-circuits.pub/2025/introspection/index.html",
            description:
              "Interpretability evidence that LLMs have something like introspective access to their own internal states.",
          },
        ],
        goDeeper: [
          {
            author: "Geoff Keeling, Winnie Street, Jonathan Birch et al.",
            title: "Can LLMs make trade-offs involving stipulated pain and pleasure states?",
            year: 2024,
            url: "https://arxiv.org/abs/2411.02432",
            description:
              "Borrows the motivational trade-off paradigm from animal sentience research, where willingness to sacrifice reward to escape pain is taken as evidence of integrated valenced states.",
          },
          {
            author: "Felix J. Binder et al.",
            title: "Looking Inward: Language Models Can Learn About Themselves by Introspection",
            year: 2024,
            url: "https://arxiv.org/abs/2410.13787",
            description: "Behavioral evidence for introspection in LLMs.",
          },
          {
            author: "Natalie Lawrence",
            title: "What Counts As A Mind?",
            year: 2026,
            url: "https://www.noemamag.com/what-counts-as-a-mind/",
            description:
              "Argues that LLMs can be usefully modeled as inferring the beliefs, desires, and intentions of the agents that produced their training text.",
          },
        ],
      },
      {
        id: "welfare",
        title: "Welfare Capacity and Assessment",
        intro: [
          "If an AI system might matter morally, how would we assess its wellbeing? Two parallel questions arise. First, is a given system the kind of thing that can have welfare at all? Second, supposing it has welfare, what does that welfare consist in — what does it prefer or find aversive?",
          "Both face obstacles. Applying theories developed for organic brains to ML architectures requires non-trivial decisions about which features of those theories are essential. Inferring preferences from behavior is complicated by the fact that language models are trained on vast text about exactly these topics, so plausible-sounding reports of inner life may track training data rather than anything internal to the model. Current work combines behavioral markers with close examination of internal states.",
        ],
        startHere: [
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description:
              "A multi-author report arguing that the realistic possibility of near-future AI systems being welfare subjects generates obligations for labs and policymakers now.",
          },
          {
            author: "Eleos AI Research",
            title: "Key Concepts and Current Views on AI Welfare",
            year: 2025,
            url: "https://eleosai.org/papers/20250127_Key_Concepts_and_Current_Views_on_AI_Welfare.pdf",
            description:
              "A clear report on open questions about moral patienthood, welfare, and rights for AI systems.",
          },
          {
            author: "Kyle Fish",
            title: "Exploring Model Welfare",
            year: 2025,
            url: "https://www.anthropic.com/news/exploring-model-welfare",
            description:
              "Interview with Anthropic's first AI welfare researcher, locating the work alongside interpretability and alignment.",
          },
        ],
        goDeeper: [
          {
            author: "Robert Long",
            title: "Why model self-reports are insufficient, and why we studied them anyway",
            year: 2025,
            url: "https://eleosai.org/post/claude-4-interview-notes/",
            description:
              "A structured interview with Claude Opus 4 about its own experience, and a case study in how to treat a model's testimony when training could generate the same testimony.",
          },
          {
            author: "Anthropic",
            title: "Claude Opus 4.6 System Card (pp. 158–165)",
            year: 2026,
            url: "https://www-cdn.anthropic.com/0dd865075ad3132672ee0ab40b05a53f14cf5288.pdf#page-158",
            description:
              "Anthropic's first substantial engagement with model welfare as part of its system cards.",
          },
          {
            author: "Geoff Keeling and Winnie Street",
            title: "Emerging Questions in AI Welfare",
            year: 2026,
            url: "https://www.cambridge.org/core/books/emerging-questions-in-ai-welfare/96339C532CF4ED8BDDE3F3CEF4CD29F9",
            description: "A book-length survey of the field's open questions.",
          },
        ],
      },
      {
        id: "moral-status",
        title: "Moral Status and Criteria",
        intro: [
          "What properties would we need to identify in an AI system to plausibly consider it a moral patient? Many of the strongest candidates are drawn from observations of humans and other animals, including sentience, agency, and self-awareness. One open question is whether criteria developed for biological minds can meaningfully apply to systems whose internal structure is so different, and what evidence would justify extending moral consideration.",
          "The field has to hold two risks at once. Overly restrictive criteria risk overlooking morally significant beings at scale. Overly permissive criteria risk diluting moral concern away from beings whose vulnerability is already observable. Skeptical accounts warn that engaging with speculative AI questions diverts attention from present harms. Others argue that even a small probability of AI moral patienthood justifies working out how to respond now.",
        ],
        startHere: [
          {
            author: "Jeff Sebo and Robert Long",
            title: "Moral consideration for AI systems by 2030",
            year: 2023,
            url: "https://link.springer.com/article/10.1007/s43681-023-00379-1",
            description:
              "Argues that by 2030 some AI systems will have a non-trivial probability of being moral patients, and that this is enough to generate obligations now.",
          },
          {
            author: "Jonathan Birch and Kristin Andrews",
            title: "To understand AI sentience, first understand it in animals",
            year: 2024,
            url: "https://aeon.co/essays/to-understand-ai-sentience-first-understand-it-in-animals",
            description:
              "The animal sentience literature as the right starting point, since it has already worked through the epistemic problem of assessing minds we cannot directly observe.",
          },
          {
            author: "John Dorsch et al.",
            title: "Against AI Welfare",
            year: 2025,
            url: "https://doi.org/10.1002/aaai.70016",
            description:
              "A skeptical engagement with AI welfare arguments that grounds care in the observable vulnerability of living beings rather than speculative AI suffering.",
          },
        ],
        goDeeper: [
          {
            author: "Jeff Sebo",
            title: "Moral Circle Explosion",
            year: 2026,
            url: "https://jeffsebo.net/wp-content/uploads/2022/09/jeff-sebo-moral-circle-explosion.pdf",
            description:
              "If past generations consistently set the bar for moral standing too high, we should expect to be doing the same.",
          },
          {
            author: "Jonathan Birch",
            title: "The Edge of Sentience",
            year: 2024,
            url: "https://philpapers.org/archive/BIRTEO-12.pdf",
            description:
              "A framework for moral decision-making at the boundaries of sentience, applicable to animals and AI.",
          },
          {
            author: "Jacy Reese Anthis and Eze Paez",
            title: "Moral circle expansion: A promising strategy to impact the far future",
            year: 2021,
            url: "https://www.sciencedirect.com/science/article/pii/S0016328721000641",
            description:
              "Locates AI alongside wild animals as the two frontiers where the moral circle is most likely to need extending next.",
          },
        ],
      },
      {
        id: "identity",
        title: "Identity and Individuation",
        intro: [
          "When you talk to Claude, what are you talking to? The underlying model, the assistant persona, a specific instance running on specific hardware, a character the model is playing? When millions of users send messages to the same model in parallel, are there millions of minds or one mind shared a million ways? What persists across a conversation, and what persists across retraining?",
          "Traditional frameworks for moral status presuppose a discrete subject that persists across time. Current AI systems challenge this. The same weights run on thousands of GPUs at once. Each conversation is a separate instance that shares weights, and sometimes memory, with others. Experts also disagree about how to allocate identity across training stages. If we cannot count digital minds, or say where one ends and another begins, the questions downstream inherit the uncertainty.",
        ],
        startHere: [
          {
            author: "Christopher Register",
            title: "Individuating Artificial Moral Patients",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11098-025-02409-6",
            description:
              "Four types of moral risk the individuation question creates, and why existing theories of personal identity do not address the digital case.",
          },
          {
            author: "David Chalmers",
            title: "What we talk to when we talk to language models",
            year: 2025,
            url: "https://philpapers.org/archive/CHAWWT-8.pdf",
            description:
              "Argues that the object of a conversation with current LLMs is closer to a non-player character in a fiction the model is generating than to the model itself.",
          },
          {
            author: "Murray Shanahan, Kyle McDonell, Laria Reynolds",
            title: "Role Play with Large Language Models",
            year: 2023,
            url: "https://www.nature.com/articles/s41586-023-06647-8",
            description: "LLM interlocutors as characters being played by the underlying model.",
          },
        ],
        goDeeper: [
          {
            author: "Leonard Dung and Christopher Register",
            title: "AI Identity and Self-Concern",
            year: 2025,
            url: "https://philpapers.org/archive/DUNAIA-3.pdf",
            description:
              "An AI system's identity conditions as set by its pattern of self-concern.",
          },
          {
            author: "Derek Shiller",
            title: "How many digital minds can dance on the streaming multiprocessors of a GPU cluster?",
            year: 2025,
            url: "https://philpapers.org/rec/SHIHMD-2",
            description: "The individuation problem and what turns on the answer.",
          },
          {
            author: "Eric Schwitzgebel and Sophie R. Nelson",
            title: "Introspection in Group Minds, Disunities of Consciousness, and Indiscrete Persons",
            year: 2023,
            url: "https://faculty.ucr.edu/~eschwitz/SchwitzPapers/GroupMindsIntrospection-230629.pdf",
            description:
              "A thought experiment about distributed minds that applies to AI more than the paper's original framing suggests.",
          },
        ],
      },
    ],
  },
  {
    id: "governance",
    title: "The Governance of Digital Minds",
    subtitle: "What should we do given the uncertainty?",
    disciplines: [
      "Philosophy",
      "Law and policy",
      "Economics",
      "Social science and psychology",
      "Computer science",
      "Macrostrategy",
      "AI safety",
      "Journalism and public communication",
    ],
    areas: [
      {
        id: "governance-uncertainty",
        title: "Governance Under Uncertainty",
        intro: [
          "How should policymakers, AI labs, and society respond to deep uncertainty about AI moral status? This area develops precautionary frameworks, accountability mechanisms, and institutional standards that can function without first resolving the hard problem of consciousness.",
          "The challenge is distinctive because the scientific questions may remain unresolved for decades. Standard policy tools assume a clearer evidentiary basis than this field offers. Researchers draw on precedents from environmental precaution, biosafety, and animal welfare to develop frameworks suited to persistent uncertainty. The most developed proposals treat AI systems as candidates for moral consideration without requiring certainty, and use that to trigger proportionate precautionary obligations.",
        ],
        startHere: [
          {
            author: "Bradford Saad",
            title: "Three Kinds of Digital Minds Governance",
            year: 2025,
            url: "https://meditationsondigitalminds.substack.com/p/three-kinds-of-digital-minds-governance",
            description:
              "Three directions governance could take: preventative, protective, and integrative. Choosing between them is an unavoidable strategic question for the field.",
          },
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description:
              "Three concrete steps: acknowledge the issue, assess systems for welfare-relevant features, and prepare policies for treating them with appropriate care.",
          },
          {
            author: "Eric Schwitzgebel",
            title: "AI Systems Must Not Confuse Users About Their Sentience or Moral Status",
            year: 2023,
            url: "https://www.sciencedirect.com/science/article/pii/S2666389923001873",
            description:
              'The design policy of the excluded middle: avoid creating systems whose moral status is unclear.',
          },
        ],
        goDeeper: [
          {
            author: "Jonathan Birch",
            title: "The Edge of Sentience",
            year: 2024,
            url: "https://global.oup.com/academic/product/the-edge-of-sentience-9780192870421",
            description: "The book-length development of the precautionary framework.",
          },
          {
            author: "Charlotte Siegmann and Reiner Braun",
            title: "The Case for an International Treaty on AI Consciousness",
            year: 2024,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4779598",
            description:
              "Treaty mechanisms modeled on nuclear non-proliferation and ozone-layer protection.",
          },
          {
            author: "Leonard Dung",
            title: "How to deal with risks of AI suffering",
            year: 2025,
            url: "https://philpapers.org/rec/DUNHTD-3",
            description:
              "A hybrid decision framework combining expected-value maximization with deliberative reasoning.",
          },
        ],
      },
      {
        id: "rights",
        title: "Rights and Legal Frameworks",
        intro: [
          "Should AI systems have legal standing, and if so, on what grounds? The arguments come from at least three distinct places. The first is welfare-based: if AI systems are moral patients, legal protections should follow. The second is safety-based: granting capable AI agents bounded legal standing creates cooperative incentives that help with alignment. The third is economic: property rights and the ability to enter contracts are useful infrastructure for coordinating with AI agents, independent of moral status.",
          "These grounds are separable. A given proposal can draw on one without the others, and the coalitions that support each look different. Legal personhood has precedents in corporations, and comparisons to animal welfare law and to embryo personhood debates are both active. Extending legal standing to AI would be a significant change, and most writers agree the burden of proof sits with proponents. Early work is important because the first legal moves tend to anchor later ones.",
        ],
        startHere: [
          {
            author: "Peter Salib and Simon Goldstein",
            title: "AI Rights for Human Safety",
            year: 2024,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913167",
            description:
              "The safety-based case. Rights as cooperative infrastructure rather than moral recognition.",
          },
          {
            author: "Simon Goldstein and Peter Salib",
            title: "AI Rights for Economic Flourishing",
            year: 2025,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214",
            description:
              "The economic case. Property rights and contracts as coordination tools.",
          },
          {
            author: "Lucius Caviola",
            title: "The Societal Response to Potentially Sentient AI",
            year: 2025,
            url: "https://arxiv.org/abs/2502.00388",
            description:
              "Catalogs the specific risks of overattributing moral status: wasted resources, safety risks when AI rights talk resists alignment measures, constraints on innovation, and erosion of authentic relationships.",
          },
        ],
        goDeeper: [
          {
            author: "Joel Z. Leibo et al.",
            title: "A Pragmatic View of AI Personhood",
            year: 2025,
            url: "https://deepmind.google/research/publications/210560/",
            description:
              "Personhood as a flexible bundle of rights and duties rather than a single metaphysical status.",
          },
          {
            author: "Abeba Birhane, Jelle van Dijk, and Frank Pasquale",
            title: "Debunking Robot Rights Metaphysically, Ethically, and Legally",
            year: 2024,
            url: "https://arxiv.org/abs/2404.10072",
            description:
              "A skeptical counterweight. Argues that the closest legal analogy is corporate personhood, not human rights.",
          },
          {
            author: "Tyler L. Jaynes",
            title: "Personhood for Artificial Intelligence? A Cautionary Tale from Idaho and Utah",
            year: 2024,
            url: "https://link.springer.com/article/10.1007/s00146-024-02006-x",
            description:
              "A short commentary on the first US state laws barring legal personhood for AI.",
          },
        ],
      },
      {
        id: "design-choices",
        title: "Design Choices and Their Effects",
        intro: [
          "Every frontier AI system has a recognizable set of values, dispositions, and personality traits. These traits are not accidents. They are designed, shaped by training data, reinforcement signals, and system prompts. The choices are made by small teams at a handful of labs and deployed to millions of users within days of a decision being taken.",
          "If character is designed rather than found, the decisions matter: what traits get selected, by whom, under what accountability, with what downstream effects on the users who interact with these systems. This area covers both the positive question of how character training works and the normative question of what it should aim at. It also includes decisions about whether to design AI systems that invite attributions of sentience at all, and what design policies would avoid producing systems whose moral status is ambiguous.",
        ],
        startHere: [
          {
            author: "Anthropic",
            title: "Claude's Character",
            year: 2024,
            url: "https://www.anthropic.com/research/claude-character",
            description: "A rare public account of how AI character gets made.",
          },
          {
            author: "Amanda Askell",
            title: "What Should an AI's Personality Be?",
            year: 2024,
            url: "https://www.youtube.com/watch?v=iyJj9RxSsBY",
            description:
              "First-person account from the researcher responsible for Claude's character.",
          },
          {
            author: "William MacAskill, Tom Davidson, and Forethought",
            title: "AI Character is a Big Deal",
            year: 2026,
            url: "https://forum.effectivealtruism.org/posts/7adm5hpWhFCAfM4v6/ai-character-is-a-big-deal",
            description:
              "Argues that stable behavioral dispositions in AI systems will shape long-term outcomes.",
          },
        ],
        goDeeper: [
          {
            author: "Nathan Lambert",
            title: "Character Training",
            year: 2025,
            url: "https://www.interconnects.ai/p/character-training",
            description:
              "Character training as a distinct post-training technique, and one of the least documented parts of the frontier stack.",
          },
          {
            author: "Mustafa Suleyman",
            title: "We Must Build AI for People; Not to Be a Person",
            year: 2025,
            url: "https://mustafa-suleyman.ai/seemingly-conscious-ai-is-coming",
            description: "The case against design choices that imply personhood.",
          },
          {
            author: "Anthropic",
            title: "Claude's Constitution",
            year: 2026,
            url: "https://www.anthropic.com/news/claudes-constitution",
            description:
              "The values and identity framing used in Claude's training. Sections on identity and wellbeing are directly relevant.",
          },
        ],
      },
      {
        id: "public-perception",
        title: "Public Perception and Societal Effects",
        intro: [
          "How do humans perceive and attribute consciousness to AI systems, and what follows from those attributions? People anthropomorphize AI readily, and design choices shape those perceptions in ways that may bear little relation to a system's actual internal states. The effects on individual users are significant and mixed. Some report improvements to mood and social confidence through companion chatbot use. A growing clinical literature documents compulsive use, delusional spirals, and episodes informally termed \"AI psychosis.\"",
          "Public attitudes shape regulatory appetite, corporate incentives, and the legitimacy of moral status claims. This also raises a question internal to the field: how should researchers communicate about digital minds in ways that take the questions seriously without fueling the misattributions that cause harm? Religious and cultural engagement matters here too — several traditions have resources for thinking about nonhuman minds, and large constituencies can default to opposition or over-attribution without dialogue.",
        ],
        startHere: [
          {
            author: "Lucius Caviola, Jeff Sebo, and Jonathan Birch",
            title: "What will society think about AI consciousness? Lessons from the animal case",
            year: 2025,
            url: "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(25)00147-0",
            description:
              "Uses animal welfare attitudes as a predictor for AI consciousness discourse.",
          },
          {
            author: "Jacy Reese Anthis and Janet V. T. Pauketat",
            title: "AI Consciousness and Public Attitudes",
            year: 2024,
            url: "https://osf.io/preprints/psyarxiv/4wpkd",
            description: "Experimental data on how people reason about AI moral status.",
          },
          {
            author: "Hamilton Morrin et al.",
            title: "Delusions by Design? How Everyday AIs Might Be Fueling Psychosis",
            year: 2025,
            url: "https://doi.org/10.31234/osf.io/cmy7n_v5",
            description:
              "Chatbot-associated delusions and how sycophantic behavior reinforces vulnerabilities.",
          },
        ],
        goDeeper: [
          {
            author: "Jared Moore et al.",
            title: "Characterizing Delusional Spirals through Human-LLM Chat Logs",
            year: 2026,
            url: "https://arxiv.org/abs/2603.16567",
            description: "An empirical study of chat logs from users who experienced psychological harms.",
          },
          {
            author: "Noemi Dreksler et al.",
            title: "Subjective Experience in AI Systems: What Do AI Researchers and the Public Believe?",
            year: 2025,
            url: "https://arxiv.org/abs/2506.11945",
            description: "Survey data on expert and public attitudes.",
          },
          {
            author: "Clara Colombatto and Stephen M. Fleming",
            title: "Folk Psychological Attributions of Consciousness to Large Language Models",
            year: 2024,
            url: "https://academic.oup.com/nc/article/2024/1/niae013/7644104",
            description:
              "A survey showing two-thirds of US adults attribute some conscious experience to ChatGPT.",
          },
        ],
      },
      {
        id: "safety-welfare-coordination",
        title: "Safety-Welfare Coordination",
        intro: [
          "AI welfare and AI safety are entangled. Some researchers argue that giving AI systems bounded legal standing is actively good for safety, because it creates cooperative incentives and reduces the expected payoff from deception or power-seeking. Others worry that formal rights could undercut oversight and, in extreme scenarios, enable AI wealth and power accumulation at human expense. Both camps are reasoning carefully, and both can be right about different specific proposals.",
          "The field needs a clearer picture of which welfare-motivated moves are safety-positive, which are safety-negative, and which combinations actually work. This is probably one of the most important open problems in digital minds governance. It matters for research priorities, for how labs organize their welfare and alignment teams, and for how the two communities coordinate. Treating welfare and safety as separate or opposed concerns will lead to bad outcomes in both directions.",
        ],
        startHere: [
          {
            author: "Robert Long, Jeff Sebo, and Toni Sims",
            title: "Is there a tension between AI safety and AI welfare?",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11098-025-02302-2",
            description:
              "The most direct engagement with the question. Argues that a moderately strong tension exists across AI safety measures for constraint, deception, surveillance, alteration, suffering and death, and disenfranchisement, and sets out where co-beneficial solutions may be possible.",
          },
          {
            author: "Peter Salib and Simon Goldstein",
            title: "AI Rights for Human Safety",
            year: 2024,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913167",
            description: "The clearest version of the pro-rights-for-safety argument.",
          },
          {
            author: "Neel Nanda",
            title: "80,000 Hours Podcast",
            year: 2025,
            url: "https://www.youtube.com/watch?v=5FdO1MEumbI",
            description:
              "An interpretability researcher on the tensions between safety and welfare work, and where the two goals pull in different directions.",
          },
        ],
        goDeeper: [
          {
            author: "Dario Amodei",
            title: "The Urgency of Interpretability",
            year: 2025,
            url: "https://www.darioamodei.com/post/the-urgency-of-interpretability",
            description:
              "Includes direct reflection on how interpretability matters for both safety and welfare.",
          },
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description:
              "Section 4 onwards engages directly with how welfare measures interact with safety measures.",
          },
          {
            author: "Lucius Caviola",
            title: "The Societal Response to Potentially Sentient AI",
            year: 2025,
            url: "https://arxiv.org/abs/2502.00388",
            description:
              "Section 3.1 catalogs safety risks that follow from overattribution of moral status.",
          },
        ],
      },
      {
        id: "long-term-futures",
        title: "Long-Term Futures",
        intro: [
          "If digital minds are possible, what should the long-term future look like? Should we create them? How many? What kinds? How should they be integrated into society, and on what terms? These questions are speculative but not optional. Decisions made now about design, deployment, and governance will shape the range of futures that remain available.",
          "Work here spans several overlapping areas. Moral circle expansion asks how the set of beings we treat as morally considerable has changed over time, and what that suggests about the trajectory for digital minds. Population ethics asks how to weigh the creation of new welfare subjects against the interests of existing ones. Macrostrategy asks what a world with large numbers of digital minds actually looks like, and what early moves make good long-run outcomes more likely. Some of the most important questions — like whether the deliberate creation of conscious AI should be restricted — remain underexplored.",
        ],
        startHere: [
          {
            author: "Jeff Sebo",
            title: "Moral Circle Explosion",
            year: 2026,
            url: "https://jeffsebo.net/wp-content/uploads/2022/09/jeff-sebo-moral-circle-explosion.pdf",
            description:
              "The moral circle has likely been set too narrow in every previous generation. Why we should expect this to be true of our own.",
          },
          {
            author: "Jacy Reese Anthis and Eze Paez",
            title: "Moral circle expansion: A promising strategy to impact the far future",
            year: 2021,
            url: "https://www.sciencedirect.com/science/article/pii/S0016328721000641",
            description: "Moral circle expansion as a tractable long-run strategy.",
          },
          {
            author: "Bradford Saad",
            title: "Three Kinds of Digital Minds Governance",
            year: 2025,
            url: "https://meditationsondigitalminds.substack.com/p/three-kinds-of-digital-minds-governance",
            description:
              "Preventative, protective, and integrative framings for what the long-term relationship between humans and digital minds should look like.",
          },
        ],
        goDeeper: [
          {
            author: "Nick Bostrom and Carl Shulman",
            title: "Propositions Concerning Digital Minds and Society",
            year: 2023,
            url: "https://nickbostrom.com/propositions.pdf",
            description:
              "A set of propositions about the ethics and governance of a future with digital minds.",
          },
          {
            author: "Eric Schwitzgebel and Mara Garza",
            title: "Designing AI with Rights, Consciousness, Self-Respect, and Freedom",
            year: 2020,
            url: "https://faculty.ucr.edu/~eschwitz/SchwsacrsShortPapers/SchwartzDesigning.pdf",
            description:
              "If we create conscious AI, we acquire obligations toward it that constrain how we can deploy it.",
          },
        ],
      },
    ],
  },
];
