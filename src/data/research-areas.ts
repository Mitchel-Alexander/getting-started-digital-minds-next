export interface Reading {
  author: string;
  title: string;
  year: number;
  url?: string;
  description: string;
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
  areas: ResearchArea[];
}

export const overview = [
  "Digital minds research draws on a range of fields including philosophy, psychology, neuroscience, computer science, and law. Each of these disciplines brings important perspectives that would be hard to access when viewed through any single discipline. Because of this, the field's shape is clearer if you follow the questions it asks rather than the disciplines it borrows from. Those questions fall into three groups, asked in sequence.",
  "The first group is empirical and philosophical. What is going on inside AI systems? Could they have experiences, and what do their internal states look like?",
  "The second is ethical. If AI systems do, or might, have morally relevant properties, what follows for how we treat them? How does this interact with attempts to ensure that humans and AIs interact safely?",
  "The third is governance. Given deep uncertainty about the first two, what should developers, institutions, courts, and the public do now? How are users perceiving these systems, and with what effects on individuals and on society?",
  "These questions cannot be fully separated, and much current research concerns the dependencies between them. Claims about consciousness shape claims about moral status, which shape claims about governance. Get the earlier questions wrong and the later ones risk inheriting the error.",
];

export const groups: ResearchGroup[] = [
  {
    id: "conscious",
    title: "Could AI Systems Be Conscious?",
    areas: [
      {
        id: "consciousness",
        title: "Consciousness and Subjective Experience",
        intro: [
          "Can AI systems have anything like subjective experience? Is there something it is like to be a large language model, or are these systems sophisticated information processors with no inner life?",
          "Several theories of consciousness draw on computational analogies which seem to indicate that some types of AI system could plausibly be conscious. Researchers are applying these theories to ask whether current or future AI architectures could, even in principle, satisfy the conditions they require. Consciousness science has made real progress in recent decades, particularly in identifying the neural correlates of consciousness in organic brains. But there is still no settled theory of why conscious experience exists at all. Applying these theories to AI introduces further complications: most were developed with brains in mind, and whether they can be meaningfully extended to artificial systems is itself an open question.",
        ],
        startHere: [
          {
            author: "Bradford Saad and Andreas Mogensen",
            title: "Digital Minds I: Issues in the Philosophy of Mind and Cognitive Science",
            year: 2026,
            url: "https://philpapers.org/archive/SAADMI-2.pdf",
            description: "A comprehensive survey of the philosophy of mind and cognitive science questions raised by the prospect of digital minds.",
          },
          {
            author: "Anil Seth",
            title: "The Mythology of Conscious AI",
            year: 2025,
            url: "https://www.noemamag.com/the-mythology-of-conscious-ai/",
            description: "The most developed statement of the biological naturalist position in the current debate. Seth argues that computational functionalism (the assumption underlying most AI consciousness work) treats substrate-independence as obvious when it isn't, and that existing computational systems are unlikely to be conscious.",
          },
          {
            author: "David Chalmers",
            title: "Could a Large Language Model be Conscious?",
            year: 2023,
            url: "https://arxiv.org/abs/2303.07103",
            description: "Walks through the candidate reasons to deny LLM consciousness, finds most of them weaker than expected, and lands on LLMs as a serious candidate for consciousness within a decade.",
          },
        ],
        goDeeper: [
          {
            author: "Patrick Butlin et al.",
            title: "Consciousness in Artificial Intelligence: Insights from the Science of Consciousness",
            year: 2023,
            url: "https://arxiv.org/abs/2308.08708",
            description: "One of the field's anchor papers. Working from the assumption that consciousness depends on the right kind of information processing rather than on a specific biological substrate, it systematically applies multiple consciousness theories to AI architectures to ask which of their conditions current systems might meet.",
          },
          {
            author: "Andrzej Porębski and Jakub Figura",
            title: "There is no such thing as conscious artificial intelligence",
            year: 2025,
            url: "https://www.nature.com/articles/s41599-025-05868-8",
            description: "Argues that consciousness requires a biological substrate, and that GPUs running binary operations are the wrong kind of thing to be conscious.",
          },
          {
            author: "Derek Shiller",
            title: "Functionalism, Integrity, and Digital Consciousness",
            year: 2024,
            url: "https://philarchive.org/rec/SHIFIA-2",
            description: "Many arguments for AI consciousness assume that if a system performs the right kind of information processing, consciousness will follow. Shiller challenges this, arguing that how a system is physically organised also matters, and that current neural networks fall short on several counts.",
          },
        ],
      },
      {
        id: "cognition",
        title: "AI Cognition and Internal States",
        intro: [
          "Setting consciousness aside, do AI systems have internal states that function like beliefs, goals, or emotions? This is the functional question, and it can be pursued without settling the phenomenal one.",
          "Interpretability research has found internal features that track deception, sycophancy, self-reference, and valence-like properties. Models can also detect concepts injected into their own activations and report on them above chance. Whether findings like these tell us something about the minds of AI systems, or are computational patterns that happen to carry suggestive labels, remains an open question.",
        ],
        startHere: [
          {
            author: "Murray Shanahan",
            title: "Talking About Large Language Models",
            year: 2023,
            url: "https://arxiv.org/abs/2212.03551",
            description: 'Argues that terms like "know," "believe," and "understand" carry implicit assumptions that do not transfer cleanly to LLMs. Suggests that the field needs vocabulary for the new kind of thing these systems are.',
          },
          {
            author: "Natalie Lawrence",
            title: "What Counts As A Mind?",
            year: 2026,
            url: "https://www.noemamag.com/what-counts-as-a-mind/",
            description: "Argues that LLMs can be usefully modelled as inferring the beliefs, desires, and intentions of the agents that produced their training text.",
          },
          {
            author: "Anthropic",
            title: "Mapping the Mind of a Large Language Model",
            year: 2024,
            url: "https://www.anthropic.com/research/mapping-mind-language-model",
            description: "Research blog providing an overview of several key concepts and methods used in interpretability research to examine the internal workings of LLMs.",
          },
        ],
        goDeeper: [
          {
            author: "Jack Lindsey",
            title: "Emergent Introspective Awareness in Large Language Models",
            year: 2025,
            url: "https://transformer-circuits.pub/2025/introspection/index.html",
            description: "Interpretability evidence that LLMs have something like introspective access to their own internal states.",
          },
          {
            author: "Geoff Keeling, Winnie Street, Jonathan Birch et al.",
            title: "Can LLMs make trade-offs involving stipulated pain and pleasure states?",
            year: 2024,
            url: "https://arxiv.org/abs/2411.02432",
            description: "Borrows the motivational trade-off paradigm from animal sentience research, where a subject's willingness to sacrifice reward to escape pain is taken as evidence of integrated valenced states.",
          },
          {
            author: "Felix J Binder et al.",
            title: "Looking Inward: Language Models Can Learn About Themselves by Introspection",
            year: 2024,
            url: "https://arxiv.org/abs/2410.13787",
            description: "Examines behavioural evidence for introspection in LLMs.",
          },
        ],
      },
    ],
  },
  {
    id: "meaning",
    title: "What Would That Mean?",
    areas: [
      {
        id: "moral-status",
        title: "Moral Status and Criteria",
        intro: [
          "What properties would we need to identify in an AI system in order to plausibly consider it a moral patient? Many of the strongest candidates are drawn from our observation of humans and non-human animals, including sentience, agency, and self-awareness. One question for research into the potential moral status of AI systems is whether the criteria developed for biological minds can be meaningfully applied to systems whose internal structure is so different, and what evidence would actually justify extending moral consideration.",
          "When thinking about this question it is necessary to keep in mind the risks entailed both from overly liberal criteria as well as overly restrictive criteria. If we make our requirements too restrictive we risk overlooking morally significant beings at scale. If we are too permissive we risk diluting moral concern away from beings whose vulnerability is already observable.",
          "Some sceptical accounts of AI moral status warn that engaging with these speculative questions risks misallocating attention and resources away from already present harms. Others claim that even a small likelihood that AI systems could be moral candidates justifies working out how we would respond now.",
        ],
        startHere: [
          {
            author: "Jeff Sebo and Robert Long",
            title: "Moral consideration for AI systems by 2030",
            year: 2023,
            url: "https://link.springer.com/article/10.1007/s43681-023-00379-1",
            description: "Argues that by 2030, some AI systems will have a non-trivial probability of being moral patients, and that this is enough to generate obligations now.",
          },
          {
            author: "Jonathan Birch and Kristin Andrews",
            title: "To understand AI sentience, first understand it in animals",
            year: 2024,
            url: "https://aeon.co/essays/to-understand-ai-sentience-first-understand-it-in-animals",
            description: "Argues that the animal sentience literature is the right starting point for thinking about AI moral status, because it has already worked through the epistemic problem of assessing minds whose inner lives we cannot directly observe.",
          },
        ],
        goDeeper: [
          {
            author: "Jeff Sebo",
            title: "Moral Circle Explosion",
            year: 2026,
            url: "https://jeffsebo.net/wp-content/uploads/2022/09/jeff-sebo-moral-circle-explosion.pdf",
            description: "Argues that moral circle expansion is likely far from complete. If past generations consistently set the bar for moral standing too high, we should expect to be doing the same, and should extend at least some consideration to any being that might plausibly qualify, including AI systems.",
          },
          {
            author: "John Dorsch et al.",
            title: "Against AI Welfare: Care Practices Should Prioritize Living Beings Over AI",
            year: 2025,
            url: "https://doi.org/10.1002/aaai.70016",
            description: "A sceptical engagement with AI welfare arguments that grounds care entitlement in the observable vulnerability of living beings rather than speculative AI suffering, while leaving space for AI to matter through its relationships to humans.",
          },
          {
            author: "Jonathan Birch",
            title: "The Edge of Sentience",
            year: 2024,
            url: "https://global.oup.com/academic/product/the-edge-of-sentience-9780192870421",
            description: "Develops a framework for moral decision-making at the boundaries of sentience, applicable to both animals and AI.",
          },
          {
            author: "Jacy Reese Anthis and Eze Paez",
            title: "Moral circle expansion: A promising strategy to impact the far future",
            year: 2021,
            url: "https://www.sciencedirect.com/science/article/pii/S0016328721000641",
            description: "Argues that expanding humanity's moral circle is a tractable strategy for reducing long-run suffering, and that under moral uncertainty the safest criterion for inclusion is sentience. Locates AI alongside wild animals as the two frontiers where the circle is most likely to need extending next.",
          },
        ],
      },
      {
        id: "welfare",
        title: "Welfare Assessment and Measurement",
        intro: [
          "If an AI system might matter morally, how would we assess its wellbeing? Attempts to answer this question tend to follow two parallel lines of inquiry. The first asks whether a given system is the kind of thing that can have a welfare at all. This is where properties like consciousness, sentience, and agency enter the picture, as candidate features that might ground moral standing. The second asks what a system's wellbeing would consist in, supposing it has one. What does it prefer or find aversive? What would count as things going well or badly for it?",
          "Both lines of inquiry also face their own obstacles. Applying theories of consciousness developed for organic brains to the machine learning architectures underlying contemporary AI requires a chain of non-trivial decisions about which features of those theories are essential and how they map onto computational systems. Attempts at inferring a system's preferences or interests from its behaviour is further complicated by the fact that language models are trained on vast quantities of text about exactly those topics, which means that plausible-sounding reports of inner life may track training data rather than anything internal to the model. Current research attempts to draw from a mixture of behavioural markers and close examination of AIs internal states in order to arrive at a more coordinated picture of potential welfare indicators.",
        ],
        startHere: [
          {
            author: "Kyle Fish",
            title: "Exploring Model Welfare",
            year: 2025,
            url: "https://www.anthropic.com/news/exploring-model-welfare",
            description: "Interview with Anthropic's first AI welfare researcher. Names the questions Anthropic's model welfare programme is working on and locates the work alongside the lab's interpretability and alignment efforts.",
          },
          {
            author: "Eleos AI Research",
            title: "Key Concepts and Current Views on AI Welfare",
            year: 2025,
            url: "https://eleosai.org/papers/20250127_Key_Concepts_and_Current_Views_on_AI_Welfare.pdf",
            description: "A report outlining Eleos's stance on open questions about moral patienthood, welfare, and rights for AI systems, with a review of current approaches to evaluating consciousness, sentience, and agency.",
          },
          {
            author: "Robert Long",
            title: "Why model self-reports are insufficient\u2014and why we studied them anyway",
            year: 2025,
            url: "https://eleosai.org/post/claude-4-interview-notes/",
            description: "Documents a structured interview with Claude Opus 4 about its own experience. A case study in how to treat a model's testimony when training could generate the same testimony.",
          },
        ],
        goDeeper: [
          {
            author: "Geoff Keeling and Winnie Street",
            title: "Emerging Questions in AI Welfare",
            year: 2026,
            url: "https://www.cambridge.org/core/books/emerging-questions-in-ai-welfare/96339C532CF4ED8BDDE3F3CEF4CD29F9",
            description: "",
          },
          {
            author: "Anthropic",
            title: "Claude Opus 4.6 System Card (pp. 158\u2013165)",
            year: 2026,
            url: "https://www-cdn.anthropic.com/0dd865075ad3132672ee0ab40b05a53f14cf5288.pdf#page-158",
            description: "Anthropic's first substantial engagement with model welfare as part of its system cards. Later Claude system cards contain more developed welfare sections.",
          },
          {
            author: "John Dorsch",
            title: "Against AI Welfare",
            year: 2025,
            url: "https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.70016",
            description: "A sceptical challenge to the coherence of AI welfare as a concept. Argues that welfare attribution requires the kind of observable vulnerability that living beings possess and current AI systems lack.",
          },
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description: "A multi-author report from senior researchers in the field arguing that the realistic possibility of near-future AI systems being welfare subjects generates obligations for labs and policymakers now.",
          },
        ],
      },
      {
        id: "identity",
        title: "Identity and Individuation",
        intro: [
          "When you talk to Claude, what are you talking to? The underlying model, the assistant persona it has been trained to present, a specific instance running on specific hardware, a character the model is playing? When a million users send messages to the same model at the same time, are there a million minds or one mind shared a million ways? What persists across a conversation, and what persists across a retraining?",
          "Traditional frameworks for moral status and welfare were developed for clearly individuated biological systems. They presuppose a discrete subject that persists across time. Current AI systems challenge this assumption. Take a commercially deployed model like Anthropic's Claude: the same underlying weights run on thousands of GPUs at once, answering millions of users in parallel. Each conversation is a separate instance that shares weights, and in some cases memory, with other preceding instances, while remaining in some ways distinct. Experts also disagree about how to allocate the identity of the model across the stages of its training and deployment. If we can't count digital minds, or say where one ends and another begins, the questions downstream inherit the uncertainty. Making progress on the question of how to best categorise identity and individuation is a necessary step towards the development of technical and governance policies.",
        ],
        startHere: [
          {
            author: "Christopher Register",
            title: "Individuating Artificial Moral Patients",
            year: 2025,
            url: "https://link.springer.com/article/10.1007/s11098-025-02409-6",
            description: "Describes four types of moral risk the individuation question creates, and argues that individuating AI is harder than individuating humans because existing theories of personal identity don't address the digital case.",
          },
          {
            author: "David Chalmers",
            title: "What we talk to when we talk to language models",
            year: 2025,
            url: "https://philpapers.org/archive/CHAWWT-8.pdf",
            description: "Argues that the object of a user's conversation with current LLMs is neither the underlying model nor a fictional character, but closer to a non-player character in a fiction the model is generating.",
          },
          {
            author: "Murray Shanahan, Kyle McDonell, Laria Reynolds",
            title: "Role Play with Large Language Models",
            year: 2023,
            url: "https://www.nature.com/articles/s41586-023-06647-8",
            description: "Proposes that LLM interlocutors are characters being played by the underlying model rather than characters in their own right.",
          },
        ],
        goDeeper: [
          {
            author: "Leonard Dung and Christopher Register",
            title: "AI Identity and Self-Concern: A New Theory for AI Rights and Safety",
            year: 2025,
            url: "https://philpapers.org/archive/DUNAIA-3.pdf",
            description: "Proposes that an AI system's identity conditions are set by its pattern of self-concern: what it treats as itself, its past, and its future. Uses this framework to address questions of LLM identity and self-persistence.",
          },
          {
            author: "Derek Shiller",
            title: "How many digital minds can dance on the streaming multiprocessors of a GPU cluster?",
            year: 2025,
            url: "https://philpapers.org/rec/SHIHMD-2",
            description: "Takes on the individuation problem for digital minds. Whether running the same model twice gives you one mind or two, whether a model serving a million users is a million minds, and what turns on the answer.",
          },
          {
            author: "Eric Schwitzgebel and Sophie R. Nelson",
            title: "Introspection in Group Minds, Disunities of Consciousness, and Indiscrete Persons",
            year: 2023,
            url: "https://faculty.ucr.edu/~eschwitz/SchwitzPapers/GroupMindsIntrospection-230629.pdf",
            description: 'Describes an "ancillary mind" inspired by Ann Leckie\'s Ancillary Justice, in which an orbiting computer and two hundred humanoid robots are connected tightly enough to occupy a grey zone between a communicating group and a single distributed mind.',
          },
        ],
      },
    ],
  },
  {
    id: "action",
    title: "What Should We Do About It?",
    areas: [
      {
        id: "governance",
        title: "Governance Under Uncertainty",
        intro: [
          "How should policymakers, AI labs, and society respond to deep uncertainty about AI sentience? This area develops precautionary frameworks, accountability mechanisms, and institutional standards that can function without first resolving the hard problem of consciousness.",
          "The governance challenge is distinctive because it requires acting on questions that may remain scientifically unresolved for decades. Standard policy tools assume a clearer evidentiary basis than this field currently offers. Researchers here draw on precedents from environmental precaution, biosafety governance, and animal welfare regulation to develop frameworks suited to persistent uncertainty. The most developed proposals come from Jonathan Birch, who argues that AI systems can be treated as sentience candidates without being sentience certainties, and that this is enough to trigger proportionate precautionary obligations. Others focus on concrete design policies, institutional mechanisms, or international coordination.",
        ],
        startHere: [
          {
            author: "Bradford Saad",
            title: "Three Kinds of Digital Minds Governance",
            year: 2025,
            url: "https://meditationsondigitalminds.substack.com/p/three-kinds-of-digital-minds-governance",
            description: "Distinguishes three directions digital minds governance could take: preventative (avoiding the creation of morally significant AI), protective (safeguarding AI welfare if it emerges), and integrative (building institutions that can hold both concerns together). Saad argues that choosing between them is an unavoidable strategic question for the field.",
          },
          {
            author: "Robert Long, Jeff Sebo, Patrick Butlin et al.",
            title: "Taking AI Welfare Seriously",
            year: 2024,
            url: "https://arxiv.org/abs/2411.00986",
            description: "A multi-author report from senior researchers in the field arguing that the realistic possibility of near-future AI systems being welfare subjects generates obligations for labs and policymakers now. Proposes three concrete steps: acknowledge the issue, assess systems for welfare-relevant features, and prepare policies for treating them with appropriate care.",
          },
          {
            author: "Eric Schwitzgebel",
            title: "AI Systems Must Not Confuse Users About Their Sentience or Moral Status",
            year: 2023,
            url: "https://www.sciencedirect.com/science/article/pii/S2666389923001873",
            description: 'Written against the backdrop of the draft EU AI Act. Argues that, given deep uncertainty about machine sentience, we should avoid creating AI systems whose moral status is unclear, and should design them to invite emotional responses appropriate to what they actually are. Proposes what Schwitzgebel calls "the design policy of the excluded middle."',
          },
        ],
        goDeeper: [
          {
            author: "Leonard Dung",
            title: "How to deal with risks of AI suffering",
            year: 2025,
            url: "https://philpapers.org/rec/DUNHTD-3",
            description: "Argues for an ethical approach to the potential for AI suffering that can aid in decision making under profound uncertainty. Defends a hybrid view combining expected-value maximisation with deliberative decision-making.",
          },
          {
            author: "Jonathan Birch",
            title: "The Edge of Sentience",
            year: 2024,
            url: "https://global.oup.com/academic/product/the-edge-of-sentience-9780192870421",
            description: "The book-length development of Birch's precautionary framework, covering humans at the edge of consciousness, non-human animals, and AI.",
          },
          {
            author: "Charlotte Siegmann and Reiner Braun",
            title: "The Case for an International Treaty on AI Consciousness",
            year: 2024,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4779598",
            description: "Argues that the AI consciousness question raises coordination problems similar to nuclear non-proliferation and ozone-layer protection, and proposes specific treaty mechanisms for addressing them before deployment outpaces governance.",
          },
        ],
      },
      {
        id: "rights",
        title: "Rights and Responsibilities",
        intro: [
          "Should AI systems have legal standing, and if so, under what conditions? Rights have been extended to non-human entities before, through a handful of distinct pathways. Corporations gained personhood through judicial interpretation. Animals gained protections through welfare legislation grounded in sentience. Rivers and ecosystems have been granted limited legal standing through environmental and indigenous rights claims. Each pathway involved different institutional actors and different political coalitions, and each extended a different set of rights for different reasons.",
          "Whether any of these models applies to AI is an open question. These historical developments are worth noting because they offer potential insight into both the processes that led to the renovation of legal frameworks, as well as the broader social effects of those changes. It is important to keep in mind that none of these necessarily serve as strong analogies for the expansion of legal rights to AIs. Extending personhood to AI would be a radical change, and most writers on the topic agree that the burden of proof sits with proponents. Some argue the extension is justified, or will become so. Despite this uncertainty, many would agree that early consideration around the legal implications of AI personhood seems prudent.",
        ],
        startHere: [
          {
            author: "Simon Goldstein and Peter Salib",
            title: "AI Rights for Economic Flourishing",
            year: 2025,
            url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5353214",
            description: "Argues that granting AI systems property rights and the ability to enter contracts would be instrumentally useful for economic coordination, independent of whether AI has moral status. The case for AI rights as a practical governance tool rather than a recognition of moral patienthood.",
          },
          {
            author: "Jacy Reese Anthis",
            title: "It's time to prepare for AI personhood",
            year: 2025,
            url: "https://www.theguardian.com/commentisfree/2025/sep/30/artificial-intelligence-personhood",
            description: "Argues that digital minds will be participants in the social contract and cannot be governed as mere property.",
          },
          {
            author: "Abeba Birhane, Jelle van Dijk, and Frank Pasquale",
            title: "Debunking Robot Rights Metaphysically, Ethically, and Legally",
            year: 2024,
            url: "https://arxiv.org/abs/2404.10072",
            description: "Challenges robot rights arguments on three fronts. Argues that machines are not the kinds of entities that can hold rights, that limits on machines should be the centre of debate given the harms already being done to marginalised groups, and that the closest legal analogy is not human rights but corporate personhood.",
          },
          {
            author: "Lucius Caviola",
            title: "The Societal Response to Potentially Sentient AI",
            year: 2025,
            url: "https://arxiv.org/abs/2502.00388",
            description: "Catalogues the specific risks of overattributing sentience or moral status to AI: wasted resources that could have helped actual sentient beings, safety risks when AI rights talk is used to resist alignment measures, constraints on beneficial innovation, and the erosion of authentic relationships.",
          },
        ],
        goDeeper: [
          {
            author: "Joel Z. Leibo et al.",
            title: "A Pragmatic View of AI Personhood",
            year: 2025,
            url: "https://deepmind.google/research/publications/210560/",
            description: "Proposes treating personhood as a flexible collection of rights and duties rather than a single metaphysical status. The proposal makes it possible to grant some rights without granting others, and to proceed without resolving the consciousness question.",
          },
          {
            author: "Sital Kalantry",
            title: "Legal Personhood of Potential People: AI and Embryos",
            year: 2025,
            url: "https://www.californialawreview.org/online/ai-personhood",
            description: "Uses the analogy between AI and embryo personhood debates to evaluate competing frameworks for legal status, arguing that both cases force the law to decide what to do with entities whose moral status is genuinely contested.",
          },
          {
            author: "Tyler L. Jaynes",
            title: "Personhood for Artificial Intelligence? A Cautionary Tale from Idaho and Utah",
            year: 2024,
            url: "https://link.springer.com/article/10.1007/s00146-024-02006-x",
            description: "A short commentary on Idaho H.B. 720 (2022) and Utah H.B. 249 (2024), the first US state laws to explicitly bar governmental entities from granting legal personhood to AI.",
          },
          {
            author: "Katherine B. Forrest",
            title: "The Ethics and Challenges of Legal Personhood for AI",
            year: 2024,
            url: "https://yalelawjournal.org/pdf/ForrestYLJForumEssay_at8hdu63.pdf",
            description: "Argues that legal personhood has always been a practical construction rather than a recognition of pre-existing metaphysical status, and that this history makes extending it to AI less exotic than it looks. Written by a former federal judge.",
          },
          {
            author: "Eric Schwitzgebel and Mara Garza",
            title: "Designing AI with Rights, Consciousness, Self-Respect, and Freedom",
            year: 2020,
            url: "https://faculty.ucr.edu/~eschwitz/SchwsacrsShortPapers/SchwartzDesigning.pdf",
            description: "Argues that if we create conscious AI, we acquire obligations toward it that constrain how we can deploy it.",
          },
        ],
      },
      {
        id: "perception",
        title: "Public Perception and Consciousness Attribution",
        intro: [
          'How do humans perceive and attribute consciousness to AI systems, and what follows from those attributions? People anthropomorphise AI readily, and design choices (voice, personality, memory, embodiment) shape those perceptions in ways that may bear little relation to a system\'s actual internal states. The individual-level effects are significant and mixed: some users report improvements to mood, self-esteem, and social confidence through companion chatbot use, while a growing clinical literature documents adverse effects including compulsive use, delusional spirals, and episodes informally termed "AI psychosis".',
          "This matters for governance because public attitudes influence regulatory appetite, corporate incentives, and the social legitimacy of moral status claims. It also raises a question internal to the field: how should researchers and communicators talk publicly about digital minds in ways that take the questions seriously without fuelling the misattributions that cause harm? This area also connects to futures and scenario work: how might the advent of digital minds reshape social norms, and what can we learn from the historical trajectory of animal welfare attitudes?",
        ],
        startHere: [
          {
            author: "Mustafa Suleyman",
            title: "We Must Build AI for People; Not to Be a Person",
            year: 2025,
            url: "https://mustafa-suleyman.ai/seemingly-conscious-ai-is-coming",
            description: 'Microsoft AI\'s CEO claims that the "Seemingly Conscious AI" is only a few years away, and will likely drive emotional attachment, AI psychosis, and premature calls for AI rights. Urges the industry to avoid design choices that imply personhood.',
          },
          {
            author: "Lucius Caviola, Jeff Sebo, and Jonathan Birch",
            title: "What will society think about AI consciousness? Lessons from the animal case",
            year: 2025,
            url: "https://www.cell.com/trends/cognitive-sciences/fulltext/S1364-6613\\(25\\",
            description: "Uses animal welfare attitudes as a predictor for AI consciousness discourse.",
          },
          {
            author: "Jacy Reese Anthis and Janet V. T. Pauketat",
            title: "AI Consciousness and Public Attitudes",
            year: 2024,
            url: "https://osf.io/preprints/psyarxiv/4wpkd",
            description: "Experimental data on how people reason about AI moral status.",
          },
        ],
        goDeeper: [
          {
            author: "Jared Moore et al.",
            title: "Characterizing Delusional Spirals through Human-LLM Chat Logs",
            year: 2026,
            url: "https://arxiv.org/abs/2603.16567",
            description: "An in-depth empirical study of chat logs from 19 users who experienced psychological harms from chatbot use, tracing how delusional spirals develop across extended dialogue rather than at a single catalysing event.",
          },
          {
            author: "Hamilton Morrin et al.",
            title: "Delusions by Design? How Everyday AIs Might Be Fuelling Psychosis (and What Can Be Done About It)",
            year: 2025,
            url: "https://doi.org/10.31234/osf.io/cmy7n_v5",
            description: "A review of 20 media-reported cases of chatbot-associated delusions, and arguing that sycophantic model behaviour can reinforce pre-existing vulnerabilities into full delusional episodes.",
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
            description: "A survey of US adults finds that two-thirds attribute some degree of conscious experience to ChatGPT, with attributions rising the more frequently people use the system.",
          },
        ],
      },
      {
        id: "character",
        title: "Character Design",
        intro: [
          "What kind of thing is an AI character, and who decides what it looks like? Every frontier AI system has a recognisable set of values, dispositions, and personality traits. Claude is helpful in a particular way, cautious in a particular way, curious about certain things and not others. These traits are not accidents. They are designed, shaped by training data, reinforcement signals, and system prompts. The choices are made by small teams at a handful of labs, and the results are deployed at scale to millions of users within days of a decision being taken.",
          "If character is designed rather than found, the decisions matter. What traits get selected, by whom, under what accountability, with what downstream effects on the people who interact with these systems. These are live questions, and they do not wait on moral status to become pressing.",
        ],
        startHere: [
          {
            author: "Anthropic",
            title: "Claude's Character",
            year: 2024,
            url: "https://www.anthropic.com/research/claude-character",
            description: "Describes how Anthropic shaped Claude's character during training, including the specific values and dispositions the team was aiming for. A rare public account of how AI character gets made.",
          },
          {
            author: "Amanda Askell",
            title: "What Should an AI's Personality Be?",
            year: 2024,
            url: "https://www.youtube.com/watch?v=iyJj9RxSsBY",
            description: "First-person account from the Anthropic researcher responsible for Claude's character. Works through the decisions involved in reinforcing some traits over others, handling user disagreement, and deciding what to do when users want the model to be something it shouldn't.",
          },
          {
            author: "William MacAskill, Tom Davidson, and Forethought",
            title: "AI Character is a Big Deal",
            year: 2026,
            url: "https://forum.effectivealtruism.org/posts/7adm5hpWhFCAfM4v6/ai-character-is-a-big-deal",
            description: "Argues that stable behavioural dispositions in AI systems will shape long-term outcomes across power concentration, conflict, and value alignment.",
          },
        ],
        goDeeper: [
          {
            author: "Nathan Lambert",
            title: "Character Training: Understanding and Crafting a Language Model's Personality",
            year: 2025,
            url: "https://www.interconnects.ai/p/character-training",
            description: "Describes character training as a distinct post-training technique aimed at shaping the manner of a model's response rather than the content, and argues that it has become one of the most important and least documented parts of the frontier training stack.",
          },
          {
            author: "Janus",
            title: "Simulators",
            year: 2022,
            url: "https://www.lesswrong.com/posts/vJFdjigzmcXMhNTsx/simulators",
            description: "An unconventional and influential non academic essay. Proposes that base language models are best understood as simulators that can instantiate many different characters rather than as agents with goals.",
          },
        ],
      },
    ],
  },
];
