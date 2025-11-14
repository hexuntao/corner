'use client';

import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <div
      className={`flex w-fit animate-looping-tag ${isReverse ? 'animate-reverse' : ''}`}
    >
      {children}
    </div>
  );
};

export default InfiniteLoopSlider;
