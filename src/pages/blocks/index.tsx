import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExecutiveCard } from '../../components/cards/ExecutiveCard';
import { TeamMemberCard } from '../../components/cards/TeamMemberCard';
import { executives, teamMembers } from '../../config/team';
import MainLayout from '../../components/layouts/MainLayout';
import { features } from '../../config/get-started';
import { steps } from '../../config/get-started';
import { benefits, jobPosts } from '../../config/careers';
import { posts } from '../../config/articles';
import JobItem from '@/components/careers/JobItem';
import { PricingTier } from '../../components/pricing/PricingTier';
import { tiers } from '../../config/pricing';
import { ContactForm } from '../../components/forms/ContactForm';
import { testimonials } from '@/config/testimonials';
import TestimonialCard from '@/components/cards/TestimonialCard';

// Sample data for demonstration
const sampleFeature = features[0];
const sampleStep = steps[0];
const sampleBenefit = benefits[0];
const samplePost = posts[0];
const sampleExecutive = executives[0];
const sampleTier = tiers[0];



const BlocksPage: NextPage = () => {
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
                <div
                    key={sampleStep.id}
                    className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src={sampleStep.imageUrl}
                        alt={sampleStep.title}
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                            <span className="text-lg font-medium text-white">
                              {sampleStep.id}
                            </span>
                          </span>
                          <h3 className="ml-3 text-xl font-semibold text-gray-900">
                            {sampleStep.title}
                          </h3>
                        </div>
                        <p className="mt-3 text-base text-gray-500">
                          {sampleStep.description}
                        </p>
                      </div>
                      <div className="mt-6">
                        <Link
                          href={sampleStep.href}
                          className="text-base font-semibold text-primary hover:text-primary/80"
                        >
                          {sampleStep.action} →
                        </Link>
                      </div>
                    </div>
                  </div>
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

            {/* Sample Blog Post */}
            <div className="py-12">
              <div className="mx-auto max-w-7xl">
                <h2 className="text-2xl font-bold mb-6">Sample Blog Post</h2>
                <div className="flex flex-col overflow-hidden rounded-lg shadow-lg max-w-md">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      src={samplePost.imageUrl}
                      alt={samplePost.title}
                      width={600}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time dateTime={samplePost.date} className="text-gray-500">
                          {samplePost.date}
                        </time>
                        <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                          {samplePost.category}
                        </span>
                      </div>
                      <Link href={samplePost.href} className="mt-2 block">
                        <h3 className="text-xl font-semibold text-gray-900 hover:text-primary">
                          {samplePost.title}
                        </h3>
                        <p className="mt-3 text-base text-gray-500 line-clamp-3">
                          {samplePost.description}
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
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
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                      Heading 1
                    </h1>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Heading 2
                    </h2>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      Heading 3
                    </h3>
                  </div>
                </div>

                {/* Body Text */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Body Text</h3>
                  <div className="space-y-4">
                    <p className="text-lg leading-8 text-gray-600">
                      Large body text for important paragraphs and introductions.
                    </p>
                    <p className="text-base leading-7 text-gray-600">
                      Regular body text for general content and descriptions.
                    </p>
                    <p className="text-sm leading-6 text-gray-600">
                      Small text for secondary information and metadata.
                    </p>
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

export default BlocksPage; 