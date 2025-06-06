import Link from 'next/link';
import { jobPosts } from '@/config/careers';
import { LinkButton } from '@/components/ui/LinkButton';

const Careers = () => {
  // 只获取前 3 条职位信息
  const featuredJobs = jobPosts.slice(0, 3);

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            With an excellent team, creating extraordinary value
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="grid gap-4">
            {featuredJobs.map((position) => (
              <div
                key={position.id}
                className="group relative flex items-center space-x-6 rounded-lg bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-auto">
                  <h3 className="font-semibold text-gray-900">
                    <Link href={position.href}>
                      <span className="absolute inset-0" />
                      {position.title}
                    </Link>
                  </h3>
                  <div className="mt-1 flex items-center gap-x-4 text-sm leading-6 text-gray-600">
                    <div className="flex items-center gap-x-1">
                      <span>{position.department}</span>
                      <span className="mx-1">·</span>
                      <span>{position.type}</span>
                      <span className="mx-1">·</span>
                      <span>{position.location}</span>
                    </div>
                  </div>
                </div>
                <svg
                  className="h-5 w-5 flex-none text-gray-400 group-hover:text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <LinkButton href="/careers">View All Positions</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers; 