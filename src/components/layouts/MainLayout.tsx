import { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout = ({ children, title = 'Technology Company Official Website', description = 'Welcome to our website · Demo only · EdgeOne Makers' }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title} | EdgeOne Makers</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="EdgeOne Makers, Demo only" />
      </Head>

      <Navbar />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout; 