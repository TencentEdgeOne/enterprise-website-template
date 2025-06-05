// 类型定义
interface Executive {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

// 管理团队数据
export const executives: Executive[] = [
  {
    name: 'Michael Chen',
    role: 'Chief Executive Officer',
    bio: 'Over 15 years of experience in digital transformation and enterprise solutions.',
    imageUrl: '/team/2.webp',
  },
  {
    name: 'Sarah Johnson',
    role: 'Chief Technology Officer',
    bio: 'Former tech lead at major tech companies, expert in AI and cloud computing.',
    imageUrl: '/team/1.webp',
  },
  {
    name: 'David Zhang',
    role: 'Chief Product Officer',
    bio: 'Product strategist with deep understanding of enterprise software needs.',
    imageUrl: '/team/3.webp',
  },
];

// 团队成员数据
export const teamMembers: TeamMember[] = [
  {
    name: 'Emily Wang',
    role: 'Senior Developer',
    imageUrl: '/team/2.webp',
  },
  {
    name: 'Tom Wilson',
    role: 'UX Designer',
    imageUrl: '/team/1.webp',
  },
  {
    name: 'Lisa Chen',
    role: 'Product Manager',
    imageUrl: '/team/3.webp',
  },
  {
    name: 'James Lee',
    role: 'Solution Architect',
    imageUrl: '/team/1.webp',
  },
  {
    name: 'Anna Brown',
    role: 'Marketing Director',
    imageUrl: '/team/2.webp',
  },
  {
    name: 'Kevin Wu',
    role: 'Customer Success',
    imageUrl: '/team/3.webp',
  },
]; 