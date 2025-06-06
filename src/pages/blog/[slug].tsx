import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/Navbar';
import { Post } from '../../config/articles';
import MainLayout from '../../components/layouts/MainLayout';
import { getPostData, getPostSlugs, getAllPosts } from '@/utils/markdown';

interface BlogPostProps {
  article: Post;
  relatedArticles: Post[];
}

const BlogPost: NextPage<BlogPostProps> = ({ article, relatedArticles }) => {
  return (
    <MainLayout
      title={`${article.title} - Technology Company Blog`}
      description={article.description}
    >
      <div className="min-h-screen bg-white pt-20">
        <Head>
          <title>{`${article.title} - Technology Company Official Website`}</title>
          <meta name="description" content={article.description} />
        </Head>

        <Navbar />

        <main className="relative">
          {/* Back Button */}
          <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-primary"
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              Back to Blog List
            </Link>
          </div>

          <article>
            {/* Article Header */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {article.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {article.description}
                </p>
                <div className="mt-8 flex items-center justify-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-500">
                    {article.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                    {article.category}
                  </span>
                  <span className="text-gray-500">{article.readingTime}</span>
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="mx-auto mt-8 max-w-3xl px-6 lg:px-8">
              <div className="flex items-center justify-center">
                <Image
                  className="h-12 w-12 rounded-full object-cover"
                  src={article.author.imageUrl}
                  alt={article.author.name}
                  width={48}
                  height={48}
                />
                <div className="ml-3 text-center">
                  <p className="text-sm font-medium text-gray-900">{article.author.name}</p>
                  <p className="text-xs text-gray-500">{article.author.role}</p>
                  {article.author.bio && (
                    <p className="mt-1 text-sm text-gray-500">{article.author.bio}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative mx-auto mt-16 max-w-7xl px-6 lg:px-8">
              <div className="aspect-[16/9] relative">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Article Content */}
            <div className="mx-auto mt-16 max-w-4xl px-6 lg:px-8">
              <div
                className="prose prose-lg prose-primary mx-auto"
                dangerouslySetInnerHTML={{ __html: article.content || '' }}
              />
            </div>
          </article>

          {/* Related Articles */}
          <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8 pb-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Related Articles
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Continue reading more related content
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {relatedArticles.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-lg"
                >
                  <div className="relative w-full">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      width={800}
                      height={450}
                      className="aspect-[16/9] w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time dateTime={post.date} className="text-gray-500">
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                        {post.category}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const article = await getPostData(slug);
  
  // 获取相关文章（除了当前文章之外的最新的两篇文章）
  const allPosts = getAllPosts();
  const relatedArticles = allPosts
    .filter(post => post.id !== article.id)
    .slice(0, 2);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
};

export default BlogPost; 