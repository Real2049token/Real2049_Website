import React from 'react';
import { motion } from 'framer-motion';
import { useScrollytelling } from '../hooks/useScrollytelling';

interface ScrollytellingSectionProps {
  children: React.ReactNode;
  className?: string;
  effect?: 'fadeUp' | 'slideIn' | 'scale' | 'rotate' | 'morphText' | 'stagger';
  delay?: number;
  duration?: number;
}

const ScrollytellingSection: React.FC<ScrollytellingSectionProps> = ({
  children,
  className = '',
  effect = 'fadeUp',
  delay = 0,
  duration = 0.8
}) => {
  const { ref, isVisible, scrollProgress } = useScrollytelling({
    threshold: 0.1,
    triggerOnce: false
  });

  const getVariants = () => {
    switch (effect) {
      case 'fadeUp':
        return {
          hidden: { opacity: 0, y: 60 },
          visible: { opacity: 1, y: 0 }
        };
      
      case 'slideIn':
        return {
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 }
        };
      
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      
      case 'rotate':
        return {
          hidden: { opacity: 0, rotate: -10, scale: 0.9 },
          visible: { opacity: 1, rotate: 0, scale: 1 }
        };
      
      case 'morphText':
        return {
          hidden: { opacity: 0, y: 20, scaleY: 0.5 },
          visible: { opacity: 1, y: 0, scaleY: 1 }
        };
      
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
    }
  };

  const getTransition = () => ({
    duration,
    delay,
    ease: "easeOut" as const
  });

  const getScrollBasedStyle = () => {
    return {
      transform: `translateY(${(1 - scrollProgress) * 30}px)`,
      opacity: Math.max(0.3, scrollProgress)
    };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={getVariants()}
      transition={getTransition()}
      style={getScrollBasedStyle()}
    >
      {children}
    </motion.div>
  );
};

export default ScrollytellingSection;
