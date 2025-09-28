import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useParallax } from '../hooks/useScrollytelling';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  speed = 0.5,
  direction = 'up',
  className = '',
  style = {}
}) => {
  const offset = useParallax(speed);
  const { scrollY } = useScroll();
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };

  // Advanced parallax with rotation and scale
  const y = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate = useTransform(scrollY, [0, 1000], [0, 5]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);

  return (
    <motion.div
      className={`parallax-section ${className}`}
      style={{
        ...style,
        transform: getTransform(),
        willChange: 'transform'
      }}
    >
      <motion.div
        style={{
          y: direction === 'up' ? y : undefined,
          rotate: direction === 'up' ? rotate : undefined,
          scale: direction === 'up' ? scale : undefined,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ParallaxSection;
