"use client";
import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface VideoSphereProps {
  videoSrc: string;
  radius?: number;
  rotationSpeed?: number;
}

export default function VideoSphere({ 
  videoSrc, 
  radius = 5, 
  rotationSpeed = 0.1 
}: VideoSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);

  useEffect(() => {
    // Create video element
    const video = document.createElement('video');
    video.src = videoSrc;
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    
    video.addEventListener('loadeddata', () => {
      video.play();
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      setVideoTexture(texture);
    });

    videoRef.current = video;

    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.remove();
      }
    };
  }, [videoSrc]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshBasicMaterial 
        map={videoTexture}
        side={THREE.BackSide}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}