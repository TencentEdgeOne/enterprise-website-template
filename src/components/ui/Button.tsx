import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonBaseProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const baseStyles = {
  primary: 'bg-primary text-white shadow-sm hover:bg-primary/90',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-3.5 py-2.5 text-sm',
  lg: 'px-4 py-3 text-base',
};

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  ...props
}: ButtonProps) => {
  const classes = `
    rounded-md font-semibold transition-colors duration-200
    ${baseStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim();

  if ('href' in props) {
    const { href, onClick } = props;
    return (
      <Link href={href??''} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}; 