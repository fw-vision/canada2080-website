export const navigation = [
  { href: '/#five-gaps', label: 'Five Gaps' },
  { href: '/missions', label: 'Missions' },
  { href: '/research', label: 'Research' },
  { href: '/about', label: 'About' },
  { href: '/join', label: 'Join' }
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

export const missions = [
  ['01', 'Climate-positive power and industrial electrification', 'Grids, storage, nuclear stewardship, low-carbon materials, and long-duration systems.'],
  ['02', 'Food, water, and biological security', 'Resilient crops, food processing, agri-robotics, soil systems, and northern food sovereignty.'],
  ['03', 'Critical-material stewardship', 'Exploration, processing, recycling, remediation, traceability, and community equity.'],
  ['04', 'Secure digital and quantum infrastructure', 'Compute, data governance, quantum-ready security, communications, and public procurement.'],
  ['05', 'Ocean, Arctic, and remote-community resilience', 'Observation, connectivity, marine autonomy, search and rescue, logistics, and climate services.'],
  ['06', 'Health production and care platforms', 'Biomanufacturing, clinical networks, public-interest IP, and community-centred prevention.']
] as const;
