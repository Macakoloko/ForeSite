import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  onNavigate: (section: 'sobre' | 'portfolio' | 'servicos' | 'clientes' | 'contato') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Sobre', section: 'sobre' },
    { label: 'Portfólio', section: 'portfolio' },
    { label: 'Serviços', section: 'servicos' },
    { label: 'Clientes', section: 'clientes' },
    { label: 'Contato', section: 'contato' },
  ] as const;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark-bg/80 backdrop-blur-lg border-b border-dark-text/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-widest text-dark-text uppercase">
          foreyer
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => onNavigate(item.section)}
              className="text-sm font-light tracking-wider text-dark-subtle hover:text-dark-text transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center">
            {/* Theme toggle removed */}
        </div>
      </div>
    </header>
  );
};

export default Header;