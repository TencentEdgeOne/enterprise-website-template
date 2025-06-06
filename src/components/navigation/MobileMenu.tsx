import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from './NavLink';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { IconButton } from '../ui/IconButton';
import { NavigationItem } from '@/config/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
  siteName: string;
  getStartedConfig: {
    text: string;
    href: string;
  };
}

export const MobileMenu = ({
  isOpen,
  onClose,
  navigation,
  siteName,
  getStartedConfig,
}: MobileMenuProps) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50 lg:hidden" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-y-full"
              enterTo="translate-y-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-y-0"
              leaveTo="translate-y-full"
            >
              <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Logo text={siteName} />
                  <IconButton
                    icon={XMarkIcon}
                    label="Close menu"
                    onClick={onClose}
                  />
                </div>
                <div className="mt-6 flow-root">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base"
                        onClick={onClose}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button
                      href={getStartedConfig.href}
                      className="w-full justify-center"
                      onClick={onClose}
                    >
                      {getStartedConfig.text}
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}; 