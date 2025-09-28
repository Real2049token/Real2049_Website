import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      // Modern color palette for REAL 2049 theme
      const colorVariant = i % 3;
      if (colorVariant === 0) {
        // Indigo
        colors[i * 3] = 0.39; // R (99/255)
        colors[i * 3 + 1] = 0.4; // G (102/255)
        colors[i * 3 + 2] = 0.95; // B (241/255)
      } else if (colorVariant === 1) {
        // Cyan
        colors[i * 3] = 0.02; // R (6/255)
        colors[i * 3 + 1] = 0.71; // G (182/255)
        colors[i * 3 + 2] = 0.83; // B (212/255)
      } else {
        // Amber
        colors[i * 3] = 0.96; // R (245/255)
        colors[i * 3 + 1] = 0.62; // G (158/255)
        colors[i * 3 + 2] = 0.04; // B (11/255)
      }
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ParticlesBackground: React.FC = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.6
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Particles />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
