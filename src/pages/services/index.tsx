import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const services = [
  {
    id: 1,
    name: 'Digital Transformation Consulting',
    description:
      'Provides comprehensive digital transformation consulting services for enterprises, helping them develop digital strategies, optimize business processes, and improve operational efficiency.',
    features: [
      'Digital Strategy Planning',
      'Business Process Optimization',
      'Organizational Structure Adjustment',
      'Technology Selection Recommendations',
    ],
    imageUrl: '/services/digital-transformation.jpg',
    href: '/services/digital-transformation',
  },
  {
    id: 2,
    name: 'Enterprise Application Development',
    description:
      'Develops customized enterprise application systems based on actual enterprise needs, including ERP, CRM, OA, and other systems, to help enterprises achieve digital management.',
    features: [
      'Requirements Analysis and Design',
      'System Development and Testing',
      'System Integration and Deployment',
      'Maintenance Support Services',
    ],
    imageUrl: '/services/enterprise-app.jpg',
    href: '/services/enterprise-app',
  },
  {
    id: 3,
    name: 'Data Analytics Services',
    description:
      'Provides professional data analytics services, helping enterprises uncover data value, make data-driven decisions, and improve business benefits.',
    features: [
      'Data Collection and Processing',
      'Data Analysis and Mining',
      'Visualization Display',
      'Decision Support',
    ],
    imageUrl: '/services/data-analytics.jpg',
    href: '/services/data-analytics',
  },
];

const features = [
  {
    name: 'Professional Team',
    description: 'Has an experienced professional team, providing high-quality services to clients.',
  },
  {
    name: 'Customized Solutions',
    description: 'Provides personalized solutions based on client needs, meeting different scenario requirements.',
  },
  {
    name: 'Technological Leadership',
    description: 'Adopts leading-edge technology, ensuring the advancement and reliability of solutions.',
  },
  {
    name: 'Rapid Response',
    description: 'Establishes a comprehensive service system, providing rapid response and continuous support to clients.',
  },
];

const Services: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Service Introduction - Enterprise Website</title>
        <meta
          name="description"
          content="Learn about our professional services and solutions"
        />
      </Head>

      <Navbar />

      <main>
        {/* Page Title */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Service Introduction
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Provides professional digital solutions to help enterprises achieve transformation and upgrading
              </p>
            </div>
          </div>
        </div>

        {/* Service Features */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Service Features
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We always adhere to customer needs-oriented, providing professional and reliable services
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {features.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Service List */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Provides comprehensive enterprise digital solutions
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="flex flex-col items-start rounded-2xl bg-white p-8 shadow-lg"
                >
                  <div className="relative w-full">
                    <Image
                      src={service.imageUrl}
                      alt={service.name}
                      width={800}
                      height={450}
                      className="aspect-[16/9] w-full rounded-2xl object-cover"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.name}
                      </h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600">
                      {service.description}
                    </p>
                    <div className="mt-8">
                      <h4 className="text-sm font-semibold text-gray-900">
                        Key Content：
                      </h4>
                      <ul className="mt-2 space-y-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <svg
                              className="mr-2 h-4 w-4 text-primary"
                              fill="currentColor"
                              viewBox="0 0 20 20"
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
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Learn More
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Services;