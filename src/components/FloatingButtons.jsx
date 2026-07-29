import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/viaGraficaData';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-none">
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-12 h-12 rounded-full bg-dark text-white hover:bg-neon hover:text-dark border border-gray-700 hover:border-neon shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Voltar ao Topo"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Floating Pulsing WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá!%20Vim%20pelo%20site%20da%20Via%20Gráfica%20e%20gostaria%20de%20solicitar%20um%20orçamento.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-neon-strong transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
        aria-label="Falar no WhatsApp com a Via Gráfica"
      >
        <MessageCircle size={28} className="fill-white text-[#25D366]" />
        <span className="hidden sm:inline-block font-bold text-sm tracking-wide">
          Orçamento Online
        </span>

        {/* Pulsing Green Indicator Badge */}
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon border-2 border-dark animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-neon border-2 border-dark"></span>
      </a>

    </div>
  );
}
