import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  range?: number;
  type?: 'button' | 'submit' | 'reset';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  onClick,
  strength = 0.3,
  range = 100,
  type = 'button'
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < range) {
      const force = (range - distance) / range;
      setPosition({
        x: deltaX * strength * force,
        y: deltaY * strength * force
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(255, 204, 102, 0.3)",
        filter: "brightness(1.1)"
      }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'relative',
        cursor: 'pointer',
        border: 'none',
        background: 'transparent',
        padding: 0
      }}
    >
      <motion.div
        animate={{ x: position.x * 0.5, y: position.y * 0.5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        {children}
      </motion.div>
      
      {/* Glow effect */}
      <motion.div
        className="button-glow"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle, rgba(255, 204, 102, 0.2) 0%, transparent 70%)',
          borderRadius: 'inherit',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          pointerEvents: 'none'
        }}
        animate={{ 
          scale: position.x || position.y ? [1, 1.2, 1] : 1,
          opacity: position.x || position.y ? [0.3, 0.6, 0.3] : 0
        }}
        transition={{ duration: 0.6, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default MagneticButton;
