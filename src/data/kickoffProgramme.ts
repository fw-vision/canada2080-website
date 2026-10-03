export type ProgrammeBlock = {
  id: string;
  time: string;
  duration: string;
  title: string;
  lead: string;
  purpose: string;
  openingExample?: string;
  talkingPoints: string[];
  sequence: string[];
  notes: string[];
  guardrails?: string[];
};

export const programmeThroughline =
  'Canada has the research foundation to lead, but leadership depends on whether knowledge becomes durable capability, opportunity, production, and public value in Canada.';

export const programmeMeta = {
  title: 'Canada2080 kickoff programme plans',
  date: 'Sunday, October 4, 2026',
  venue: 'Markham Ballroom · Hilton Toronto/Markham Suites Conference Centre',
  mc: 'Kritika Saihgpaul',
  host: 'Francis Wang',
  arrival: '12:30 p.m.',
  start: '1:00 p.m. sharp',
} as const;

export type FoyerDemo = {
  name: string;
  confirmed: boolean;
};

/** Featured foyer tables: dedicated setups with confirmed equipment. */
export const featuredFoyerDemos: FoyerDemo[] = [
  { name: 'Jiamu Tea', confirmed: true },
  { name: 'HERArtstudio', confirmed: true },
  { name: 'Harry (Guqin)', confirmed: true },
  { name: 'Patient Companion', confirmed: true },
  { name: 'Skrimp', confirmed: true },
];

/** Shared foyer table: projects sharing one setup surface. */
export const sharedFoyerDemos: FoyerDemo[] = [
  { name: 'Vitalicious', confirmed: false },
  { name: 'Equaldocs AI', confirmed: false },
  { name: 'PassiveInfluencer', confirmed: false },
  { name: 'THE Media', confirmed: false },
];

/** Invited demos still deciding dedicated vs shared table. */
export const pendingFoyerDemos: FoyerDemo[] = [
  { name: 'Parth', confirmed: false },
  { name: 'Himanshu', confirmed: false },
  { name: 'DWA (Michael)', confirmed: false },
  { name: 'Corgan (Yulia)', confirmed: false },
  { name: 'Jerome', confirmed: false },
  { name: 'James (Divotron)', confirmed: false },
  { name: 'Tyler West (construction survey drones)', confirmed: false },
  { name: 'Up and Fit', confirmed: false },
  { name: 'Stem-cell researcher', confirmed: false },
  { name: 'Alex Friend (LegalAI)', confirmed: false },
];

