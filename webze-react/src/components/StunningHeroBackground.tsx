import React from 'react';
import { motion } from 'framer-motion';

const StunningHeroBackground: React.FC = () => {
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
      {/* Stable Gradient Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(6, 182, 212, 0.06) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 60%)
          `,
        }}
      />

      {/* Floating Geometric Orbs */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={`orb-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 80}px`,
            height: `${40 + Math.random() * 80}px`,
            borderRadius: '50%',
            background: i % 3 === 0 
              ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(99, 102, 241, 0.05))'
              : i % 3 === 1
              ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.05))'
              : 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))',
            filter: 'blur(20px)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12 + i * 2,
            delay: i * 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Morphing Blob Shapes */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))',
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          filter: 'blur(40px)',
        }}
        animate={{
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 50% 50% / 70% 30% 50% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%'
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '350px',
          height: '350px',
          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(99, 102, 241, 0.1))',
          borderRadius: '40% 60% 60% 40% / 70% 30% 70% 30%',
          filter: 'blur(30px)',
        }}
        animate={{
          borderRadius: [
            '40% 60% 60% 40% / 70% 30% 70% 30%',
            '50% 50% 50% 50% / 50% 50% 50% 50%',
            '40% 60% 60% 40% / 70% 30% 70% 30%'
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Elegant Sparkles */}
      {Array.from({ length: 8 }, (_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            background: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#06b6d4' : '#f59e0b',
            borderRadius: '50%',
            boxShadow: `0 0 12px ${i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#06b6d4' : '#f59e0b'}`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Flowing Energy Streams */}
      <svg
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0, opacity: 0.6 }}
      >
        <defs>
          <linearGradient id="streamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0)">
              <animate attributeName="stop-opacity" values="0;0.8;0" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="rgba(99, 102, 241, 0.6)">
              <animate attributeName="stop-opacity" values="0;1;0" dur="6s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0)">
              <animate attributeName="stop-opacity" values="0;0.8;0" dur="6s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
          
          <linearGradient id="streamGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(245, 158, 11, 0)">
              <animate attributeName="stop-opacity" values="0;0.7;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="rgba(245, 158, 11, 0.5)">
              <animate attributeName="stop-opacity" values="0;1;0" dur="8s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)">
              <animate attributeName="stop-opacity" values="0;0.7;0" dur="8s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>

        {/* Flowing curved paths */}
        <motion.path
          d="M 0,300 Q 200,100 400,300 T 800,300 Q 1000,200 1200,300"
          stroke="url(#streamGradient1)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M 1200,200 Q 1000,400 800,200 T 400,200 Q 200,100 0,200"
          stroke="url(#streamGradient2)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 15, delay: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Prismatic Light Effects */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '600px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          background: `
            conic-gradient(
              from 0deg,
              rgba(99, 102, 241, 0.1),
              rgba(6, 182, 212, 0.1),
              rgba(245, 158, 11, 0.1),
              rgba(99, 102, 241, 0.1)
            )
          `,
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    </div>
  );
};

export default StunningHeroBackground;
