"use client";
import { Play, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react'; // ADD MISSING IMPORT
import dynamic from 'next/dynamic';

const VideoScene = dynamic(() => import('../../three/VideoScene'), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-900 rounded-2xl animate-pulse"></div>
});

const videoProjects = [
  {
    id: 1,
    title: "Quantum Particles",
    description: "Procedural particle system with real-time physics simulation",
    mediaSrc: "/videos/particle-system.mp4",
    mediaType: "video" as const,
    category: "3D Animation",
    year: "2024",
    technologies: ["Three.js", "WebGL", "GLSL"],
    aspect: "square"
  },
  {
    id: 2,
    title: "WebGPU Lighting",
    description: "Advanced real-time lighting with WebGPU technology",
    mediaSrc: "/videos/webgpu-lights.jpg",
    mediaType: "image" as const,
    category: "Real-time 3D",
    year: "2024",
    technologies: ["WebGPU", "Three.js", "Shaders"],
    aspect: "wide"
  },
  {
    id: 3,
    title: "Anamorphic Effects",
    description: "Cinematic post-processing and anamorphic rendering",
    mediaSrc: "/videos/webgpu-anamorphic.jpg", 
    mediaType: "image" as const,
    category: "Visual Effects",
    year: "2024",
    technologies: ["Post-Processing", "WebGPU", "GLSL"],
    aspect: "wide"
  },
  {
    id: 4,
    title: "Reflection Systems",
    description: "Advanced reflection and blur rendering techniques",
    mediaSrc: "/videos/webgpu-reflection.jpg",
    mediaType: "image" as const,
    category: "3D Rendering",
    year: "2024",
    technologies: ["Raytracing", "WebGPU", "Reflections"],
    aspect: "wide"
  }
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [muted, setMuted] = useState(true); // ADDED STATE FOR MUTE BUTTON

  return (
    <section id="video-showcase" className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">
            3D Video Portfolio
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Immersive 3D video experiences that push the boundaries of digital storytelling
          </p>
        </div>

        {/* Media Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {videoProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative glass-3d rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setActiveVideo(project.id)}
              onMouseLeave={() => setActiveVideo(null)}
            >
              {/* Media Container */}
              <div className={`relative ${
                project.aspect === 'square' ? 'aspect-square' :
                project.aspect === 'wide' ? 'aspect-video' : 'aspect-[9/16]'
              }`}>
                <VideoScene 
                  type="plane" 
                  mediaSrcs={[project.mediaSrc]}
                  mediaType={project.mediaType}
                  className="w-full h-full"
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="p-4 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <Play className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="text-xs font-medium text-purple-400 mb-2 block">
                      {project.category} • {project.year}
                    </span>
                    <h3 className="text-xl font-medium text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {project.mediaType === 'image' && (
                      <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        3D Render
                      </span>
                    )}
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 hover:bg-white/10 rounded">
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Three.js Image Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-light text-white mb-8 text-center">
            Three.js Rendering Gallery
          </h3>
          <div className="glass-3d rounded-2xl p-8">
            <VideoScene 
              type="image-grid"
              mediaSrcs={[
                "/videos/webgpu-lights.jpg",
                "/videos/webgpu-anamorphic.jpg", 
                "/videos/webgpu-reflection.jpg",
                "/videos/webgpu-skinning.jpg",
                "/videos/webgpu-instancing.jpg"
              ]}
              mediaType="image"
              className="h-64"
            />
          </div>
        </div>

        {/* 3D Video Player Section */}
        <div className="mt-20 glass-3d rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8">
            <div className="aspect-video rounded-xl overflow-hidden">
              <VideoScene 
                type="plane" 
                mediaSrcs={["/videos/3d-background.mp4"]}
                mediaType="video"
                className="w-full h-full"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-light text-white mb-4">Interactive 3D Showreel</h3>
                <p className="text-gray-400 leading-relaxed">
                  Experience my work in an immersive 3D environment. This interactive showreel 
                  showcases the fusion of video artistry and web technologies.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all">
                  <Play className="w-4 h-4" />
                  <span>Play Showreel</span>
                </button>
                
                <button 
                  onClick={() => setMuted(!muted)}
                  className="p-3 border border-white/20 rounded-full text-white hover:border-white/40 transition-colors"
                >
                  {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}