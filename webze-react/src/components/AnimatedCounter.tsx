import React from 'react';
import { motion } from 'framer-motion';
import { useScrollytelling, useCountUp } from '../hooks/useScrollytelling';

interface AnimatedCounterProps {
  end: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  label,
  prefix = '',
  suffix = '',
  duration = 2000,
  className = ''
}) => {
  const { ref, isVisible } = useScrollytelling({
    threshold: 0.3,
    triggerOnce: true
  });

  const count = useCountUp(end, duration, isVisible);

  return (
    <motion.div
      ref={ref}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="counter-number"
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'var(--tg-primary-color)',
          textShadow: '0 0 20px rgba(255, 204, 102, 0.5)',
          filter: 'drop-shadow(0 0 10px rgba(255, 204, 102, 0.3))'
        }}
        animate={isVisible ? {
          scale: [1, 1.1, 1],
          filter: [
            'drop-shadow(0 0 10px rgba(255, 204, 102, 0.3))',
            'drop-shadow(0 0 20px rgba(255, 204, 102, 0.6))',
            'drop-shadow(0 0 10px rgba(255, 204, 102, 0.3))'
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </motion.div>
      <motion.div
        className="counter-label"
        style={{
          fontSize: '1.2rem',
          color: 'var(--tg-color-white-default)',
          marginTop: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.1em'
        }}
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCounter;
