"use client";
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const SimpleOrbitControls = () => {
  useFrame(({ camera, mouse }) => {
    camera.position.x = Math.sin(mouse.x * Math.PI) * 3;
    camera.position.z = Math.cos(mouse.x * Math.PI) * 3;
    camera.position.y = mouse.y * 2;
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const VideoPlane = ({ videoSrc, position = [0, 0, 0] }: { videoSrc: string; position?: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);

  useEffect(() => {
    if (!videoSrc) return;

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
      setVideoTexture(texture);
    });

    return () => {
      video.pause();
    };
  }, [videoSrc]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  if (!videoTexture) return null;

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[4, 2.5]} />
      <meshBasicMaterial map={videoTexture} side={THREE.DoubleSide} transparent opacity={0.8} />
    </mesh>
  );
};

interface VideoSceneProps {
  type?: string;
  videoSrcs?: string[];
  className?: string;
}

export default function VideoScene({ 
  type = "multiple", 
  videoSrcs = [], 
  className = "" 
}: VideoSceneProps) {
  
  const safeVideoSrcs = Array.isArray(videoSrcs) ? videoSrcs : [];

  return (
    <div className={`relative w-full h-full ${className}`} style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        
        {safeVideoSrcs.map((src, index) => {
          const angle = (index / safeVideoSrcs.length) * Math.PI * 2;
          const radius = 8;
          const position: [number, number, number] = [
            Math.cos(angle) * radius,
            Math.sin(angle) * 0.8,
            Math.sin(angle) * radius * 0.3
          ];

          return (
            <VideoPlane 
              key={index} 
              videoSrc={src} 
              position={position}
            />
          );
        })}
        
        <SimpleOrbitControls />
      </Canvas>
    </div>
  );
}