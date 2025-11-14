'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  [propName: string]: unknown;
}

const Card = ({ children, className = '', ...others }: CardProps) => {
  return (
    <div
      className={`bg-opacity-05 dark:bg-opacity-05 rounded-xl bg-white shadow-sm transition-all duration-300 dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] ${className}`}
      {...others}
    >
      {children}
    </div>
  );
};

export default Card;
