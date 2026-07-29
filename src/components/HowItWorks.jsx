import React from 'react';
import { TIMELINE_STEPS } from '../data/viaGraficaData';
import { FileSearch, FileCheck, Cog, Truck, ArrowRight } from 'lucide-react';

const stepIcons = [FileSearch, FileCheck, Cog, Truck];

export default function HowItWorks({ onOpenBudgetModal }) {
  return (
    <section id="como-funciona" className="py-24 bg-dark text-white relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon/10 via-transparent to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neon bg-dark-lighter border border-neon/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Processo Transparente
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Como funciona do <span className="text-neon">pedido à entrega.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light">
            Quatro passos simples e descomplicação total para transformar sua ideia em impresso de alta qualidade.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-neon/30 via-neon to-neon/30 -translate-y-6 z-0"></div>

          {TIMELINE_STEPS.map((step, idx) => {
            const IconComp = stepIcons[idx] || FileSearch;
            return (
              <div
                key={idx}
                className="relative z-10 bg-dark-card/90 backdrop-blur-md p-6 rounded-3xl border border-dark-border hover:border-neon transition-all duration-300 group hover:-translate-y-2 flex flex-col items-center text-center shadow-dark-soft"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 rounded-2xl bg-neon text-white font-black text-xl flex items-center justify-center mb-6 shadow-neon group-hover:scale-110 transition-transform">
                  <IconComp size={28} />
                </div>

                <span className="text-xs font-extrabold text-neon uppercase tracking-widest mb-1">
                  Passo {step.number}
                </span>

                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-neon transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                  {step.desc}
                </p>

                {/* Down Arrow for Mobile */}
                {idx < TIMELINE_STEPS.length - 1 && (
                  <div className="md:hidden mt-4 text-neon animate-bounce">
                    ↓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenBudgetModal()}
            className="inline-flex items-center gap-3 bg-neon hover:bg-[#3da71f] text-white font-bold text-base px-8 py-4 rounded-full shadow-neon hover:shadow-neon-strong transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Pedir Orçamento</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
