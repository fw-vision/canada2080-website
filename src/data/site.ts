export const navigation = [
  { href: '/trajectory', label: 'Trajectory' },
  { href: '/five-gaps', label: 'Five Gaps' },
  { href: '/missions', label: 'Missions' },
  { href: '/research', label: 'Research' },
  { href: '/events', label: 'Events' },
  { href: '/journal', label: 'Journal' },
  { href: '/about', label: 'About' }
] as const;

export const evidenceClasses = [
  'Verified fact',
  'Qualified claim',
  'Scenario',
  'Hypothesis',
  'Aspiration',
  'Research needed'
] as const;

export const fiveGaps = [
  {
    number: '01',
    title: 'Commercialisation and scale-up',
    summary: 'The path from discovery to productive capacity needs standards, pilots, first customers, growth capital, production, suppliers, exports, and reinvestment.',
    evidenceClass: 'Verified fact'
  },
  {
    number: '02',
    title: 'Talent retention and domestic opportunity',
    summary: 'Canada needs a stronger opportunity structure for technical, managerial, trades, and entrepreneurial talent.',
    evidenceClass: 'Qualified claim'
  },
  {
    number: '03',
    title: 'IP ownership and decision rights',
    summary: 'The risk includes losing rights, data, know-how, standards positions, and learning loops that shape future decisions.',
    evidenceClass: 'Qualified claim'
  },
  {
    number: '04',
    title: 'Strategic vision and coordination',
    summary: 'Fragmented programmes, uncertain approvals, and discontinuity impede a durable portfolio of national missions.',
    evidenceClass: 'Verified fact'
  },
  {
    number: '05',
    title: 'Long-term investment and institutional risk capacity',
    summary: 'Capability requires patient capital, credible demand, follow-on finance, and institutions prepared to support delivery.',
    evidenceClass: 'Verified fact'
  }
] as const;

export const trajectory = [
  ['2026-2030', 'Establish', 'Publish the baseline, select missions, organise lead users, and demonstrate one governed path from evidence to operation.'],
  ['2030-2040', 'Demonstrate', 'Repeatedly cross the gaps between research, pilots, first customers, production, skilled work, and retained learning.'],
  ['2040-2055', 'Compound', 'Deepen regional suppliers, repair capacity, secure energy and compute, exports, workforce, and domestic reinvestment.'],
  ['2055-2070', 'Lead', 'Become a trusted source of complete systems, standards, stewardship, and public-value models.'],
  ['2070-2080', 'Renew', 'Reassess the missions, retire obsolete systems, transfer knowledge, and preserve strategic choice for another generation.']
].map(([years, title, summary]) => ({ years, title, summary })) as readonly { years: string; title: string; summary: string }[];

export const offramps = [
  ['Metrics theatre', 'Announcements, patents, or capital raised increase while production, adoption, control, and reinvestment remain weak.'],
  ['One-city exceptionalism', 'One successful regional case crowds out different Canadian assets, authorities, and operating needs.'],
  ['Build-first economics', 'Land, technology, and capital advance before demand, operators, rights, and lifecycle economics are clear.'],
  ['Foreign capital without strategic terms', 'Investment grows activity while decision rights, learning, data, suppliers, or reinvestment can leave Canada.'],
  ['Infrastructure without legitimacy', 'National ambition outruns Indigenous rights, local authority, affordability, ecological limits, labour, or community benefit.'],
  ['Permanent launch mode', 'Events and announcements multiply while owners, 90-day actions, measures, and follow-up remain absent.']
] as const;

export const missions = [
  ['01', 'Climate-positive power and industrial electrification', 'Grids, storage, nuclear stewardship, low-carbon materials, and long-duration systems.'],
  ['02', 'Food, water, and biological security', 'Resilient crops, food processing, agri-robotics, soil systems, and northern food sovereignty.'],
  ['03', 'Critical-material stewardship', 'Exploration, processing, recycling, remediation, traceability, and community equity.'],
  ['04', 'Secure digital and quantum infrastructure', 'Compute, data governance, quantum-ready security, communications, and public procurement.'],
  ['05', 'Ocean, Arctic, and remote-community resilience', 'Observation, connectivity, marine autonomy, search and rescue, logistics, and climate services.'],
  ['06', 'Health production and care platforms', 'Biomanufacturing, clinical networks, public-interest IP, and community-centred prevention.']
] as const;
