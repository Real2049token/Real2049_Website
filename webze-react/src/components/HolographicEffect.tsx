import React from 'react';
import { motion } from 'framer-motion';

const HolographicEffect: React.FC = () => {
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
      {/* Holographic Scan Lines */}
      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={`scanline-${i}`}
          style={{
            position: 'absolute',
            left: 0,
            top: `${i * 5}%`,
            width: '100%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255, 204, 102, 0.3), transparent)',
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Floating Holograms */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`hologram-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '60px',
            height: '60px',
            background: `conic-gradient(
              from ${i * 45}deg,
              rgba(255, 204, 102, 0.1),
              rgba(255, 204, 102, 0.3),
              rgba(255, 204, 102, 0.1)
            )`,
            borderRadius: '50%',
            filter: 'blur(1px)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.6, 0.2],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Data Flow Lines */}
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255, 204, 102, 0)">
              <animate attributeName="stop-opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="rgba(255, 204, 102, 0.6)">
              <animate attributeName="stop-opacity" values="0;1;0" dur="4s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgba(255, 204, 102, 0)">
              <animate attributeName="stop-opacity" values="0;0.8;0" dur="4s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Curved connection lines */}
        <motion.path
          d="M 0,50 Q 50,10 100,50 T 200,50"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 100,100 Q 150,60 200,100 T 300,100"
          stroke="url(#flowGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 8, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Particle Field */}
      {Array.from({ length: 30 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '2px',
            height: '2px',
            background: '#FFCC66',
            borderRadius: '50%',
            boxShadow: '0 0 4px rgba(255, 204, 102, 0.8)',
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Cyber Grid Overlay */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            linear-gradient(90deg, rgba(255, 204, 102, 0.02) 1px, transparent 1px),
            linear-gradient(rgba(255, 204, 102, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
        animate={{
          backgroundPosition: ['0 0', '40px 40px'],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          backgroundPosition: { duration: 20, repeat: Infinity, ease: "linear" },
          opacity: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};

export default HolographicEffect;
