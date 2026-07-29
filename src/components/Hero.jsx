import React from 'react';
import { ArrowRight, Printer, Building2, Package, Truck } from 'lucide-react';
import { IMAGES, QUICK_CATEGORIES } from '../data/viaGraficaData';

const categoryIcons = {
  Printer,
  Building2,
  Package,
  Truck
};

export default function Hero({ onOpenBudgetModal }) {
  return (
    <section id="hero" className="relative pt-24 bg-white text-dark overflow-hidden">
      
      {/* Main Hero Banner with Real Storefront Image */}
      <div className="relative min-h-[480px] sm:min-h-[520px] flex items-center justify-center bg-dark text-white overflow-hidden">
        {/* Background Image with 35% Opacity (-5% reduction) */}
        <img
          src={IMAGES.heroBg}
          alt="Fachada Real Via Gráfica Vianópolis"
          className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-all duration-700"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/75 to-dark/65"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neon bg-dark-lighter/80 border border-neon/40 px-4 py-1.5 rounded-full inline-block mb-4 shadow-neon/20">
            Muito além da impressão
          </span>

          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            Soluções Gráficas
          </h1>

          <p className="text-lg sm:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-8">
            Com qualidade, rapidez e excelente atendimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBudgetModal()}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neon hover:bg-[#3da71f] text-white font-black text-base px-8 py-3.5 rounded-full shadow-neon transition-all transform hover:-translate-y-0.5"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="#servicos"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-7 py-3.5 rounded-full backdrop-blur-sm border border-white/30 transition-all"
            >
              <span>Ver Principais Serviços</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Quick Category Bar (GraphA Reference Style) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {QUICK_CATEGORIES.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Printer;
            return (
              <a
                key={cat.id}
                href="#servicos"
                className="bg-dark text-white p-6 rounded-2xl shadow-xl hover:bg-dark-lighter border-t-4 border-neon transition-all duration-300 group flex flex-col items-center text-center transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/15 text-neon flex items-center justify-center mb-3 group-hover:bg-neon group-hover:text-white transition-all shadow-neon/10">
                  <IconComp size={24} />
                </div>
                <h3 className="font-heading font-black text-sm text-white tracking-wider uppercase mb-1 group-hover:text-neon">
                  {cat.title}
                </h3>
                <p className="text-gray-400 text-xs font-light">
                  {cat.desc}
                </p>
              </a>
            );
          })}
        </div>
      </div>

    </section>
  );
}
