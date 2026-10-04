export type ProgrammeSpeaker = {
  name: string;
  affiliation?: string;
  attendance: 'in-person' | 'remote';
  topic: string;
  bio: string;
  note?: string;
};

export type ProgrammeQuestion = {
  kind: 'primary' | 'more';
  label: string;
  question: string;
};

export type ProgrammeBlock = {
  id: string;
  time: string;
  duration: string;
  title: string;
  lead: string;
  purpose: string;
  openingExample?: string;
  talkingPoints?: string[];
  talkingPointsHeading?: string;
  speakers?: ProgrammeSpeaker[];
  questions?: ProgrammeQuestion[];
  sequence: string[];
  notes: string[];
  guardrails?: string[];
};

export type NameTagGuest = {
  name: string;
  affiliation: string;
  topic: string;
  attendance: 'in-person' | 'remote' | 'invited';
  lanyard: 'grey' | 'none';
  /** Municipal or civic leader. */
  municipal?: boolean;
  note?: string;
};

export type StaffBadge = {
  name: string;
  role: string;
  blank?: boolean;
};

export type FoyerDemo = {
  name: string;
  confirmed: boolean;
  holders?: string[];
};

export const programmeThroughline =
  'Canada has the research foundation to lead, but leadership depends on whether knowledge becomes durable capability, opportunity, production, and public value in Canada.';

export const programmeMeta = {
  title: 'Canada2080 kickoff programme plans',
  date: 'Sunday, October 4, 2026',
  venue: 'Markham Ballroom · Hilton Toronto/Markham Suites Conference Centre',
  host: 'Francis Wang',
  coHost: 'William Yao',
  mc: 'Kritika Saihgpaul',
  prep: '9:00 a.m. to 11:30 a.m.',
  staffArrival: '11:30 a.m. to 12:30 p.m.',
  arrival: '12:30 p.m.',
  start: '1:00 p.m. sharp',
} as const;

/** Grey lanyard: in-person guests. Remote guests are listed for the run of show, not for grey tags. */
export const guestNameTags: NameTagGuest[] = [
  {
    name: 'Frank Scarpitti',
    affiliation: 'City of Markham · Mayor of Markham',
    topic: 'Civic welcome',
    attendance: 'invited',
    lanyard: 'grey',
    municipal: true,
    note: 'Municipal leader.',
  },
  {
    name: 'Alan Ho',
    affiliation: 'City Councillor of Markham · Chair, Culture & Economic Development Committee (Markham)',
    topic: 'Civic welcome',
    attendance: 'invited',
    lanyard: 'grey',
    municipal: true,
    note: 'Municipal leader.',
  },
  {
    name: 'Shaun Chen',
    affiliation: 'Public service and policy',
    topic: 'Public-service perspective',
    attendance: 'invited',
    lanyard: 'grey',
    note: 'Ex-MP. Not speaking.',
  },
  {
    name: 'Dr Sudarshana Bhattacharya',
    affiliation: 'Analyst',
    topic: 'Applied climate science · doctoral work at GGU',
    attendance: 'in-person',
    lanyard: 'grey',
  },
  {
    name: 'Dr Kimberly Yazzie',
    affiliation: 'University of British Columbia',
    topic: 'Data governance, consent, and community benefit',
    attendance: 'remote',
    lanyard: 'none',
  },
  {
    name: 'Erin Trochim',
    affiliation: 'Geospatial AI and applied data research',
    topic: 'Place-based resilience, cognitive onloading, and critical AI adoption',
    attendance: 'remote',
    lanyard: 'none',
  },
  {
    name: 'Sunita Kumari',
    affiliation: 'AI Researcher at UT Austin/COHUMAIN Labs',
    topic: 'Sovereign AI, runtime governance, and AI safety and security',
    attendance: 'in-person',
    lanyard: 'grey',
  },
  {
    name: 'Pyn Lim',
    affiliation: 'ECAMS',
    topic: 'Patient data sovereignty and fragmented health records',
    attendance: 'remote',
    lanyard: 'none',
  },
  {
    name: 'Barry Wylant',
    affiliation: 'Associate Professor and Graduate Program Director, SAPL, University of Calgary',
    topic: 'Design thinking, industrial design, and domestic scale-up',
    attendance: 'remote',
    lanyard: 'none',
    note: 'Maybe, depending on health.',
  },
  {
    name: 'Yulia Korobkova',
    affiliation: 'Corgan',
    topic: 'Data-centre design and Canadian compute capacity',
    attendance: 'in-person',
    lanyard: 'grey',
  },
  {
    name: 'Greg Hart',
    affiliation: 'Founder, Future Fit Cities · InceptionU / TransPod Advisory Board',
    topic: 'Stop Solving Problems',
    attendance: 'in-person',
    lanyard: 'grey',
  },
  {
    name: 'Dr Michael Donaldson',
    affiliation: 'DWA/Future Workshop',
    topic: 'Architecture, strategic design, and designed futures',
    attendance: 'in-person',
    lanyard: 'grey',
  },
  {
    name: 'Sebastien Gendron',
    affiliation: 'TransPod',
    topic: 'TransPod as a case study in how the Canadian government approaches risk',
    attendance: 'in-person',
    lanyard: 'grey',
  },
  {
    name: 'Charles Chan',
    affiliation: 'Triple View Technologies Inc.',
    topic: 'Software engineering, product development, and operating capability',
    attendance: 'invited',
    lanyard: 'grey',
  },
];

