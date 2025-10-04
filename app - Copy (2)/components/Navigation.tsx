"use client";
import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with 3D Effect */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 group"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-light tracking-tight group-hover:text-accent transition-colors">
                Portfolio
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative px-4 py-2 overflow-hidden group"
                >
                  <span className="relative z-10 text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 glass-3d rounded-lg group"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg pt-20">
          <div className="flex flex-col items-center space-y-8 p-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors hover:scale-110 transform duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}