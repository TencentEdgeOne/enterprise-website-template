import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
}

export const LinkButton = ({ href, children, className = '', showArrow = true }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`text-sm font-semibold leading-6 text-primary group inline-flex items-center hover:text-primary/80 transition-all duration-300 ${className}`}
    >
      {children}
      {showArrow && (
        <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}; 