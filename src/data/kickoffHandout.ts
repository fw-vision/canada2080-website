import {
  programmeBlocks,
  programmeHosts,
  programmeMeta,
  programmeThroughline,
  type ProgrammeQuestion,
  type ProgrammeSpeaker,
} from './kickoffProgramme';

export type HandoutContributor = ProgrammeSpeaker;

export type HandoutPanel = {
  title: string;
  titleLines: string[];
  purpose: string;
  questions: ProgrammeQuestion[];
  writingPrompts: string[];
};

const featuredOne = programmeBlocks.find((block) => block.id === 'featured-1');
const featuredTwo = programmeBlocks.find((block) => block.id === 'featured-2');
const panelOne = programmeBlocks.find((block) => block.id === 'panel-1');
const panelTwo = programmeBlocks.find((block) => block.id === 'panel-2');

export const handoutMeta = {
  title: 'Canada2080 kickoff',
  subtitle: 'Guest working packet',
  date: programmeMeta.date,
  venue: programmeMeta.venue,
  address: '8500 Warden Ave., Markham, ON L6G 1A5',
  time: `Arrival ${programmeMeta.arrival} · Programme ${programmeMeta.start}`,
  throughline: programmeThroughline,
  site: 'canada2080.org',
  eventPath: '/events/2026-kickoff',
  host: {
    ...programmeHosts[0],
    affiliation:
      'Canada2080 Founder | FW.VISION | Dual Doctoral Researcher in AI and Innovation',
    profileUrl: 'https://www.linkedin.com/in/findcongwang/',
  },
  coHost: {
    ...programmeHosts[1],
  },
  mc: programmeMeta.mc,
  mcProfileUrl: 'https://www.linkedin.com/in/kritika-saihgpaul/',
} as const;

const programmeIds = [
  'arrival',
  'welcome',
  'civic',
  'framing',
  'featured-1',
  'panel-1',
  'featured-2',
  'panel-2',
  'close',
  'networking',
];

export const handoutProgrammeGlance = programmeIds
  .map((id) => programmeBlocks.find((block) => block.id === id))
  .filter((block): block is NonNullable<typeof block> => Boolean(block))
  .map((block) => ({
    time: block.time,
    title: block.title,
    duration: block.duration,
  }));

function toContributor(speaker: ProgrammeSpeaker): HandoutContributor {
  const deployedProfileOverrides: Record<string, Partial<ProgrammeSpeaker>> = {
    'Sudarshana Bhattacharya': {
      name: 'Dr Sudarshana Bhattacharya',
      affiliation: 'Analyst',
      topic: 'Applied climate science.',
      bio: 'Analyst contributing applied climate research from her doctoral work at GGU.',
    },
    'Dr Kimberly Yazzie': {
      affiliation: 'University of British Columbia',
      topic: 'Data governance, consent, and community benefit.',
      bio: 'Researcher contributing a perspective on consent, data stewardship, and accountable systems outside her institutional appointment.',
    },
    'Erin Trochim': {
      bio: 'Researcher bringing a place-aware perspective on geospatial evidence, resilient capability, and critical AI adoption.',
    },
    'Sunita Kumari': {
      affiliation: 'AI Researcher at UT Austin/COHUMAIN Labs',
      bio: 'AI researcher at UT Austin/COHUMAIN Labs, attending in person. She is delivering the three-minute keynote on sovereign AI, runtime governance, and AI safety and security, including the topic supplied by Himanshu Joshi. Himanshu is not attending.',
    },
    'Pyn Lim': {
      affiliation: 'ECAMS',
      bio: 'Founder and education leader contributing a patient-centred perspective on continuity of care and data control.',
    },
    'Barry Wylant': {
      bio: "Barry Wylant is an Associate Professor and Graduate Program Director at SAPL, working with thesis students in the Master of Design Research, PhD, and Doctor of Design programmes. In his work and writings, Barry emphasizes the 'how' of design thinking. With extensive experience as an industrial designer and consultant, Barry explores the intersection of design, technology, and community impact. His design work has advanced innovation in various areas, including medical and accessibility devices, and consumer products.",
    },
    'Yulia Korobkova, OAA, AAA, AANB, LEED': {
      affiliation: 'Data Centers Studio Leader — Vice President · Corgan Canada',
      bio: 'Data Centers Studio Leader and Vice President contributing a practitioner perspective on domestic compute infrastructure.',
    },
    'Greg Hart': {
      affiliation: 'Founder, Future Fit Cities · InceptionU / TransPod Advisory Board',
      topic: 'Stop Solving Problems. Future-ready places, transformation design, and risk-averse commercialization, including Future Fit Cities.',
      bio: 'Founder of Future Fit Cities; co-founder and facilitator at InceptionU. Contributes a systems perspective on innovation culture and long-horizon capability.',
    },
    'Dr Michael Donaldson': {
      bio: 'Principal Architect and Designer, invited for perspective on fostering an opportunity-enriched innovation culture, to support a resilient future.',
    },
    'Sebastien Gendron': {
      bio: 'Co-Founder and CEO contributing a deep-tech transportation and large-scale infrastructure delivery perspective.',
    },
  };

  return {
    ...speaker,
    ...deployedProfileOverrides[speaker.name],
  };
}

