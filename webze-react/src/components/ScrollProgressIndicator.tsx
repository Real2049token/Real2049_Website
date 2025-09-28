import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      setScrollPercent(Math.round(latest * 100));
    });
    
    return unsubscribe;
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--tg-primary-color), #ff6b6b, var(--tg-primary-color))',
          transformOrigin: '0%',
          scaleX,
          zIndex: 999,
          boxShadow: '0 0 10px rgba(255, 204, 102, 0.5)'
        }}
      />
      
      {/* Circular progress indicator */}
      <motion.div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          zIndex: 998
        }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60">
          {/* Background circle */}
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx="30"
            cy="30"
            r="25"
            stroke="var(--tg-primary-color)"
            strokeWidth="3"
            fill="transparent"
            strokeLinecap="round"
            style={{
              pathLength: scrollYProgress,
              filter: 'drop-shadow(0 0 6px rgba(255, 204, 102, 0.6))'
            }}
            strokeDasharray="0 1"
          />
          {/* Center dot */}
          <motion.circle
            cx="30"
            cy="30"
            r="3"
            fill="var(--tg-primary-color)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
        
        {/* Percentage text */}
        <motion.div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '10px',
            fontWeight: 'bold',
            color: 'var(--tg-primary-color)',
            textAlign: 'center'
          }}
        >
          <motion.span
            style={{
              display: 'block',
              lineHeight: 1
            }}
          >
            {scrollPercent}%
          </motion.span>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ScrollProgressIndicator;
