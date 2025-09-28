import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  // Generate random floating elements
  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 15,
  }));

  const networkLines = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x1: Math.random() * 100,
    y1: Math.random() * 100,
    x2: Math.random() * 100,
    y2: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    >
      {/* Animated Gradient Background */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 204, 102, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 204, 102, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 40% 90%, rgba(255, 204, 102, 0.08) 0%, transparent 50%)
          `,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Floating Geometric Shapes */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          style={{
            position: 'absolute',
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            borderRadius: element.id % 3 === 0 ? '50%' : element.id % 3 === 1 ? '10px' : '0',
            background: element.id % 4 === 0 
              ? 'linear-gradient(45deg, rgba(255, 204, 102, 0.1), rgba(255, 204, 102, 0.05))'
              : 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 204, 102, 0.1)',
            backdropFilter: 'blur(1px)',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Animated Network Lines */}
      <svg
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.2
        }}
      >
        {networkLines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.6, 0] 
            }}
            transition={{
              duration: 8,
              delay: line.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFCC66" stopOpacity={0} />
            <stop offset="50%" stopColor="#FFCC66" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#FFCC66" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing Dots */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`dot-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: '#FFCC66',
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Icons */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`icon-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: '24px',
            color: 'rgba(255, 204, 102, 0.15)',
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {i % 6 === 0 && '🏨'}
          {i % 6 === 1 && '🔗'}
          {i % 6 === 2 && '💎'}
          {i % 6 === 3 && '🎯'}
          {i % 6 === 4 && '⭐'}
          {i % 6 === 5 && '🚀'}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
