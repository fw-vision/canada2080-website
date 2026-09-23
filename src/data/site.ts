export const navigation = [
  { href: '/trajectory', label: 'Trajectory' },
  { href: '/natural-advantage', label: 'Advantage' },
  { href: '/innovation-gaps', label: 'Gaps' },
  { href: '/missions', label: 'Missions' },
  { href: '/signals', label: 'Signals' },
  { href: '/events', label: 'Events' }
] as const;

export const evidenceClasses = [
  'Verified fact',
  'Qualified claim',
  'Scenario',
  'Hypothesis',
  'Aspiration',
  'Research needed'
] as const;

export const gaps = [
  {
    number: '01',
    title: 'Commercialization and scale-up',
    summary: 'Canada produces world-class research, but too few discoveries cross the full path through pilots, first customers, production, suppliers, exports, and reinvestment.',
    metric: '1.81% of GDP',
    metricContext: 'Canada invested less of its economy in R&D than the OECD average while continuing to struggle to commercialize discoveries and scale innovative firms.',
    metricSources: [
      ['Statistics Canada, 2024', 'https://www150.statcan.gc.ca/n1/daily-quotidien/241203/dq241203c-eng.htm'],
      ['Council of Canadian Academies, 2025', 'https://cca-reports.ca/canadas-innovation-performance-continues-to-decline-at-a-time-of-unprecedented-change/']
    ]
  },
  {
    number: '02',
    title: 'Talent retention and domestic opportunity',
    summary: 'Canada’s talent constraint is a shortage of sufficiently ambitious domestic pathways where people can apply advanced capability, advance, return, and build.',
    metric: '46%',
    metricContext: 'Nearly half of Canadian citizens seeking US employer-sponsored permanent employment in 2024 worked in computer, mathematical, architecture, and engineering occupations.',
    metricSources: [
      ['Statistics Canada, 2025', 'https://www150.statcan.gc.ca/n1/pub/36-28-0001/2025007/article/00006-eng.htm']
    ]
  },
  {
    number: '03',
    title: 'IP ownership and decision rights',
    summary: 'Control determines who can decide what gets built, financed, improved, governed, and reinvested across IP, data, production, standards, and supplier networks.',
    metric: '43.5%',
    metricContext: 'Foreign-controlled enterprises held 43.5% of Canadian manufacturing assets in 2024, placing a large share of industrial investment and operating decisions under foreign corporate control.',
    metricSources: [
      ['Statistics Canada, 2026', 'https://www150.statcan.gc.ca/n1/daily-quotidien/260624/dq260624a-eng.htm']
    ]
  },
  {
    number: '04',
    title: 'Long-term investment and risk capacity',
    summary: 'Canada’s productive capacity has not compounded quickly enough through patient capital, technology adoption, infrastructure, management, skills, and disciplined demand.',
    metric: '71% of the US level',
    metricContext: 'Canadian labour productivity fell from 88% of the US level in 1984 to 71% in 2022 as investment and technology adoption failed to compound fast enough.',
    metricSources: [
      ['Bank of Canada, 2024', 'https://www.bankofcanada.ca/2024/03/remarks-2024-03-26/']
    ]
  }
] as const;

export const trajectory = [
  { years: 'Now–2030', title: 'Establish', summary: 'Publish baselines and build early demonstrations across energy, compute, manufacturing, talent, resilience, and control rights.' },
  { years: '2030–2036', title: 'Integrate', summary: 'Connect selected regional energy, compute, manufacturing, housing, skills, and managed-growth systems into measurable learning loops.' },
  { years: '2041–2046', title: 'Specialize', summary: 'Earn international credibility in selected capability niches while preserving options as AI, quantum, biotechnology, and other technologies evolve.' },
  { years: '2046–2056', title: 'Network', summary: 'Link climate-adapted regional systems into resilient national supply, repair, production, and public-service capacity.' },
  { years: '2080', title: 'Contribute', summary: 'Become a sovereign global leader in selected public-interest capabilities and a trusted contributor to planetary resilience.' }
] as const;

export const offramps = [
  ['Metrics theatre', 'Announcements or capital rise while production, adoption, control, and reinvestment remain weak.'],
  ['Grid and compute bottlenecks', 'Power, connections, hardware, cooling, networks, cyber capacity, or workforce fail to keep pace.'],
  ['Build-first economics', 'Land, technology, and capital advance before demand, operators, rights, and lifecycle economics are clear.'],
  ['Foreign capital without strategic terms', 'Activity grows while decision rights, learning, data, suppliers, or reinvestment can leave Canada.'],
  ['Growth without capacity', 'Population and industrial ambition outrun housing, services, energy, water, affordability, and climate safety.'],
  ['Infrastructure without legitimacy', 'National ambition outruns Indigenous rights, local authority, ecological limits, labour, or community benefit.']
] as const;

export const missions = [
  ['01', 'Sovereign energy and compute', 'Reliable low-carbon power, grids, storage, Canadian-accessible compute, cyber resilience, and public-interest digital capacity.'],
  ['02', 'Food, water, and living systems', 'Facility agriculture, resilient crops, water systems, ecological infrastructure, processing, and nature-informed design.'],
  ['03', 'Advanced manufacturing and materials', 'Pilot lines, automation, critical materials, recycling, packaging, repair, suppliers, and strategic production niches.'],
  ['04', 'Trusted digital and emerging technology', 'Data stewardship, identity, communications, AI assurance, quantum readiness, and technology-option preservation.'],
  ['05', 'Climate-ready regions and managed growth', 'Housing, services, adaptation, mobility, remote-community resilience, lawful pathways, and rights-respecting regional capacity.'],
  ['06', 'Human capability and institutional learning', 'Health production, education, work-integrated learning, founder pathways, research translation, and public measurement.']
] as const;
