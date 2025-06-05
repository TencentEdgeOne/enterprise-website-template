export interface Position {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  href: string;
}

export const positions: Position[] = [
  {
    id: 1,
    title: 'Marketing Manager',
    department: 'Marketing Department',
    type: 'Full-time',
    location: 'Shanghai',
    href: '/careers/marketing-manager',
  },
  {
    id: 2,
    title: 'Senior Frontend Engineer',
    department: 'Technology Department',
    type: 'Full-time',
    location: 'Beijing',
    href: '/careers/senior-frontend',
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product Department',
    type: 'Full-time',
    location: 'Shenzhen',
    href: '/careers/product-manager',
  },
  {
    id: 4,
    title: 'UI Designer',
    department: 'Design Department',
    type: 'Full-time',
    location: 'Guangzhou',
    href: '/careers/ui-designer',
  },
]; 