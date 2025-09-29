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
    <img 
      src="/assets/img/logo/real2049-logo.png"
      alt="REAL 2049 Network Logo"
      width={width} 
      height={height} 
      className={className}
      style={{
        objectFit: 'contain',
        maxWidth: '100%',
        height: 'auto',
        mixBlendMode: 'screen',
        filter: 'brightness(1.25) contrast(1.2) saturate(1.15) drop-shadow(0 2px 8px rgba(0,0,0,0.65)) drop-shadow(0 0 12px rgba(99,102,241,0.5))',
        willChange: 'filter'
      }}
    />
  );
};

export default RealLogo;
