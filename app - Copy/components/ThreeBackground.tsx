"use client";
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create particle positions
  const particleCount = 1500;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount * 3; i += 3) {
    const radius = 3 + Math.random() * 2;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi);
  }

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.05;
      pointsRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
        
        <FloatingParticles />
      </Canvas>
    </div>
  );
}