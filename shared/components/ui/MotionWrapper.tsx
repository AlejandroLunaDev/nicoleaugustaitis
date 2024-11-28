'use client';

import { motion, MotionProps } from 'framer-motion';
import { ReactNode, HTMLAttributes } from 'react';

type MotionWrapperProps = MotionProps &
  HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
  };

export default function MotionWrapper({
  children,
  className,
  ...animationProps
}: MotionWrapperProps) {
  return (
    <motion.div {...animationProps} className={className}>
      {children}
    </motion.div>
  );
}
