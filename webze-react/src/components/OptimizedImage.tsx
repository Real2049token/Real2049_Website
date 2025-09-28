import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  style?: React.CSSProperties;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  style 
}) => {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      loading={loading}
      style={style}
      onLoad={(e) => {
        // Fade in the image once loaded
        const img = e.target as HTMLImageElement;
        img.style.opacity = '1';
      }}
      onError={(e) => {
        // Handle image load error gracefully
        const img = e.target as HTMLImageElement;
        img.style.opacity = '0.5';
        console.warn(`Failed to load image: ${src}`);
      }}
    />
  );
};

export default OptimizedImage;
