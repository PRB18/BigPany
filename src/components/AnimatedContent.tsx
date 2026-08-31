import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedContentProps {
  children: React.ReactNode;
  distance?: number;
  direction?: 'vertical' | 'horizontal';
  reverse?: boolean;
  duration?: number;
  ease?: string | number[];
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedContent({
  children,
  distance = 150,
  direction = 'horizontal',
  reverse = false,
  duration = 1.2,
  ease = 'easeOut',
  initialOpacity = 0.2,
  animateOpacity = true,
  scale = 1.1,
  threshold = 0.2,
  delay = 0.3,
  className = '',
}: AnimatedContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  const getInitialPosition = () => {
    const value = reverse ? -distance : distance;
    return direction === 'horizontal' ? { x: value } : { y: value };
  };

  const getAnimatePosition = () => {
    return direction === 'horizontal' ? { x: 0 } : { y: 0 };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        ...getInitialPosition(),
        opacity: animateOpacity ? initialOpacity : 1,
        scale: scale,
      }}
      animate={
        isInView
          ? {
              ...getAnimatePosition(),
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration,
        ease,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
