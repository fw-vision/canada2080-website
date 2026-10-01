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
      'Give the shape of the afternoon: civic welcome, a short framing, two featured sets, two panels, then a close and invitation.',
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
    duration: 'Up to 10 minutes',
    title: 'Civic Welcome',
    lead: 'Civic representatives, if present',
    purpose: 'A civic acknowledgment of the gathering and the municipal context. Keep the public itinerary role-based until confirmation is complete.',
    openingExample:
      'Thank you. We are grateful to welcome this conversation in Markham: a city that has to keep making room for talent, infrastructure, culture, and long-term economic capability.',
    talkingPoints: [
      'Thank the hosts and the people who travelled or joined remotely.',
      'Locate the gathering in Markham and York Region without turning the item into a policy announcement.',
      'Name why a long-horizon conversation belongs in a municipal room: housing, talent, infrastructure, and public value are decided in places.',
      'Keep remarks non-partisan and short enough to protect the 1:15 handoff.',
    ],
    sequence: [
      'MC introduces Civic Welcome without over-claiming titles if any remain unconfirmed.',
      'One or two civic voices, or one voice if the other is unavailable.',
      'MC thanks them and moves to Francis at 1:15.',
    ],
    notes: [
      'Retain the item even if only one representative is available.',
      'Do not convert civic presence into an endorsement of Canada2080.',
    ],
  },
  {
    id: 'framing',
    time: '1:15 p.m.',
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
      'Bridge to Featured Set 1: the immediate investment case.',
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
    time: '1:25 p.m.',
    duration: '10 minutes',
    title: 'Featured perspectives: the immediate investment case',
    lead: 'Confirmed contributors only',
    purpose: 'Two short perspectives that introduce the technical, institutional, or resilience question behind Panel 1.',
    talkingPoints: [
      'Private and sovereign AI need: what privacy, control, continuity, or public-interest need makes this a present investment question?',
      'Distributed compute and energy: what is the smallest credible investment that creates local capability, learning, and resilience?',
      'Physical delivery: what site, energy, cooling, connectivity, construction, or operating choices make a compute proposal buildable?',
    ],
    sequence: [
      'MC names the set and the time limit: three to five minutes each.',
      'Contributor 1, then Contributor 2.',
      'No debate yet. The panel tests the claims.',
      'Featured contributors may sit for Panel 1 but should not repeat their full remarks.',
    ],
    notes: [
      'Preferred planning lenses, subject to confirmation: physical delivery, applied data and resilience, and data stewardship with approved framing only.',
      'Assign at most two voices. Do not fill the set because someone is available.',
    ],
    guardrails: [
      'Do not imply a named data centre, software system, customer, or energy asset exists unless approved and evidenced.',
      'Do not promise privacy, security, cost savings, or employment outcomes.',
    ],
  },
  {
    id: 'panel-1',
    time: '1:35 p.m.',
    duration: '15 minutes',
    title: 'Panel 1: Sovereign AI and Private Compute',
    lead: 'MC plus up to three confirmed panelists',
    purpose: 'What Canada should build and govern now for privacy, local learning, operational resilience, and trusted deployment.',
    talkingPoints: [
      'Urgency: what immediate need makes sovereign or private AI a present investment question?',
      'Selective sovereignty: which layers should be governable or locally repairable?',
      'The stack: why consider distributed compute and distributed energy together?',
      'First move: what small demonstration creates learning without overbuilding?',
      'Evidence: what would make a proposal credible to an investor, customer, institution, or public-interest partner?',
    ],
    sequence: [
      'MC restates the panel purpose in one sentence.',
      'Questions 1 to 4 are the core sequence.',
      'Hold question 5 only if time remains.',
      'A featured contributor who already spoke receives only one central panel question.',
      'MC closes the panel by naming one tension to carry into the next set.',
    ],
    notes: [
      'Live format is 15 minutes. Prioritize three questions if the room is running long.',
      'Remote panelists need a named cue and a visible time card.',
    ],
    guardrails: [
      'No open audience Q&A.',
      'Do not treat presence as sectoral endorsement.',
    ],
  },
  {
    id: 'featured-2',
    time: '1:50 p.m.',
    duration: '10 minutes',
    title: 'Featured perspectives: from infrastructure to capacity',
    lead: 'Confirmed contributors only',
    purpose: 'A short bridge from technology investment to the people, institutions, and places that make capability stick.',
    openingExample:
      'What must a future-ready Canadian city or region put in place now so that AI, energy, infrastructure, talent, and institutions create enduring public value rather than isolated projects?',
    talkingPoints: [
      'Governance and delivery: what operating discipline turns a promising initiative into a deliverable programme?',
      'Enterprise adoption and capital: what must be true for organizations to fund and renew Canadian capability?',
      'Future-ready places and talent: what conditions make people and firms choose to build here for the long term?',
    ],
    sequence: [
      'MC names the shift: from control of systems to capacity that compounds.',
      'Two or three provocations of two to three minutes each.',
      'Each contributor ends with one condition the room should test after the kickoff.',
      'Move immediately into Panel 2.',
    ],
    notes: [
      'This is a bridge, not a second keynote block.',
      'Choose complementary lenses: delivery, adoption and capital, and place or design.',
    ],
  },
  {
    id: 'panel-2',
    time: '2:00 p.m.',
    duration: '15 minutes',
    title: 'Panel 2: Making Capability Stick',
    lead: 'MC plus up to three confirmed panelists',
    purpose: 'How Canada retains talent, builds delivery capacity, and turns projects into durable opportunity and reinvestment.',
    talkingPoints: [
      'Where does Canada most often lose capability between research, first deployment, production, and reinvestment?',
      'What work, ownership, learning, and advancement help talented people stay and build here?',
      'What must manufacturing, construction, and service partners have to adopt, repair, and renew advanced technology?',
      'Which institutional lever has the most leverage now: procurement, testbeds, work-integrated learning, patient capital, standards, or regional coordination?',
      'What 90-day step would deliberately build Canadian capacity rather than describe the problem?',
    ],
    sequence: [
      'MC restates the purpose in one sentence.',
      'Questions 1 to 4 are the core sequence.',
      'Hold question 5 if time remains; otherwise Francis can take it into the close.',
      'Close by naming one condition for capability to compound.',
    ],
    notes: [
      'Use examples and questions, not forecasts.',
      'Do not create a separate health panel inside this discussion.',
    ],
  },
  {
    id: 'close',
    time: '2:15 p.m.',
    duration: '15 minutes',
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
      'MC thanks contributors and guests, repeats the networking instruction, and ends the programmed portion at 2:30.',
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
