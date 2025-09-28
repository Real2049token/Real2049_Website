import React from 'react';

interface RealLogoProps {
  width?: number;
  height?: number;
  className?: string;
}

const RealLogo: React.FC<RealLogoProps> = ({ 
  width = 150, 
  height = 45, 
  className = '' 
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 150 45" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background circle with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>
      </defs>
      
      <circle 
        cx="22" 
        cy="22" 
        r="20" 
        fill="url(#logoGradient)" 
        stroke="rgba(255, 255, 255, 0.2)" 
        strokeWidth="2"
      />
      
      {/* R letter */}
      <text 
        x="22" 
        y="30" 
        textAnchor="middle" 
        fontSize="24" 
        fontWeight="bold" 
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        R
      </text>
      
      {/* REAL 2049 text with gradient */}
      <text 
        x="52" 
        y="18" 
        fontSize="18" 
        fontWeight="bold" 
        fill="url(#logoGradient)"
        fontFamily="Arial, sans-serif"
      >
        REAL 2049
      </text>
      
      {/* Network subtitle */}
      <text 
        x="52" 
        y="32" 
        fontSize="10" 
        fill="#94a3b8"
        fontFamily="Arial, sans-serif"
        letterSpacing="1px"
      >
        NETWORK
      </text>
      
      {/* Modern decorative elements */}
      <circle cx="128" cy="12" r="2" fill="#6366f1" opacity="0.8" />
      <circle cx="135" cy="18" r="1.5" fill="#06b6d4" opacity="0.6" />
      <circle cx="130" cy="25" r="1" fill="#f59e0b" opacity="0.7" />
    </svg>
  );
};

export default RealLogo;
