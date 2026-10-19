export const site = {
  name: 'Timothy Maxon',
  title: 'Timothy Maxon — People, Organizations & Practical Work',
  description: 'The professional website of Timothy Maxon: commercial lead, business professor, DBA candidate, founder, HR professional, author, and veteran.',
  domain: 'https://timothymaxon.com',
  defaultSocialImage: '/images/social-card.svg',
  contactEmail: null as string | null,
  campaignMode: false,
  notesEnabled: false,
  updatesEnabled: false,
  recentUpdatesEnabled: false,
  updatesMinimumEntries: 3,
  photographyEnabled: true,
  analytics: { cloudflareToken: null as string | null },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Work', href: '/work/' },
    { label: 'Ventures', href: '/ventures/' },
    { label: 'Public Service', href: '/public-service/' },
    { label: 'Beyond', href: '/beyond/' },
    { label: 'Contact', href: '/contact/' }
  ]
} as const;
