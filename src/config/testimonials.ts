export interface Author {
  name: string;
  role: string;
  company: string;
  imageUrl: string;
}

export interface Testimonial {
  content: string;
  author: Author;
  rating: number; // 1-5 的评分
}

export const testimonials: Testimonial[] = [
  {
    content: 'This is the best enterprise website solution I have seen, which has significantly improved our brand image and customer conversion rate.',
    author: {
      name: 'Manager Zhang',
      role: 'Marketing Director',
      company: 'Innovation Technology Co., Ltd.',
      imageUrl: '/team/1.webp',
    },
    rating: 5,
  },
  {
    content: 'The team\'s professionalism is impressive, from requirement analysis to final delivery, every step is done perfectly.',
    author: {
      name: 'Director Li',
      role: 'Technical Lead',
      company: 'Internet Technology Co., Ltd.',
      imageUrl: '/team/2.webp',
    },
    rating: 4,
  },
]; 