import React from 'react';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/viaGraficaData';

export default function CTA({ onOpenBudgetModal }) {
  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden border-y border-dark-border">
      
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon/15 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Neon Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-card border border-neon/40 text-neon text-xs font-bold uppercase tracking-widest mb-6 shadow-neon/20">
          <Sparkles size={16} />
          <span>Atendimento Imediato</span>
        </div>

        {/* Main Headline */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Vamos imprimir seu <span className="text-neon drop-shadow-[0_0_20px_rgba(73,201,38,0.5)]">próximo projeto?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Solicite um orçamento agora mesmo e descubra o melhor custo-benefício em comunicação visual e gráfica da região.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-neon hover:bg-[#3da71f] text-white font-black text-lg px-9 py-4.5 rounded-full shadow-neon transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageCircle size={22} className="fill-white text-dark" />
            <span>Falar no WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBudgetModal()}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-dark font-bold text-lg px-9 py-4.5 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
          >
            <span>Solicitar Orçamento</span>
            <ArrowRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
