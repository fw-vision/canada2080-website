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
        : 'Hold for the introduction and contribution unless an approved presenter deck is supplied.',
  }));
}

function panelSlides(
  id: string,
  time: string,
  title: string,
  purpose: string,
  people: DeckPerson[],
  questions = panelOne?.questions ?? [],
): DeckSlide[] {
  return questions.map((question, index) => ({
    id: `${id}-question-${index + 1}`,
    layout: 'panel-live',
    reveal: 'full',
    kicker: `${time} · ${question.kind === 'primary' ? 'Primary question' : 'Backup question'}`,
    title,
    subtitle: purpose,
    people,
    questionLabel: question.label,
    question: question.question,
    evidenceLabel: question.kind === 'primary' ? 'PRIMARY' : 'BACKUP',
    note: 'Keep this slide on screen while the panel answers. Advance only when the MC moves to the next question.',
  }));
}

const openingScript: DeckSlide[] = [
  {
    id: 'speech-opening-01',
    layout: 'script',
    reveal: 'full',
    kicker: 'Canada2080 Vision · Francis Wang',
    title: 'A kickoff, not the whole conversation',
    body: [
      'Good afternoon, folks joining in person and online, I thank you for coming today for the kickoff of the Canada 2080 initiative. Normally, to launch something at this scale will require a multi-day event. Where each of the guests I have invited today has a much longer dedicated keynote, followed by hour-long panels to do this properly. However, As the name suggests. Canada 2080 is a long-horizon initiative. And my intention today, calling a kickoff, will be just to pull a gathering of people who believe in similar possibilities and to start conversations, and many more events to come. ',
    ],
  },
  {
    id: 'speech-opening-02',
    layout: 'script',
    reveal: 'full',
    kicker: 'ASPIRATION',
    title: 'Canada is the future of planet Earth',
    body: [
      'I have been thinking about bold ambitions, and claims; to rally behind and to put purpose with my struggles. For Canada to be one of the most prosperous nations by 2080; and to say that Canada is the future of planet Earth.',
    ],
  },
  {
    id: 'speech-opening-03',
    layout: 'script',
    reveal: 'full',
    kicker: 'Looking forward from today',
    title: 'Strong foundations',
    body: [
      "Let's begin by looking forward from today. Canada has strong foundations. From land, freshwater access, rare earth and biomaterials, clean power generation, to home of the most innovative education and research institutions in the world. We have the natural capital and a strong zero-to-one in almost everything.",
    ],
  },
  {
    id: 'speech-opening-04',
    layout: 'script',
    reveal: 'full',
    kicker: 'The conversion problem',
    title: 'But we have our issues',
    body: [
      'But we have our issues. Today, Canadian firms often struggle to commercialize and scale, resulting in intellectual property going to foreign corporations; we have our brain drain issues where educated folks leave Canada for opportunities elsewhere. And we sell our raw materials instead of building the capabilities and the supply chains for a thriving local economy.',
    ],
  },
  {
    id: 'speech-opening-05',
    layout: 'script',
    reveal: 'full',
    kicker: 'Capability and value',
    title: 'What remains here?',
    body: [
      "The American industrialists are smart; back then, they built all these oil pipelines such that the industries stayed in America. Today, the smartest entrepreneurs and innovators flock to the Bay Area, make the big bucks, and then sometimes they feel like it's time to contribute, and they bring money back; to build more training institutions that ends up building talents in Canada to funnel elsewhere in the world. We are trading our intellectual culture and our resources; VALUE; away for cheap money. Making us specialized as a plantation for the world without properly and deliberately building up the infrastructure for ourselves. ",
    ],
  },
  {
    id: 'speech-opening-06',
    layout: 'script',
    reveal: 'full',
    kicker: 'Opportunity',
    title: 'Big ambitions are feasible',
    body: [
      "BUT, we ARE rich in this zero-to-one and opportunities lie in front of us; to build resilient living systems, bringing back manufacturing and an integrated supply chain, we can make our own compute chips, although it'll probably be quantum chips by that point. It took Taiwan 40 years to become a leader in chip manufacturing. These big, hairy, ambitious things are feasible if we aim for them.",
    ],
  },
  {
    id: 'speech-opening-07',
    layout: 'script',
    reveal: 'full',
    kicker: 'FRANCIS WANG SCENARIO / ADVOCACY INFERENCE',
    title: 'Look backwards from the future',
    body: [
      "Now, let's look backwards from the future. Canada IS the future of this planet. By 2080, 3.8 billion people will be living outside of the human climate niche based on current models. These people need to go somewhere, and if you look at the world map (equal earth projects, recently adopted by UN), there isn't a lot of land in the Southern Hemisphere. Climate-based migration will move northward; to countries are not as affected by rising coastlines. ",
    ],
    evidenceLabel: 'SCENARIO / INFERENCE',
  },
  {
    id: 'speech-opening-08',
    layout: 'script',
    reveal: 'full',
    kicker: 'FRANCIS WANG SCENARIO / ADVOCACY INFERENCE',
    title: 'That leaves Canada and Russia',
    body: [
      "That leaves Canada and Russia. To host the world's people What's interesting about this future is that some time along the way, there will be climate-based immigration and a corresponing increase in population in Canada. That enables business models and patterns in Asia which depend on higher population density that cannot be replicated here. And also we'll have the workforce to support that integrated supply chain.",
    ],
    evidenceLabel: 'SCENARIO / INFERENCE',
  },
  {
    id: 'speech-opening-09',
    layout: 'script',
    reveal: 'full',
    kicker: 'ACTUALIZE',
    title: 'What do we retain?',
    body: [
      "So there's a picture, what can we do to ACTUALIZE? A country can sell resources and still lose  the higher-value capability around them. It can export culture and still lose  the ownership, distribution, and learning  that allow culture to compound. It can produce brilliant research and still see  the decisions, production, and reinvestment  happen elsewhere.",
    ],
  },
  {
    id: 'speech-opening-10',
    layout: 'script',
    reveal: 'full',
    kicker: 'Capability · ownership · learning',
    title: 'Canada needs all four',
    body: [
      'The distinction is simple, even when the work is hard: Selling resources and culture brings revenue and exchange. Retaining capability  keeps the means to build and operate. Retaining ownership and decision rights  keeps the right to choose a direction. Retaining learning and reinvestment  keeps each success connected to the next generation of capacity. Canada needs all four.',
    ],
  },
  {
    id: 'speech-opening-11',
    layout: 'script',
    reveal: 'full',
    kicker: 'AI + infrastructure',
    title: 'Two tightly coupled conversations',
    body: [
      "Our first panel topic is on AI, and the second one is on infrastructure. I believe these two are tightly coupled, although we address these at different timescales. Since industrialization, everything we do at scale requires energy; AI is such a critical topic at this moment because with agentic AI, I will argue that all things that happen at scale from this point onwards will require compute; and with that, even greater demand on energy. I always tell people I don't know what the next fad is going to be. It could be quantum computing, reconfigurable surfaces in terms of some advanced material science. But whatever it is, it's going to need even MORE energy; even MORE compute, and whatever the new thing will be. That is building strong foundations.",
    ],
  },
  {
    id: 'speech-opening-12',
    layout: 'script',
    reveal: 'full',
    kicker: 'Energy and destiny',
    title: 'Controlling our energy means controlling our destiny',
    body: [
      'And is in alignment with our current national strategy, Carney stated in his forward guidance just this past month. and I quote: "Controlling our energy means controlling our destiny."',
    ],
  },
  {
    id: 'speech-opening-13',
    layout: 'script',
    reveal: 'full',
    kicker: 'Precision resilience',
    title: 'Resilient parts with cross-scale connections',
    body: [
      'We need to build capacity in Canada, in a way that is resilient; resilient systems are made of resilient parts with cross-scale connections. AI is enabling complex systems at small scale due to cheaper management. So perhaps we could build new neighborhoods; that generate their own energy, compute, produces its own food and manages water; and these resilient parts come together for a resilient society.',
    ],
  },
  {
    id: 'speech-opening-14',
    layout: 'script',
    reveal: 'full',
    kicker: 'From decentralized energy to decentralized compute',
    title: 'Capability in every household',
    body: [
      "I'll end this intro with some of my current efforts based on my experiences in decentralized energy; and bringing that to decentralized compute. Because I imagine this prosperous future where every household can manage some of that complexity. So that your family's health data, and financial information, and digitize private assets are on local compute in the household. While also providing the compute capacity to your connected systems for less sensitive payloads.",
    ],
  },
  {
    id: 'speech-opening-15',
    layout: 'script',
    reveal: 'full',
    kicker: 'Show of hands',
    title: 'Who remembers dial-up modems?',
    body: [
      "Show of hands: how many people remember the dial-up modems? It makes this very nostalgic connection noise, which I'll not replicate, but I could. It's noisy and takes forever, then you got to cable modems; and sometimes you have to unplug and replug them back in and wait before you're online. Why is it so slow?  ",
    ],
  },
  {
    id: 'speech-opening-16',
    layout: 'script',
    reveal: 'full',
    kicker: 'The physical internet',
    title: 'A concrete presence of something with no form',
    body: [
      "As a computer science graduate from Waterloo, I'll tell you what's fascinating about these things: every piece of those modems was a physical part of the internet. A concrete physical presence of something with no form. It has to communicate and join this complex network of billions of devices. So I understand why it takes some time. And I still complain that it's so slow. Because users don't care about that.",
    ],
  },
  {
    id: 'speech-opening-17',
    layout: 'script',
    reveal: 'full',
    kicker: 'Small steps',
    title: 'Let’s jump into AI and our guests',
    body: [
      "Why I bring that up, is that I see some younger folks, some parents with kids. If you bought for yourself or for your children these (getting very expensive) gaming machines. I thank you for investing in Canada's infrastructure and sovereign assets. You see, we have already started small steps. Let's jump into AI and our guests. Thank you.",
    ],
  },
];

