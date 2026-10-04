import {
  programmeBlocks,
  programmeHosts,
  programmeMeta,
  type ProgrammeSpeaker,
} from './kickoffProgramme';

export type DeckReveal = 'full' | 'step';

export type DeckLayout =
  | 'split'
  | 'text'
  | 'image-caption'
  | 'image-mosaic'
  | 'speaker-intro'
  | 'panel-hold'
  | 'keynote'
  | 'script'
  | 'statement'
  | 'bio'
  | 'panel-live';

export type DeckCaptionRails = 'below' | 'above' | 'around';

export type DeckRuby = {
  base: string;
  reading: string;
};

export type DeckRichText = Array<string | DeckRuby>;

export type DeckSource = {
  href: string;
  label: string;
};

export type DeckImage = {
  src: string;
  alt: string;
  caption?: string;
  credit: string;
};

export type DeckPerson = {
  name: string;
  role: string;
  affiliation?: string;
  attendance?: 'in-person' | 'remote';
  topic?: string;
  bio: string;
};

export type DeckSlide = {
  id: string;
  layout: DeckLayout;
  reveal: DeckReveal;
  kicker: string;
  title: string;
  subtitle?: string;
  role?: string;
  /** Single-image convenience field. Prefer `images` for multi-image layouts. */
  image?: DeckImage;
  /** One or more images for caption and mosaic layouts. */
  images?: DeckImage[];
  /** Columns per row for mosaic grids. Defaults by image count. */
  imageColumns?: number;
  /** Where captions sit relative to the shared image bounding box. */
  captionRails?: DeckCaptionRails;
  points?: string[];
  /** Continuous rich statement. Prefer this over points for ceremonial text-only slides. */
  body?: DeckRichText;
  person?: DeckPerson;
  people?: DeckPerson[];
  questionLabel?: string;
  question?: string;
  evidenceLabel?: string;
  source?: DeckSource;
  note?: string;
};

export function isDeckRuby(part: string | DeckRuby): part is DeckRuby {
  return typeof part === 'object' && 'base' in part && 'reading' in part;
}

export type DeckTemplateSpec = {
  id: string;
  layout: DeckLayout;
  name: string;
  purpose: string;
  whenToUse: string[];
  clickerBehaviour: string;
  backgroundAdvice: string;
  example: DeckSlide;
};

export function resolveSlideImages(slide: DeckSlide): DeckImage[] {
  if (slide.images && slide.images.length > 0) {
    return slide.images;
  }
  if (slide.image) {
    return [slide.image];
  }
  return [];
}

export function resolveImageColumns(count: number, requested?: number): number {
  if (count <= 0) {
    return 1;
  }
  if (requested && requested > 0) {
    return Math.min(requested, count);
  }
  if (count <= 3) {
    return count;
  }
  if (count <= 6) {
    return 3;
  }
  return 4;
}

export function splitCaptionRails(
  points: string[] = [],
  rails: DeckCaptionRails = 'below',
): { above: string[]; below: string[] } {
  if (rails === 'above') {
    return { above: points, below: [] };
  }
  if (rails === 'around') {
    const splitAt = Math.ceil(points.length / 2);
    return {
      above: points.slice(0, splitAt),
      below: points.slice(splitAt),
    };
  }
  return { above: [], below: points };
}

const heroPool: DeckImage[] = [
  {
    src: '/images/hero/toronto-lake.jpg',
    alt: 'Toronto skyline across a winter lake',
    credit: 'Filipe Freitas / Unsplash',
  },
  {
    src: '/images/hero/toronto-cn-tower.jpg',
    alt: 'Toronto towers and the CN Tower at golden hour',
    credit: 'Structural Photography / Unsplash',
  },
  {
    src: '/images/hero/ottawa-parliament.jpg',
    alt: 'Parliament Hill above the Ottawa River',
    credit: 'A.K. / Unsplash',
  },
  {
    src: '/images/hero/victoria-parliament.jpg',
    alt: 'British Columbia Parliament Buildings on the Inner Harbour',
    credit: 'QY Liu / Unsplash',
  },
  {
    src: '/images/hero/vancouver-dusk.jpg',
    alt: 'Downtown Vancouver and waterfront at dusk',
    credit: 'Albert Stoynov / Unsplash',
  },
  {
    src: '/images/hero/banff-moraine.jpg',
    alt: 'Moraine Lake in Banff National Park',
    credit: 'John Lee / Unsplash',
  },
  {
    src: '/images/hero/quebec-frontenac.jpg',
    alt: 'Château Frontenac at blue hour',
    credit: 'Wikimedia Commons',
  },
  {
    src: '/images/hero/peggys-cove.jpg',
    alt: "Peggy's Cove lighthouse",
    credit: 'Wikimedia Commons',
  },
];

