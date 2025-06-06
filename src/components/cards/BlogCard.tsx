import Image from 'next/image';
import Link from 'next/link';
import { Post, Category } from '@/config/articles';

interface BlogCardProps {
  post: Post;
  categories: Category[];
}

const BlogCard = ({ post, categories }: BlogCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={post.imageUrl}
          alt={post.title}
          width={600}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="flex items-center gap-x-4 text-xs">
            <time dateTime={post.date} className="text-gray-500">
              {post.date}
            </time>
            <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
              {categories.find(cat => cat.id === post.category)?.name}
            </span>
          </div>
          <Link href={post.href} className="mt-2 block">
            <h3 className="text-xl font-semibold text-gray-900 hover:text-primary">
              {post.title}
            </h3>
            <p className="mt-3 text-base text-gray-500 line-clamp-3">
              {post.description}
            </p>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full object-cover"
              src={post.author.imageUrl}
              alt={post.author.name}
              width={40}
              height={40}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-xs text-gray-500">{post.author.role}</p>
          </div>
          <span className="ml-auto text-sm text-gray-500">{post.readingTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 