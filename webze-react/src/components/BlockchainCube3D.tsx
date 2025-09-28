import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Text } from '@react-three/drei';
import * as THREE from 'three';

const BlockchainCube3D: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const cubeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      cubeRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
  const edges = new THREE.EdgesGeometry(cubeGeometry);

  return (
    <group ref={cubeRef} position={position}>
      {/* Main cube with wireframe */}
      <Box args={[1, 1, 1]}>
        <meshStandardMaterial 
          color="#2a2a2a"
          transparent
          opacity={0.3}
          emissive="#FFCC66"
          emissiveIntensity={0.1}
        />
      </Box>
      
      {/* Wireframe edges */}
      <lineSegments geometry={edges}>
        <lineBasicMaterial color="#FFCC66" linewidth={2} />
      </lineSegments>
      
      {/* Floating smaller cubes */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box 
          key={i} 
          args={[0.1, 0.1, 0.1]} 
          position={[
            Math.sin((i / 8) * Math.PI * 2) * 1.5,
            Math.cos((i / 8) * Math.PI * 2) * 1.5,
            Math.sin((i / 4) * Math.PI) * 0.5
          ]}
        >
          <meshStandardMaterial 
            color="#FFCC66"
            emissive="#FFCC66"
            emissiveIntensity={0.3}
          />
        </Box>
      ))}
      
      {/* Center glow */}
      <pointLight
        position={[0, 0, 0]}
        color="#FFCC66"
        intensity={0.8}
        distance={4}
      />
    </group>
  );
};

export default BlockchainCube3D;
