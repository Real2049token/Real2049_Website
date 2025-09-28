import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, RoundedBox, Text } from '@react-three/drei';
import * as THREE from 'three';

const HotelKeyCard3D: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const cardRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cardRef.current) {
      cardRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      cardRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      cardRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <group ref={cardRef} position={position}>
      {/* Main card */}
      <RoundedBox args={[1.6, 1, 0.05]} radius={0.1} smoothness={4}>
        <meshStandardMaterial 
          color="#2a2a2a"
          emissive="#FFCC66"
          emissiveIntensity={0.1}
          metalness={0.3}
          roughness={0.7}
        />
      </RoundedBox>
      
      {/* Magnetic stripe */}
      <Box args={[1.4, 0.15, 0.06]} position={[0, -0.2, 0]}>
        <meshStandardMaterial 
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </Box>
      
      {/* REAL logo area */}
      <Box args={[0.6, 0.3, 0.06]} position={[-0.3, 0.2, 0]}>
        <meshStandardMaterial 
          color="#FFCC66"
          emissive="#FFCC66"
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* Room number */}
      <Text
        position={[0.3, 0.1, 0.03]}
        fontSize={0.15}
        color="#FFCC66"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.8}
      >
        SUITE
        {'\n'}
        2025
      </Text>
      
      {/* Hotel name */}
      <Text
        position={[0, -0.4, 0.03]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        REAL NETWORK
      </Text>
      
      {/* Holographic effect */}
      <pointLight
        position={[0, 0, 0.2]}
        color="#FFCC66"
        intensity={0.3}
        distance={2}
      />
    </group>
  );
};

export default HotelKeyCard3D;
