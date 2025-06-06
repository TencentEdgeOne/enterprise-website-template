import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { ExecutiveCard } from '../../components/cards/ExecutiveCard';
import { TeamMemberCard } from '../../components/cards/TeamMemberCard';
import { executives, teamMembers } from '../../config/team';
import MainLayout from '../../components/layouts/MainLayout';
import { features } from '../../config/get-started';
import { steps } from '../../config/get-started';
import { benefits, jobPosts } from '../../config/careers';
import JobItem from '@/components/careers/JobItem';
import { PricingTier } from '../../components/pricing/PricingTier';
import { tiers } from '../../config/pricing';
import { ContactForm } from '../../components/forms/ContactForm';
import { testimonials } from '@/config/testimonials';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { getAllPosts } from '@/utils/markdown';
import type { Post } from '@/config/articles';
import BlogCard from '@/components/cards/BlogCard';
import { StepCard } from '@/components/ui/StepCard';
import { LinkButton } from '@/components/ui/LinkButton';

// Sample data for demonstration
const sampleFeature = features[0];
const sampleStep = steps[0];
const sampleBenefit = benefits[0];
const sampleExecutive = executives[0];
const sampleTier = tiers[0];

interface BlocksPageProps {
  samplePost: Omit<Post, 'content'>;
}

