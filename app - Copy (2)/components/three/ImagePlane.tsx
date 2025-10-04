"use client";
import { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

interface ImagePlaneProps {
  imageSrc: string;
  width?: number;
  height?: number;
  position?: [number, number, number];
  hoverEffect?: boolean;
}

export default function ImagePlane({ 
  imageSrc, 
  width = 4, 
  height = 2.25,
  position = [0, 0, 0],
  hoverEffect = true
}: ImagePlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Load texture using Three.js TextureLoader
  const texture = useLoader(TextureLoader, imageSrc);

  useFrame((state, delta) => {
    if (meshRef.current && hoverEffect) {
      if (isHovered) {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          -0.1,
          0.1
        );
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        meshRef.current.rotation.x = THREE.MathUtils.lerp(
          meshRef.current.rotation.x,
          0,
          0.1
        );
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial 
        map={texture}
        toneMapped={false}
        transparent
        opacity={0.9}
      />
      {/* Glowing border */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[width + 0.1, height + 0.1]} />
        <meshBasicMaterial 
          color="#8b5cf6"
          transparent
          opacity={isHovered ? 0.3 : 0.1}
        />
      </mesh>
    </mesh>
  );
}