export const deckTemplateSpecs: DeckTemplateSpec[] = [
  {
    id: 'split',
    layout: 'split',
    name: 'Split image and points',
    purpose: 'Anchor a segment with a dominant image while teleprompter points appear beside it.',
    whenToUse: [
      'Hold slides and arrival loops.',
      'Featured-set bridges where the image carries atmosphere.',
      'Any moment that needs both a visual and a short reading list.',
    ],
    clickerBehaviour: 'Step mode reveals one point at a time. Full mode shows the whole cluster.',
    backgroundAdvice: 'Use a strong photograph. Keep captions short. Do not stack more than four points.',
    example: {
      id: 'template-split',
      layout: 'split',
      reveal: 'step',
      kicker: 'Template · Split',
      title: 'Atmosphere on the left. Talking points on the right.',
      image: heroPool[0],
      points: [
        'Use this when the room needs a visual hold.',
        'Reveal one point as each idea is covered.',
        'Keep the image large enough to read from the back.',
      ],
      note: 'Best for hold, arrival, and featured-set atmosphere.',
    },
  },
  {
    id: 'text',
    layout: 'text',
    name: 'Full-bleed teleprompter',
    purpose: 'Fill the entire slide with display-font talking points so the screen becomes the prompt.',
    whenToUse: [
      'Land acknowledgement and ceremonial openings.',
      'Key framing sentences that should dominate the room.',
      'Closing invitation language.',
    ],
    clickerBehaviour: 'Each click reveals the next line. The title stays as the throughline.',
    backgroundAdvice: 'No photograph. Dark ink field only. Do not exceed five lines.',
    example: {
      id: 'template-text',
      layout: 'text',
      reveal: 'step',
      kicker: 'Template · Text',
      title: 'Research becomes leadership only when it becomes capability at home.',
      points: [
        'Open with one sentence the room can hold.',
        'Reveal the next line only when you are ready to speak it.',
        'Use this when the image would distract from the claim.',
        'End with a practical invitation, not a slogan.',
      ],
      note: 'Preferred for ceremony, framing, and close.',
    },
  },
  {
    id: 'image-caption',
    layout: 'image-caption',
    name: 'Centered image with scrolling captions',
    purpose: 'Centre one photograph in a fixed bounding box and scroll captions underneath as each major point is covered.',
    whenToUse: [
      'Moments of pause between speakers.',
      'Visual meditation during a short provocation.',
      'Place-based storytelling without a dense side column.',
    ],
    clickerBehaviour: 'The image stays fixed. Captions replace one another at the bottom.',
    backgroundAdvice:
      'Keep a fixed image box. Photos use a collage crop (cover) so they fill the box without stretching.',
    example: {
      id: 'template-image-caption',
      layout: 'image-caption',
      reveal: 'step',
      kicker: 'Template · Image caption',
      title: 'Place first. Caption second.',
      images: [heroPool[5]],
      captionRails: 'below',
      points: [
        'Acknowledge the place before the argument.',
        'Capability is decided in landscapes, cities, and institutions.',
        'Pause. Let the image do the work while you speak.',
      ],
      note: 'Single image fills the shared bounding box with a cover crop.',
    },
  },
  {
    id: 'image-mosaic',
    layout: 'image-mosaic',
    name: 'Multi-image mosaic with surrounding captions',
    purpose:
      'Keep the same image bounding box as the single-image layout, then arrange one or many photos in a collage grid with captions above and below.',
    whenToUse: [
      'Contributor or place mosaics.',
      'Comparing several sites, systems, or regional examples.',
      'Any moment that needs more than one photograph without leaving the caption pattern.',
    ],
    clickerBehaviour:
      'Captions step around the fixed image box. Above-rail lines reveal first, then below-rail lines.',
    backgroundAdvice:
      'Set imageColumns for the row length. Eight images at four columns make two rows. Cells fill by cover crop, never stretch.',
    example: {
      id: 'template-image-mosaic',
      layout: 'image-mosaic',
      reveal: 'step',
      kicker: 'Template · Image mosaic',
      title: 'One bounding box. Many contained images.',
      images: heroPool,
      imageColumns: 4,
      captionRails: 'around',
      points: [
        'Above: the mosaic holds regional place references in one frame.',
        'Above: each photo fills its cell without stretching.',
        'Below: captions continue under the same fixed bounding box.',
        'Below: change imageColumns to reshape one row or many.',
      ],
      note: 'Example uses eight images at four columns over two rows, collage-cropped to fit.',
    },
  },
  {
    id: 'speaker-intro',
    layout: 'speaker-intro',
    name: 'Speaker or contributor intro',
    purpose: 'Introduce a speaker, featured contributor, or remote guest with name, role, and one framing line.',
    whenToUse: [
      'Before each invited-speaker contribution.',
      'Before a remote guest joins.',
      'When the MC hands the floor.',
    ],
    clickerBehaviour: 'Usually full reveal. Optional step if there are two short framing lines.',
    backgroundAdvice: 'No photo unless approved. Keep the name enormous. Role and one sentence only.',
    example: {
      id: 'template-speaker-intro',
      layout: 'speaker-intro',
      reveal: 'full',
      kicker: 'Template · Speaker intro',
      title: 'Yulia Korobkova',
      role: 'Data-centre architecture and infrastructure',
      subtitle: 'What makes a compute proposal buildable and maintainable?',
      points: [
        'Physical delivery is the first test of sovereign ambition.',
      ],
      note: 'Confirm name, title, and topic before public use.',
    },
  },
  {
    id: 'panel-hold',
    layout: 'panel-hold',
    name: 'Panel hold background',
    purpose: 'Give the hall a quiet, readable hold while a panel is live. Questions can step in as the MC asks them.',
    whenToUse: [
      'Throughout Panel 1 and Panel 2.',
      'When remote speakers are on camera and the slide should not compete.',
      'When the MC needs the next question visible to the room.',
    ],
    clickerBehaviour: 'Step through the question sequence. Keep the panel title fixed.',
    backgroundAdvice: 'Minimal. No busy photography. Prefer a dark field with one restrained image if needed.',
    example: {
      id: 'template-panel-hold',
      layout: 'panel-hold',
      reveal: 'step',
      kicker: 'Template · Panel hold',
      title: 'Sovereign AI, Data Governance, and Trustworthy Deployment',
      subtitle: 'Panel 1 · 15 minutes',
      points: [
        'What must remain under meaningful human, institutional, patient, or community control, and what governance must continue at runtime?',
        'What should Canada learn from international and place-based perspectives, and what practical first deployment would demonstrate trustworthy and context-appropriate AI?',
        'More: How can institutions experiment without transferring risk?',
        'More: What evidence should decision makers demand before calling a deployment trustworthy?',
      ],
      note: 'During discussion, leave the active question on screen.',
    },
  },
  {
    id: 'keynote',
    layout: 'keynote',
    name: 'Keynote framing block',
    purpose: 'Carry a host or keynote segment with a large title and stepped teleprompter lines across the full field.',
    whenToUse: [
      'Francis Wang opening and closing.',
      'Any 8 to 12 minute framing block.',
      'Moments that need teleprompter density without an image.',
    ],
    clickerBehaviour: 'Step through the argument. Title remains as the spine.',
    backgroundAdvice: 'Text only. Display font throughout. Leave generous margins.',
    example: {
      id: 'template-keynote',
      layout: 'keynote',
      reveal: 'step',
      kicker: 'Template · Keynote',
      title: 'Canada has the research foundation to lead',
      points: [
        'If a hospital, grid, laboratory, or northern link is to serve people in 2080, the work has a present tense.',
        'Four Gaps: commercialization, talent and opportunity, IP and decision rights, long-term investment.',
        'Education, industry, and governance. Capability forms where they intersect.',
        '2080 is a chosen direction for present decisions, not a forecast.',
      ],
      note: 'Use for the host framing and closing synthesis.',
    },
  },
];