/** Green lanyard: host, co-host, MC, helpers, and demo holders. Blank rows are empty tags for handwritten names. */
export const staffNameTags: StaffBadge[] = [
  { name: 'Francis Wang', role: 'Host' },
  { name: 'William Yao', role: 'Co-host' },
  { name: 'Kritika Saihgpaul', role: 'Master of ceremonies · also Monkii demo' },
  { name: 'Willy Liu', role: 'Sound technician' },
  { name: 'Freya 嘉木', role: 'Demo holder · Jiamu Tea' },
  { name: 'William 嘉木', role: 'Demo holder · Jiamu Tea' },
  { name: '胡不哭(Xiaoxiao)', role: 'Demo holder · HERArtStudio' },
  { name: '觉谦·一赫（Harry）', role: 'Demo holder · Guqin' },
  { name: 'Christy Lee', role: 'Demo holder · PatientCompanion' },
  { name: 'Henrietta von Niekerk', role: 'Demo holder · Skrimp AI' },
  { name: 'James Cheng', role: 'Demo holder · Divtron' },
  { name: 'Alex Li', role: 'Demo holder · THE Media' },
  { name: 'Amanda Wu', role: 'Demo holder · Vitalicious' },
  { name: 'Ben Wang', role: 'Demo holder · AuroraNyxus' },
  { name: 'Salar Ali Mumtaz', role: 'Demo holder · AuroraNyxus' },
  { name: 'Mengsi Gong', role: 'Event helper' },
  { name: 'Parth Sharma', role: 'Event helper' },
  { name: 'James Zheng', role: 'Event helper' },
  { name: 'Dean Zhu', role: 'Event helper' },
  { name: 'Maria Smirnova', role: 'Event helper' },
  { name: '', role: 'Event helper', blank: true },
  { name: '', role: 'Event helper', blank: true },
];

/** Featured foyer tables: dedicated setups with confirmed equipment. */
export const featuredFoyerDemos: FoyerDemo[] = [
  { name: 'Jiamu Tea', confirmed: true, holders: ['Freya 嘉木', 'William 嘉木'] },
  { name: 'HERArtStudio', confirmed: true, holders: ['胡不哭(Xiaoxiao)'] },
  { name: 'Guqin', confirmed: true, holders: ['觉谦·一赫（Harry）'] },
  { name: 'PatientCompanion', confirmed: true, holders: ['Christy Lee'] },
  { name: 'Skrimp', confirmed: true, holders: ['Henrietta von Niekerk'] },
  { name: 'Monkii', confirmed: true, holders: ['Kritika Saihgpaul'] },
  { name: 'Divtron', confirmed: true, holders: ['James Cheng'] },
  { name: 'AuroraNyxus', confirmed: true, holders: ['Ben Wang', 'Salar Ali Mumtaz'] },
];

