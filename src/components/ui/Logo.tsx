import Link from 'next/link';

interface LogoProps {
  text: string;
  className?: string;
}

export const Logo = ({ text, className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`-m-1.5 p-1.5 ${className}`}>
      <span className="text-2xl font-bold text-primary">{text}</span>
    </Link>
  );
}; 