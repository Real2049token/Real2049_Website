import React from 'react';
import { motion } from 'framer-motion';

const AnimatedGrid: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Animated Grid Lines */}
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <pattern
            id="grid"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 50 0 L 0 0 0 50"
              fill="none"
              stroke="rgba(255, 204, 102, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
          </pattern>
          
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 204, 102, 0)" />
            <stop offset="50%" stopColor="rgba(255, 204, 102, 0.1)" />
            <stop offset="100%" stopColor="rgba(255, 204, 102, 0)" />
          </linearGradient>
        </defs>
        
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Animated Hexagon Pattern */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`hex-${i}`}
          style={{
            position: 'absolute',
            left: `${(i % 4) * 25}%`,
            top: `${Math.floor(i / 4) * 33}%`,
            width: '100px',
            height: '100px',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            background: 'linear-gradient(45deg, rgba(255, 204, 102, 0.05), rgba(255, 204, 102, 0.1))',
            border: '1px solid rgba(255, 204, 102, 0.1)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 60, 120, 180, 240, 300, 360],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 15 + i * 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Flowing Data Streams */}
      {Array.from({ length: 5 }, (_, i) => (
        <motion.div
          key={`stream-${i}`}
          style={{
            position: 'absolute',
            left: `${i * 20}%`,
            top: '-10%',
            width: '2px',
            height: '120%',
            background: 'linear-gradient(to bottom, transparent, rgba(255, 204, 102, 0.3), transparent)',
          }}
          animate={{
            y: ['-120%', '120%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Orbiting Elements */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '400px',
          height: '400px',
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(255, 204, 102, 0.1)',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={`orbit-${i}`}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '8px',
              height: '8px',
              background: '#FFCC66',
              borderRadius: '50%',
              transform: `rotate(${i * 60}deg) translateY(-200px)`,
              boxShadow: '0 0 10px rgba(255, 204, 102, 0.5)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Pulse Waves */}
      {Array.from({ length: 3 }, (_, i) => (
        <motion.div
          key={`wave-${i}`}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100px',
            height: '100px',
            border: '2px solid rgba(255, 204, 102, 0.3)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 8],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 1.3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedGrid;
