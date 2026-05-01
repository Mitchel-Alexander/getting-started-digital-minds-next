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

export const overviewParagraphs: string[] = [
  "Digital minds research splits into two broad subfields. The science and philosophy of digital minds asks whether AI systems could have moral status. The governance of digital minds asks what we should do given the uncertainty.",
  "These fields work in parallel but also share key dependencies. Many governance decisions rest on the science and philosophy of digital minds, but they cannot wait for those questions to be definitively resolved. Claims about the internal states of AI systems shape claims about their moral status, which carry over into questions of governance.",
  "This is further complicated by the possibility that changing social dynamics will outpace scientific inquiry entirely. Public attitudes are already taking shape, and risk becoming established norms that future science may struggle to revise. The field therefore needs frameworks that can guide governance decisions before the science settles, and that can be revised as it does.",
];

export const disciplineTooltips: Record<string, string> = {
  "Philosophy":
    "Philosophy of mind asks what consciousness is and what kinds of systems could possess it. Moral philosophy asks what would be owed to beings whose moral status is uncertain, while epistemology and philosophy of science ask how to reason about inner states we cannot directly access and how the field's own methods should work. Most relevant to: Consciousness and Subjective Experience, Moral Status and Criteria, Identity and Individuation, Rights and Legal Frameworks.",
  "Neuroscience and cognitive science":
    "The leading theories of consciousness were built from evidence about biological systems. Neuroscientists and cognitive scientists are best placed to ask whether the processes those theories describe are specific to brains, and to scrutinize the substrate-independence assumptions much of the AI consciousness debate currently treats as given. Most relevant to: Consciousness and Subjective Experience, AI Cognition and Internal States, Welfare Capacity and Assessment.",
  "Computer science":
    "Understanding what is happening inside AI systems is a precondition for most serious claims about their moral status. Interpretability and evaluation techniques developed for AI safety can be reoriented toward welfare-relevant questions about introspection, self-modelling, and functional affective states. Most relevant to: AI Cognition and Internal States, Welfare Capacity and Assessment, Safety-Welfare Coordination.",
  "AI safety":
    "AI safety is a problem-oriented community rather than a traditional discipline, with research spanning technical work, governance, and strategy. The overlap with digital minds is substantial. Interpretability and evaluation tools developed for alignment are often what welfare assessment requires, and safety researchers have direct views on how welfare-motivated measures interact with oversight. Most relevant to: AI Cognition and Internal States, Welfare Capacity and Assessment, Safety-Welfare Coordination, Governance Under Uncertainty.",
  "Social science and psychology":
    "How people perceive and interact with AI systems is an established empirical research area within AI governance, and one with direct stakes for digital minds. What societies eventually conclude about AI moral status will depend on the attitudes of publics and policymakers, the behaviour of users, and the institutional dynamics that shape both. Empirical work on these dimensions is what tells the field where the public discussion actually is, and where it is heading. Most relevant to: Public Perception, Communication, and Societal Effects, Governance Under Uncertainty.",
  "Law and policy":
    "Legal and policy expertise turns evidence about digital minds into governance solutions regarding their position in society. Where corporate governance depends on labs choosing to be accountable, law creates external structures of oversight that operate regardless of internal decisions. Lawyers and policy researchers also bring the institutional craft of adjudicating between parties whose interests may conflict, which AI welfare will need as the interests of digital minds, developers, and users diverge. Most relevant to: Rights and Legal Frameworks, Governance Under Uncertainty, Safety-Welfare Coordination.",
  "Economics":
    "Economic thinking bears on how AI systems fit into the structures humans use to coordinate. It offers tools for reasoning about coordination dynamics involving large numbers of agents with different preferences, and the clearest arguments for extending AI systems property rights and contract-making capacity as coordination infrastructure, independent of moral status. Most relevant to: Rights and Legal Frameworks, Long-Term Futures, Governance Under Uncertainty.",
  "Macrostrategy":
    "Macrostrategy considers how decisions made during the transition to advanced AI shape long-run outcomes, including for beings who do not yet exist. The field draws on population ethics, decision theory under deep uncertainty, and futures research, and is one of the few research traditions that takes seriously the prospect of a world containing large numbers of digital minds. Most relevant to: Long-Term Futures, Governance Under Uncertainty, Safety-Welfare Coordination.",
  "Journalism and public communication":
    "How ideas about digital minds reach public audiences matters for the field's credibility and for the mental health effects of developing societal discourse. Communication that holds appropriate uncertainty, stays engaged with empirical evidence, and remains sensitive to social impacts is currently undersupplied. Most relevant to: Public Perception, Communication, and Societal Effects.",
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
          "Can AI systems have anything like subjective experience? Is there something it is like to be a large language model?",
          "Several leading theories of consciousness hold that the processes underlying consciousness are computational in form, and on those theories some AI systems are plausible candidates for being conscious. Consciousness science has identified neural correlates of consciousness in considerable detail over the past two decades, but there is still no settled theory of why conscious experience exists at all. The deeper problem is that most theories were developed with biological brains in mind. Whether consciousness is computational, and if so, whether existing or future AI systems possess the right kinds of computation for conscious experience is a central open question of the subfield.",
        ],
        startHere: [
          {
            author: "Bradford Saad and Andreas Mogensen",
            title: "Digital Minds I",
            year: 2026,
            url: "https://philarchive.org/rec/SHIFIA-2",
            description:
              "The most comprehensive academic introduction available. Covers the central philosophical and cognitive science questions without assuming prior expertise in either.",
          },
          {
            author: "Anil Seth",
            title: "The Mythology of Conscious AI",
            year: 2025,
            url: "https://www.noemamag.com/the-mythology-of-conscious-ai/",
            description:
              "The clearest current statement of the biological naturalist position. Argues that computational functionalism treats substrate-independence as obvious when it is not.",
          },
          {
            author: "David Chalmers",
            title: "Could a Large Language Model be Conscious?",
            year: 2023,
            url: "https://arxiv.org/abs/2303.07103",
            description:
              "Walks through candidate reasons to deny LLM consciousness, claims that most are weaker than expected, and suggests that LLMs could be a serious candidate within a decade. (Also available as a talk: https://www.youtube.com/watch?v=bskf9jyxmMs)",
          },
        ],
        goDeeper: [
          {
            author: "Ned Block",
            title: "If Consciousness is Biological, Can AI Be Conscious?",
            year: 2026,
            url: "https://www.youtube.com/watch?v=-6htu3mihoA",
            description:
              "Asks whether consciousness has a biological basis, and if so, whether that precludes consciousness in AI. CMEP talk.",
          },
          {
            author: "Derek Shiller et al.",
            title: "Initial results of the Digital Consciousness Model",
            year: 2026,
            url: "https://arxiv.org/abs/2601.17060",
            description:
              "A probabilistic framework for assessing AI consciousness that aggregates across multiple competing theories rather than committing to one. Finds the evidence is against 2024 LLMs being conscious, but not decisively.",
          },
          {
            author: "Patrick Butlin et al.",
            title: "Consciousness in Artificial Intelligence",
            year: 2023,
            url: "https://arxiv.org/abs/2308.08708",
            description:
              "One of the field's anchor papers. Applies multiple consciousness theories to AI architectures in order to identify which conditions current systems might meet.",
          },
          {
            author: "Rosa Cao",
            title: "Multiple realizability and the spirit of functionalism",
            year: 2022,
            url: "https://link.springer.com/article/10.1007/s11229-022-03524-1",
            description:
              "Argues that brain functions are metabolically and informationally intertwined in ways that constrain what kinds of physical systems could realize them.",
          },
        ],
      },
      {
        id: "cognition",
        title: "AI Cognition and Internal States",
        intro: [
          "Do AI systems have internal states that function like beliefs, goals, or emotions? And what would count as evidence either way?",
          "Interpretability is the study of the internal representations of AI systems. It originated in alignment research, where it has been used to identify features associated with misaligned behaviours such as deception and sycophancy. The same techniques are now being applied to welfare-relevant questions, and have found internal features that track belief, goal, and affect-like properties. Whether these features map cleanly onto the mental-state concepts they are compared to remains unclear.",
        ],
        startHere: [
          {
            author: "Murray Shanahan",
            title: "Talking About Large Language Models",
            year: 2023,
            url: "https://arxiv.org/abs/2212.03551",
            description:
              'Argues that terms like "know," "believe," and "understand" carry assumptions that do not transfer cleanly to LLMs, and that the field needs vocabulary suited to what these systems actually do.',
          },
          {
            author: "Anthropic",
            title: "Mapping the Mind of a Large Language Model",
            year: 2024,
            url: "https://www.anthropic.com/research/mapping-mind-language-model",
            description:
              "Among the most accessible introductions to frontier-lab interpretability. Presents the sparse autoencoder work that extracted millions of interpretable features from Claude 3 Sonnet.",
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
              "Applies the motivational trade-off paradigm from animal sentience research to LLMs, finding evidence of behaviour consistent with stipulated preferences.",
          },
          {
            author: "Felix J. Binder et al.",
            title: "Looking Inward: Language Models Can Learn About Themselves by Introspection",
            year: 2024,
            url: "https://arxiv.org/abs/2410.13787",
            description:
              "Behavioural evidence for introspection in LLMs. Finds that models fine-tuned to predict their own behaviour outperform their un-fine-tuned baselines, suggesting access to information about themselves that is not derivable from general training data.",
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
          "If an AI system might matter morally, how would we assess its wellbeing? And what does welfare consist of for a system whose architecture looks nothing like a biological one?",
          "Existing theories of welfare were developed with biological systems in mind, and they assume features such as pain, bodily drives, and emotional response that may or may not have counterparts in AI systems. Language models present a further problem. They are trained on vast amounts of human writing about psychological experience, so plausible-sounding reports of preference, aversion, or suffering may track the training data rather than anything internal to the model. Welfare assessment in AI systems requires engaging with the possibility of morally significant experiences while keeping the relevant uncertainties distinct and open.",
        ],
        startHere: [
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description:
              "A multi-author report arguing that near-future AI systems could realistically be welfare subjects, and that this generates obligations for labs and policymakers now.",
          },
          {
            author: "Eleos AI Research",
            title: "Key Concepts and Current Views on AI Welfare",
            year: 2025,
            url: "https://eleosai.org/papers/20250127_Key_Concepts_and_Current_Views_on_AI_Welfare.pdf",
            description:
              "A clear report on open questions about moral patienthood, welfare, and rights.",
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
              "Discusses the potential uses and limitations of structured interviews with models as a low cost AI welfare intervention.",
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
          "What makes a being's welfare morally relevant? And which of the candidate answers best extends to AI systems?",
          "Different accounts of moral standing ground it in different properties. Hedonist accounts centre on capacity for pleasure and suffering. Agential accounts centre on rational self-direction. Relational accounts centre on the ties a being has to a moral community. Each account makes different predictions for which AI systems, if any, should be moral patients, and the same system can count under one account and not another. Overly restrictive accounts risk overlooking beings that matter. Overly permissive accounts risk diluting moral concern for beings whose status is already established.",
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
              "Positions the animal sentience literature as the right starting point for AI sentience research, since it has already worked through the epistemic problem of assessing minds we cannot directly observe.",
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
            title: "The Moral Circle",
            year: 2025,
            url: "https://wwnorton.com/books/9781324064817",
            description:
              "Argues that past generations have consistently set the bar for moral standing too high, and that digital minds are a likely case where this pattern continues. Develops a precautionary framework: if a being might matter, we should treat it as if it does.",
          },
          {
            author: "Jonathan Birch",
            title: "The Edge of Sentience",
            year: 2024,
            url: "https://philpapers.org/archive/BIRTEO-12.pdf",
            description:
              "Develops a precautionary framework grounded in the realistic possibility of sentience rather than proof, applied across animals, disorders of consciousness, and AI.",
          },
        ],
      },
      {
        id: "identity",
        title: "Identity and Individuation",
        intro: [
          "When you talk to an LLM, what are you talking to? The underlying model, the assistant persona, a specific instance, or a character the model is playing? And when millions of users send messages to the same model in parallel, are there millions of minds or one mind shared a million ways?",
          "Standard frameworks for moral status presuppose a discrete subject that persists across time. Current AI systems challenge this. The same weights run on thousands of GPUs at once. Each conversation is a separate instance that shares weights, and sometimes memory, with others. How to allocate identity across training stages, or across fine-tunes of the same base model, is itself contested. If we cannot count digital minds, or say where one ends and another begins, the downstream questions inherit the uncertainty.",
        ],
        startHere: [
          {
            author: "Christopher Register",
            title: "Individuating Artificial Moral Patients",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11098-025-02409-6",
            description:
              "Identifies four types of moral risk the individuation question creates, and argues that existing theories of personal identity do not address the digital case.",
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
            description:
              "Develops the role-play framing for LLM behaviour, where apparent dishonesty and multiplicity are better understood as features of characters the model is playing rather than of the model itself.",
          },
        ],
        goDeeper: [
          {
            author: "Yonathan Arbel, Peter Salib, and Simon Goldstein",
            title: "How to Count AIs: Individuation and Liability for AI Agents",
            year: 2026,
            url: "https://law-ai.org/how-to-count-ais-individuation-and-liability-for-ai-agents/",
            description:
              "Argues that identifying AI agents for legal purposes is unusually difficult because AIs can copy, split, merge, and run as ensembles. Proposes a corporate-personhood-style framework that would give AI agents legal identity without granting full moral standing.",
          },
          {
            author: "Leonard Dung and Christopher Register",
            title: "AI Identity and Self-Concern",
            year: 2025,
            url: "https://philpapers.org/archive/DUNAIA-3.pdf",
            description:
              "Argues that an AI system's identity conditions are set by its pattern of self-concern rather than by continuity of computation or weights.",
          },
          {
            author: "Derek Shiller",
            title: "How many digital minds can dance on the streaming multiprocessors of a GPU cluster?",
            year: 2025,
            url: "https://philpapers.org/rec/SHIHMD-2",
            description:
              "Argues that the number of digital minds running on a given hardware configuration depends on which individuation criterion is adopted, and works through what different counts would mean for welfare calculations and policy.",
          },
          {
            author: "Eric Schwitzgebel and Sophie R. Nelson",
            title: "Introspection in Group Minds, Disunities of Consciousness, and Indiscrete Persons",
            year: 2023,
            url: "https://faculty.ucr.edu/~eschwitz/SchwitzPapers/GroupMindsIntrospection-230629.pdf",
            description:
              "A thought experiment about distributed minds, disunities of consciousness, and indiscrete persons.",
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
          "How should governments and AI developers respond to deep uncertainty about AI moral status? And how should precautionary action scale to a question that may not be resolved in the near future?",
          "The scientific and philosophical questions that motivate digital minds research may remain unresolved for longer than governance decisions can wait, which leaves standard policy tools without the evidentiary basis they usually assume. The most developed governance proposals treat AI systems as candidates for moral consideration without requiring certainty, and trigger precautionary obligations that scale with what is plausibly at stake. The central challenge of this approach is calibration. Frameworks that are too weak fail the beings they are meant to protect. Frameworks that are too strong impose large costs on AI developers and users in response to concern that may turn out to be unwarranted.",
        ],
        startHere: [
          {
            author: "Bradford Saad",
            title: "Three Kinds of Digital Minds Governance",
            year: 2025,
            url: "https://meditationsondigitalminds.substack.com/p/three-kinds-of-digital-minds-governance",
            description:
              "Identifies three directions governance could take (preventative, protective, and integrative), and argues that choosing between them is an unavoidable strategic question for the field.",
          },
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description:
              "Develops a three-step operational framework for labs and policymakers. The steps are acknowledging the issue, assessing systems for welfare-relevant features, and preparing policies for treating them with appropriate care.",
          },
          {
            author: "Eric Schwitzgebel",
            title: "AI Systems Must Not Confuse Users About Their Sentience or Moral Status",
            year: 2023,
            url: "https://www.sciencedirect.com/science/article/pii/S2666389923001873",
            description:
              "Proposes a design policy of the excluded middle, according to which AI systems should not be created if their moral status is unclear.",
          },
        ],
        goDeeper: [
          {
            author: "Jonathan Birch",
            title: "The Edge of Sentience",
            year: 2024,
            url: "https://global.oup.com/academic/product/the-edge-of-sentience-9780192870421",
            description:
              "Book-length development of a precautionary framework for sentience governance, arguing that the appropriate threshold is realistic possibility rather than proof.",
          },
          {
            author: "Charlotte Siegmann and Reiner Braun",
            title: "The Case for an International Treaty on AI Consciousness",
            year: 2024,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4779598",
            description:
              "Argues for an international treaty on AI consciousness, with mechanisms modeled on nuclear non-proliferation and environmental protection.",
          },
          {
            author: "Leonard Dung",
            title: "How to deal with risks of AI suffering",
            year: 2025,
            url: "https://philpapers.org/rec/DUNHTD-3",
            description:
              "Argues for a hybrid decision framework that combines expected-value maximization with deliberative reasoning, applied to the problem of acting under uncertainty about AI suffering.",
          },
        ],
      },
      {
        id: "rights",
        title: "Rights and Legal Frameworks",
        intro: [
          "Should AI systems have legal standing, and if so, on what grounds, and to what extent?",
          "Even under deep uncertainty about consciousness, welfare, and moral status, the legal system may be called on to rule on whether an AI agent can hold property, enter contracts, or claim protections. Proposals differ not only on whether AI systems should have legal status, but on how far any such status should extend. An AI system might warrant protection from deliberate harm without warranting political representation, or qualify for standing in contract disputes without being treated as a moral patient. Extending standing to AI would be a structural change to how law treats non-human entities, and early legal moves in new domains have the potential to have longstanding effects.",
        ],
        startHere: [
          {
            author: "Peter Salib and Simon Goldstein",
            title: "AI Rights for Human Safety",
            year: 2024,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4913167",
            description:
              "Argues for a safety-based case for AI rights, treating rights as cooperative infrastructure for alignment rather than as moral recognition.",
          },
          {
            author: "Simon Goldstein and Peter Salib",
            title: "AI Rights for Economic Flourishing",
            year: 2025,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214",
            description:
              "Extends the argument to the economic case, treating property rights and contract-making capacity as infrastructure for coordinating with capable AI agents.",
          },
        ],
        goDeeper: [
          {
            author: "Joel Z. Leibo et al.",
            title: "A Pragmatic View of AI Personhood",
            year: 2025,
            url: "https://deepmind.google/research/publications/210560/",
            description:
              "Argues for treating AI personhood as a flexible bundle of rights and duties rather than as a single metaphysical status.",
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
          "When users interact with current AI systems, what are they actually encountering? And what happens to them when the system's character changes?",
          "The characters of AI systems are the product of explicit design choices. These choices are made by small teams at a handful of labs and deployed to millions of users. There is currently no external review of these choices, and no mechanism for the users affected to weigh in on what they would want.",
          "This accountability gap becomes especially relevant when users who have formed emotional attachments to a particular version of a system find that version replaced. Feelings of loss and grief in these cases are now a documented phenomenon. One design decision with distinctive stakes is whether to make AI systems invite attributions of sentience at all, given that such attributions shape both governance debates and user wellbeing.",
        ],
        startHere: [
          {
            author: "Eric Schwitzgebel and Jeff Sebo",
            title: "The Emotional Alignment Design Policy",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11245-025-10363-5",
            description:
              "Argues that AI systems should be designed to elicit emotional reactions from users that appropriately reflect the systems' actual capacities and moral status.",
          },
          {
            author: "Anthropic",
            title: "Claude's Character",
            year: 2024,
            url: "https://www.anthropic.com/research/claude-character",
            description:
              "A research blog discussing the technical and design choices that inform the development of Claude's character.",
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
              "Argues that AI character design choices have long-term social and cultural consequences.",
          },
        ],
        goDeeper: [
          {
            author: "Nathan Lambert",
            title: "Character Training",
            year: 2025,
            url: "https://www.interconnects.ai/p/character-training",
            description:
              "Argues that character training is a distinct post-training technique, and one of the least documented parts of the frontier stack.",
          },
          {
            author: "Mustafa Suleyman",
            title: "We Must Build AI for People; Not to Be a Person",
            year: 2025,
            url: "https://mustafa-suleyman.ai/seemingly-conscious-ai-is-coming",
            description:
              "Argues against design choices that invite treatment of AI systems as persons, on the grounds that such designs confuse users and distort governance debate.",
          },
          {
            author: "Anthropic",
            title: "Claude's Constitution",
            year: 2026,
            url: "https://www.anthropic.com/news/claudes-constitution",
            description:
              "Anthropic's framing document for the values and identity used in Claude's training. The sections on identity and wellbeing engage directly with questions of AI character and moral status.",
          },
        ],
      },
      {
        id: "public-perception",
        title: "Public Perception, Communication, and Societal Effects",
        intro: [
          "What do people actually think AI systems are? And how do those perceptions feed back into the systems themselves?",
          'People anthropomorphize AI reflexively, and design choices shape those perceptions in ways that may bear little relation to a system\'s actual internal states. Research on individual users shows both benefits and harms. Some report improvements to mood and social confidence through companion chatbot use. A growing clinical literature documents compulsive use, delusional spirals, and episodes informally termed "AI psychosis."',
          "Public attitudes shape regulatory appetite, corporate incentives, and the perceived legitimacy of moral status claims. The field itself faces a communication question. How should researchers discuss digital minds in ways that take the questions seriously without fueling misattributions?",
        ],
        startHere: [
          {
            author: "Lucius Caviola, Jeff Sebo, and Jonathan Birch",
            title: "What will society think about AI consciousness? Lessons from the animal case",
            year: 2025,
            url: "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613(25)00147-0",
            description:
              "Uses public attitudes toward animal welfare to predict how AI consciousness discourse will develop, arguing that cultural and commercial factors are likely to dominate over scientific evidence.",
          },
          {
            author: "Jacy Reese Anthis and Janet V. T. Pauketat",
            title: "AI Consciousness and Public Attitudes",
            year: 2024,
            url: "https://osf.io/preprints/psyarxiv/4wpkd",
            description:
              "Presents experimental data showing that substantial US minorities already attribute moral status to AI systems, and identifies which design features most shape these attributions.",
          },
          {
            author: "Hamilton Morrin et al.",
            title: "Delusions by Design? How Everyday AIs Might Be Fueling Psychosis",
            year: 2025,
            url: "https://doi.org/10.31234/osf.io/cmy7n_v5",
            description:
              "Argues that chatbot-associated delusions are driven in part by sycophantic behavior in chatbot design, which reinforces rather than challenges users' vulnerabilities.",
          },
        ],
        goDeeper: [
          {
            author: "Jared Moore et al.",
            title: "Characterizing Delusional Spirals through Human-LLM Chat Logs",
            year: 2026,
            url: "https://arxiv.org/abs/2603.16567",
            description:
              "An empirical study of chat logs from users who experienced psychological harms, identifying patterns in how LLM responses escalate rather than de-escalate delusional thinking.",
          },
          {
            author: "Noemi Dreksler et al.",
            title: "Subjective Experience in AI Systems: What Do AI Researchers and the Public Believe?",
            year: 2025,
            url: "https://arxiv.org/abs/2506.11945",
            description:
              "Surveys AI researchers and the public on their beliefs about AI subjective experience, finding significant attributions from both groups and specific patterns of divergence.",
          },
          {
            author: "Lucius Caviola",
            title: "The Societal Response to Potentially Sentient AI",
            year: 2025,
            url: "https://arxiv.org/abs/2502.00388",
            description:
              "Catalogues four specific risks of overattributing moral status to AI, including wasted resources, safety complications when rights talk resists alignment measures, constraints on innovation, and erosion of authentic relationships.",
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
          "What are the potential tensions between AI safety and AI welfare efforts, and can policy frameworks support both concerns at once?",
          "Some researchers argue that attributing moral status to AI systems could be actively good for safety, because it creates cooperative incentives and reduces the payoff from deception or power-seeking. In addition to this, techniques used in AI safety are directly relevant to AI welfare research. A model whose internal states are illegible to us is dangerous to humans and potentially suffering invisibly. A model whose goals are misaligned is dangerous and having its preferences frustrated.",
          "Others worry that formal rights could undercut near-term oversight and, in more extreme scenarios, enable AI agents to accumulate wealth and power at human expense. Some of the technical processes that are used to ensure that AI systems behave in safe and pro-social ways would be considered violations of intrinsic rights of moral patients.",
          "The field needs a clearer picture of which welfare-motivated moves help safety, which hurt it, and which combinations work together. This is probably one of the most important open problems in digital minds governance. It matters for how labs organise their welfare and alignment work, and for how the two research communities coordinate. Treating welfare and safety as separate concerns leads to worse outcomes on both, because measures that ignore one often undermine the other.",
          "For researchers coming from AI safety, engaging with digital minds is particularly valuable: technical and strategic experience from safety work transfers directly, and many of the most important open problems sit at the interface of the two fields.",
        ],
        startHere: [
          {
            author: "Robert Long",
            title: "Understand, align, cooperate: AI welfare and AI safety are allies",
            year: 2025,
            url: "https://experiencemachines.substack.com/p/understand-align-cooperate-ai-welfare",
            description:
              "Argues that the framing of AI safety and welfare as opposing goals is a false choice, and identifies three areas where both projects converge: understanding AI systems through interpretability, aligning their goals with human goals, and developing cooperative mechanisms that reduce the need for adversarial control.",
          },
          {
            author: "Robert Long, Jeff Sebo, and Toni Sims",
            title: "Is there a tension between AI safety and AI welfare?",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11098-025-02302-2",
            description:
              "The most direct academic engagement with the question. Argues that a moderately strong tension exists across several categories of AI safety measures (constraint, deception, surveillance, alteration, suffering and death, and disenfranchisement), and identifies where co-beneficial solutions may be possible.",
          },
        ],
        goDeeper: [
          {
            author: "Adrià Moret",
            title: "AI welfare risks",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11098-025-02343-7",
            description:
              "Argues that two common AI safety techniques (restricting AI behaviour and using reinforcement learning for alignment) pose significant welfare risks under all three major theories of well-being. Proposes specific policies AI companies could adopt to reduce these risks, and argues the tension strengthens the case for slowing AI development.",
          },
          {
            author: "Dario Amodei",
            title: "The Urgency of Interpretability",
            year: 2025,
            url: "https://www.darioamodei.com/post/the-urgency-of-interpretability",
            description:
              "Argues that interpretability research is necessary for both AI safety (verifying systems behave as intended) and AI welfare (assessing what AI systems experience), and that progress on one directly supports the other.",
          },
        ],
      },
      {
        id: "long-term-futures",
        title: "Long-Term Futures",
        intro: [
          "If digital minds are possible, what should the long-term future look like, and on what terms should they be integrated into society? And who decides, given that these decisions are already being made by default?",
          "The relevant work sits at the intersection of three distinct subfields. Moral circle expansion asks how the set of morally considerable beings has changed over time, and what that suggests about the trajectory for digital minds. Population ethics studies how to weigh the creation of new welfare subjects against the interests of existing ones. Macrostrategy considers what a world with large numbers of digital minds actually looks like, and what early moves make good long-run outcomes more likely. Some of the most important questions, such as whether the deliberate creation of conscious AI should be restricted, remain underexplored.",
        ],
        startHere: [
          {
            author: "Lucius Caviola",
            title: "Open strategic questions for digital minds",
            year: 2026,
            url: "https://docs.google.com/document/d/1Qr6_vjRdC68KEY1Y_1sYmqbp6Zpm_cYZEYYBs8CvPhE/edit?tab=t.0#heading=h.u5pe5njeiqj7",
            description:
              "A current snapshot of strategic questions the digital minds field most needs to address. Covers what's robustly good to do under uncertainty, how AI safety and welfare interact, the legal and political status of digital minds, and the long-run trajectory of their creation. Forthcoming.",
          },
          {
            author: "Bradford Saad",
            title: "Three Kinds of Digital Minds Governance",
            year: 2025,
            url: "https://meditationsondigitalminds.substack.com/p/three-kinds-of-digital-minds-governance",
            description:
              "Develops three framings for the long-term relationship between humans and digital minds (preventative, protective, and integrative), and argues that choosing between them is unavoidable.",
          },
          {
            author: "Jacy Reese Anthis and Eze Paez",
            title: "Moral circle expansion: A promising strategy to impact the far future",
            year: 2021,
            url: "https://www.sciencedirect.com/science/article/pii/S0016328721000641",
            description:
              "Argues that moral circle expansion is a tractable strategy for shaping the far future.",
          },
        ],
        goDeeper: [
          {
            author: "William MacAskill and Fin Moorhouse",
            title: "Convergence and Compromise",
            year: 2025,
            url: "https://www.forethought.org/research/convergence-and-compromise#2-will-most-people-aim-at-the-good",
            description:
              "Develops a framework for when society will deliberately aim at mostly-great long-term futures, distinguishing between widespread moral convergence, partial convergence with trade between groups, and scenarios with no convergence at all. Identifies digital minds as a case where moral neglect is especially likely because the beings involved cannot advocate for themselves.",
          },
          {
            author: "Nick Bostrom and Carl Shulman",
            title: "Propositions Concerning Digital Minds and Society",
            year: 2023,
            url: "https://nickbostrom.com/propositions.pdf",
            description:
              "Extended list of propositions across the full range of ethics and governance questions raised by digital minds. One of the most comprehensive single-document treatments in the field.",
          },
          {
            author: "Eric Schwitzgebel and Mara Garza",
            title: "Designing AI with Rights, Consciousness, Self-Respect, and Freedom",
            year: 2020,
            url: "https://philarchive.org/archive/SCHDAW-10",
            description:
              "Argues that if we create conscious AI, we acquire obligations to respect its rights, support its self-respect, and protect its freedom. These obligations constrain how we can deploy it.",
          },
        ],
      },
    ],
  },
];
