export const site = {
  name: 'Timothy Maxon',
  title: 'Timothy Maxon — People, Organizations & Practical Work',
  description: 'The professional website of Timothy Maxon: HR professional, business professor, DBA candidate, author, veteran, and founder.',
  domain: 'https://timothymaxon.com',
  defaultSocialImage: '/images/social-card.svg',
  contactEmail: null as string | null,
  resumePath: null as string | null,
  campaignMode: false,
  notesEnabled: false,
  photographyEnabled: true,
  analytics: { cloudflareToken: null as string | null },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'Work', href: '/work/' },
    { label: 'Ventures', href: '/ventures/' },
    { label: 'Beyond', href: '/beyond/' },
    { label: 'Public Service', href: '/public-service/' },
    { label: 'Contact', href: '/contact/' }
  ]
} as const;
