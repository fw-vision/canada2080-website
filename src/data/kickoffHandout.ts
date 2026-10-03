export type HandoutGap = {
  number: string;
  title: string;
  summary: string;
};

export const handoutMeta = {
  title: 'Canada2080 kickoff',
  subtitle: 'Guest working packet',
  date: 'Sunday, October 4, 2026',
  venue: 'Markham Ballroom · Hilton Toronto/Markham Suites Conference Centre',
  address: '8500 Warden Ave., Markham, ON L6G 1A5',
  time: 'Arrival 12:30 p.m. · Programme 1:00–2:30 p.m.',
  throughline:
    'Canada has the research foundation to lead, but leadership depends on whether knowledge becomes durable capability, opportunity, production, and public value in Canada.',
  site: 'canada2080.org',
  eventPath: '/events/2026-kickoff',
} as const;

export const handoutProgrammeGlance = [
  { time: '12:30', title: 'Arrival, networking, and foyer demos' },
  { time: '1:00', title: 'Welcome and Program Orientation' },
  { time: '1:05', title: 'Civic welcome' },
  { time: '1:10', title: 'Canada2080: the long-horizon challenge' },
  { time: '1:20', title: 'Invited speakers on sovereign AI and trustworthy deployment' },
  { time: '1:40', title: 'Panel 1: Sovereign AI, Data Governance, and Trustworthy Deployment' },
  { time: '1:55', title: 'Invited speakers on infrastructure and domestic scale-up' },
  { time: '2:10', title: 'Panel 2: Building National Capacity' },
  { time: '2:25', title: 'Closing synthesis and invitation' },
  { time: '2:30', title: 'Networking and follow-up' },
] as const;

export const handoutPurpose = [
  'Canada2080 is a public long-horizon agenda for building the economic sovereignty, strategic capability, and public value Canada may need by 2080.',
  'The kickoff starts from Canada’s research and educational strengths, then asks where conversion into durable domestic capability stalls.',
  'The room is cross-sector on purpose: education, industry, and governance each bring different resources, and capability forms at their intersection.',
  'The aim is not a slogan. It is one clearer diagnosis, one sharper question, and one practical next step you can take home.',
] as const;

export const handoutTripartite = [
  {
    label: 'Education',
    detail: 'Research, talent formation, and learning systems that keep knowledge renewable.',
  },
  {
    label: 'Industry',
    detail: 'Demand, production, operating knowledge, suppliers, and capital that turn ideas into working systems.',
  },
  {
    label: 'Governance',
    detail: 'Public purpose, policy, procurement, trust, and continuity across political and market cycles.',
  },
] as const;

export const handoutGaps: HandoutGap[] = [
  {
    number: '01',
    title: 'Commercialization and scale-up',
    summary:
      'Strong research too rarely travels through adoption, first customers, production, suppliers, exports, and reinvestment.',
  },
  {
    number: '02',
    title: 'Talent retention and domestic opportunity',
    summary:
      'Canada needs enough demanding work for people to apply advanced capability, lead, return, and build from here.',
  },
  {
    number: '03',
    title: 'IP ownership and decision rights',
    summary:
      'Activity becomes strategic capability only when rights to use, govern, improve, finance, and redirect systems remain clear.',
  },
  {
    number: '04',
    title: 'Long-term investment and risk capacity',
    summary:
      'Productive capacity must compound through capital, adoption, infrastructure, skills, demand, and institutional continuity.',
  },
];

export const handoutPanelBlocks = [
  {
    title: 'Panel 1 · Sovereign AI, Data Governance, and Trustworthy Deployment',
    focus:
      'The controls, consent, evidence, and runtime governance required for high-stakes AI deployment.',
    questions: [
      'As AI moves from pilots into high-stakes use, what must remain under meaningful human, institutional, patient, or community control, and what governance must continue at runtime?',
      'What should Canada learn from international and place-based perspectives, and what practical first deployment would demonstrate trustworthy, useful, and context-appropriate AI?',
    ],
  },
  {
    title: 'Panel 2 · Building National Capacity',
    focus:
      'The infrastructure, risk appetite, and domestic scale-up choices that allow Canadian capability to compound.',
    questions: [
      'Why does Canadian IP, talent, and venture capacity so often leave or sell before it compounds domestically, and which internal barrier must change first?',
      'What one infrastructure or institutional move should begin on Monday, and how would it connect compute, transportation, manufacturing, energy, talent, and place over the next decade?',
    ],
  },
] as const;

export const handoutScales = [
  {
    number: '01',
    title: 'Prove a unit',
    detail: 'Test energy, water, food, compute, or production with real users, costs, rights, and recovery.',
  },
  {
    number: '02',
    title: 'Connect a community',
    detail: 'Share surplus capacity while protecting sensitive data, essential services, and local control.',
  },
  {
    number: '03',
    title: 'Build regional loops',
    detail: 'Join infrastructure, demand, skills, suppliers, repair, and public institutions into repeatable systems.',
  },
  {
    number: '04',
    title: 'Network national capability',
    detail: 'Link differentiated regions through standards, trusted exchange, redundancy, and domestic decision rights.',
  },
] as const;

export const handoutJoinPaths = [
  { audience: 'Investors', ask: 'Finance a capability gap.' },
  { audience: 'Institutions', ask: 'Operate a bridge or testbed.' },
  { audience: 'Policy', ask: 'Remove one bottleneck.' },
  { audience: 'Researchers', ask: 'Strengthen the evidence.' },
  { audience: 'Operators', ask: 'Make capability work in production.' },
  { audience: 'Communities', ask: 'Define legitimate value.' },
] as const;

export const handoutReflections = {
  tripartite:
    'Which sphere do you primarily work in? Where is the missing connection that would turn knowledge into durable capability?',
  gaps:
    'Which Gap most constrains your work today? What evidence would strengthen or change that diagnosis?',
  nextStep:
    'In the next 90 days, what one conversation, demonstration, or evidence trail will you start?',
} as const;
