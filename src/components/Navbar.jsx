import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/viaGraficaData';
import Logo from './Logo';

export default function Navbar({ onOpenBudgetModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Trabalhos', href: '#galeria' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Avaliações', href: '#avaliacoes' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-200 text-dark' 
        : 'bg-white py-4 border-b border-gray-100 text-dark'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Official Logo */}
        <a href="#hero" className="flex items-center group transition-transform hover:scale-105">
          <Logo className="h-10 sm:h-12" variant="dark" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-gray-700 hover:text-neon-dark transition-colors relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-gray-700 hover:text-neon-dark transition-colors px-3.5 py-2 rounded-full border border-gray-200 hover:border-neon"
          >
            <Phone size={14} className="text-neon-dark" />
            {COMPANY_INFO.phoneDisplay}
          </a>

          <button
            onClick={() => onOpenBudgetModal()}
            className="flex items-center gap-2 bg-neon hover:bg-[#3da71f] text-white font-bold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-neon transition-all transform hover:-translate-y-0.5 border border-neon/50"
          >
            <span>Orçamento</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => onOpenBudgetModal()}
            className="bg-neon text-white font-bold text-xs px-3.5 py-2 rounded-full shadow-md"
          >
            Orçamento
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-800 hover:text-neon-dark py-2 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBudgetModal();
                }}
                className="w-full bg-neon text-white font-bold py-3 rounded-full text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
