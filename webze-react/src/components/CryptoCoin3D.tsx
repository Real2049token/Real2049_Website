import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Cylinder, Text } from '@react-three/drei';
import * as THREE from 'three';

const CryptoCoin3D: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const coinRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (coinRef.current) {
      coinRef.current.rotation.y = state.clock.elapsedTime * 0.8;
      coinRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      coinRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
    }
  });

  return (
    <group ref={coinRef} position={position}>
      {/* Main coin body */}
      <Cylinder args={[0.8, 0.8, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#FFCC66"
          emissive="#FFCC66"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </Cylinder>
      
      {/* Coin edge */}
      <Cylinder args={[0.82, 0.82, 0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial 
          color="#DAA520"
          metalness={0.9}
          roughness={0.1}
        />
      </Cylinder>
      
      {/* REAL text on front */}
      <Text
        position={[0, 0, 0.08]}
        fontSize={0.3}
        color="#2a2a2a"
        anchorX="center"
        anchorY="middle"
        font="/assets/fonts/fa-solid-900.woff"
      >
        REAL
      </Text>
      
      {/* $ symbol on back */}
      <Text
        position={[0, 0, -0.08]}
        rotation={[0, Math.PI, 0]}
        fontSize={0.4}
        color="#2a2a2a"
        anchorX="center"
        anchorY="middle"
      >
        $
      </Text>
      
      {/* Glow effect */}
      <pointLight
        position={[0, 0, 0]}
        color="#FFCC66"
        intensity={0.5}
        distance={3}
      />
    </group>
  );
};

export default CryptoCoin3D;
