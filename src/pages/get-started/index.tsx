import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '../../components/layouts/MainLayout';
import { steps, quickStartGuides, features } from '../../config/get-started';
import { StepCard } from '@/components/ui/StepCard';

const GetStartedPage: NextPage = () => {
  return (
    <MainLayout
      title="Get Started - Technology Company Official Website"
      description="Start your digital transformation journey with us"
    >
      <div className="min-h-screen bg-white">
        <main>
          {/* Hero Section */}
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Get Started
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Follow our simple steps to begin your digital transformation journey
                </p>
              </div>
            </div>
          </div>

          {/* Steps Section */}
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Getting Started Steps
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Follow these steps to get started with our platform
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-2">
                {steps.map((step) => (
                  <StepCard key={step.id} step={step} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick Start Guides */}
          <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Quick Start Guides
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Helpful resources to get you started quickly
                </p>
              </div>
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
                {quickStartGuides.map((guide) => (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 hover:ring-primary"
                  >
                    <span className="text-4xl">{guide.icon}</span>
                    <h3 className="mt-4 text-lg font-semibold text-gray-900">
                      {guide.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-gray-600">
                      {guide.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Platform Features
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Everything you need to succeed in your digital transformation
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-4xl lg:mx-0">
              <ul
                role="list"
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-3 text-base text-gray-600"
                  >
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default GetStartedPage; 