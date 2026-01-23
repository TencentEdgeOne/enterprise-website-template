export interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Team', href: '/team' },
  { name: 'Career Opportunities', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'UI Blocks', href: '/blocks' },
];

export const siteConfig = {
  name: 'Enterprise Website',
  description: 'Professional enterprise website solution',
  getStarted: {
    href: '/get-started',
    text: 'Get Started',
  },
}; 