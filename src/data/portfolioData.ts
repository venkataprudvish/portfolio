export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  note?: string;
  skills: SkillItem[];
}

export interface ProjectFeatureGroup {
  status: 'Implemented' | 'In Development' | 'Planned';
  description: string;
  items: {
    title: string;
    detail: string;
    moduleRef?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  status: string;
  description: string[];
  technologies: string[];
  githubUrl?: string;
  githubLabel?: string;
  keyAreas: string[];
  featureBreakdown: ProjectFeatureGroup[];
  architectureSummary: string;
}

export interface AcademicMetric {
  id: string;
  value: number;
  suffix: string;
  decimals: number;
  label: string;
  sublabel: string;
  detail: string;
}

export interface EducationEntry {
  id: string;
  stage: string;
  institution?: string;
  program: string;
  specialization?: string;
  metrics: { label: string; value: string }[];
  summary: string;
}

export const PERSONAL_INFO = {
  fullName: 'CHIDELLA VENKATA PRUDVISH',
  shortName: 'Prudvish',
  brandMark: 'C. V. PRUDVISH',
  initials: 'CVP',
  professionalTitle:
    'Computer Science & Engineering Student | AI & ML Enthusiast | Software Developer',
  university: 'Jain Deemed-to-be University, Bengaluru, Karnataka',
  degree:
    'Bachelor of Technology — Computer Science and Engineering (Artificial Intelligence and Machine Learning)',
  email: 'venkataprudvish@gmail.com',
  phone: '+91 7032837409',
  phoneHref: 'tel:+917032837409',
  emailHref: 'mailto:venkataprudvish@gmail.com',
  locationShort: 'Kadiri, Andhra Pradesh, India',
  locationDetailed: 'Kadiri, Sri Sathya Sai District, Andhra Pradesh, India',
  portraitUrl: '/assets/aistudio/image_d110519d.png',
  social: {
    linkedin: 'https://www.linkedin.com/in/c-venkata-prudvish-5887a2382/',
    github: 'https://github.com/venkataprudvish',
    jarvisRepo: 'https://github.com/venkataprudvish/JARVIS',
  },
};

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const;

export const HERO_CONTENT = {
  introLabel: "HELLO, I'M PRUDVISH.",
  headlineLines: ['CHIDELLA', 'VENKATA', 'PRUDVISH.'],
  supportingHeadline: 'Building ideas into meaningful digital experiences.',
  introduction:
    "I'm a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning, passionate about software development, AI-powered applications, and solving real-world problems through technology.",
  primaryCta: {
    label: 'Explore My Work',
    href: '#projects',
  },
  secondaryCta: {
    label: "Let's Connect",
    href: '#contact',
  },
};

export const ABOUT_CONTENT = {
  sectionIndex: '01',
  sectionTitle: 'About Me',
  headline: 'Curiosity-driven engineering rooted in practical software craft.',
  paragraphs: [
    "I'm CHIDELLA VENKATA PRUDVISH, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Jain Deemed-to-be University.",
    'I enjoy exploring technology, understanding how software works, and transforming ideas into practical applications.',
    'My interests include Python development, artificial intelligence, problem-solving, and building useful software experiences.',
    'I believe in learning by building, continuously improving my technical abilities, and exploring new possibilities through technology.',
  ],
  personalHighlight: 'Learning. Building. Experimenting. Improving.',
  quickFacts: [
    {
      label: 'Academic Focus',
      value: 'B.Tech CSE (Artificial Intelligence & Machine Learning)',
    },
    {
      label: 'University',
      value: 'Jain Deemed-to-be University, Bengaluru',
    },
    {
      label: 'Core Interests',
      value: 'Python Engineering · Local AI Systems · Backend Architecture',
    },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core languages used for software construction, logic, and data querying.',
    skills: [
      {
        name: 'Python',
        context:
          'Primary language for modular application architecture, local AI orchestration, automation scripts, and backend development.',
      },
      {
        name: 'C',
        context:
          'Foundational systems programming, memory concepts, structured programming, and low-level algorithmic implementation.',
      },
      {
        name: 'SQL',
        context:
          'Relational database querying, schema structuring, and data persistence for web and software applications.',
      },
    ],
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    subtitle: 'Foundational computational thinking and analytical problem-solving competencies.',
    note: 'Core learning and technical competencies actively practiced as part of computer science coursework and software engineering growth.',
    skills: [
      {
        name: 'Data Structures',
        context:
          'Working with arrays, linked structures, stacks, queues, trees, hash maps, and selecting appropriate representations.',
      },
      {
        name: 'Algorithm Design',
        context:
          'Structuring step-by-step computational solutions, sorting, searching, and evaluating time and space complexity.',
      },
      {
        name: 'Problem Solving',
        context:
          'Breaking down complex requirements into clean, testable logical units and edge-case-aware implementations.',
      },
      {
        name: 'Core DSA Concepts',
        context:
          'Recursion, iteration, state management, and foundational algorithmic patterns in Python and C.',
      },
    ],
  },
  {
    id: 'libraries',
    title: 'Libraries',
    subtitle: 'Python ecosystem libraries for numerical analysis, data manipulation, and visualization.',
    skills: [
      {
        name: 'NumPy',
        context:
          'Numerical computing, multidimensional array operations, and real-time audio buffer amplitude processing.',
      },
      {
        name: 'Pandas',
        context:
          'Structured tabular data manipulation, dataset cleaning, and exploratory analysis workflows.',
      },
      {
        name: 'Matplotlib',
        context:
          'Creating informative plots, charts, and visual representations of numerical and analytical data.',
      },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Technologies',
    subtitle: 'Application frameworks and local model runtimes for desktop and web systems.',
    skills: [
      {
        name: 'Django',
        context:
          'Python web framework used to structure backend workflows, URL routing, ORM models, and template-driven views.',
      },
      {
        name: 'PySide6',
        context:
          'Qt-based Python bindings explored for designing cross-platform graphical desktop assistant interfaces.',
      },
      {
        name: 'Ollama',
        context:
          'Local LLM runtime orchestration for privacy-preserving, offline-capable conversational reasoning and intent parsing.',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Daily development environments, version control, and data utilities.',
    skills: [
      {
        name: 'Git',
        context:
          'Source code version control, branching workflows, and incremental commit history management.',
      },
      {
        name: 'GitHub',
        context:
          'Repository hosting, code documentation, release tracking, and collaborative project organization.',
      },
      {
        name: 'PyCharm',
        context:
          'Dedicated Python IDE for multi-module project refactoring, virtual environment management, and debugging.',
      },
      {
        name: 'Visual Studio Code',
        context:
          'Lightweight code editor for web templates, configuration files, and rapid multi-language scripting.',
      },
      {
        name: 'Microsoft Excel',
        context:
          'Spreadsheet organization, structured data inspection, formulas, and quick tabular reporting.',
      },
    ],
  },
  {
    id: 'ai-dev',
    title: 'AI & Development Skills',
    subtitle: 'Applied engineering practices for integrating language models into modular software.',
    skills: [
      {
        name: 'Prompt Engineering',
        context:
          'Structuring system instructions, context windows, and deterministic output formats for reliable model responses.',
      },
      {
        name: 'LLM Interaction',
        context:
          'Building conversational loops, routing user intents, and combining deterministic commands with generative replies.',
      },
      {
        name: 'Local AI Model Integration',
        context:
          'Connecting Python applications with local Ollama models and contextual JSON memory stores.',
      },
      {
        name: 'Modular Python Development',
        context:
          'Organizing codebases into cohesive packages (brain, voice, memory, commands) with clear separation of concerns.',
      },
    ],
  },
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'jarvis',
    index: '01',
    title: 'JARVIS',
    subtitle: 'AI Desktop Assistant & Modular Voice-Driven Automation System',
    status: 'Active Iterative Development (v4.5 Core Engine)',
    description: [
      'JARVIS is a Python-based AI desktop assistant designed to provide voice-driven computer interaction and intelligent desktop assistance.',
      'The project explores local AI integration, voice interaction, modular architecture, and personalized assistant capabilities.',
    ],
    technologies: ['Python', 'Ollama', 'PySide6', 'Speech Recognition', 'pyttsx3'],
    githubUrl: 'https://github.com/venkataprudvish/JARVIS',
    githubLabel: 'Explore on GitHub',
    keyAreas: [
      'Voice interaction',
      'Wake-word functionality',
      'Local AI integration using Ollama',
      'Conversation management',
      'Project memory',
      'Desktop application interaction',
      'Modular Python architecture',
      'Desktop interface',
    ],
    architectureSummary:
      'Structured across dedicated Python packages — brain/ (Ollama LLM integration, context builder, conversation router), voice/ (VAD buffer, live & offline listeners, speech output), commands/ (workflow engine, smart resolver, app & web launchers, project manager), and memory/ (persistent JSON context and key-value recall).',
    featureBreakdown: [
      {
        status: 'Implemented',
        description:
          'Verified core modules implemented and operational in the repository (v4.5 changelog & master tree).',
        items: [
          {
            title: 'Local AI Brain & Context Router',
            detail:
              'Integrates local LLMs via Ollama with custom context building, multi-command splitting, and intent routing.',
            moduleRef: 'brain/ollama_brain.py · brain/conversation_router.py',
          },
          {
            title: 'Continuous Voice Loop & VAD Pipeline',
            detail:
              'Real-time audio buffering, Voice Activity Detection (VAD), silence detection, offline speech transcription, and multi-voice TTS synthesis.',
            moduleRef: 'voice/conversation_loop.py · voice/vad_engine.py · voice/speech_output.py',
          },
          {
            title: 'Persistent & Contextual Memory Store',
            detail:
              'Remembers user-defined facts, active tasks, last opened applications, and project context across assistant sessions.',
            moduleRef: 'memory/memory_manager.py · memory/context_memory.py',
          },
          {
            title: 'Workflow Engine & Smart App/Web Resolver',
            detail:
              'Scans installed desktop applications, caches websites, resolves natural commands to system actions, and automates multi-step workflows.',
            moduleRef: 'commands/workflow_manager.py · commands/smart_resolver.py · commands/app_launcher.py',
          },
          {
            title: 'Project & Task Management Commands',
            detail:
              'Tracks active coding projects, project features, developer notes, and daily/weekly status reports through voice or CLI commands.',
            moduleRef: 'commands/project_manager.py · commands/task_control.py',
          },
        ],
      },
      {
        status: 'In Development',
        description:
          'Capabilities actively being refined, benchmarked, and expanded in the repository.',
        items: [
          {
            title: 'Wake-Word & Barge-In Acoustic Tuning',
            detail:
              'Refining low-latency wake-word triggers ("Jarvis", "Hey Jarvis") and interruptible barge-in listening using OpenWakeWord, Porcupine, and Silero tests.',
            moduleRef: 'voice/wake_word.py · voice/barge_in_listener.py',
          },
          {
            title: 'Screen Capture & Vision Context Analysis',
            detail:
              'Developing screen capture inspection and vision AI hooks so the assistant can assist with on-screen content.',
            moduleRef: 'commands/vision_control.py · test_vision_ai.py',
          },
          {
            title: 'AI Code Advisor & Traceback Debugger',
            detail:
              'Expanding automated Python traceback reading and local AI debugging recommendations.',
            moduleRef: 'commands/debugger_ai.py · commands/traceback_reader.py',
          },
        ],
      },
      {
        status: 'Planned',
        description:
          'Upcoming roadmap goals for unifying the assistant experience.',
        items: [
          {
            title: 'PySide6 Graphical Desktop Interface',
            detail:
              'Designing a dedicated PySide6 desktop GUI shell with real-time voice waveform feedback, visual memory cards, and workflow status controls on top of the existing CLI/voice loop.',
            moduleRef: 'Planned GUI Layer (PySide6)',
          },
        ],
      },
    ],
  },
  {
    id: 'hospital-management',
    index: '02',
    title: 'Hospital Management System',
    subtitle: 'Web-Based Healthcare Workflow & Backend Architecture Application',
    status: 'Academic Engineering Project',
    description: [
      'A web-based Hospital Management System developed using Django, focused on applying backend development fundamentals and organizing healthcare-related application workflows.',
    ],
    technologies: ['Python', 'Django'],
    // Configurable GitHub URL: left undefined so no unverified repository link is shown unless configured.
    githubUrl: undefined,
    keyAreas: [
      'Django MTV (Model-Template-View) architecture',
      'Backend development fundamentals',
      'Healthcare workflow organization',
      'Relational data modeling in Python',
      'Server-side request & view handling',
      'Structured form & record management',
    ],
    architectureSummary:
      'Built with Python and Django to practice structured backend engineering — organizing healthcare administration workflows through clean URL routing, server-side view logic, and relational data models.',
    featureBreakdown: [
      {
        status: 'Implemented',
        description:
          'Core backend engineering fundamentals applied within the Django project.',
        items: [
          {
            title: 'Django Backend Architecture',
            detail:
              'Structured project configuration, modular app organization, and clean URL routing following Django conventions.',
            moduleRef: 'Python · Django Core',
          },
          {
            title: 'Healthcare Application Workflows',
            detail:
              'Organized server-side views and request lifecycles designed to coordinate administrative and operational hospital workflows.',
            moduleRef: 'Django Views & Templates',
          },
          {
            title: 'Structured Data Persistence',
            detail:
              'Applied Django ORM fundamentals to define structured entities and maintain data consistency across application views.',
            moduleRef: 'Django ORM Models',
          },
        ],
      },
    ],
  },
];

export const ACHIEVEMENTS_DATA = {
  hackathon: {
    badge: 'Recognized Team Qualification',
    title: 'Smart India Hackathon — Qualified Participant',
    description:
      'Participated in Smart India Hackathon, collaborating with a team to develop and present a technology-based solution and successfully qualifying through the relevant selection stage.',
    highlights: [
      {
        label: 'Collaborative Engineering',
        detail: 'Worked closely within a student team to brainstorm, structure, and articulate a practical technology solution.',
      },
      {
        label: 'Problem Formulation',
        detail: 'Translated real-world problem statements into clear technical architecture and presentation deliverables.',
      },
      {
        label: 'Selection Qualification',
        detail: 'Successfully qualified through the relevant selection evaluation stage.',
      },
    ],
  },
  academics: [
    {
      id: 'sem2',
      value: 9.13,
      suffix: ' / 10',
      decimals: 2,
      label: 'Semester 2 SGPA',
      sublabel: 'B.Tech CSE (AI & ML)',
      detail: 'Jain Deemed-to-be University',
    },
    {
      id: 'sem1',
      value: 9.05,
      suffix: ' / 10',
      decimals: 2,
      label: 'Semester 1 SGPA',
      sublabel: 'B.Tech CSE (AI & ML)',
      detail: 'Jain Deemed-to-be University',
    },
    {
      id: 'inter',
      value: 94,
      suffix: '%',
      decimals: 0,
      label: 'Intermediate',
      sublabel: 'Pre-University Education',
      detail: 'Consistent Academic Distinction',
    },
    {
      id: 'class10',
      value: 86.17,
      suffix: '%',
      decimals: 2,
      label: 'Class X',
      sublabel: 'Secondary Education (517 / 600)',
      detail: 'Strong Foundational Performance',
    },
  ] as AcademicMetric[],
};

export const EDUCATION_TIMELINE: EducationEntry[] = [
  {
    id: 'btech',
    stage: 'Undergraduate Degree (Current)',
    institution: 'Jain Deemed-to-be University, Bengaluru, Karnataka',
    program: 'Bachelor of Technology (B.Tech)',
    specialization: 'Computer Science and Engineering — Artificial Intelligence and Machine Learning',
    metrics: [
      { label: 'Semester 1 SGPA', value: '9.05 / 10' },
      { label: 'Semester 2 SGPA', value: '9.13 / 10' },
    ],
    summary:
      'Pursuing core computer science fundamentals, data structures, algorithms, Python software development, and artificial intelligence & machine learning coursework.',
  },
  {
    id: 'intermediate',
    stage: 'Higher Secondary / Intermediate',
    program: 'Intermediate Education',
    metrics: [{ label: 'Score', value: '94%' }],
    summary:
      'Completed intermediate studies with a strong focus on mathematics, analytical reasoning, and foundational sciences.',
  },
  {
    id: 'class-x',
    stage: 'Secondary School Education',
    program: 'Class X',
    metrics: [{ label: 'Score', value: '86.17% (517 / 600)' }],
    summary:
      'Established a strong academic foundation across core subjects with disciplined study habits.',
  },
];

export const BEYOND_TECH_CONTENT = {
  sectionIndex: '06',
  title: 'Beyond Technology',
  activity: 'Badminton',
  headline: 'Balance on the court, focus at the keyboard.',
  description:
    'Outside of writing Python code and exploring AI systems, playing badminton is my favorite way to recharge, stay active, and sharpen mental reflexes.',
  values: [
    {
      title: 'Teamwork',
      description: 'Coordinating court coverage, communicating seamlessly with a partner, and trusting shared strategy.',
    },
    {
      title: 'Discipline',
      description: 'Building footwork precision and physical stamina through deliberate, regular practice.',
    },
    {
      title: 'Consistency',
      description: 'Maintaining composure and steady execution rally after rally, mirroring iterative software refinement.',
    },
    {
      title: 'Sportsmanship',
      description: 'Respecting the game, learning from every point, and competing with integrity and positive energy.',
    },
  ],
};

export const CONTACT_CONTENT = {
  headline: "Have an interesting idea? Let's build something meaningful.",
  subheadline:
    "Whether you'd like to discuss Python engineering, local AI projects, academic collaborations, or software development opportunities, I'd be glad to connect.",
};

export type PortfolioPageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'achievements'
  | 'education'
  | 'beyond'
  | 'contact'
  | 'resume';

export interface BookChapterPage {
  id: Exclude<PortfolioPageId, 'home'>;
  pageNumber: string;
  roman: string;
  title: string;
  shortTitle: string;
  kicker: string;
  pieceName: string;
  pieceSubtitle: string;
  excerpt: string;
  highlights: string[];
  ctaLabel: string;
}

export const BOOK_CHAPTERS: BookChapterPage[] = [
  {
    id: 'about',
    pageNumber: '01',
    roman: 'I',
    title: 'About Me',
    shortTitle: 'About',
    kicker: 'Chapter I · Identity & Ethos',
    pieceName: 'Frontispiece & Editorial Folio',
    pieceSubtitle: 'B.Tech CSE (AI & ML) · Jain University',
    excerpt:
      "I'm CHIDELLA VENKATA PRUDVISH, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Jain Deemed-to-be University, driven by learning by building.",
    highlights: [
      'Python Development & Local AI Exploration',
      'Practical Problem-Solving & Software Craft',
      'Learning. Building. Experimenting. Improving.',
    ],
    ctaLabel: 'Open About Me Page',
  },
  {
    id: 'skills',
    pageNumber: '02',
    roman: 'II',
    title: 'Technical Competencies',
    shortTitle: 'Skills',
    kicker: 'Chapter II · Engineering Stack',
    pieceName: 'Algorithmic & Systems Signatures',
    pieceSubtitle: 'Python · C · SQL · Django · Ollama · DSA',
    excerpt:
      'Six structured disciplines spanning core programming languages, data structures and algorithms, scientific computing libraries, frameworks, developer tools, and local AI integration.',
    highlights: [
      'Languages & DSA: Python, C, SQL, Core Algorithmic Problem Solving',
      'Libraries & Frameworks: NumPy, Pandas, Matplotlib, Django, PySide6, Ollama',
      'AI & Craft: Prompt Engineering, Local LLM Integration, Modular Architecture',
    ],
    ctaLabel: 'Open Technical Competencies Page',
  },
  {
    id: 'projects',
    pageNumber: '03',
    roman: 'III',
    title: 'Featured Engineering Work',
    shortTitle: 'Projects',
    kicker: 'Chapter III · Selected Systems',
    pieceName: 'Architectural Blueprint Plates',
    pieceSubtitle: 'JARVIS Local AI Assistant · Hospital Management System',
    excerpt:
      'In-depth engineering showcases featuring JARVIS (a modular Python & Ollama voice-driven desktop assistant) and a Django-based Hospital Management System.',
    highlights: [
      'JARVIS v4.5: Local Ollama Brain, Continuous VAD Loop, Persistent Memory & Workflows',
      'Interactive Desktop Assistant Simulation & Verified Module Breakdown',
      'Hospital Management System: Django MTV Backend Architecture & ORM Workflows',
    ],
    ctaLabel: 'Open Featured Engineering Work Page',
  },
  {
    id: 'achievements',
    pageNumber: '04',
    roman: 'IV',
    title: 'Milestones & Academic Distinction',
    shortTitle: 'Achievements',
    kicker: 'Chapter IV · Recognition & Records',
    pieceName: 'Hackathon & Scholastic Seal',
    pieceSubtitle: 'Smart India Hackathon · 9.13 & 9.05 SGPA',
    excerpt:
      'Team qualification at the Smart India Hackathon alongside consistent university and pre-university academic distinction.',
    highlights: [
      'Smart India Hackathon — Qualified Participant',
      'University Performance: 9.13 SGPA (Sem 2) · 9.05 SGPA (Sem 1)',
      'Foundation Record: 94% (Intermediate) · 86.17% (Class X)',
    ],
    ctaLabel: 'Open Achievements Page',
  },
  {
    id: 'education',
    pageNumber: '05',
    roman: 'V',
    title: 'Education Timeline',
    shortTitle: 'Education',
    kicker: 'Chapter V · Academic Progression',
    pieceName: 'Chronicle Spine & Index',
    pieceSubtitle: 'Jain Deemed-to-be University · B.Tech CSE (AI & ML)',
    excerpt:
      'A structured vertical progression detailing undergraduate Computer Science & Engineering (AI & ML) studies and foundational academic stages.',
    highlights: [
      'Jain Deemed-to-be University, Bengaluru — B.Tech CSE (AI & ML)',
      'Intermediate Education — 94% Distinction',
      'Secondary School (Class X) — 86.17% (517 / 600)',
    ],
    ctaLabel: 'Open Education Page',
  },
  {
    id: 'beyond',
    pageNumber: '06',
    roman: 'VI',
    title: 'Beyond Technology',
    shortTitle: 'Beyond Tech',
    kicker: 'Chapter VI · Court Discipline',
    pieceName: 'Court Geometry & Balance Leaf',
    pieceSubtitle: 'Badminton · Teamwork · Consistency',
    excerpt:
      'Outside of software development, badminton sharpens focus, teamwork, discipline, consistency, and sportsmanship.',
    highlights: [
      'Teamwork & Seamless Partner Strategy',
      'Disciplined Footwork & Stamina',
      'Consistent Composure & Sportsmanship',
    ],
    ctaLabel: 'Open Beyond Technology Page',
  },
  {
    id: 'contact',
    pageNumber: '07',
    roman: 'VII',
    title: 'Contact & Correspondence',
    shortTitle: 'Contact',
    kicker: 'Chapter VII · Epilogue & Dispatch',
    pieceName: 'Colophon & Correspondence Leaf',
    pieceSubtitle: 'Direct Mail · Telephone · GitHub · LinkedIn',
    excerpt:
      "Have an interesting idea? Let's build something meaningful. Connect directly via email, phone, LinkedIn, or GitHub.",
    highlights: [
      'Email: venkataprudvish@gmail.com',
      'Phone: +91 7032837409',
      'Profiles: GitHub (@venkataprudvish) · LinkedIn',
    ],
    ctaLabel: 'Open Contact Page',
  },
];

