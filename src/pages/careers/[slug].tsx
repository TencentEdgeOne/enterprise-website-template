import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import {
  AcademicCapIcon,
  CurrencyDollarIcon,
  HeartIcon,
  HomeIcon,
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { jobPosts, getJobPost, JobPost } from '../../config/careers';
import MainLayout from '@/components/layouts/MainLayout';

const iconMap: { [key: string]: typeof CurrencyDollarIcon } = {
  CurrencyDollarIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
};

interface JobDetailProps {
  job: JobPost;
}

const JobDetail: NextPage<JobDetailProps> = ({ job }) => {
  return (
    <MainLayout title={job.title} description={job.description}>

      <main className="relative py-20">
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-16 sm:pb-24 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-primary"
          >
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Job Header */}
            <div className="border-b border-gray-200 pb-10">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {job.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {job.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <BriefcaseIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {job.department}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <ClockIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                  {job.type}
                </div>
                <div className="flex items-center text-sm text-primary font-semibold">
                  <CurrencyDollarIcon className="mr-1.5 h-5 w-5 flex-shrink-0" />
                  {job.salary}
                </div>
              </div>
            </div>

            {/* Job Content */}
            <div className="mt-16 grid gap-16">
              {/* Responsibilities */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Responsibilities
                </h2>
                <ul role="list" className="mt-8 space-y-4 text-gray-600">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-x-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary text-white text-sm">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Requirements
                </h2>
                <div className="mt-8 space-y-12">
                  {job.requirements.map((requirement, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {requirement.title}
                      </h3>
                      <ul role="list" className="mt-4 space-y-4 text-gray-600">
                        {requirement.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex gap-x-3">
                            <span className="flex h- w-6 shrink-0 items-center justify-center rounded-lg border border-primary text-primary text-sm mt-1">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Benefits */}
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Benefits
                </h2>
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {job.benefits.map((benefit, index) => {
                    const Icon = iconMap[benefit.icon];
                    return (
                      <div key={index} className="relative flex gap-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="mt-2 text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Apply Button */}
              <div className="mt-8 flex justify-center">
                <Link
                  href="/contact"
                  className="rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Apply for this position
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobPosts.map((job) => ({
    params: { slug: job.href.split('/').pop() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const job = getJobPost(slug);

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      job,
    },
  };
};

export default JobDetail; 