const closingScript: DeckSlide[] = [
  {
    id: 'speech-close-01',
    layout: 'script',
    reveal: 'full',
    kicker: 'Closing Invitation · Francis Wang',
    title: 'Thank you',
    body: [
      "Thank you, Kritika. Thank you to all of our guest speakers for a barrage of information. Wow, time flew by. We are in Markham, one of my aunts has always told me that these events are always in English, and it's difficult for her. My parents are here too, and I know it's difficult for them to understand what I've been saying. ",
    ],
  },
  {
    id: 'speech-close-02',
    layout: 'script',
    reveal: 'full',
    kicker: 'English + 中文',
    title: 'Why this close is bilingual',
    body: [
      'So I will try to do this closing and invitations bilingually, that people can know how important this is, and how noble is our pursuit. And if you are willing to invest the time, also help do that in your own communities. 我燕姨一直说这些活动都是用英文讲的，她其实也听不太懂。 所以今天我就试试中英双开。 我小学三年级的语文水平啊，大家见笑了。 ',
    ],
  },
  {
    id: 'speech-close-03',
    layout: 'script',
    reveal: 'full',
    kicker: 'Go far, together',
    title: 'A common belief in a future',
    body: [
      'In the Conrad School of Business at Waterloo, there is this plaque framed that says "if you want to go fast, go alone. If you want to go far, go together." I believe that sums up today, undertaking an initiative of this magnitude requires coalitions, partnerships, and a common belief in a future to co-create and actualize, and to benefit from the values realized by that future manifesting to all those that struggled towards it.',
    ],
  },
  {
    id: 'speech-close-04',
    layout: 'script',
    reveal: 'full',
    kicker: '独行快，众行远',
    title: '共识的理想',
    body: [
      '我们滑铁卢大学的一个商学院里面有这么 一个 poster, 说 独行快，众行远。 我个人觉得这句话很好。 也很符合今天我们讲的那些东西。 要想把一个50年的远景 做出来不是一小群人可以办到的事情。 我们需要团体和合作 以及共识的理想去实现这些未来。 才能在这个未来 成真之后 能把他带来的财富给予 在实践路上的这些人。',
    ],
  },
  {
    id: 'speech-close-05',
    layout: 'script',
    reveal: 'full',
    kicker: 'GRIT + LUCK',
    title: 'Fortune favors the bold',
    body: [
      'Actualizing the future and building Canada into a strong, sovereign nation on the global stage. For all our excitement and passion, it\'s a long and arduous journey. It is difficult. It takes GRIT and LUCK, it\'s like the old saying that "fortune favors the bold." There\'s another phrase I like. I believe it\'s actually a Western idiom: "Better run than curse the road." and honestly, it sounds a lot cooler in Chinese.',
    ],
  },
  {
    id: 'speech-close-06',
    layout: 'script',
    reveal: 'full',
    kicker: 'Providence',
    title: 'Favoured by persistence',
    body: [
      'Providence favors those who persist despite failures, continue despite adversity, and still carry on despite being tired. They are favoured. WE are favoured, because we have a type of resilience, that comes having deeper purpose, a "why" that propels us to press onwards and be restless in our pursuits. So difficult as it is, difficulty itself is of no concern. Because we knew about the difficulties before we started.',
    ],
  },
  {
    id: 'speech-close-07',
    layout: 'script',
    reveal: 'full',
    kicker: '难，不是问题',
    title: '上天眷恋那些继续的人',
    body: [
      '我们这次打出这么大的口号，要把加拿大这个国家 做成世界强国。难。真的很难。 我们需要很大的韧性。而且光是韧性还远远不够，我们还需要运气。但话说回来了，有些运气是可以人为的。 上天眷恋什么样的人呢？上天眷恋那些 失败后还能继续的人 那些 受挫折但仍然坚持的人 和那些累，但脚却停不下来的人 这些人会被眷恋，因为这些人他们停不下来。他们停不下来，是因为他们背后有更大的 意志 和 理想 驱动着他们。',
    ],
  },
  {
    id: 'speech-close-08',
    layout: 'script',
    reveal: 'full',
    kicker: 'Better run than curse the road',
    title: '风雨兼程，笃行不怠',
    body: [
      '所以 难 不是问题。因为我们在启程的时候就已经知道这条路很难了。 "Better run than curse the road." 与其感慨路难行，不如即刻出发。让我们风雨兼程，笃行不怠。 也祝我们 一往无前，所向披靡！',
    ],
  },
  {
    id: 'speech-close-09',
    layout: 'script',
    reveal: 'full',
    kicker: 'We, the North',
    title: 'Winter will pass',
    body: [
      '"Better run than curse the road." We, the North, are a strong people. We know about tough winters, how to be resourceful, how to keep stock, how to provide for one another in tough times, for when the table turns and we need help; it takes a community. but winter will pass, and we will welcome; SPRING.',
    ],
  },
  {
    id: 'speech-close-10',
    layout: 'script',
    reveal: 'full',
    kicker: 'Invitation',
    title: 'Join this initiative',
    body: [
      'I invite all of you, to join in this initiative, and together - We will build a sustainable, abundant, and resilient Canada! Thank you!',
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
  {
    id: 'welcome',
    layout: 'text',
    reveal: 'step',
    kicker: '1:00 p.m. · Welcome',
    title: 'Welcome to the Canada2080 kickoff',
    points: [
      'Welcome to guests in the room and joining online.',
      'Our host today is Francis Wang. Our co-host is William Yao.',
      'Accessibility: exits, washrooms, remote audio, and how to request support.',
      'This event is being recorded. A media team is in the room. If you prefer not to appear, tell a staff member so we can remove your likeness.',
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
    role: 'Municipal leaders · introduced by Kritika Saihgpaul',
    subtitle: 'A welcome to a long-horizon conversation in Markham',
    points: [
      'If present: Frank Scarpitti, Mayor of Markham, first.',
      'Then Alan Ho, City Councillor of Markham and Chair, Culture & Economic Development Committee (Markham).',
      'Thank them, then introduce Francis for the Canada2080 vision.',
    ],
  },
  ...openingScript,
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
    panelOne?.questions,
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
    panelTwo?.questions,
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
