"use client";
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface VideoPlaneProps {
  videoSrc: string;
  width?: number;
  height?: number;
  position?: [number, number, number];
  hoverEffect?: boolean;
}

export default function VideoPlane({ 
  videoSrc, 
  width = 4, 
  height = 2.25,
  position = [0, 0, 0],
  hoverEffect = true
}: VideoPlaneProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.preload = 'auto';
    
    video.addEventListener('loadeddata', () => {
      video.play();
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      setVideoTexture(texture);
    });

    return () => {
      video.pause();
      video.remove();
    };
  }, [videoSrc]);

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
        map={videoTexture}
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