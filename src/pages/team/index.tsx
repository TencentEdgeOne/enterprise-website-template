import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import { ExecutiveCard } from '../../components/cards/ExecutiveCard';
import { TeamMemberCard } from '../../components/cards/TeamMemberCard';
import { executives, teamMembers } from '../../config/team';
import MainLayout from '../../components/layouts/MainLayout';

const TeamPage: NextPage = () => {
  return (
    <MainLayout
      title="Our Team - Technology Company Official Website"
      description="Meet our talented team of professionals"
    >
      <div className="min-h-screen bg-white">
        <Head>
          <title>Our Team - Enterprise Website</title>
          <meta
            name="description"
            content="Meet our team of experienced professionals dedicated to your success"
          />
        </Head>

        <Navbar />

        <main>
          {/* Page Title */}
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Our Team
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Meet our team of experienced professionals dedicated to helping
                  businesses succeed in their digital transformation journey.
                </p>
              </div>
            </div>
          </div>

          {/* Management Team */}
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Management Team
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our leadership team brings decades of experience in technology and
                business transformation.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:grid-cols-3"
            >
              {executives.map((person) => (
                <ExecutiveCard key={person.name} {...person} />
              ))}
            </ul>
          </div>

          {/* Team Members */}
          <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Our Experts
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A diverse team of professionals working together to deliver
                  exceptional results.
                </p>
              </div>
              <ul
                role="list"
                className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-3"
              >
                {teamMembers.map((person) => (
                  <TeamMemberCard key={person.name} {...person} />
                ))}
              </ul>
            </div>
          </div>
        </main>

        
      </div>
    </MainLayout>
  );
};

export default TeamPage; 