import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import HotelBuilding3D from './HotelBuilding3D';
import CryptoCoin3D from './CryptoCoin3D';
import BlockchainCube3D from './BlockchainCube3D';
import HotelKeyCard3D from './HotelKeyCard3D';

interface Scene3DProps {
  style?: React.CSSProperties;
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ style, className }) => {
  return (
    <div 
      className={className}
      style={{
        width: '100%',
        height: '400px',
        position: 'relative',
        ...style
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 6]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            color="#ffffff"
          />
          <pointLight 
            position={[-10, 0, -5]} 
            intensity={0.5}
            color="#FFCC66"
          />
          
          {/* Hotel Buildings */}
          <HotelBuilding3D position={[-3, 0, 0]} />
          <HotelBuilding3D position={[-1, 0, -1]} />
          <HotelBuilding3D position={[1, 0, 0.5]} />
          
          {/* Crypto Coins */}
          <CryptoCoin3D position={[3, 1, 0]} />
          <CryptoCoin3D position={[2, 2, -1]} />
          <CryptoCoin3D position={[4, 0.5, 1]} />
          
          {/* Blockchain Cubes */}
          <BlockchainCube3D position={[0, 3, -2]} />
          <BlockchainCube3D position={[-2, 2.5, 1]} />
          <BlockchainCube3D position={[2.5, 1.5, -0.5]} />
          
          {/* Hotel Key Cards */}
          <HotelKeyCard3D position={[0, 1.5, 2]} />
          <HotelKeyCard3D position={[-3.5, 2, 0.5]} />
          
          {/* Auto-rotate camera */}
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
