import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MorphingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}

const MorphingText: React.FC<MorphingTextProps> = ({
  texts,
  interval = 3000,
  className = '',
  style = {}
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -50,
      rotateX: 90,
      scale: 0.8
    }
  };

  return (
    <div className={className} style={{ ...style, perspective: '1000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          style={{ display: 'inline-block' }}
        >
          {texts[currentIndex].split('').map((letter, i) => (
            <motion.span
              key={`${currentIndex}-${i}`}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{
                delay: i * 0.05,
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              style={{ 
                display: 'inline-block',
                marginRight: letter === ' ' ? '0.3em' : '0'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MorphingText;
