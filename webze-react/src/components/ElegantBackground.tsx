import React from 'react';
import { motion } from 'framer-motion';

const ElegantBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Gradient Orbs */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 204, 102, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 204, 102, 0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Minimal Floating Dots */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`dot-${i}`}
          style={{
            position: 'absolute',
            left: `${20 + i * 10}%`,
            top: `${30 + (i % 3) * 20}%`,
            width: '3px',
            height: '3px',
            borderRadius: '50%',
            background: 'rgba(255, 204, 102, 0.4)',
            boxShadow: '0 0 8px rgba(255, 204, 102, 0.3)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gentle Geometric Lines */}
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.1 }}
      >
        <defs>
          <linearGradient id="gentleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 204, 102, 0)" />
            <stop offset="50%" stopColor="rgba(255, 204, 102, 0.3)" />
            <stop offset="100%" stopColor="rgba(255, 204, 102, 0)" />
          </linearGradient>
        </defs>
        
        {/* Subtle connecting lines */}
        <motion.path
          d="M 10,80 Q 200,20 400,80 T 800,80"
          stroke="url(#gentleGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.3, 0] 
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M 100,10 Q 300,60 500,10 T 900,10"
          stroke="url(#gentleGradient)"
          strokeWidth="1"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0], 
            opacity: [0, 0.2, 0] 
          }}
          transition={{
            duration: 20,
            delay: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Subtle Background Pattern */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 25% 25%, rgba(255, 204, 102, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 204, 102, 0.03) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default ElegantBackground;
