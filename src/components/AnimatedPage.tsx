import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 100, rotateY: 15, scale: 0.95 },
  animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
  exit: { opacity: 0, x: -100, rotateY: -15, scale: 0.95 },
};

const transition = {
  type: 'spring' as const,
  stiffness: 100,
  damping: 20
};

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AnimatedPage: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
      className={`page-wrapper ${className}`}
      style={{ perspective: '1200px' }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
