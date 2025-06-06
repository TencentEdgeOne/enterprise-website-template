import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { navigation, siteConfig } from '@/config/navigation';
import { NavLink } from './navigation/NavLink';
import { MobileMenu } from './navigation/MobileMenu';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { IconButton } from './ui/IconButton';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo text={siteConfig.name} />
        </div>
        <div className="flex lg:hidden">
          <IconButton
            icon={Bars3Icon}
            label="Open main menu"
            onClick={() => setMobileMenuOpen(true)}
          />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button href={siteConfig.getStarted.href}>
            {siteConfig.getStarted.text}
          </Button>
        </div>
      </nav>
      
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
        siteName={siteConfig.name}
        getStartedConfig={siteConfig.getStarted}
      />
    </header>
  );
};

export default Navbar; 