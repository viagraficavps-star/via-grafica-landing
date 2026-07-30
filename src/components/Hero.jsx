import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Printer, 
  Building2, 
  Package, 
  Truck, 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { QUICK_CATEGORIES, GALLERY_DATA } from '../data/viaGraficaData';

const categoryIcons = {
  Printer,
  Building2,
  Package,
  Truck
};

export default function Hero({ onOpenBudgetModal }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel every 3.5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_DATA.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % GALLERY_DATA.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
  };

  const activeWork = GALLERY_DATA[currentSlide];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 bg-white text-dark overflow-hidden flex flex-col justify-between selection:bg-[#49C926] selection:text-white">
      
      {/* Subtle Ambient Light Green Aura & Soft Glows on White */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#49C926]/8 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#49C926]/6 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Hero Layout (2 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center pt-4 pb-10">
          
          {/* LADO ESQUERDO: Conteúdo Persuasivo, Fundo Branco & Elementos Verdes #49C926 */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Top Luminous Badge (#49C926 Accent) */}
            <div className="inline-flex items-center gap-2.5 bg-[#49C926]/10 border border-[#49C926]/30 px-4 py-2 rounded-full shadow-sm animate-fadeIn">
              <span className="w-2.5 h-2.5 rounded-full bg-[#49C926] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold tracking-wide text-dark">
                Soluções Premium em Impressão & Comunicação Visual
              </span>
              <Sparkles size={14} className="text-[#49C926]" />
            </div>

            {/* Título Principal em Tipografia Minúscula com Primeira Maiúscula (Sentence Case) */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[62px] font-black text-dark leading-[1.08] tracking-tight">
              A gráfica completa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49C926] via-[#3da71f] to-[#49C926]">
                para sua empresa crescer
              </span>
            </h1>

            {/* Subtítulo Categorizado */}
            <p className="text-base sm:text-xl text-gray-600 font-light leading-relaxed max-w-xl">
              <span className="text-dark font-semibold">Impressão Digital</span> • <span className="text-dark font-semibold">Comunicação Visual</span> • <span className="text-dark font-semibold">Fachadas</span> • <span className="text-dark font-semibold">Brindes Personalizados</span> • <span className="text-dark font-semibold">Adesivação</span>
            </p>

            {/* CTAs (Botão Verde #49C926 + Botão Transparente) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Botão Principal Verde #49C926 com texto Branco */}
              <button
                onClick={() => onOpenBudgetModal()}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#49C926] hover:bg-[#3da71f] text-white font-black text-lg px-9 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Botão Secundário Transparente/Branco com Borda */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-dark font-bold text-base px-8 py-4 rounded-2xl border border-gray-200 hover:border-[#49C926] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Conheça nossos serviços</span>
              </a>
            </div>

            {/* Trust Checkmarks Row */}
            <div className="pt-6 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base font-bold text-dark">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#49C926]" />
                  <span>Desde 2006</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#49C926]" />
                  <span>Produção Própria</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#49C926]" />
                  <span>Atendimento em todo Goiás</span>
                </div>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: Vitrine de Imagens Expandida no Fundo Branco */}
          <div 
            className="lg:col-span-6 relative flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-[#49C926]/10 rounded-3xl blur-2xl transform rotate-1 pointer-events-none"></div>

            {/* Main Showcase Frame Container (White Clean Frame) */}
            <div className="relative w-full bg-white p-2 sm:p-3 rounded-3xl border-2 border-gray-100 shadow-2xl group">
              
              {/* Maximized Image Showcase Area (h-[420px] sm:h-[480px] lg:h-[520px]) */}
              <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-black">
                
                {/* Active Image */}
                <img
                  key={activeWork.image}
                  src={activeWork.image}
                  alt={activeWork.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 animate-fadeIn"
                />

                {/* Subtle Gradient Overlay for Text Readability at Bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none"></div>

                {/* Navigation Arrow Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#49C926] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/30 shadow-lg"
                  aria-label="Trabalho Anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#49C926] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/30 shadow-lg"
                  aria-label="Próximo Trabalho"
                >
                  <ChevronRight size={22} />
                </button>

                {/* SIMPLIFIED BOTTOM CARD: ONLY Title in Sentence Case */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/80 backdrop-blur-xl py-3 px-5 rounded-2xl border border-white/15 text-center">
                  <h3 className="font-heading font-bold text-base sm:text-xl text-white tracking-wide">
                    {activeWork.title}
                  </h3>
                </div>

              </div>

              {/* Carousel Slide Indicators */}
              <div className="flex items-center justify-center gap-2 mt-3.5 pb-1">
                {GALLERY_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? 'w-8 h-2.5 bg-[#49C926] shadow-sm'
                        : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir para trabalho ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 4-Column Quick Category Bar (White Cards Anchored at Bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_CATEGORIES.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Printer;
            return (
              <a
                key={cat.id}
                href="#servicos"
                className="bg-white border-2 border-gray-100 hover:border-[#49C926] p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group flex items-center gap-4 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#49C926]/15 text-[#49C926] flex items-center justify-center flex-shrink-0 group-hover:bg-[#49C926] group-hover:text-white transition-all shadow-sm">
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-dark tracking-wider uppercase mb-0.5 group-hover:text-[#49C926] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-light leading-snug">
                    {cat.desc}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

    </section>
  );
}
