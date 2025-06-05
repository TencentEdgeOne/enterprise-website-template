import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import MainLayout from '../../components/layouts/MainLayout';

const values = [
  {
    name: 'Innovation Driven',
    description: 'We always maintain an innovative spirit, pursuing technological breakthroughs to create greater value for customers.',
  },
  {
    name: 'Customer First',
    description: 'With customer needs as our guide, we provide professional solutions and high-quality service experiences.',
  },
  {
    name: 'Team Collaboration',
    description: 'We advocate for an open and mutually supportive team culture, achieving outstanding work results together.',
  },
  {
    name: 'Integrity and Honesty',
    description: 'We adhere to honest business practices, treating every customer and partner with integrity.',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Successfully expanded into international markets, establishing branches in multiple countries.',
  },
  {
    year: '2023',
    title: 'Technological Innovation',
    description: 'Released a new generation of product platforms, obtaining multiple technology patents.',
  },
  {
    year: '2022',
    title: 'Strategic Upgrade',
    description: 'Completed B-round financing, accelerating product R&D and market expansion.',
  },
  {
    year: '2021',
    title: 'Brand Upgrade',
    description: 'Launched a new brand image, expanding market influence.',
  },
  {
    year: '2020',
    title: 'Company Establishment',
    description: 'Established headquarters in Shanghai, starting the entrepreneurial journey.',
  },
];

const AboutPage: NextPage = () => {
  return (
    <MainLayout
      title="About Us - Technology Company Official Website"
      description="Learn more about our company and our mission"
    >
      <div className="min-h-screen bg-white">
        <Head>
          <title>About Us - Enterprise Website</title>
          <meta
            name="description"
            content="Learn about our corporate culture, development history, and values"
          />
        </Head>

        <Navbar />

        <main>
          {/* Page Title */}
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  About Us
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Dedicated to providing innovative technology solutions for enterprises, helping customers achieve digital transformation
                </p>
              </div>
            </div>
          </div>

          {/* Company Introduction */}
          <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      Company Introduction
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      We are a technology company focused on enterprise digital transformation, with rich industry experience and a professional technical team. Through innovative solutions, we help enterprises improve operational efficiency and achieve business growth.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      Since our establishment, we have consistently adhered to technology innovation as our driving force, with customer needs as our guide, providing high-quality services to numerous enterprises, earning widespread recognition and trust.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/about/company.png"
                    alt="Company Office Environment"
                    width={800}
                    height={600}
                    className="w-full rounded-xl shadow-xl ring-1 ring-gray-400/10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Culture */}
          <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Corporate Culture
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Our values guide our development direction, shaping our corporate culture
                </p>
              </div>
              <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                {values.map((value) => (
                  <div key={value.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute left-1 top-1 h-5 w-5 text-primary">
                        <svg
                          className="h-5 w-5"
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
                      </div>
                      {value.name}
                    </dt>
                    <dd className="inline">{' ' + value.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Development History */}
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Development History
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Witness our growth journey, each step a new milestone
                </p>
              </div>
              <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className="relative flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                    >
                      <div className="flex items-center gap-x-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-lg font-semibold text-primary">
                            {milestone.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-base leading-7 text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

      </div>
    </MainLayout>
  );
};

export default AboutPage;