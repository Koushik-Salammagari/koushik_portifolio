import React, { useState, useEffect } from 'react';
import { Menu, X, Network, LayoutList } from 'lucide-react';

interface HeaderProps {
  view: 'classic' | 'graph';
  onToggleView: () => void;
}

const Header = ({ view, onToggleView }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#open-source', label: 'Open Source' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const solid = isScrolled || view === 'graph';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      solid ? 'bg-black/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold gradient-text-dark hover:scale-105 transition-all duration-300">
            Koushik Salammagari
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {view === 'classic' && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cyan-200 hover:text-white transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={onToggleView}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border border-slate-600 text-cyan-200 hover:text-white hover:border-white transition-all duration-300"
            >
              {view === 'classic' ? <Network size={16} /> : <LayoutList size={16} />}
              {view === 'classic' ? 'Graph View' : 'Classic View'}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={onToggleView}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border border-slate-600 text-cyan-200"
            >
              {view === 'classic' ? <Network size={14} /> : <LayoutList size={14} />}
              {view === 'classic' ? 'Graph' : 'Classic'}
            </button>
            {view === 'classic' && (
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-cyan-200 hover:text-white transition-colors focus-ring"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && view === 'classic' && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-cyan-200 hover:text-white transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