const blockById = new Map(programmeBlocks.map((block) => [block.id, block]));
const civic = blockById.get('civic');
const featuredOne = blockById.get('featured-1');
const featuredTwo = blockById.get('featured-2');
const panelOne = blockById.get('panel-1');
const panelTwo = blockById.get('panel-2');
const allSpeakers = [...(featuredOne?.speakers ?? []), ...(featuredTwo?.speakers ?? [])];

function toDeckPerson(speaker: ProgrammeSpeaker): DeckPerson {
  return {
    name: speaker.name,
    role: speaker.topic,
    affiliation: speaker.affiliation,
    attendance: speaker.attendance,
    topic: speaker.topic,
    bio: speaker.bio,
  };
}

function findSpeaker(name: string): DeckPerson {
  const speaker = allSpeakers.find((item) => item.name === name);
  if (!speaker) {
    throw new Error(`Missing kickoff speaker: ${name}`);
  }
  return toDeckPerson(speaker);
}

function biographySlides(
  prefix: string,
  speakers: ProgrammeSpeaker[] = [],
): DeckSlide[] {
  return speakers.map((speaker, index) => ({
    id: `${prefix}-${index + 1}`,
    layout: 'bio',
    reveal: 'full',
    kicker: `${speaker.attendance === 'remote' ? 'Remote contributor' : 'In-person contributor'} · Introduced by Kritika Saihgpaul`,
    title: speaker.name,
    person: toDeckPerson(speaker),
    note:
      speaker.attendance === 'remote'
        ? 'Hold for the introduction, then cut to the remote camera or screen share. Return here after the contribution.'
        : 'Hold for the introduction and contribution, then cut to the presenter deck when supplied.',
  }));
}

