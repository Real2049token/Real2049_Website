import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressIndicator: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  

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
          zIndex: 998,
          boxShadow: '0 0 10px rgba(255, 204, 102, 0.5)',
          pointerEvents: 'none'
        }}
      />
    </>
  );
};

export default ScrollProgressIndicator;
