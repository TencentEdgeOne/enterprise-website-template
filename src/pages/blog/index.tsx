import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { categories } from "../../config/articles";
import MainLayout from "../../components/layouts/MainLayout";
import BlogCard from "@/components/cards/BlogCard";
import { getAllPosts } from "@/utils/markdown";
import type { Post } from "@/config/articles";

interface BlogPageProps {
  posts: Omit<Post, 'content'>[];
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <MainLayout
      title="Blog - Technology Company Official Website"
      description="Read our latest blog posts and insights"
    >
      <main>
        {/* Header */}
        <div className="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Blog
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                Latest technology trends, industry insights, and case studies
              </p>
            </div>

            {/* Categories */}
            <div className="my-12 flex justify-center space-x-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium ${
                    selectedCategory === category.id
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Blog posts */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} categories={categories} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