function panelSlides(
  id: string,
  time: string,
  title: string,
  purpose: string,
  people: DeckPerson[],
): DeckSlide[] {
  return [{
    id: `${id}-live`,
    layout: 'panel-live',
    reveal: 'full',
    kicker: `${time} · Live panel`,
    title,
    subtitle: purpose,
    people,
    note: 'Keep this roster slide on screen throughout the panel.',
  }];
}

const visionSlides: DeckSlide[] = [
  {
    id: 'vision-bold-ambitions',
    layout: 'keynote',
    reveal: 'step',
    kicker: 'Canada2080 Vision · Francis Wang',
    title: 'Bold ambitions',
    points: [
      'Canada: one of the most prosperous nations by 2080.',
      'Canada is the future of planet Earth.',
    ],
    evidenceLabel: 'ASPIRATION',
  },
  {
    id: 'vision-now-forward',
    layout: 'keynote',
    reveal: 'step',
    kicker: 'Looking forward from today',
    title: 'Now → Forward',
    role: 'Strong foundations',
    points: [
      'Land and freshwater',
      'Rare earths and biomaterials',
      'Clean power generation',
      'World-leading education and research',
      'Natural capital',
      'Strong zero-to-one capability',
    ],
  },
  {
    id: 'vision-backcast',
    layout: 'keynote',
    reveal: 'step',
    title: 'Backcast ← Future',
    points: [
      'By 2080, 3.8 billion people will be living outside the human climate niche based on current models.',
      'Climate-based migration will move northward.',
      'Canada must prepare to host a larger share of the world’s people.',
      'Population growth can support denser systems, integrated supply chains, and the workforce to operate them.',
    ],
    kicker: 'FRANCIS WANG SCENARIO / ADVOCACY INFERENCE',
    evidenceLabel: 'SCENARIO / INFERENCE',
  },
  {
    id: 'vision-energy-compute-next',
    layout: 'keynote',
    reveal: 'step',
    kicker: 'AI + infrastructure',
    title: 'Energy, Compute, Next',
    points: [
      'Since industrialization, everything we do at scale requires energy.',
      'With agentic AI, everything we do at scale will require compute.',
      'Whatever comes next will require even more energy and even more compute.',
    ],
  },
  {
    id: 'vision-energy-destiny',
    layout: 'image-caption',
    reveal: 'step',
    kicker: 'Mark Carney · Forward Guidance: A Stronger Canada',
    title: 'Energy and destiny',
    images: [
      {
        src: '/images/kickoff/energy-destiny.jpg',
        alt: 'Controlling our energy means controlling our destiny',
        credit: 'Forward Guidance: A Stronger Canada',
      },
    ],
    captionRails: 'below',
    points: [
      '“Controlling our energy means controlling our destiny.”',
    ],
  },
  {
    id: 'vision-complex-living-neighbourhoods',
    layout: 'keynote',
    reveal: 'step',
    kicker: 'Precision resilience',
    title: 'Complex Living Neighbourhoods',
    points: [
      'Generate their own energy',
      'Provide local compute',
      'Produce food',
      'Manage water',
      'Resilient parts · cross-scale connections · resilient society',
    ],
  },
  {
    id: 'vision-physical-internet',
    layout: 'image-mosaic',
    reveal: 'full',
    kicker: 'Small steps · physical infrastructure',
    title: 'Dial-up → Cable → Compute',
    images: [
      {
        src: '/images/kickoff/dialup-modems.jpg',
        alt: 'A group of dial-up modems',
        credit: 'Dial-up modems',
      },
      {
        src: '/images/kickoff/cable-modems.jpg',
        alt: 'Cable modems shown from the front and back',
        credit: 'Cable modems',
      },
      {
        src: '/images/kickoff/gaming-pc.jpg',
        alt: 'A modern gaming PC with visible compute hardware',
        credit: 'Gaming PC',
      },
    ],
    imageColumns: 3,
    captionRails: 'below',
    points: ['Every device is a physical part of the network.'],
  },
];

