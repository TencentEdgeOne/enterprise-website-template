import Link from 'next/link';
import { useRouter } from 'next/router';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'desktop' | 'mobile';
}

export const NavLink = ({ href, children, className = '', onClick, variant = 'desktop' }: NavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === href || router.pathname.startsWith(`${href}/`);

  const baseStyles = {
    desktop: 'text-sm font-semibold leading-6 transition-colors duration-200',
    mobile: '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors duration-200',
  };

  const activeStyles = {
    desktop: 'text-primary',
    mobile: 'bg-gray-50 text-primary',
  };

  const inactiveStyles = {
    desktop: 'text-gray-900 hover:text-primary/80',
    mobile: 'text-gray-900 hover:bg-gray-50',
  };

  const styles = `${baseStyles[variant]} ${isActive ? activeStyles[variant] : inactiveStyles[variant]} ${className}`;

  return (
    <Link href={href} className={styles} onClick={onClick}>
      {children}
    </Link>
  );
}; 