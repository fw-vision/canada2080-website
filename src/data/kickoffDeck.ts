export type DeckReveal = 'full' | 'step';

export type DeckLayout =
  | 'split'
  | 'text'
  | 'image-caption'
  | 'image-mosaic'
  | 'speaker-intro'
  | 'panel-hold'
  | 'keynote';

export type DeckCaptionRails = 'below' | 'above' | 'around';

export type DeckImage = {
  src: string;
  alt: string;
  caption?: string;
  credit: string;
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
  points: string[];
  note?: string;
};

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
  points: string[],
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
      'Land acknowledgment and ceremonial openings.',
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

export const kickoffDeckSlides: DeckSlide[] = [
  {
    id: 'hold',
    layout: 'split',
    reveal: 'full',
    kicker: 'Sunday, October 4, 2026 · Markham Ballroom',
    title: 'A future of abundance and resilience',
    image: {
      ...heroPool[0],
      caption: 'The long horizon has a present tense.',
    },
    points: [
      'Guest arrival from 12:30 p.m.',
      'Programme begins at 1:00 p.m. sharp.',
      'In person and online.',
    ],
  },
  {
    id: 'welcome',
    layout: 'text',
    reveal: 'step',
    kicker: '1:00 p.m. · Welcome',
    title: 'Welcome to the Canada2080 kickoff',
    points: [
      'Whether you are in this room or online, you are here to test how Canada builds systems that last.',
      'This event is being recorded. A media team is in the room. If you prefer not to appear, tell a staff member so we can remove your likeness.',
      'Civic welcome. Framing. Two invited-speaker sections. Two short panels. Then an invitation.',
      'There is no open audience Q&A. The work continues in conversation after 2:30.',
    ],
  },
  {
    id: 'ceremony',
    layout: 'image-caption',
    reveal: 'step',
    kicker: 'Opening · Place and relationship',
    title: 'We meet on lands with older relationships than this gathering',
    images: [heroPool[5]],
    captionRails: 'below',
    points: [
      'Before the working conversation, acknowledge the lands and the Nations whose relationships with this place precede us.',
      'Traditional and treaty lands of the Mississaugas of the Credit First Nation, and the traditional territory of the Anishinaabe, the Chippewa, the Haudenosaunee, and the Wendat peoples.',
      'These lands are covered by Treaty 13 and the Williams Treaties.',
      'This is a civic-form acknowledgment. Do not add names, stories, or protocol that have not been given.',
    ],
  },
  {
    id: 'civic-intro',
    layout: 'speaker-intro',
    reveal: 'full',
    kicker: '1:05 p.m. · Civic Welcome',
    title: 'Civic Welcome',
    role: 'Municipal representatives, if present',
    subtitle: 'A welcome to a long-horizon conversation in Markham',
    points: [
      'Capability is decided in places: housing, talent, infrastructure, and public value.',
    ],
  },
  {
    id: 'framing',
    layout: 'keynote',
    reveal: 'step',
    kicker: '1:10 p.m. · Francis Wang',
    title: 'Canada has the research foundation to lead',
    points: [
      'If a hospital, grid, laboratory, or northern link is to serve people in 2080, the work has a present tense.',
      'Four systemic Gaps: commercialization, talent and domestic opportunity, IP and decision rights, long-term investment.',
      'Education, industry, and governance. Durable capability forms where they intersect.',
      'We will distinguish facts, qualified claims, scenarios, hypotheses, and aspirations.',
      '2080 is a chosen direction for present decisions, not a forecast.',
    ],
  },
  {
    id: 'featured-1-intro',
    layout: 'speaker-intro',
    reveal: 'full',
    kicker: '1:20 p.m. · Invited speakers',
    title: 'Invited speakers on sovereign AI, data governance, and trustworthy deployment',
    role: 'Sudarshana · Kimberly · Erin · Sunita · Pyn',
    subtitle: '20 minutes including introductions and handoffs',
    points: [
      'Five short perspectives establish the operating context for Panel 1.',
    ],
  },
  {
    id: 'featured-1',
    layout: 'image-mosaic',
    reveal: 'step',
    kicker: 'Invited speakers',
    title: 'From pilots to trustworthy deployment',
    images: heroPool.slice(0, 4),
    imageColumns: 4,
    captionRails: 'around',
    points: [
      'Above: enterprise adoption needs operating governance, not only policy.',
      'Below: place, consent, runtime safety, and patient control shape trustworthy deployment.',
      'Below: practical sovereignty depends on meaningful decision rights.',
    ],
  },
  {
    id: 'panel-1',
    layout: 'panel-hold',
    reveal: 'step',
    kicker: '1:40 p.m. · Panel 1',
    title: 'Sovereign AI, Data Governance, and Trustworthy Deployment',
    subtitle: '15 minutes · Two primary questions',
    points: [
      'As AI moves into high-stakes use, what must remain under meaningful human, institutional, patient, or community control, and what governance must continue at runtime?',
      'What should Canada learn from international and place-based perspectives, and what practical first deployment would demonstrate trustworthy, useful, and context-appropriate AI?',
      'More: How can institutions create room for low-stakes experimentation without transferring risk?',
      'More: What evidence should decision makers demand before calling a deployment trustworthy?',
    ],
  },
  {
    id: 'featured-2-intro',
    layout: 'speaker-intro',
    reveal: 'full',
    kicker: '1:55 p.m. · Invited speakers',
    title: 'Invited speakers on infrastructure, risk appetite, and domestic scale-up',
    role: 'Barry · Yulia · Greg · Michael',
    subtitle: '15 minutes including introductions and handoffs',
    points: [
      'Domestic scale-up, compute, future-ready places, and innovation culture.',
    ],
  },
  {
    id: 'featured-2',
    layout: 'text',
    reveal: 'step',
    kicker: 'Invited speakers',
    title: 'What allows capability to compound here?',
    points: [
      'What do Canadian IP exits reveal about domestic scale-up?',
      'Which internal barriers constrain national compute capacity?',
      'What makes places and innovation cultures ready for long-horizon capability?',
      'What must change in Canada’s risk appetite?',
    ],
  },
  {
    id: 'panel-2',
    layout: 'panel-hold',
    reveal: 'step',
    kicker: '2:10 p.m. · Panel 2',
    title: 'Building National Capacity',
    subtitle: 'Infrastructure, risk appetite, and domestic scale-up',
    points: [
      'Why does Canadian IP, talent, and venture capacity so often leave or sell before it compounds domestically, and which internal barrier must change first?',
      'What one infrastructure or institutional move should begin on Monday, and how would it connect compute, transportation, manufacturing, energy, talent, and place?',
      'More: What signal would demonstrate that Canada is compounding national capacity?',
      'More: How should procurement and capital reward experimentation while preserving accountability?',
    ],
  },
  {
    id: 'close',
    layout: 'keynote',
    reveal: 'step',
    kicker: '2:25 p.m. · Closing',
    title: 'Attach an owner, a 90-day action, and a measure',
    points: [
      'Research becomes leadership only when it becomes capability, opportunity, and public value in Canada.',
      'Name the tensions heard, not a transcript and not an endorsement.',
      'Contribution lanes: evidence, capital, institutional capacity, operating knowledge, or a next conversation.',
      'Leave with one named next step.',
    ],
  },
  {
    id: 'hold-close',
    layout: 'split',
    reveal: 'full',
    kicker: '2:30 p.m. · Continue the conversation',
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
