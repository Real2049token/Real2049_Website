import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Cone } from '@react-three/drei';
import * as THREE from 'three';

const HotelBuilding3D: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const buildingRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      buildingRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={buildingRef} position={position}>
      {/* Main building */}
      <Box args={[1, 2, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2a2a2a" />
      </Box>
      
      {/* Hotel sign */}
      <Box args={[1.2, 0.3, 0.1]} position={[0, 1.3, 0.6]}>
        <meshStandardMaterial 
          color="#FFCC66" 
          emissive="#FFCC66" 
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* Windows */}
      {Array.from({ length: 6 }, (_, i) => (
        <Box 
          key={i} 
          args={[0.15, 0.15, 0.05]} 
          position={[
            (i % 3 - 1) * 0.3, 
            0.5 + Math.floor(i / 3) * 0.4, 
            0.52
          ]}
        >
          <meshStandardMaterial 
            color="#87CEEB" 
            emissive="#87CEEB" 
            emissiveIntensity={0.1}
          />
        </Box>
      ))}
      
      {/* Roof */}
      <Box args={[1.2, 0.2, 1.2]} position={[0, 1.1, 0]}>
        <meshStandardMaterial color="#8B4513" />
      </Box>
      
      {/* Flag pole */}
      <Cylinder args={[0.02, 0.02, 0.8]} position={[0.4, 1.6, 0.4]}>
        <meshStandardMaterial color="#C0C0C0" />
      </Cylinder>
      
      {/* Flag */}
      <Box args={[0.3, 0.2, 0.02]} position={[0.55, 1.8, 0.4]}>
        <meshStandardMaterial 
          color="#FFCC66" 
          emissive="#FFCC66" 
          emissiveIntensity={0.3}
        />
      </Box>
    </group>
  );
};

export default HotelBuilding3D;
