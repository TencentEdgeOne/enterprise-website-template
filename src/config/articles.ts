export interface Author {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  content?: string;
  imageUrl: string;
  date: string;
  category: string;
  author: Author;
  readingTime: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
   { id: "all", name: "All" },
   { id: "tech", name: "Technology" },
   { id: "industry", name: "Industry" },
   { id: "insight", name: "Insights" },
   { id: "case", name: "Case Studies" },
 ];