const BlocksPage: NextPage<BlocksPageProps> = ({ samplePost }) => {
  return (
    <MainLayout
      title="UI Blocks - Technology Company Official Website"
      description="UI component blocks showcase"
    >
      <div className="min-h-screen bg-white">
        <Head>
          <title>UI Blocks - Enterprise Website</title>
          <meta
            name="description"
            content="Collection of UI components and blocks used across the website"
          />
        </Head>

        <Navbar />

        <main className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                UI Blocks
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Collection of reusable UI components and blocks used across the website
              </p>
            </div>

            {/* Section: Cards */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Cards</h2>
              
              <div className="space-y-16">
                {/* Executive Card */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Executive Card</h3>
                  <div className="max-w-sm">
                    <ExecutiveCard {...sampleExecutive} />
                  </div>
                </div>

                {/* Team Member Card */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Team Member Card</h3>
                  <div className="max-w-sm">
                    <TeamMemberCard {...teamMembers[0]} />
                  </div>
                </div>

               
              </div>
            </div>

            {/* Section: JobItem */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Job List Item</h2>
              
              <div className="space-y-16">
                <JobItem position={jobPosts[0]} />
              </div>
            </div>

             {/* Section: Pricing Tier */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Pricing Tier Item</h2>
              
              <div className="space-y-16 w-30 flex flex-row gap-4">
                <PricingTier {...sampleTier} />
              </div>
            </div>


             {/* Section: Testimonials */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Testimonials</h2>
              
              <div className="space-y-16 w-30 flex flex-row gap-4">
                <TestimonialCard testimonial={testimonials[0]} />
              </div>
            </div>

            {/* Section: Buttons */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Buttons</h2>
              
              <div className="space-y-4">
                {/* Primary Button */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Primary Button</h3>
                  <button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Primary Action
                  </button>
                </div>

                {/* Secondary Button */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Secondary Button</h3>
                  <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Secondary Action
                  </button>
                </div>

                {/* Text Button */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Text Button</h3>
                  <button className="text-sm font-semibold leading-6 text-gray-900">
                    Text Action <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Section: Step Cards */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Step Cards</h2>
              
              <div className="grid gap-12 lg:grid-cols-2">
                <StepCard step={sampleStep} />
              </div>
            </div>

            {/* Sample Feature */}
            <div className="py-12">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold mb-6">Sample Feature</h2>
                <div className="flex items-center gap-x-3 text-base text-gray-600">
                  <svg
                    className="h-5 w-5 flex-none text-primary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {sampleFeature}
                </div>
              </div>
            </div>

            {/* Sample Benefit */}
            <div className="py-12">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold mb-6">Sample Benefit</h2>
                <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200 max-w-md">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {sampleBenefit.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    {sampleBenefit.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Blog Card */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Blog Card</h3>
              <div className="max-w-md">
                <BlogCard post={samplePost} categories={[{ id: samplePost.category, name: samplePost.category }]} />
              </div>
            </div>

            {/* Section: Text Styles */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Text Styles</h2>
              
              <div className="space-y-8">
                {/* Headings */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Headings</h3>
                  <div className="space-y-4">
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                  </div>
                </div>

                {/* Body Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Body Text</h3>
                  <div className="space-y-4">
                    <p className="text-body-lg">
                      Large body text for important paragraphs and introductions.
                    </p>
                    <p className="text-body">
                      Regular body text for general content and descriptions.
                    </p>
                    <p className="text-body-sm">
                      Small text for secondary information and metadata.
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Buttons</h3>
                  <div className="space-y-4">
                    <button className="btn-primary">
                      Primary Button
                    </button>
                    <button className="btn-secondary">
                      Secondary Button
                    </button>
                    <button className="btn-text">
                      Text Button <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cards</h3>
                  <div className="space-y-4">
                    <div className="card card-hover max-w-sm">
                      <h4 className="text-lg font-semibold">Card Title</h4>
                      <p className="text-body mt-2">
                        This is a sample card with hover effect.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Tags</h3>
                  <div className="space-x-2">
                    <span className="tag">Tag 1</span>
                    <span className="tag">Tag 2</span>
                    <span className="tag">Tag 3</span>
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Links</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Regular Link</h4>
                      <a href="#" className="link">Sample Link</a>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Animated Link Button</h4>
                      <LinkButton href="#">View All Items</LinkButton>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Link Button without Arrow</h4>
                      <LinkButton href="#" showArrow={false}>Read More</LinkButton>
                    </div>
                  </div>
                </div>

                {/* Lists */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Lists</h3>
                  <div className="space-y-8">
                    {/* Bullet List */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Bullet List</h4>
                      <ul>
                        <li>First item in the list</li>
                        <li>Second item in the list</li>
                        <li>Third item with a longer text that might wrap to the next line</li>
                      </ul>
                    </div>

                    {/* Numbered List */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Numbered List</h4>
                      <ol>
                        <li>First step in the process</li>
                        <li>Second step in the process</li>
                        <li>Final step with additional details that might be longer</li>
                      </ol>
                    </div>

                    {/* Check List */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Check List</h4>
                      <ul className="list-check">
                        <li>Available feature one</li>
                        <li>Available feature two</li>
                        <li>Another great feature that's included</li>
                      </ul>
                    </div>


                    {/* Description List */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Description List</h4>
                      <dl className="list-description">
                        <dt>Term One</dt>
                        <dd>Definition and explanation of the first term</dd>
                        <dt>Term Two</dt>
                        <dd>Definition and explanation of the second term</dd>
                      </dl>
                    </div>

                    {/* Group List */}
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Group List</h4>
                      <ul className="list-group">
                        <li>
                          <span>List item one</span>
                          <span className="text-gray-500">Details</span>
                        </li>
                        <li>
                          <span>List item two</span>
                          <span className="text-gray-500">Details</span>
                        </li>
                        <li>
                          <span>List item three</span>
                          <span className="text-gray-500">Details</span>
                        </li>
                      </ul>
                    </div>

              
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Forms */}
            <div className="mt-24">
              <h2 className="text-2xl font-bold mb-8">Forms</h2>
              
              <div className="space-y-16">
                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                  <div className="max-w-2xl">
                    <ContactForm onSubmit={(data) => console.log('Form submitted:', data)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps<BlocksPageProps> = async () => {
  const posts = getAllPosts();
  return {
    props: {
      samplePost: posts[0],
    },
  };
};

export default BlocksPage; 