export const programmeBlocks: ProgrammeBlock[] = [
  {
    id: 'arrival',
    time: '12:30 p.m.',
    duration: '30 minutes',
    title: 'Arrival, reception, and remote check',
    lead: 'Host and technical team',
    purpose: 'Welcome guests, note that the event is being recorded, and prove remote audio and video before the programme starts.',
    talkingPoints: [
      'Greet in-person guests at the ballroom threshold, not mid-conversation on the floor.',
      'Confirm name badges and seating preference. If a guest prefers not to appear on camera, note it for the media and edit team.',
      'Test every remote contributor on the hardwired connection, with a named backup if the live link fails.',
      'Keep reception materials limited to approved Canada2080 purpose, trajectory, Gaps, and follow-up capture.',
    ],
    sequence: [
      'Doors and reception from 12:30.',
      'Remote platform live and muted until 12:55.',
      'MC and Francis in place by 12:55.',
      'House lights and screen to hold slide by 12:58.',
      'Start at 1:00 regardless of late arrivals.',
    ],
    notes: [
      'This is a relationship space, not a product fair.',
      'Capture follow-up interests privately, with consent and a stated purpose.',
      'Do not announce unconfirmed speakers from the floor.',
    ],
  },
  {
    id: 'welcome',
    time: '1:00 p.m.',
    duration: '5 minutes',
    title: 'MC welcome and programme orientation',
    lead: 'Kritika Saihgpaul',
    purpose: 'Open the room, set the terms of participation, and make the afternoon easy to follow.',
    openingExample:
      'Good afternoon. Welcome to the Canada2080 kickoff. Whether you are in this room or joining online, you are here for a founding conversation about the systems Canada must build, govern, finance, repair, and renew if it is to remain capable in 2080.',
    talkingPoints: [
      'Welcome the room and the online participants in one sentence.',
      'Name the host, the date, and that the programme begins now.',
      'State accessibility: exits, washrooms, remote audio, and how to request support.',
      'State the recording rule: this event is being recorded, and a media team is moving through the room. If you prefer not to appear in the videos, tell a staff member so we can remove your likeness from the recorded materials.',
      'Give the shape of the afternoon: civic welcome, a short framing, two invited-speaker sections, two panels, then a close and invitation.',
      'Say there is no open audience Q&A. The work continues in conversation after 2:30.',
    ],
    sequence: [
      'Stand, pause, then deliver the opening sentence.',
      'Housekeeping and recording notice.',
      'Name the throughline once.',
      'Hand to the land acknowledgment, then to civic welcome.',
    ],
    notes: [
      'Protect the clock from the first minute.',
      'Do not preview panelist names unless the public listing has been approved.',
      'If a civic representative is delayed, hold the welcome item and do not collapse the block.',
    ],
    guardrails: [
      'Invitation and attendance do not imply endorsement.',
      'Do not promise commercial outcomes, partnerships, or policy decisions.',
    ],
  },
  {
    id: 'ceremony',
    time: '1:00–1:05 p.m.',
    duration: 'Inside the opening block',
    title: 'Land acknowledgment and ceremonial opening',
    lead: 'MC, unless a civic representative prefers to lead',
    purpose: 'Open with place, relationship, and care before the working conversation. This is a civic-form acknowledgment, not a substitute for protocol.',
    openingExample:
      'Before we begin the working conversation, I acknowledge the lands on which we meet today, and the Nations whose relationships with this place long precede this gathering. We are on the traditional and treaty lands of the Mississaugas of the Credit First Nation, and the traditional territory of the Anishinaabe, the Chippewa, the Haudenosaunee, and the Wendat peoples. These lands are covered by Treaty 13 and the Williams Treaties.',
    talkingPoints: [
      'Stand if able. Speak slowly. Do not rush the acknowledgment into the next announcement.',
      'Name the place: Markham, in the Greater Toronto Area, at a public gathering about Canada\'s long-horizon capability.',
      'Use the municipal civic-form wording unless a civic representative provides official wording of their own.',
      'Pause after the acknowledgment. A short silence is part of the sequence.',
      'Then connect, lightly: long-horizon work is also work of relationship, stewardship, and public purpose.',
      'Do not add Indigenous names, stories, symbols, knowledge, or territorial claims beyond this acknowledgment unless an appropriate authority has provided them.',
    ],
    sequence: [
      'MC introduces that the gathering will open with an acknowledgment of the lands.',
      'Deliver the acknowledgment in full, without notes-reading speed.',
      'Pause.',
      'If a civic representative will speak next, hand the floor with one sentence.',
      'If no civic representative is present, move to programme orientation and Francis.',
    ],
    notes: [
      'This is a working draft for the room. Civic representatives may use their official wording instead.',
      'Canada2080 does not treat Indigenous governance as decoration or as an extractable input to innovation.',
      'If a rights-holder or knowledge-keeper is present and has agreed to open, follow their instruction and shorten this draft.',
    ],
    guardrails: [
      'Do not improvise ceremony, song, language, or protocol.',
      'Do not publicly attach invited guests to Indigenous knowledge, Arctic, or sovereignty topics without direct permission.',
    ],
  },
  {
    id: 'civic',
    time: '1:05 p.m.',
    duration: '5 minutes',
    title: 'Civic Welcome',
    lead: 'Civic representatives, if present',
    purpose: 'A civic acknowledgment of the gathering and the municipal context. Keep the public itinerary role-based until confirmation is complete.',
    openingExample:
      'Thank you. We are grateful to welcome this conversation in Markham: a city that has to keep making room for talent, infrastructure, culture, and long-term economic capability.',
    talkingPoints: [
      'Thank the hosts and the people who travelled or joined remotely.',
      'Locate the gathering in Markham and York Region without turning the item into a policy announcement.',
      'Name why a long-horizon conversation belongs in a municipal room: housing, talent, infrastructure, and public value are decided in places.',
      'Keep remarks non-partisan and short enough to protect the 1:10 handoff.',
    ],
    sequence: [
      'MC introduces Civic Welcome without over-claiming titles if any remain unconfirmed.',
      'One or two civic voices, or one voice if the other is unavailable.',
      'MC thanks them and moves to Francis at 1:10.',
    ],
    notes: [
      'Retain the item even if only one representative is available.',
      'Do not convert civic presence into an endorsement of Canada2080.',
    ],
  },
  {
    id: 'framing',
    time: '1:10 p.m.',
    duration: '10 minutes',
    title: 'Canada2080: the long-horizon challenge',
    lead: 'Francis Wang',
    purpose: 'State the purpose, the evidence boundary, and the throughline that connects both panels.',
    openingExample:
      'If a hospital, a grid, a laboratory, or a northern communications link is still to serve people in 2080, then the work of making, financing, governing, repairing, and renewing that system has a present tense.',
    talkingPoints: [
      'Open in the present tense of 2080: what must be built now for systems people will still rely on.',
      'State the throughline once, then keep returning to it.',
      'Name Francis Wang\'s four Canadian systemic Gaps as a capability-loss loop: commercialization and scale-up; talent and domestic opportunity; IP and decision rights; long-term investment and risk capacity. The framework originates in the 2025 Foresight-Driven Innovation proposal.',
      'Place the room in the Tripartite Ecosystem: education, industry, and governance. Durable capability forms at the intersection.',
      'Mark the evidence boundary: verified facts, qualified claims, scenarios, hypotheses, and aspirations will be distinguished.',
      'Name the 2080 destination as Canada2080\'s chosen direction, not a forecast or guaranteed comparative outcome.',
      'Hand the room a job: test what Canada should control, build, and sustain, then name a next conversation.',
    ],
    sequence: [
      'Present-tense opening.',
      'Throughline and Gaps.',
      'Tripartite model.',
      'Evidence boundary and aspiration label.',
      'Bridge to invited speakers on sovereign AI, data governance, and trustworthy deployment.',
    ],
    notes: [
      'This is framing, not a 25-minute keynote. Keep to ten minutes.',
      'Precision resilience may be named as a working hypothesis with Barry Wylant, not as a proven model.',
    ],
    guardrails: [
      'Do not publish unsupported talent, IP, or productivity statistics.',
      'Sovereignty means selective control, repair, learning, resilience, and choice within trusted exchange.',
      'Do not turn climate exposure figures into displacement or Canada-destination claims.',
    ],
  },
  {
    id: 'featured-1',
    time: '1:20 p.m.',
    duration: '20 minutes',
    title: 'Invited speakers on sovereign AI, data governance, and trustworthy deployment',
    lead: 'Sudarshana Bhattacharya, Kimberly Yazzie, Erin Trochim, Sunita Kumari, and Pyn Lim',
    purpose: 'Five short perspectives that establish the governance, place, safety, and patient-data context for Panel 1.',
    talkingPoints: [
      'Sudarshana: enterprise AI adoption, banking data and AI governance, and moving pilots into operating capability.',
      'Kimberly: approved framing only, with her confirmed biography and speaking-outside-appointment disclaimer.',
      'Erin: place-based and geospatial resilience, cognitive onloading, comparative perspectives, and critical AI adoption.',
      'Sunita: sovereign AI, runtime governance, and the why and how of AI safety and security.',
      'Pyn: patient data sovereignty and fragmented health records, framed around the problem rather than clinic efficiency.',
    ],
    sequence: [
      'MC names the set and the hard three-minute cap, except Pyn at three to five minutes.',
      'Sudarshana, Kimberly, Erin, Sunita, then Pyn.',
      'Use the block buffer for introductions and remote handoffs.',
      'Sunita is keynote-only. Sudarshana, Kimberly, Erin, and Pyn move into Panel 1.',
    ],
    notes: [
      'Protect the order and hard caps.',
      'Do not use a United States university affiliation for Erin in event materials.',
    ],
    guardrails: [
      'Do not imply Gartner endorsement of Sudarshana.',
      'Do not imply that Sunita represents Himanshu, COHUMAIN Labs, UT Austin, or another institution.',
    ],
  },
  {
    id: 'panel-1',
    time: '1:40 p.m.',
    duration: '15 minutes',
    title: 'Panel 1: Sovereign AI, Data Governance, and Trustworthy Deployment',
    lead: 'MC with Sudarshana Bhattacharya, Kimberly Yazzie, Erin Trochim, and Pyn Lim',
    purpose: 'Move from AI pilots and policy language to the controls, consent, evidence, and runtime governance required for high-stakes deployment.',
    talkingPoints: [
      'Control and governance: As AI moves from pilots into high-stakes use, what must remain under meaningful human, institutional, patient, or community control, and what governance must continue at runtime to make the system safe and trustworthy?',
      'A distinctly Canadian first move: What should Canada learn from international and place-based perspectives, and what practical first deployment would demonstrate trustworthy, useful, and context-appropriate AI?',
      'More question, experiment responsibly: How can institutions move beyond reactive risk mitigation and create room for low-stakes experimentation without transferring risk to patients, communities, or the public?',
      'More question, set the evidence threshold: What evidence should decision makers demand before calling an AI deployment safe, secure, trustworthy, or publicly beneficial?',
    ],
    sequence: [
      'MC restates the panel purpose in one sentence.',
      'Ask the two primary questions.',
      'Use one of the two more questions only if time remains.',
      'MC closes the panel by naming one tension to carry into the next set.',
    ],
    notes: [
      'Live format is 15 minutes. Protect the two-question structure.',
      'Remote panelists need a named cue and a visible time card.',
    ],
    guardrails: [
      'No open audience Q&A.',
      'Do not treat presence as sectoral endorsement.',
    ],
  },
  {
    id: 'featured-2',
    time: '1:55 p.m.',
    duration: '15 minutes',
    title: 'Invited speakers on infrastructure, risk appetite, and domestic scale-up',
    lead: 'Barry Wylant, Yulia Korobkova, Greg Hart, and Michael Donaldson',
    purpose: 'Four short perspectives on domestic scale-up, compute capacity, future-ready places, and opportunity-enriched innovation culture.',
    openingExample:
      'What must a future-ready Canadian city or region put in place now so that AI, energy, infrastructure, talent, and institutions create enduring public value rather than isolated projects?',
    talkingPoints: [
      'Barry: Canadian firms that had to sell internationally to scale, using source-approved examples as an IP-exit and domestic scale-up case.',
      'Yulia: internal Canadian compute-capacity barriers, possible solutions, and a decades-scale path.',
      'Greg: future-ready places, transformation design, and risk-averse commercialization.',
      'Michael: opportunity-enriched innovation culture, architecture, strategic design, and designed futures.',
    ],
    sequence: [
      'MC names the shift from trustworthy deployment to national capacity.',
      'Barry, Yulia, Greg, then Michael, with three minutes each.',
      'Use the block buffer for introductions and handoffs.',
      'Barry is keynote-only. Yulia, Greg, and Michael move into Panel 2.',
    ],
    notes: [
      'Barry remains subject to health confirmation. Compress the block if he cannot attend.',
      'Do not frame Yulia through a Canada-United States practice comparison.',
    ],
  },
  {
    id: 'panel-2',
    time: '2:10 p.m.',
    duration: '15 minutes',
    title: 'Panel 2: Building National Capacity: Infrastructure, Risk Appetite, and Domestic Scale-Up',
    lead: 'MC with Yulia Korobkova, Greg Hart, Michael Donaldson, and Sebastien Gendron',
    purpose: 'Test why Canadian knowledge, talent, and ventures fail to compound domestically, and identify the infrastructure and institutional choices that connect national capability.',
    talkingPoints: [
      'Diagnose the break: Why does Canadian IP, talent, and venture capacity so often leave or sell before it compounds domestically, and which internal barrier must change first: risk culture, procurement, capital, infrastructure, or something else?',
      'Start Monday: If Canada were serious about building capacity now, what one infrastructure or institutional move should begin on Monday, and how would it connect compute, transportation, manufacturing, energy, talent, and place over the next decade?',
      'More question, recognize progress: What concrete signal within the next five to ten years would demonstrate that Canada is compounding national capacity rather than producing isolated projects?',
      'More question, change the risk system: How should procurement and capital reward experimentation and long-horizon infrastructure while preserving accountability?',
    ],
    sequence: [
      'MC restates the purpose in one sentence.',
      'Ask the two primary questions.',
      'Use one of the two more questions only if time remains.',
      'Close by naming one condition for capability to compound.',
    ],
    notes: [
      'Sebastien is panel-only.',
      'Treat corridor and transportation examples as discussion prompts, not adopted policy.',
    ],
  },
  {
    id: 'close',
    time: '2:25 p.m.',
    duration: '5 minutes',
    title: 'Closing synthesis and invitation',
    lead: 'Francis Wang, with MC handoff',
    purpose: 'Name the tensions, invite contribution, and close without over-claiming the afternoon.',
    openingExample:
      'The question is not whether Canada can describe a future. It is whether we will attach owners, capital, institutions, and 90-day work to the systems we say we want still to exist in 2080.',
    talkingPoints: [
      'Return the throughline: research becomes leadership only when it becomes capability at home.',
      'Name two or three tensions heard in the room, without attributing quotes unless permission is explicit.',
      'Invite contribution lanes: evidence, capital, institutional capacity, operating knowledge, or a next conversation.',
      'Ask each person to leave with one named next step, not a general expression of interest.',
      'Close on the aspiration: Canada2080 is a direction for present decisions. The next step is a named owner, a 90-day action, and a measure.',
    ],
    sequence: [
      'MC hands back to Francis.',
      'Synthesis, then invitation.',
      'MC thanks contributors and guests, repeats the reception instruction, and ends the programmed portion at 2:30.',
    ],
    notes: [
      'Do not announce partnerships, products, or follow-on events that are not approved.',
      'End on time so networking remains a real part of the day.',
    ],
  },
  {
    id: 'networking',
    time: '2:30 p.m.',
    duration: '30 minutes',
    title: 'Networking and follow-up',
    lead: 'Host team',
    purpose: 'Continue the conversation, meet participants, and book useful next steps.',
    talkingPoints: [
      'Point people to the reception and display area, not back into a lingering panel.',
      'Capture consented interests with a stated purpose.',
      'Protect remote guests with a short stay-on-the-line option, then close the meeting cleanly.',
    ],
    sequence: [
      'House lights up. Hold slide remains on screen.',
      'Host team works the room with a follow-up list.',
      'Technical team ends recording and flags any likeness-removal requests for edit.',
    ],
    notes: [
      'Do not convert hallway discussion into public claims.',
      'A cultural welcome element belongs only if previously approved and separated from the technical programme.',
    ],
  },
];