const closingScript: DeckSlide[] = [
  {
    id: 'closing-go-far-together',
    layout: 'image-caption',
    reveal: 'full',
    kicker: '',
    title: '',
    images: [
      {
        src: '/images/kickoff/fast-far.jpg',
        alt: 'Framed multilingual poster reading: If you want to go fast, go alone. If you want to go far, go together.',
        credit: 'Conrad School of Entrepreneurship and Business · University of Waterloo',
      },
    ],
    points: [],
  },
  {
    id: 'closing-better-run',
    layout: 'statement',
    reveal: 'full',
    kicker: '',
    title: '',
    body: [
      'Better run than curse the road.',
    ],
  },
  {
    id: 'closing-invitation',
    layout: 'keynote',
    reveal: 'full',
    kicker: 'Invitation',
    title: 'Join this initiative',
    points: [
      'Together, we will build a sustainable, abundant, and resilient Canada.',
    ],
  },
];

export const kickoffDeckSlides: DeckSlide[] = [
  {
    id: 'hold',
    layout: 'split',
    reveal: 'full',
    kicker: `${programmeMeta.date} · ${programmeMeta.venue}`,
    title: 'A future of abundance and resilience',
    image: {
      ...heroPool[0],
      caption: 'The long horizon has a present tense.',
    },
    points: [
      `Guest arrival from ${programmeMeta.arrival}`,
      `Programme begins at ${programmeMeta.start}`,
      'In person and online.',
    ],
  },
  ...programmeHosts.map<DeckSlide>((host, index) => ({
    id: `host-${index + 1}`,
    layout: 'bio',
    reveal: 'full',
    kicker: 'Host team · Introduced by Kritika Saihgpaul',
    title: host.name,
    person: {
      name: host.name,
      role: host.role,
      affiliation: host.affiliation,
      bio: host.bio,
    },
  })),
  {
    id: 'ceremony',
    layout: 'text',
    reveal: 'full',
    kicker: '1:00 p.m. · Land acknowledgement',
    title: 'Land acknowledgement',
    points: [],
    body: [
      'We begin today by acknowledging the traditional territories of Indigenous peoples and their commitment to stewardship of the land. We acknowledge the communities in circle. The North, West, South and Eastern directions, and ',
      { base: 'Haudenosaunee', reading: 'hoe-den-oh-SHOW-nee' },
      ', ',
      { base: 'Huron-Wendat', reading: 'HYUR-on WEN-dat' },
      ', ',
      { base: 'Anishnabeg', reading: 'ah-nish-NAH-beg' },
      ', ',
      { base: 'Seneca', reading: 'SEN-ih-kuh' },
      ', ',
      { base: 'Chippewa', reading: 'CHIP-uh-wah' },
      ', and the ',
      { base: 'Mississaugas', reading: 'miss-ih-SAW-guz' },
      ' of the Credit peoples. We share the responsibility with the caretakers of this land to ensure the dish is never empty and to restore relationships that are based on peace, friendship, and trust. We are committed to reconciliation, partnership and enhanced understanding.',
    ],
    source: {
      href: 'https://www.markham.ca/about-the-city-of-markham/diversity-equity-inclusion-and-accessibility/city-of-markham-land-acknowledgement',
      label: 'City of Markham Land Acknowledgement',
    },
  },
  {
    id: 'civic-intro',
    layout: 'speaker-intro',
    reveal: 'full',
    kicker: '1:05 p.m. · Civic Welcome',
    title: 'Civic Welcome',
    subtitle: civic?.purpose,
    points: [],
  },
  ...visionSlides,
  {
    id: 'featured-1-intro',
    layout: 'speaker-intro',
    reveal: 'full',
    kicker: '1:20 p.m. · Invited speakers',
    title: featuredOne?.title ?? 'Sovereign AI, Data Governance, and Trustworthy Deployment',
    role: featuredOne?.lead,
    subtitle: featuredOne?.purpose,
    points: ['Five short perspectives establish the operating context for Panel 1.'],
  },
  ...biographySlides('featured-1-speaker', featuredOne?.speakers),
  ...panelSlides(
    'panel-1',
    panelOne?.time ?? '1:40 p.m.',
    panelOne?.title ?? 'Panel 1',
    panelOne?.purpose ?? '',
    [
      findSpeaker('Sudarshana Bhattacharya'),
      findSpeaker('Dr Kimberly Yazzie'),
      findSpeaker('Erin Trochim'),
      findSpeaker('Pyn Lim'),
    ],
  ),
  {
    id: 'featured-2-intro',
    layout: 'speaker-intro',
    reveal: 'full',
    kicker: '1:55 p.m. · Invited speakers',
    title: featuredTwo?.title ?? 'Building National Capacity',
    role: featuredTwo?.lead,
    subtitle: featuredTwo?.purpose,
    points: ['Five short perspectives establish the operating context for Panel 2.'],
  },
  ...biographySlides('featured-2-speaker', featuredTwo?.speakers),
  ...panelSlides(
    'panel-2',
    panelTwo?.time ?? '2:15 p.m.',
    panelTwo?.title ?? 'Panel 2',
    panelTwo?.purpose ?? '',
    [
      findSpeaker('Yulia Korobkova, OAA, AAA, AANB, LEED'),
      findSpeaker('Greg Hart'),
      findSpeaker('Dr Michael Donaldson'),
      findSpeaker('Sebastien Gendron'),
    ],
  ),
  ...closingScript,
  {
    id: 'hold-close',
    layout: 'split',
    reveal: 'full',
    kicker: 'After the closing · Continue the conversation',
    title: 'Canada2080',
    image: {
      ...heroPool[5],
      caption: 'Actualizing an abundant, resilient, sustainable, and sovereign future for Canada.',
    },
    points: [
      'Networking and follow-up until 3:00 p.m.',
      'canada2080.org',
      '#canada2080',
    ],
  },
];
