"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-light tracking-tight hover:text-accent transition-colors"
            >
              Portfolio
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-400"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-white dark:bg-black pt-20">
          <div className="flex flex-col items-center space-y-8 p-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
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