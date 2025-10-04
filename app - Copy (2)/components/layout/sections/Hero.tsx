"use client";
import { ArrowDown, Play, Video } from 'lucide-react';
import dynamic from 'next/dynamic';

const VideoScene = dynamic(() => import('../../three/VideoScene'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center z-0">
      <div className="text-white text-lg">Loading 3D Experience...</div>
    </div>
  )
});

export default function Hero() {
  const videoSources = [
    '/videos/3d-background.mp4',
    '/videos/particle-system.mp4', 
    '/videos/arch-viz.mp4',
    '/videos/hologram-ui.mp4'
  ];

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black">
      {/* 3D Background - Fixed positioning with proper z-index */}
      <div className="fixed inset-0 z-0"> {/* Changed from absolute to fixed */}
        <VideoScene 
          type="multiple"
          videoSrcs={videoSources}
          className="w-full h-full"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-purple-900/40 to-black/90"></div>
      </div>

      {/* Content - Higher z-index to appear above background */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 text-white">
        <div className="inline-flex items-center space-x-2 glass-3d px-6 py-3 mb-8">
          <Video className="w-4 h-4 text-purple-400" />
          <span className="text-sm font-medium text-purple-400">IMMERSIVE 3D EXPERIENCE</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 leading-tight">
          <span className="block">Where Video</span>
          <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-glow">
            Meets Dimension
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Creating immersive 3D video experiences that blend cinematic storytelling 
          with interactive web technologies. Each project is a journey into digital artistry.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToWork}
            className="btn-3d group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl"
          >
            <Play className="w-4 h-4" />
            <span>Watch Showreel</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          
          <button className="btn-3d group px-8 py-4 border-2 border-white/30 text-white rounded-full font-medium hover:border-white/50 hover:bg-white/10 transition-all duration-300">
            <span>Start 3D Project</span>
          </button>
        </div>
      </div>
    </section>
  );
}