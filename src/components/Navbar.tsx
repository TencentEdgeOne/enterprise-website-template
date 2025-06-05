import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Team', href: '/team' },
  { name: 'Career Opportunities', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'UI Blocks', href: '/blocks' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path || router.pathname.startsWith(`${path}/`);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold text-primary">Corporate Website</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-gray-900 hover:text-primary/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/get-started"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="fixed inset-0 z-50">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="w-full max-w-md">
                <div className="flex items-center justify-between">
                  <Link href="/" className="-m-1.5 p-1.5">
                    <span className="text-2xl font-bold text-primary">Corporate Website</span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200 ${
                            isActive(item.href)
                              ? 'bg-gray-50 text-primary'
                              : 'text-gray-900 hover:bg-gray-50'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6">
                      <Link
                        href="/get-started"
                        className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 