import { ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
}

export const IconButton = ({ icon: Icon, label, className = '', ...props }: IconButtonProps) => {
  return (
    <button
      type="button"
      className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 transition-colors duration-200 ${className}`}
      {...props}
    >
      <span className="sr-only">{label}</span>
      <Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}; 