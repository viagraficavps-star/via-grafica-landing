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
  ChevronRight,
  ExternalLink
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
    <section id="hero" className="relative min-h-screen pt-28 pb-16 bg-[#0A1009] text-white overflow-hidden flex flex-col justify-between selection:bg-[#49C926] selection:text-white">
      
      {/* Dynamic Luminous Ambient Background Depth (No Grid) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#49C926]/20 via-[#0A1009] to-[#040804] pointer-events-none"></div>
      
      {/* Blurred Luminous Green #49C926 Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#49C926]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-[#49C926]/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Luminous Micro-Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-2 h-2 rounded-full bg-[#49C926] shadow-[0_0_12px_#49C926] animate-ping opacity-75"></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 rounded-full bg-[#49C926] shadow-[0_0_10px_#49C926] animate-float opacity-80"></div>
        <div className="absolute top-1/4 right-10 w-2 h-2 rounded-full bg-[#49C926] shadow-[0_0_12px_#49C926] animate-pulse opacity-60"></div>
      </div>

      {/* Main Hero Layout (2 Columns) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 pb-12">
          
          {/* LADO ESQUERDO: Conteúdo Persuasivo & Chamada Principal */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Top Luminous Badge (#49C926) */}
            <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-[#49C926]/40 px-4 py-2 rounded-full shadow-[0_0_20px_rgba(73,201,38,0.15)] animate-fadeIn">
              <span className="w-2.5 h-2.5 rounded-full bg-[#49C926] animate-pulse shadow-[0_0_8px_#49C926]"></span>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#49C926]">
                Soluções Premium em Impressão & Comunicação Visual
              </span>
              <Sparkles size={14} className="text-[#49C926]" />
            </div>

            {/* Título Principal (60px - 72px) */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-[66px] font-black text-white leading-[1.05] tracking-tight">
              A GRÁFICA COMPLETA <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#49C926] via-[#5ce237] to-[#7CF503] drop-shadow-[0_0_35px_rgba(73,201,38,0.35)]">
                PARA SUA EMPRESA CRESCER
              </span>
            </h1>

            {/* Subtítulo Categorizado */}
            <p className="text-base sm:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">Impressão Digital</span> • <span className="text-white font-semibold">Comunicação Visual</span> • <span className="text-white font-semibold">Fachadas</span> • <span className="text-white font-semibold">Brindes Personalizados</span> • <span className="text-white font-semibold">Adesivação</span>
            </p>

            {/* CTAs (Botão Verde #49C926 + Botão Transparente) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Botão Principal Verde #49C926 */}
              <button
                onClick={() => onOpenBudgetModal()}
                className="group relative inline-flex items-center justify-center gap-3 bg-[#49C926] hover:bg-[#3da71f] text-white font-black text-lg px-9 py-4 rounded-2xl shadow-[0_0_30px_rgba(73,201,38,0.4)] hover:shadow-[0_0_45px_rgba(73,201,38,0.7)] transition-all duration-300 transform hover:-translate-y-1 border border-[#49C926]/50"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Botão Secundário Transparente Glassmorphism */}
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/12 text-white font-bold text-base px-8 py-4 rounded-2xl backdrop-blur-md border border-white/20 hover:border-[#49C926] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Conheça nossos serviços</span>
              </a>
            </div>

            {/* Trust Badges Checkmarks */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm sm:text-base font-semibold text-gray-200">
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

          {/* LADO DIREITO: Carrossel Interativo dos Trabalhos da Via Gráfica */}
          <div 
            className="lg:col-span-5 relative flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#49C926]/30 via-transparent to-[#49C926]/15 rounded-3xl blur-2xl transform rotate-2"></div>

            {/* Main Carousel Frame Container */}
            <div className="relative w-full max-w-lg bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-3 sm:p-4 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
              
              {/* Carousel Image Container */}
              <div className="relative h-[340px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                
                {/* Active Image */}
                <img
                  key={activeWork.image}
                  src={activeWork.image}
                  alt={activeWork.title}
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 animate-fadeIn"
                />

                {/* Bottom Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                {/* Left/Right Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#49C926] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 hover:border-[#49C926] shadow-lg"
                  aria-label="Trabalho Anterior"
                >
                  <ChevronLeft size={22} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#49C926] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 hover:border-[#49C926] shadow-lg"
                  aria-label="Próximo Trabalho"
                >
                  <ChevronRight size={22} />
                </button>

                {/* Top Badge: Categoria */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-[#49C926] text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-md uppercase tracking-wider">
                    {activeWork.category}
                  </span>
                </div>

                {/* Bottom Info Floating Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-black/80 backdrop-blur-xl p-4 rounded-2xl border border-white/15">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#49C926] uppercase tracking-wider mb-0.5">
                        Trabalho Entregue ({currentSlide + 1} de {GALLERY_DATA.length})
                      </p>
                      <h3 className="font-heading font-black text-base sm:text-lg text-white leading-tight">
                        {activeWork.title}
                      </h3>
                      <p className="text-gray-300 text-xs font-light line-clamp-1 mt-1">
                        {activeWork.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => onOpenBudgetModal(activeWork.title)}
                      className="w-10 h-10 rounded-xl bg-[#49C926] hover:bg-[#3da71f] text-white flex items-center justify-center flex-shrink-0 shadow-md transition-colors"
                      title="Quero um projeto similar"
                    >
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </div>

              </div>

              {/* Carousel Dot Indicators */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {GALLERY_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      idx === currentSlide
                        ? 'w-8 h-2.5 bg-[#49C926] shadow-[0_0_10px_#49C926]'
                        : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Ir para trabalho ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* 4-Column Quick Category Bar (Modern Dark Glassmorphism Anchored at Bottom) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK_CATEGORIES.map((cat) => {
            const IconComp = categoryIcons[cat.icon] || Printer;
            return (
              <a
                key={cat.id}
                href="#servicos"
                className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#49C926] p-5 rounded-2xl shadow-xl hover:bg-white/10 transition-all duration-300 group flex items-center gap-4 transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#49C926]/15 text-[#49C926] flex items-center justify-center flex-shrink-0 group-hover:bg-[#49C926] group-hover:text-white transition-all shadow-[0_0_15px_rgba(73,201,38,0.2)]">
                  <IconComp size={24} />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xs sm:text-sm text-white tracking-wider uppercase mb-0.5 group-hover:text-[#49C926] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light leading-snug">
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
