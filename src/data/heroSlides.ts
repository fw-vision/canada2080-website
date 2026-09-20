export type HeroSlide = {
  src: string;
  alt: string;
  subject: string;
  place: string;
  credit: string;
};

/** Iconic Canadian places for the homepage hero. Rights noted in public/images/hero/CREDITS.md */
export const heroSlides: HeroSlide[] = [
  {
    src: '/images/hero/toronto-lake.jpg',
    alt: 'Toronto skyline and CN Tower across a partially frozen Lake Ontario with a Canadian flag in the foreground',
    subject: 'CN Tower across frozen Lake Ontario',
    place: 'Toronto, Ontario',
    credit: 'Filipe Freitas / Unsplash',
  },
  {
    src: '/images/hero/toronto-cn-tower.jpg',
    alt: 'Toronto downtown towers and the CN Tower at golden hour',
    subject: 'Downtown skyline and CN Tower at golden hour',
    place: 'Toronto, Ontario',
    credit: 'Structural Photography / Unsplash',
  },
  {
    src: '/images/hero/ottawa-parliament.jpg',
    alt: 'Aerial view of Parliament Hill above the Ottawa River',
    subject: 'Parliament Hill above the Ottawa River',
    place: 'Ottawa, Ontario',
    credit: 'A.K. / Unsplash',
  },
  {
    src: '/images/hero/victoria-parliament.jpg',
    alt: 'British Columbia Parliament Buildings on the Inner Harbour with a Canadian flag flying',
    subject: 'Parliament Buildings on the Inner Harbour',
    place: 'Victoria, British Columbia',
    credit: 'QY Liu / Unsplash',
  },
  {
    src: '/images/hero/vancouver-dusk.jpg',
    alt: 'Aerial dusk view over downtown Vancouver and the waterfront rail yards',
    subject: 'Downtown and waterfront at dusk',
    place: 'Vancouver, British Columbia',
    credit: 'Albert Stoynov / Unsplash',
  },
  {
    src: '/images/hero/banff-moraine.jpg',
    alt: 'Moraine Lake and the Valley of the Ten Peaks in Banff National Park',
    subject: 'Moraine Lake and the Valley of the Ten Peaks',
    place: 'Banff, Alberta',
    credit: 'John Lee / Unsplash',
  },
  {
    src: '/images/hero/quebec-frontenac.jpg',
    alt: 'Château Frontenac illuminated at blue hour above the streets of Old Quebec',
    subject: 'Château Frontenac at blue hour',
    place: 'Québec City, Quebec',
    credit: 'Wikimedia Commons',
  },
  {
    src: '/images/hero/peggys-cove.jpg',
    alt: "Peggy's Cove lighthouse on the granite shore of Nova Scotia",
    subject: "Peggy's Cove lighthouse",
    place: "Peggy's Cove, Nova Scotia",
    credit: 'Wikimedia Commons',
  },
];