/** Shared foyer table: projects sharing one setup surface. */
export const sharedFoyerDemos: FoyerDemo[] = [
  { name: 'Vitalicious', confirmed: true, holders: ['Amanda Wu'] },
  { name: 'Equaldocs AI', confirmed: false },
  { name: 'PassiveInfluencer', confirmed: false },
  { name: 'THE Media', confirmed: true, holders: ['Alex Li'] },
];

export const programmeBlocks: ProgrammeBlock[] = [
  {
    id: 'prep',
    time: '9:00 a.m.',
    duration: '2 hours 30 minutes',
    title: 'Pre-event preparation and stage setup',
    lead: 'Production and host team',
    purpose: 'Build the room, stage, foyer tables, recording positions, and remote path before staff and guests arrive.',
    talkingPoints: [
      'Confirm ballroom layout, stage, lectern, screen, hardwired internet, and microphones.',
      'Reserve seats for grey-lanyard guests.',
      'Set foyer demo tables and keep reception materials to approved Canada2080 purpose, trajectory, Gaps, and follow-up capture.',
      'Place grey guest lanyards and green staff lanyards at check-in, including blank green tags for handwritten names.',
      'Cue the hall-deck hold slide and prove camera, audio, and remote backup before 11:30.',
    ],
    sequence: [
      'Crew on site from 9:00 a.m.',
      'Stage, seats, and foyer complete by 11:15 a.m.',
      'AV and remote path ready for staff arrival at 11:30 a.m.',
    ],
    notes: [
      'This block is closed to guests.',
      'Do not announce unconfirmed speakers from the floor during setup.',
    ],
  },
  {
    id: 'staff-arrival',
    time: '11:30 a.m.',
    duration: '60 minutes',
    title: 'Event staff and team arrival',
    lead: 'Francis Wang, William Yao, Kritika Saihgpaul, and green-lanyard team',
    purpose: 'Get host, co-host, MC, helpers, and demo holders in role, briefed, and on radio before guest doors.',
    talkingPoints: [
      'Issue green lanyards to Francis, William Yao, Kritika, Willy Liu (sound), then demo holders, then helpers. Keep two blank green tags for handwritten names.',
      'William Yao is co-host. William 嘉木 is the Jiamu Tea demo holder. They are not the same person.',
      'Walk the sequence: guest welcome, accessibility, recording, land acknowledgement, municipal Civic Welcome, then Francis for the Canada2080 vision.',
      'Assign door, remote, camera, sound, and foyer leads. Confirm likeness-removal notes.',
      'Remote contributors stay muted until 12:55. Doors for guests open at 12:30.',
    ],
    sequence: [
      'Staff and team arrival from 11:30 a.m.',
      'Roles, lanyards, and radio by 12:00 p.m.',
      'Final walkthrough and positions by 12:20 p.m.',
      'Guest threshold staffed at 12:30 p.m.',
    ],
    notes: [
      'Two blank green tags are for handwritten helper names at the door.',
      'Demo holders wear green lanyards, not guest grey.',
    ],
  },
  {
    id: 'arrival',
    time: '12:30 p.m.',
    duration: '30 minutes',
    title: 'Arrival, reception, and remote check',
    lead: 'Host and technical team',
    purpose: 'Welcome guests, issue grey lanyards, note that the event is being recorded, and prove remote audio and video before the programme starts.',
    talkingPoints: [
      'Greet in-person guests at the ballroom threshold, not mid-conversation on the floor.',
      'Issue grey lanyards. Every grey-lanyard guest is highlighted and has a reserved seat.',
      'Invite guests to optionally sign the Canada2080 banner during arrival.',
      'Confirm name badges and seating preference. If a guest prefers not to appear on camera, note it for the media and edit team.',
      'Test every remote contributor on the hardwired connection, with a named backup if the live link fails.',
      'Keep reception materials limited to approved Canada2080 purpose, trajectory, Gaps, and follow-up capture.',
    ],
    sequence: [
      'Doors and reception from 12:30.',
      'Point guests to the Canada2080 banner for optional signatures.',
      'Remote platform live and muted until 12:55.',
      'MC and Francis in place by 12:55.',
      'House lights and screen to hold slide by 12:58.',
      'Before the MC welcome, invite all guests to gather to the stage for a group photo.',
      'Start at 1:00 regardless of late arrivals.',
    ],
    notes: [
      'This is a relationship space, not a product fair.',
      'Ask guests to optionally sign the Canada2080 banner; signing is voluntary.',
      'Capture follow-up interests privately, with consent and a stated purpose.',
      'Do not announce unconfirmed speakers from the floor.',
    ],
  },
  {
    id: 'opening-photo',
    time: '12:58 p.m.',
    duration: 'Before the MC welcome',
    title: 'Opening group photo',
    lead: 'MC or host team',
    purpose: 'Gather guests to the stage for a group photo before the programme opens.',
    talkingPoints: [
      'Invite all guests to gather to the stage for a group photo before the MC welcome.',
      'Keep the gather short. Return guests to seats before the welcome opens.',
    ],
    sequence: [
      'Invite all guests to the stage.',
      'Take the opening group photo.',
      'Guests return to seats.',
      'MC begins the welcome.',
    ],
    notes: [
      'Do this before the MC welcome opening, not after the welcome has started.',
    ],
  },
  {
    id: 'welcome',
    time: '1:00 p.m.',
    duration: '5 minutes, first spoken item',
    title: 'MC welcome and orientation',
    lead: 'Kritika Saihgpaul',
    purpose: 'After the opening group photo, open the room, name the host, set accessibility and recording terms, then hand to the land acknowledgement.',
    openingExample:
      'Good afternoon. Welcome to the Canada2080 kickoff. Whether you are in this room or joining online, you are here for a founding conversation about the systems Canada must build, govern, finance, repair, and renew if it is to remain capable in 2080. I am Kritika Saihgpaul, and our host today is Francis Wang.',
    talkingPoints: [
      'Welcome the guests in the room and the online participants in one sentence.',
      'Name the host: Francis Wang.',
      'State accessibility: exits, washrooms, remote audio, and how to request support.',
      'State the recording rule: this event is being recorded, and a media team is moving through the room. If you prefer not to appear in the videos, tell a staff member so we can remove your likeness from the recorded materials.',
    ],
    sequence: [
      'Confirm the opening group photo is complete and guests are seated.',
      'Welcome guests. Name Francis as host.',
      'Accessibility.',
      'Recording rule.',
      'Hand to the land acknowledgement. Do not describe the afternoon yet.',
    ],
    notes: [
      'Protect the clock from the first minute.',
      'Do not preview panelist names unless the public listing has been approved.',
    ],
    guardrails: [
      'Invitation and attendance do not imply endorsement.',
      'Do not promise commercial outcomes, partnerships, or policy decisions.',
    ],
  },
  {
    id: 'ceremony',
    time: '1:00 p.m.',
    duration: 'Inside the opening block',
    title: 'Land acknowledgement',
    lead: 'Kritika Saihgpaul',
    purpose: 'Deliver the City of Markham Land Acknowledgement from the hall deck. Follow protocol only.',
    talkingPoints: [
      'Read the City of Markham official wording in full from the hall-deck slide.',
      'Do not improvise ceremony, song, language, or protocol.',
      'Pause after the acknowledgement, then introduce the municipal leaders for the Civic Welcome.',
    ],
    sequence: [
      'Deliver the City of Markham statement in full.',
      'Pause.',
      'Hand to the Civic Welcome by introducing the municipal leaders.',
    ],
    notes: [
      'Protocol only. Use the hall-deck statement. Do not expand beyond the approved wording.',
    ],
  },
  {
    id: 'civic',
    time: '1:05 p.m.',
    duration: '5 minutes',
    title: 'Civic Welcome',
    lead: 'Municipal leaders, introduced by Kritika Saihgpaul',
    purpose: 'After the land acknowledgement, the MC introduces the municipal leaders for a civic acknowledgment of the gathering.',
    openingExample:
      'Thank you. We are grateful to welcome this conversation in Markham: a city that has to keep making room for talent, infrastructure, culture, and long-term economic capability.',
    talkingPoints: [
      'If Frank Scarpitti is present, invite him first as the Mayor of Markham.',
      'Then invite Alan Ho as City Councillor of Markham, and as Chair, Culture & Economic Development Committee (Markham).',
      'Keep remarks non-partisan and short enough to protect the handoff to Francis.',
    ],
    sequence: [
      'Immediately after the land acknowledgement pause, begin the Civic Welcome.',
      'If Frank is present: MC invites Frank Scarpitti first, Mayor of Markham.',
      'Then MC invites Alan Ho, City Councillor of Markham and Chair, Culture & Economic Development Committee (Markham).',
      'If Frank is not present: MC invites Alan Ho with the titles above, then continues.',
      'Municipal leaders speak. They do not repeat the land acknowledgement.',
      'MC thanks them.',
      'MC then introduces Francis Wang for the Canada2080 vision.',
    ],
    notes: [
      'If neither municipal leader is available, MC moves directly to introducing Francis for the Canada2080 vision.',
      'Do not convert civic presence into an endorsement of Canada2080.',
    ],
  },
  {
    id: 'framing',
    time: '1:10 p.m.',
    duration: '10 minutes',
    title: 'Canada2080 vision',
    lead: 'Francis Wang',
    purpose: 'After the Civic Welcome, Francis states the Canada2080 vision, the evidence boundary, and the throughline that connects both panels.',
    talkingPointsHeading: 'Talking points',
    talkingPoints: ['Talking points TBD.'],
    sequence: [
      'MC introduces Francis Wang for the Canada2080 vision.',
      'Francis delivers the vision and framing.',
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
    speakers: [
      {
        name: 'Dr Sudarshana Bhattacharya',
        affiliation: 'Analyst',
        attendance: 'in-person',
        topic: 'Applied climate science.',
        bio: 'Analyst contributing applied climate research from her doctoral work at GGU.',
        note: 'Introduce as Analyst. Frame the contribution through doctoral work at GGU. Do not name an employer. Moves into Panel 1.',
      },
      {
        name: 'Dr Kimberly Yazzie',
        affiliation: 'University of British Columbia',
        attendance: 'remote',
        topic: 'Approved framing only: data governance, consent, and community benefit.',
        bio: 'Researcher contributing an approved perspective on consent, data stewardship, and accountable systems outside her institutional appointment.',
        note: 'Use her confirmed biography and speaking-outside-appointment disclaimer. Moves into Panel 1.',
      },
      {
        name: 'Erin Trochim',
        affiliation: 'Geospatial AI and applied data research',
        attendance: 'remote',
        topic: 'Place-based and geospatial resilience, cognitive onloading, comparative perspectives, and critical AI adoption.',
        bio: 'Researcher bringing a place-aware perspective on geospatial evidence, resilient capability, and critical AI adoption.',
        note: 'Do not use a United States university affiliation. Moves into Panel 1.',
      },
      {
        name: 'Sunita Kumari',
        affiliation: 'AI Researcher at UT Austin/COHUMAIN Labs',
        attendance: 'in-person',
        topic: 'Sovereign AI; AI governance including runtime governance; the why and how of AI safety and security.',
        bio: 'AI researcher at UT Austin/COHUMAIN Labs, attending in person. She is delivering the three-minute keynote on sovereign AI, runtime governance, and AI safety and security, including the topic supplied by Himanshu Joshi. Himanshu is not attending.',
        note: 'Keynote-only. It is permitted to mention her association with Himanshu Joshi and COHUMAIN Labs.',
      },
      {
        name: 'Pyn Lim',
        affiliation: 'ECAMS',
        attendance: 'remote',
        topic: 'Patient data sovereignty and fragmented health records. Frame the problem and need, not a product or clinic-efficiency pitch.',
        bio: 'Founder and education leader contributing a patient-centred perspective on continuity of care and data control.',
        note: 'Three to five minutes. Moves into Panel 1.',
      },
    ],
    sequence: [
      'MC names the set and the hard three-minute cap, except Pyn at three to five minutes.',
      'For each speaker: name, affiliation if provided, topic, then one sentence from the note if it helps the room.',
      'Sudarshana, Kimberly, Erin, Sunita, then Pyn.',
      'Use the block buffer for introductions and remote handoffs.',
    ],
    notes: [
      'Protect the order and hard caps.',
      'Sunita is keynote-only. Sudarshana, Kimberly, Erin, and Pyn move into Panel 1.',
    ],
    guardrails: [
      'Introduce Sudarshana as Analyst, contributing applied climate research from her doctoral work at GGU. Do not name an employer.',
      'Do not publicly attach cultural, Indigenous, institutional, or place-based framing to Kimberly or Erin beyond their approved wording.',
    ],
  },
  {
    id: 'panel-1',
    time: '1:40 p.m.',
    duration: '15 minutes',
    title: 'Panel 1: Sovereign AI, Data Governance, and Trustworthy Deployment',
    lead: 'MC with Sudarshana Bhattacharya, Kimberly Yazzie, Erin Trochim, and Pyn Lim',
    purpose: 'Move from AI pilots and policy language to the controls, consent, evidence, and runtime governance required for high-stakes deployment.',
    questions: [
      {
        kind: 'primary',
        label: 'Control and governance',
        question:
          'As AI moves from pilots into high-stakes use, what must remain under meaningful human, institutional, patient, or community control, and what governance must continue at runtime to make the system safe and trustworthy?',
      },
      {
        kind: 'primary',
        label: 'A distinctly Canadian first move',
        question:
          'What should Canada learn from international and place-based perspectives, and what practical first deployment would demonstrate trustworthy, useful, and context-appropriate AI?',
      },
      {
        kind: 'more',
        label: 'Experiment responsibly',
        question:
          'How can institutions move beyond reactive risk mitigation and create room for low-stakes experimentation without transferring risk to patients, communities, or the public?',
      },
      {
        kind: 'more',
        label: 'Set the evidence threshold',
        question:
          'What evidence should decision makers demand before calling an AI deployment safe, secure, trustworthy, or publicly beneficial?',
      },
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
      'Sunita does not join this panel.',
    ],
    guardrails: [
      'Do not treat presence as sectoral endorsement.',
    ],
  },
  {
    id: 'featured-2',
    time: '1:55 p.m.',
    duration: '20 minutes',
    title: 'Invited speakers on infrastructure, risk appetite, and domestic scale-up',
    lead: 'Barry Wylant, Yulia Korobkova, Greg Hart, Michael Donaldson, and Sebastien Gendron',
    purpose: 'Five short perspectives on domestic scale-up, compute capacity, future-ready places, innovation culture, and TransPod as a case in Canadian government risk.',
    speakers: [
      {
        name: 'Barry Wylant',
        affiliation: 'Associate Professor and Graduate Program Director, SAPL, University of Calgary',
        attendance: 'remote',
        topic: 'Canadian firms that had to sell to international companies to scale, using source-approved examples as an IP-exit and domestic scale-up case.',
        bio: "Barry Wylant is an Associate Professor and Graduate Program Director at SAPL, working with thesis students in the Master of Design Research, PhD, and Doctor of Design programmes. In his work and writings, Barry emphasizes the 'how' of design thinking. With extensive experience as an industrial designer and consultant, Barry explores the intersection of design, technology, and community impact. His design work has advanced innovation in various areas, including medical and accessibility devices, and consumer products. Barry contributes regularly to the University's e2i (evolve to innovate) programme, has been published in key international design journals, and is the co-editor of the book Enabling Solutions for Sustainable Living. Barry is an innovative thinker and his commitment to bringing a sense of thoughtfulness to the design process inspires a vision of design practices across disciplines shaping a brighter and more sustainable future.",
        note: 'Maybe, depending on health. Keynote-only. Confirm Sunday morning; if he cannot attend, skip the slot and give the recovered minutes to the remaining speakers or to Panel 2.',
      },
      {
        name: 'Yulia Korobkova',
        affiliation: 'Corgan',
        attendance: 'in-person',
        topic: 'Internal Canadian compute-capacity barriers, possible solutions, and a decades-scale path.',
        bio: 'Data Centers Studio Leader and Vice President contributing a practitioner perspective on domestic compute infrastructure.',
        note: 'Do not frame Yulia through a Canada-United States practice comparison. Moves into Panel 2.',
      },
      {
        name: 'Greg Hart',
        affiliation: 'Founder, Future Fit Cities · InceptionU / TransPod Advisory Board',
        attendance: 'in-person',
        topic: 'Stop Solving Problems. Future-ready places, transformation design, and risk-averse commercialization, including Future Fit Cities.',
        bio: 'Founder of Future Fit Cities; co-founder and facilitator at InceptionU. Contributes a systems perspective on innovation culture and long-horizon capability.',
        note: 'Slides titled Stop Solving Problems. Mention Future Fit Cities. Moves into Panel 2.',
      },
      {
        name: 'Dr Michael Donaldson',
        affiliation: 'DWA/Future Workshop',
        attendance: 'in-person',
        topic: 'Opportunity-enriched innovation culture; architecture, strategic design, and designed futures.',
        bio: 'Principal Architect and Designer, invited for perspective on fostering an opportunity-enriched innovation culture, to support a resilient future.',
        note: 'Use his preferred bio. Moves into Panel 2.',
      },
      {
        name: 'Sebastien Gendron',
        affiliation: 'TransPod',
        attendance: 'in-person',
        topic: 'TransPod as a case study in how the Canadian government approaches risk.',
        bio: 'Co-Founder and CEO contributing a deep-tech transportation and large-scale infrastructure delivery perspective.',
        note: 'Invited speaker immediately before Panel 2, then panelist. On the panel, the MC will ask how Canada enables and champions long-term infrastructure projects, combining the more-questions on changing the risk system and recognizing progress.',
      },
    ],
    sequence: [
      'MC names the shift from trustworthy deployment to national capacity.',
      'This is a 20-minute set for five speakers. Keep each to three minutes, with the remaining time for one-sentence intros and remote handoff.',
      'If Barry is confirmed: Barry, Yulia, Greg, Michael, then Sebastien.',
      'If Barry is not able to join, start with Yulia and keep the 20-minute window.',
      'Barry is keynote-only if present. Yulia, Greg, Michael, and Sebastien move into Panel 2.',
    ],
    notes: [
      'Sebastien is an invited speaker immediately before Panel 2, then a panelist.',
      'Barry is a maybe, depending on health. Do not treat him as confirmed until Sunday-morning word.',
      'If Barry cannot attend, give the recovered minutes to the remaining speakers or to Panel 2 rather than to open discussion.',
    ],
  },
  {
    id: 'panel-2',
    time: '2:15 p.m.',
    duration: '15 minutes',
    title: 'Panel 2: Building National Capacity: Infrastructure, Risk Appetite, and Domestic Scale-Up',
    lead: 'MC with Yulia Korobkova, Greg Hart, Michael Donaldson, and Sebastien Gendron',
    purpose: 'Test why Canadian knowledge, talent, and ventures fail to compound domestically, and identify the infrastructure and institutional choices that connect national capability.',
    questions: [
      {
        kind: 'primary',
        label: 'Diagnose the break',
        question:
          'Why does Canadian IP, talent, and venture capacity so often leave or sell before it compounds domestically, and which internal barrier must change first: risk culture, procurement, capital, infrastructure, or something else?',
      },
      {
        kind: 'primary',
        label: 'Start Monday',
        question:
          'If Canada were serious about building capacity now, what one infrastructure or institutional move should begin on Monday, and how would it connect compute, transportation, manufacturing, energy, talent, and place over the next decade?',
      },
      {
        kind: 'more',
        label: 'Recognize progress',
        question:
          'What concrete signal within the next five to ten years would demonstrate that Canada is compounding national capacity rather than producing isolated projects?',
      },
      {
        kind: 'more',
        label: 'Change the risk system',
        question:
          'How should procurement and capital reward experimentation and long-horizon infrastructure while preserving accountability?',
      },
    ],
    sequence: [
      'MC restates the purpose in one sentence.',
      'Ask the two primary questions.',
      'For Sebastien, ask how we enable and champion long-term infrastructure projects, drawing on Recognize progress and Change the risk system.',
      'Use one of the two more questions only if time remains.',
      'Close by naming one condition for capability to compound.',
    ],
    notes: [
      'Treat corridor and transportation examples as discussion prompts, not adopted policy.',
      'Sebastien has already given the TransPod risk case in the speaker set; the panel question should move to how Canada enables and champions such projects.',
    ],
  },
  {
    id: 'close',
    time: '2:30 p.m.',
    duration: '5 minutes',
    title: 'Closing synthesis and invitation',
    lead: 'Francis Wang, with MC handoff',
    purpose: 'Name the tensions, invite contribution, and hand into networking, photo ops, and show-and-tell.',
    talkingPointsHeading: 'Talking points',
    talkingPoints: [
      'Talking points TBD.',
      'Invite guests into networking and ask them to gather to the stage for a group photo during the networking session.',
    ],
    sequence: [
      'MC hands back to Francis.',
      'Synthesis, then invitation.',
      'MC thanks contributors and guests, invites everyone to networking, and notes the stage photo and Canada2080 props.',
      'End the programmed portion at 2:35.',
    ],
    notes: [
      'Do not announce partnerships, products, or follow-on events that are not approved.',
      'The stage photo happens in networking, not inside the five-minute close.',
    ],
  },
  {
    id: 'networking',
    time: '2:35 p.m.',
    duration: '25 minutes',
    title: 'Networking, photo ops, and show-and-tell',
    lead: 'Host team',
    purpose: 'Continue the conversation, gather for a stage photo, show Canada2080 props and posters, and book useful next steps.',
    talkingPoints: [
      'Invite all guests to gather to the stage for a group photo during networking.',
      'Show and tell the Canada2080 props and posters for photo ops and conversation.',
      'Set the screens to Canada2080 brand visuals for photo ops; keep brand slides on during the networking window.',
      'If anyone missed the banner earlier, they may still optionally sign the Canada2080 banner.',
      'Capture consented interests with a stated purpose.',
      'Protect remote guests with a short stay-on-the-line option, then close the meeting cleanly.',
    ],
    sequence: [
      'House lights up. Switch screens to Canada2080 brand for photo ops.',
      'Invite all guests to the stage for the group photo.',
      'Show and tell Canada2080 props and posters; leave them available for photos.',
      'Host team works the room with a follow-up list.',
      'Technical team ends recording and flags any likeness-removal requests for edit.',
    ],
    notes: [
      'Keep brand screens on for the photo window; do not leave residual panel questions on screen.',
      'Do not convert hallway discussion into public claims.',
      'A cultural welcome element belongs only if previously approved and separated from the technical programme.',
    ],
  },
];
