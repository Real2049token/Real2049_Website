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
        height: 'auto'
      }}
    />
  );
};

export default RealLogo;
