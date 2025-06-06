import Image from 'next/image';
import Link from 'next/link';

interface StepCardProps {
  step: {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    href: string;
    action: string;
  };
  className?: string;
}

export const StepCard = ({ step, className = '' }: StepCardProps) => {
  return (
    <div className={`relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ${className}`}>
      <div className="flex-shrink-0">
        <Image
          className="h-48 w-full object-cover"
          src={step.imageUrl}
          alt={step.title}
          width={600}
          height={300}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="flex-1">
          <div className="flex items-center">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
              {step.id}
            </span>
            <h3 className="ml-3 text-xl font-semibold text-gray-900">
              {step.title}
            </h3>
          </div>
          <p className="mt-3 text-base text-gray-500">
            {step.description}
          </p>
        </div>
        <div className="mt-6">
          <Link
            href={step.href}
            className="text-sm font-semibold text-primary hover:text-primary/80"
          >
            {step.action} <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}; 