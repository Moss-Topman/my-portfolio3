// components/ui/Typography.tsx
import { ReactNode } from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'small';
  children: ReactNode;
  className?: string;
}

const Typography = ({ variant, children, className = '' }: TypographyProps) => {
  const baseClasses = 'text-gray-900 dark:text-gray-100';
  
  const variants = {
    h1: 'text-5xl font-bold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-semibold',
    h4: 'text-2xl font-semibold',
    h5: 'text-xl font-medium',
    h6: 'text-lg font-medium',
    body: 'text-base',
    small: 'text-sm'
  };

  const Component = variant.startsWith('h') ? variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' : 'p';

  return (
    <Component className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default Typography;