export const handoutContributorSets = [
  {
    label: 'Keynote set 1',
    title: featuredOne?.title ?? '',
    titleLines: [
      'Invited speakers on sovereign AI,',
      'data governance, and trustworthy deployment',
    ],
    contributors: (featuredOne?.speakers ?? []).map(toContributor),
  },
  {
    label: 'Keynote set 2',
    title: featuredTwo?.title ?? '',
    titleLines: [
      'Invited speakers on infrastructure, risk appetite,',
      'and domestic scale-up',
    ],
    contributors: (featuredTwo?.speakers ?? []).map(toContributor),
  },
];

export const handoutPanels: HandoutPanel[] = [
  {
    title: panelOne?.title ?? '',
    titleLines: [
      'Panel 1: Sovereign AI, Data Governance,',
      'and Trustworthy Deployment',
    ],
    purpose: panelOne?.purpose ?? '',
    questions: panelOne?.questions ?? [],
    writingPrompts: [
      'What must remain under meaningful human, patient, community, or institutional control?',
      'What evidence threshold would earn my trust?',
    ],
  },
  {
    title: panelTwo?.title ?? '',
    titleLines: [
      'Panel 2: Building National Capacity:',
      'Infrastructure, Risk Appetite, and Domestic Scale-Up',
    ],
    purpose: panelTwo?.purpose ?? '',
    questions: panelTwo?.questions ?? [],
    writingPrompts: [
      'Which internal Canadian barrier should change first?',
      'What capability should Canada build or retain domestically?',
    ],
  },
];

export const handoutAiReflection = {
  title: 'Personal reflection | Not a verified economic claim',
  instruction:
    'This exercise concerns only the spending you personally influence or help decide. It does not estimate Canadian AI spending, demand, capacity, or economic impact. Keep the page for your own use unless a separate collection purpose and consent statement is provided.',
  prompts: [
    {
      question:
        'In the next 12 months, approximately how much AI-related spending do you personally influence or help decide?',
      options: [
        'None',
        'Under CAD 10,000',
        'CAD 10,000–100,000',
        'CAD 100,000–1 million',
        'Over CAD 1 million',
        'Prefer not to record',
      ],
    },
    {
      question:
        'What share could realistically be directed toward compute physically located in Canada if capacity, price, reliability, security, and governance requirements were met?',
      options: ['0%', 'Under 25%', '25–50%', 'More than 50%', 'Unsure'],
    },
    {
      question:
        'Would your answer differ for services under Canadian control rather than infrastructure merely located in Canada? Why?',
      options: [],
    },
    {
      question: 'Which domestic compute constraint would need to change first?',
      options: [
        'Power or interconnection',
        'Network capacity',
        'Land or permitting',
        'Hardware access',
        'Financing',
        'Skills',
        'Procurement',
        'Security or compliance',
        'Demand certainty',
        'Other',
      ],
    },
    {
      question:
        'What evidence or operating condition would justify shifting spending? What would make you decide not to shift it?',
      options: [],
    },
  ],
  supporters: [
    {
      name: 'DAICompute',
      website: 'daicompute.ca',
      href: 'https://daicompute.ca',
    },
    {
      name: 'AuroraNyxus',
      website: 'auroranyxus.com',
      href: 'https://auroranyxus.com',
    },
  ],
} as const;

export const handoutReceptionQuestions = [
  'What claim or assumption from Panel 1 do I want to test?',
  'What claim or assumption from Panel 2 do I want to test?',
  'What question would I ask a contributor after the programme?',
  'What evidence, example, or counterexample could I contribute?',
  'What next conversation would be useful, with whom, and why?',
] as const;
