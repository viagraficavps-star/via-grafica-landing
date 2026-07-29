import React from 'react';
import { ArrowRight, CornerDownRight } from 'lucide-react';

export default function PreFooterCTA({ onOpenBudgetModal }) {
  return (
    <section className="py-20 bg-white text-dark relative border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm relative">
          
          {/* Left Text Copy */}
          <div className="max-w-2xl text-center md:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-dark leading-tight mb-3">
              Precisa ajuda para a produção de <span className="text-neon-dark">materiais de marketing?</span>
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Fale com a nossa equipe para obter um orçamento gratuito e sem compromisso com qualidade, agilidade e ótimo atendimento.
            </p>
          </div>

          {/* Right Action Button with Curved Arrow */}
          <div className="flex flex-col items-center md:items-end flex-shrink-0 relative">
            {/* Curved Arrow Graphic */}
            <div className="hidden md:flex items-center gap-1 text-gray-400 font-handwriting text-xs mb-2 mr-6">
              <CornerDownRight size={24} className="text-dark animate-bounce" />
            </div>

            <button
              onClick={() => onOpenBudgetModal()}
              className="flex items-center gap-3 bg-neon hover:bg-[#3da71f] text-white font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-neon transition-all transform hover:-translate-y-0.5"
            >
              <span>Quero um orçamento</span>
              <ArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
