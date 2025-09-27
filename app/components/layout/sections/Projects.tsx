"use client";
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern online store with focus on user experience and performance.",
    category: "Web Development",
    year: "2024"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "Minimal portfolio design focusing on content and readability.",
    category: "UI/UX Design",
    year: "2024"
  },
  {
    id: 3,
    title: "Mobile Application",
    description: "Cross-platform app with intuitive interface and smooth animations.",
    category: "Product Design",
    year: "2023"
  },
  {
    id: 4,
    title: "Design System",
    description: "Comprehensive design system for consistent user experiences.",
    category: "Design Systems",
    year: "2023"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Selected Work</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            A curated selection of projects that represent my approach to design and development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="minimal-card p-8 group cursor-pointer">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 block">
                    {project.category} • {project.year}
                  </span>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
              
              {/* Hover Line */}
              <div className="w-0 group-hover:w-full h-px bg-current mt-4 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <button className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
            View All Projects →
          </button>
        </div>
      </div>
    </section>
  );
}